"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldCheck, Database, ArrowRight, Brain, Layers, Network, TrendingUp, MessageSquare, Target, Briefcase, Scale } from "lucide-react";

export default function StoryFlowESG() {
  return (
     <div className="min-h-screen bg-transparent text-foreground selection:bg-brand-cyan/20">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden z-10">
          <div className="container mx-auto relative z-10 max-w-5xl text-center">
            <Badge variant="outline" className="mb-8 border-brand-indigo/30 text-brand-indigo bg-brand-indigo/5 px-4 py-1.5 text-sm font-medium tracking-wide">IN DEVELOPMENT</Badge>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tight text-brand-navy leading-tight"
            >
              StoryFlow ESG <br/>
              <span className="text-slate-400 font-medium text-4xl md:text-6xl">Communications & Intelligence Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >StoryFlow ESG helps organizations communicate ESG performance with consistency, proof, and momentum. It turns operational work into market-ready messages that hold up under scrutiny and across audiences.</motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
               <a href="mailto:hello@electricsynapse.ai">
                  <Button size="lg" className="h-16 px-10 text-lg bg-brand-navy text-white hover:bg-brand-indigo rounded-full shadow-xl shadow-brand-navy/20 hover:shadow-brand-indigo/30 hover:scale-[1.02] transition-all duration-300">
                    Request Early Access <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
               </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-20 relative max-w-4xl mx-auto rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm group p-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              <img src="/images/storyflow/storyflow-dashboard.png" alt="StoryFlow ESG dashboard interface" className="w-full h-auto rounded-xl shadow-inner" />
            </motion.div>
          </div>
        </section>
        {/* The Problem */}
        <section className="py-24 bg-white border-y border-slate-100 relative z-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               <div>
                  <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">The Strategic Gap</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-brand-navy leading-tight">
                    Most organizations still manage ESG communication through manual workflows.
                  </h2>
               </div>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Most communications teams do not have the capacity to run ESG communication as a continuous effort. Sustainability work moves forward throughout the year, but the messaging around it often appears only at key moments. Teams juggle brand campaigns, investor materials, media requests, and internal demands while trying to translate complex ESG performance into language that is accurate and persuasive.
                  </p>

                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-orange my-6">
                    <p className="text-base text-slate-700">
                      As a result, communication happens in bursts. A major release goes out, a few updates follow, and then attention shifts elsewhere. The underlying work may be strong, yet without a steady tempo and targeted distribution, it fails to shape perception in a sustained way.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </section>
        {/* How StoryFlow Creates Value */}
        <section className="py-32 relative overflow-hidden bg-brand-navy text-white">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-indigo/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
             <div className="max-w-3xl mx-auto text-center mb-20">
               <span className="text-brand-cyan font-bold text-sm uppercase tracking-widest mb-4 block">How StoryFlow Creates Value</span>
               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">StoryFlow ESG expands what a communications team can realistically sustain.</h2>
             </div>

             <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-8">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-brand-cyan/30 transition-colors">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                     <div className="flex items-center gap-3 mb-4 relative z-10">
                       <div className="w-10 h-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center">
                         <Layers className="w-5 h-5 text-brand-cyan" />
                       </div>
                       <h3 className="text-xl font-bold text-white">Embedded Discipline</h3>
                     </div>
                     <p className="text-white/70 leading-relaxed relative z-10">
                       It embeds verification, workflow structure, and sector context directly into the drafting process so that discipline does not depend on individual memory or spare time.
                     </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-brand-orange/30 transition-colors">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                     <div className="flex items-center gap-3 mb-4 relative z-10">
                       <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                         <Network className="w-5 h-5 text-brand-orange" />
                       </div>
                       <h3 className="text-xl font-bold text-white">Connected Claims</h3>
                     </div>
                     <p className="text-white/70 leading-relaxed relative z-10">
                       Claims connect to documentation before publication. Language is evaluated against current regulatory expectations and industry norms. Instead of rebuilding ESG messaging from scratch each cycle, teams work from structured components that carry forward across reports, investor materials, and digital channels.
                     </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-gradient-to-br from-brand-indigo/20 to-transparent p-1 rounded-3xl">
                    <div className="bg-brand-navy border border-white/10 p-10 md:p-14 rounded-3xl relative overflow-hidden">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

                       <div className="relative z-10">
                         <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl mb-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <TrendingUp className="w-8 h-8 text-brand-navy" />
                         </div>
                         <h3 className="font-heading text-3xl font-bold text-white mb-6 leading-tight">As output increases, consistency improves.</h3>
                         <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                           <p>Communication stops appearing only at reporting milestones and begins operating as a steady signal.</p>
                           <div className="h-px w-full bg-white/10 my-2" />
                           <p className="font-medium text-white">Over time, that steady presence shapes how investors, partners, and other stakeholders understand the organization&apos;s direction and credibility.</p>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
        {/* Built on Verification and Intelligence */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
             <div className="mb-20 text-center max-w-3xl mx-auto">
               <span className="text-brand-indigo font-bold text-sm uppercase tracking-widest mb-4 block">Workflow Architecture</span>
               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-brand-navy">Built on Verification and Intelligence</h2>
               <p className="text-xl text-slate-600 leading-relaxed">
                 StoryFlow ESG integrates multiple systems into a single communications workflow.
               </p>
             </div>

             <div className="relative max-w-4xl mx-auto">
                {/* Central Pipeline Line */}
                <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-cyan/20 via-brand-indigo/20 to-brand-orange/20 -translate-x-1/2 rounded-full hidden md:block" />

                <div className="space-y-12">
                   {/* Step 1 */}
                   <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
                      <div className="md:w-1/2 flex md:justify-end text-left md:text-right order-2 md:order-1">
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md transition-all relative overflow-hidden text-left md:text-right">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-cyan/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 md:hidden" />
                            <div className="absolute top-0 left-0 w-20 h-20 bg-brand-cyan/5 rounded-br-full -ml-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block" />
                            <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Knowledge Layer</h3>
                            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                              A knowledge layer retrieves prior disclosures, regulatory language, and sector examples, so drafting begins with context rather than guesswork.
                            </p>
                         </div>
                      </div>
                      <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-sm group-hover:border-brand-cyan/20 transition-colors order-1 md:order-2">
                         <Database className="w-6 h-6 text-brand-cyan" />
                      </div>
                      <div className="md:w-1/2 order-3 hidden md:block" />
                   </div>

                   {/* Step 2 */}
                   <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
                      <div className="md:w-1/2 hidden md:block order-1" />
                      <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-sm group-hover:border-emerald-200 transition-colors order-1 md:order-2">
                         <ShieldCheck className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div className="md:w-1/2 order-2 md:order-3">
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md transition-all relative overflow-hidden text-left">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-50 rounded-br-full -ml-4 -mt-4 transition-transform group-hover:scale-110" />
                            <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Verification Layer</h3>
                            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                              A verification layer evaluates claims against benchmarks and supporting documentation before they move forward. Competitive data informs positioning, so performance is not described in isolation.
                            </p>
                         </div>
                      </div>
                   </div>

                   {/* Step 3 */}
                   <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
                      <div className="md:w-1/2 flex md:justify-end text-left md:text-right order-2 md:order-1">
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md transition-all relative overflow-hidden text-left md:text-right">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 md:hidden" />
                            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-50 rounded-br-full -ml-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block" />
                            <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Internal Review Agent</h3>
                            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                              An internal review agent challenges vague phrasing and unsupported assertions before human review begins.
                            </p>
                         </div>
                      </div>
                      <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-sm group-hover:border-purple-200 transition-colors order-1 md:order-2">
                         <Brain className="w-6 h-6 text-purple-500" />
                      </div>
                      <div className="md:w-1/2 order-3 hidden md:block" />
                   </div>

                   {/* Step 4 */}
                   <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group">
                      <div className="md:w-1/2 hidden md:block order-1" />
                      <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-sm group-hover:border-brand-orange/20 transition-colors order-1 md:order-2">
                         <Network className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div className="md:w-1/2 order-2 md:order-3">
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md transition-all relative overflow-hidden text-left">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-brand-orange/5 rounded-br-full -ml-4 -mt-4 transition-transform group-hover:scale-110" />
                            <h3 className="font-bold text-brand-navy text-2xl mb-4 relative z-10">Structured Outputs</h3>
                            <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                              Structured outputs allow communication to move across channels without losing alignment.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-24 text-center max-w-4xl mx-auto">
                <div className="p-10 bg-brand-navy rounded-3xl shadow-xl relative overflow-hidden border border-brand-indigo/20">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                   <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-indigo/30 rounded-full blur-[80px]" />
                   <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px]" />

                   <p className="text-2xl md:text-3xl text-white font-medium relative z-10 leading-tight">
                     &ldquo;The result is not faster drafting alone. <span className="text-brand-cyan">It is controlled communication supported by shared intelligence.</span>&rdquo;
                   </p>
                </div>
             </div>
          </div>
        </section>
        {/* What This Means Inside Your Organization */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
             <div className="mb-16 text-center max-w-3xl mx-auto">
               <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">Stakeholder Value</span>
               <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-brand-navy">What This Means Inside Your Organization</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                {/* Communications Leaders */}
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                   <div className="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-7 h-7 text-brand-cyan" />
                   </div>
                   <h3 className="font-bold text-brand-navy text-2xl mb-4">Communications Leaders</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     Stop rebuilding ESG language every quarter. Work from structured messaging that already connects claims to documentation. Fewer late-stage rewrites. Fewer cross-team disputes. More consistent output across channels without expanding your team.
                   </p>
                </div>

                {/* Sustainability Teams */}
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                   <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Target className="w-7 h-7 text-emerald-500" />
                   </div>
                   <h3 className="font-bold text-brand-navy text-2xl mb-4">Sustainability Teams</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     Your operational progress does not have to wait for an annual report. As milestones occur, messaging can move outward with context and proof attached. The story reflects the work as it evolves, not months later.
                   </p>
                </div>

                {/* Executive Leadership */}
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                   <div className="w-14 h-14 bg-brand-indigo/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-7 h-7 text-brand-indigo" />
                   </div>
                   <h3 className="font-bold text-brand-navy text-2xl mb-4">Executive Leadership</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     Board materials, investor discussions, and public positioning draw from the same verified foundation. ESG performance aligns with business strategy without requiring constant manual oversight. Messaging supports valuation instead of distracting from it.
                   </p>
                </div>

                {/* Legal and Risk */}
                <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                   <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Scale className="w-7 h-7 text-brand-orange" />
                   </div>
                   <h3 className="font-bold text-brand-navy text-2xl mb-4">Legal and Risk</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     Claims arrive with supporting evidence visible from the start. Review shifts from reactive correction to informed confirmation. Language is easier to defend because it has already passed through structured verification.
                   </p>
                </div>
             </div>
          </div>
        </section>
        {/* Development Status */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-brand-navy rounded-3xl p-10 md:p-14 text-center relative overflow-hidden text-white shadow-2xl">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                 <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px]" />
                 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px]" />

                 <div className="relative z-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#ff63e4]">Development Status</h2>
                    <div className="space-y-4 text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                       <p>StoryFlow ESG is in active development.</p>
                       <p>We are refining workflows, building an ecosystem of mutually supportive subsystems, and selecting early design partners.</p>
                       <p className="font-medium text-brand-cyan">Access will be limited in early phases.</p>
                    </div>

                    <a href="mailto:hello@electricsynapse.ai">
                       <Button size="lg" className="bg-white text-brand-navy hover:bg-brand-cyan hover:text-brand-navy font-bold rounded-full px-10 h-14 text-lg shadow-lg">
                          Request Early Access
                       </Button>
                    </a>
                 </div>
              </div>
           </div>
        </section>
     </div>
  );
}
