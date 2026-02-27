export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden backface-hidden transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-brand-cyan/5 will-change-transform" />
      <div
        className="absolute inset-0 opacity-40 will-change-transform"
        style={{
          backgroundImage: "url(/images/bg/abstract-gradient-mesh.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] will-change-transform"
        style={{
          backgroundImage: "url(/images/bg/geometric-network.png)",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay will-change-transform" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
}
