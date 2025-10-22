"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const lastFrameTimeRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    if (mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)

    const resizeCanvas = () => {
      canvas.width = Math.floor(window.innerWidth * DPR)
      canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(DPR, DPR)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas, { passive: true })

    const COUNT = Math.min(90, Math.floor((canvas.width * canvas.height) / (14000 * DPR)))
    const particles: Particle[] = []

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
      })
    }
    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTimeRef.current < 16) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTimeRef.current = currentTime

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((particle, i) => {
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.1
          particle.vy += (dy / distance) * force * 0.1
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98
        particle.vy *= 0.98

        if (particle.x < 0) particle.x = window.innerWidth
        if (particle.x > window.innerWidth) particle.x = 0
        if (particle.y < 0) particle.y = window.innerHeight
        if (particle.y > window.innerHeight) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(125, 211, 252, 0.6)"
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i >= j) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = (1 - distance / 120) * 0.25
            ctx.strokeStyle = `rgba(125, 211, 252, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      mediaQuery.removeEventListener("change", handleChange)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />
  )
}
