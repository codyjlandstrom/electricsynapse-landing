"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/storyflow-esg", label: "Platform" },
    { href: "/agency", label: "Capabilities" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent py-4 bg-[#ffffff] pt-[0px] pb-[0px]"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand-cyan cursor-pointer",
                pathname === link.href
                  ? "text-brand-indigo"
                  : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <a href="mailto:hello@electricsynapse.ai">
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-slate-50 font-medium rounded-full px-5 h-10 text-xs shadow-sm">
                Book Consult
              </Button>
            </a>
            <Link href="/storyflow-esg">
              <Button className="bg-brand-navy hover:bg-brand-indigo text-white font-medium rounded-full px-5 h-10 text-xs shadow-md shadow-brand-indigo/20">
                Request Early Access
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-brand-navy">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-l border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6 mt-10">
              <Link href="/" onClick={() => setIsOpen(false)} className="mb-4 block">
                <Logo />
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold transition-colors hover:text-brand-cyan cursor-pointer",
                    pathname === link.href
                      ? "text-brand-indigo"
                      : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/storyflow-esg" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-brand-navy text-white hover:bg-brand-indigo rounded-full">
                    Request Early Access
                  </Button>
                </Link>
                <a href="mailto:hello@electricsynapse.ai" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-slate-50 rounded-full">
                    Book Consult
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
