"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Layers, FileText, Compass, Sparkles, ArrowUpRight, Brain, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-brand-cyan/20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-[41px] pb-[41px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-ocean.jpg" alt="Ocean waves" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse mix-blend-multiply" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse delay-1000 mix-blend-multiply" />

        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-brand-navy leading-[1.05] mt-[17px] mb-[17px]">Make your ESG progress visible where it counts.</h1>

            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">Your organization is investing in a responsible growth strategy that addresses climate change and pollution, strengthens supply chains, and builds long-term resilience. That work changes risk, access to capital, and how important audiences judge your company. But does the outside world understand what you are actually doing?</p>
            </div>

            <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">Electric Synapse Guild turns real environmental, social, and governance (ESG) work into clear, sustained communication that markets and critical audiences can evaluate with confidence.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@electricsynapse.ai">
                <Button size="lg" className="h-16 px-12 text-lg bg-brand-navy text-white hover:bg-brand-indigo rounded-full w-full sm:w-auto shadow-2xl shadow-brand-navy/20 hover:shadow-brand-indigo/30 hover:scale-[1.02] transition-all duration-300 group">
                  Request Early Access
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
              <a href="mailto:hello@electricsynapse.ai">
                <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-slate-200 text-slate-700 hover:bg-white hover:text-brand-indigo hover:border-brand-indigo/30 rounded-full w-full sm:w-auto group bg-white/70 backdrop-blur-sm shadow-lg">
                  Book a Consult
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Why This Matters - ESG Triptych */}
      <section className="py-32 relative z-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">ESG's communications capacity gap</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">ESG performance now determines how capital flows, who partners with you, and how the market values you.</h2>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Sustainability decisions shape risk and long-term strength. External audiences evaluate your company based on what they can verify, not on work hidden inside internal systems.
            </p>
          </motion.div>

          {/* Low-Contrast Triptych */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Environment */}
            <div className="relative group rounded-3xl overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/env-bg.jpg" alt="Environmental impact" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-brand-cyan font-bold text-2xl mb-3 font-heading">Environmental</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Decarbonization, resource efficiency, and climate resilience are no longer optional. They are fundamental drivers of operational continuity and competitive advantage.
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="relative group rounded-3xl overflow-hidden min-h-[500px] md:-translate-y-6">
              <div className="absolute inset-0 z-0">
                <img src="/images/social-bg.jpg" alt="Social impact" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-brand-orange font-bold text-2xl mb-3 font-heading">Social</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Labor practices, community impact, and supply chain ethics directly influence brand equity, regulatory risk, and your ability to attract top-tier talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className="relative group rounded-3xl overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 z-0">
                <img src="/images/gov-bg.jpg" alt="Corporate Governance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-brand-indigo/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-brand-indigo font-bold text-2xl mb-3 font-heading">Governance</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Board oversight, ethical leadership, and transparent decision-making build the trust architecture required to secure investment and navigate complex markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
              <p className="text-white font-bold text-xl mb-6 font-heading">Yet inside many organizations, ESG communication remains an afterthought.</p>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>Most communications teams do not have the bandwidth to treat ESG messaging as a full-time discipline. Sustainability work advances throughout the year, but communication often appears only momentarily. Teams assemble a major release, circulate it for review, and then shift to the next priority.

                The work itself may be serious and well executed. Yet without steady tempo and targeted distribution, it reaches the market in fragments. Visibility fades. Momentum resets. ESG remains a cost center rather than a strategic driver.</p>
                <p className="text-white font-medium">Strong progress only creates value when translated into clear, consistent market signals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* StoryFlow ESG */}
      <section className="py-32 bg-brand-navy relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
            <div className="lg:w-1/2">
              <Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/20 mb-6">IN DEVELOPMENT</Badge>
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-white">StoryFlow ESG</h2>
              <p className="text-white/90 mb-6 leading-relaxed text-xl">StoryFlow ESG is our communications and intelligence platform designed to bridge the capacity and insight gap between meaningful ESG work and the communications needed to boost its potential to create value.</p>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">It provides the structure and intelligence required to operate ESG communication as a continuous system rather than an annual task. Claims connect to evidence. Messaging adapts to different audiences. Industry context informs positioning. Content moves across channels without starting from scratch.</p>

              <div className="space-y-6 mb-10">
                <h3 className="text-brand-cyan font-bold uppercase tracking-wider text-sm">The system will:</h3>
                <ul className="space-y-4">
                  {[
                    "Turn ESG data into clear narrative building blocks.",
                    "Tie every public claim to supporting documentation.",
                    "Keep language consistent across reports, investor materials, and digital content.",
                    "Identify weak or unsupported statements before publication.",
                    "Provide industry context to guide positioning decisions.",
                    "Support distribution to both people and AI-driven systems."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-8">
                 <p className="text-white/90 font-medium italic text-lg">StoryFlow ESG is an operating system for ESG communications. It connects verified data, competitive context, and narrative strategy into a structured workflow that produces defensible, market-ready communication that drives organization-wide value creation from ESG initiatives.</p>
              </div>

              <a href="mailto:hello@electricsynapse.ai">
                <Button className="bg-brand-cyan text-brand-navy hover:bg-brand-cyan/90 rounded-full px-10 h-14 text-lg font-bold">
                  Request Early Access
                </Button>
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 blur-xl opacity-50 rounded-3xl" />
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                   {/* Background Grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                   {/* Workflow Header */}
                   <div className="flex items-center justify-between mb-8 relative z-10 border-b border-white/10 pb-4">
                     <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                       <span className="text-brand-cyan text-xs font-mono tracking-widest uppercase">System Active</span>
                     </div>
                     <div className="text-white/40 text-xs font-mono">ID: ESG-NARRATIVE-884</div>
                   </div>

                   {/* Workflow Steps */}
                   <div className="space-y-6 relative z-10">
                     {/* Step 1: Ingest */}
                     <div className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
                         <FileText className="w-5 h-5 text-white/60 group-hover:text-brand-orange transition-colors" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-white/80 text-sm font-medium">Raw Data Ingestion</span>
                            <span className="text-brand-orange text-[10px] font-mono opacity-100">COMPLETE</span>
                         </div>
                         <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-brand-orange/80" />
                         </div>
                       </div>
                     </div>

                     {/* Step 2: Insight Extraction */}
                     <div className="flex items-center gap-4 group">
                       <div className="relative">
                         <div className="absolute -inset-1 bg-brand-cyan/20 rounded-lg blur-sm animate-pulse" />
                         <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center shrink-0 relative z-10">
                           <Brain className="w-5 h-5 text-brand-cyan" />
                         </div>
                         {/* Connecting Line */}
                         <div className="absolute left-1/2 -top-6 bottom-full w-px bg-white/20 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-white text-sm font-bold">Insight Extraction</span>
                            <span className="text-brand-cyan text-[10px] font-mono animate-pulse">ANALYZING</span>
                         </div>
                         <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-3/4 bg-brand-cyan relative overflow-hidden">
                             <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_1s_infinite] -skew-x-12" />
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Step 3: Narrative Reasoning */}
                     <div className="flex items-center gap-4 group">
                       <div className="relative">
                         <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                           <Layers className="w-5 h-5 text-white/60" />
                         </div>
                         {/* Connecting Line */}
                         <div className="absolute left-1/2 -top-6 bottom-full w-px bg-gradient-to-b from-brand-cyan/50 to-white/10 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-white/70 text-sm font-medium">Narrative Reasoning Layer</span>
                            <span className="text-white/30 text-[10px] font-mono">QUEUED</span>
                         </div>
                         <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-0 bg-white/20" />
                         </div>
                       </div>
                     </div>

                     {/* Step 4: Trust Architecture */}
                     <div className="flex items-center gap-4 group opacity-60">
                       <div className="relative">
                         <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                           <ShieldCheck className="w-5 h-5 text-white/40" />
                         </div>
                         {/* Connecting Line */}
                         <div className="absolute left-1/2 -top-6 bottom-full w-px bg-white/10 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-white/60 text-sm font-medium">Zero-Hallucination Trust Arch.</span>
                            <span className="text-white/30 text-[10px] font-mono">PENDING</span>
                         </div>
                         <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-0 bg-white/20" />
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center relative z-10">
                     <div className="flex -space-x-2">
                       <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[8px] text-white">AI</div>
                       <div className="w-6 h-6 rounded-full bg-brand-indigo border border-brand-indigo/50 flex items-center justify-center text-[8px] text-white z-10">Ed</div>
                     </div>
                     <p className="text-white/50 text-xs font-mono">Human-in-the-loop enabled</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Value Expands */}
      <section className="py-24 bg-brand-navy/5 border-y border-brand-navy/10 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <span className="text-brand-indigo font-bold text-sm uppercase tracking-widest mb-4 block">What Changes When Capacity Expands</span>
             <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">We treat ESG communication as an ongoing discipline, not a seasonal task, without adding headcount. And when discipline gains strategy, structure and intelligent content, it generates compounding value.</h2>
             <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left md:text-center mt-8">
               <p>Communication no longer stalls between reporting cycles. ESG performance appears consistently in investor materials, digital channels, executive messaging, and AI-indexed formats. Review cycles stabilize because claims are grounded from the start. Language becomes easier to defend.</p>
               <p>As tempo increases, perception shifts. Investors gain confidence. Partners engage with clearer understanding. Customers respond to substance rather than slogans.</p>
               <p className="font-bold text-xl text-brand-navy mt-4">Over time, consistency compounds. ESG moves from compliance to competitive advantage.</p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
               <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-8 relative z-10">
                 <ShieldCheck className="w-7 h-7 text-brand-cyan" />
               </div>
               <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Trust holds under scrutiny</h3>
               <p className="text-slate-600 leading-relaxed text-lg relative z-10">
                 Public claims rest on documented evidence. Language reflects what can be supported, not what sounds good. That steadiness reduces friction with legal review and builds credibility with investors and regulators.
               </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
               <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-8 relative z-10">
                 <Compass className="w-7 h-7 text-brand-orange" />
               </div>
               <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Positioning becomes intentional</h3>
               <p className="text-slate-600 leading-relaxed text-lg relative z-10">
                 Performance takes shape within industry context. Your results are not described in isolation but understood relative to peers and emerging standards. That perspective strengthens how strategy is framed in investor and market conversations.
               </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
               <div className="w-14 h-14 bg-brand-indigo/10 rounded-xl flex items-center justify-center mb-8 relative z-10">
                 <Zap className="w-7 h-7 text-brand-indigo" />
               </div>
               <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Visibility carries forward</h3>
               <p className="text-slate-600 leading-relaxed text-lg relative z-10">
                 Instead of appearing once in an annual report, ESG work flows into investor materials, executive messaging, digital channels, and systems that monitor corporate disclosures. Communication maintains continuity, and momentum does not reset each year.
               </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
               <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-8 relative z-10">
                 <Brain className="w-7 h-7 text-slate-700" />
               </div>
               <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Leadership operates with better info</h3>
               <p className="text-slate-600 leading-relaxed text-lg relative z-10">
                 Benchmarking data, language patterns across sectors, and evolving regulatory signals surround the drafting process. Messaging decisions reflect both internal performance and external expectations.
               </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-brand-navy font-bold italic bg-white/50 inline-block px-8 py-4 rounded-full border border-brand-navy/5">StoryFlow ESG is the infrastructure that powers disciplined, high-impact ESG communication for human and machine audiences. It makes ESG performance visible, defensible, and strategically useful.</p>
          </div>
        </div>
      </section>

      {/* Built From Engagements */}
      <section className="py-32 relative z-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">Built From Client Work</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-navy">StoryFlow ESG grows out of direct engagement with organizations navigating complex sustainability transitions.</h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-6">We have seen strong ESG-derived operational progress lose impact because teams lacked the tools and capacity to communicate it continuously.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-brand-navy mb-8 leading-relaxed font-bold">
              Our studio addresses these gaps directly. Each engagement sharpens the system we are building.
            </p>
            <Link href="/work">
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-8 h-12">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section className="py-32 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
               <Badge variant="outline" className="mb-6 border-brand-indigo/30 text-brand-indigo bg-brand-indigo/5">THE STUDIO</Badge>
               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-brand-navy">Strategic and Creative Services</h2>
               <p className="text-slate-600 mb-8 text-xl leading-relaxed">While the platform develops, we work directly with leadership teams that want ESG communication to support business strategy today.</p>

               <div className="space-y-4 mb-10 text-lg text-slate-600">
                 <p>We conduct narrative audits, strengthen investor materials, restructure reports, produce multimedia storytelling, and provide advisory support during periods of heightened scrutiny.</p>
               </div>

               <p className="text-brand-navy font-bold text-xl italic mb-8">The studio acts as a proving ground for the systems that will power StoryFlow ESG.</p>

               <Link href="/agency">
                 <Button className="bg-brand-navy text-white hover:bg-brand-indigo rounded-full px-8 h-12">
                   View Capabilities
                 </Button>
               </Link>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/5 to-brand-cyan/5 rounded-3xl transform rotate-3 scale-[1.02]" />
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img src="/images/studio-meeting.jpg" alt="Strategic studio meeting" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-brand-navy/60 p-10 md:p-14 flex flex-col justify-end backdrop-blur-[1px]">
                    <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">When Communication Compounds</span>
                    <h3 className="font-heading text-3xl font-bold text-white mb-6">Clear, sustained ESG communication changes how markets and people understand your organization.</h3>

                    <div className="space-y-4 text-lg text-white/90">
                      <p>When performance is visible and defensible, financing terms reflect reduced uncertainty. Partners engage with more confidence. Customers respond to substance instead of slogans.</p>
                      <div className="h-px w-full bg-white/20 my-4" />
                      <p className="font-bold text-xl">Value creation does not come from a single announcement. It emerges from steady, disciplined visibility over time. Consistency reshapes perception.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative z-10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-8 leading-tight">
             If you need immediate strategic support, our studio is ready to engage.
           </h2>
           <p className="text-xl text-slate-600 mb-12">If you are preparing to operate ESG communication as a sustained advantage, StoryFlow ESG is being made ready for you.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@electricsynapse.ai">
                <Button size="lg" className="h-14 px-10 text-lg bg-brand-navy text-white hover:bg-brand-indigo rounded-full w-full sm:w-auto shadow-lg">
                  Request Early Access
                </Button>
              </a>
              <a href="mailto:hello@electricsynapse.ai">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-brand-navy text-brand-navy hover:bg-brand-navy/5 rounded-full w-full sm:w-auto">
                  Book a Consult
                </Button>
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
