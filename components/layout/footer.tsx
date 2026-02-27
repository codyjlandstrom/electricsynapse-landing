import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-500 max-w-md text-lg leading-relaxed">
               The signal that transforms data into stories.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-brand-navy mb-4">Sitemap</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-brand-cyan transition-colors">Home</Link></li>
              <li><Link href="/storyflow-esg" className="text-slate-600 hover:text-brand-cyan transition-colors">Platform</Link></li>
              <li><Link href="/agency" className="text-slate-600 hover:text-brand-cyan transition-colors">Capabilities</Link></li>
              <li><Link href="/work" className="text-slate-600 hover:text-brand-cyan transition-colors">Work</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-brand-cyan transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-brand-navy mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-brand-cyan transition-colors">LinkedIn</a></li>
              <li><a href="mailto:hello@electricsynapse.ai" className="text-slate-600 hover:text-brand-cyan transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 font-sans">
            © {new Date().getFullYear()} ELECTRIC SYNAPSE GUILD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm text-slate-400 font-sans flex items-center gap-2">
            POWERED BY <span className="font-bold text-slate-500">STORYFLOW</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
