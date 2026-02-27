"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BarChart3, FileText, Mic2, Layers, Globe } from "lucide-react";

export default function Work() {
  const cases = [
    {
      id: "science",
      title: "Translating Complex Science and Sustainability",
      icon: <Globe className="w-6 h-6 text-brand-cyan" />,
      description: "Communicating advanced science and sustainability work requires fluency in both technical topics and audience insight. We work with scientists, campaigners, and environmental innovators to translate climate strategy, ecosystem research, public health science, and technological innovation into narrative that audiences can grasp, care about, and act on.",
      outcome: {
        before: "Highly technical science remained buried in jargon.",
        after: "Narrative made complex work accessible and compelling to investors and the public."
      }
    },
    {
      id: "narrative",
      title: "Strategic Narrative for Purpose-Driven Initiatives",
      icon: <Layers className="w-6 h-6 text-brand-indigo" />,
      description: "When coalitions, advocacy groups, and multilateral efforts need to unify diverse partners around a shared vision, we help shape a narrative that holds. This work involves identifying shared values, mapping evidence across constituencies, and crafting frameworks that guide consistent speaking points and campaign messaging over time.",
      outcome: {
        before: "Fragmented voices diluted strategic focus.",
        after: "A cohesive narrative strengthened alignment and amplified collective impact."
      }
    },
    {
      id: "investor",
      title: "Investor and Stakeholder Communications",
      icon: <BarChart3 className="w-6 h-6 text-brand-orange" />,
      description: "Aligning sustainability positioning with stakeholder expectations is essential in markets where credibility affects access to capital and reputation. We help clients refine executive messaging, structure investor materials, and prepare leaders to speak confidently about strategy, performance, and long-term goals.",
      outcome: {
        before: "Messaging varied by audience and medium.",
        after: "Clarity and consistency increased stakeholder confidence."
      }
    },
    {
      id: "editorial",
      title: "Editorial Content for Public and Trade Audiences",
      icon: <FileText className="w-6 h-6 text-brand-navy" />,
      description: "We create rich editorial content for public and industry platforms \u2014 including reported features, thought leadership essays, and sponsored editorial that meets high journalistic standards. This includes deep-dive features on sustainability trends, science narratives that explain innovation in context, and pieces that position organizations as authoritative voices.",
      outcome: {
        before: "Key ideas were buried in technical detail.",
        after: "Narrative precision elevated visibility and authority."
      }
    },
    {
      id: "multimedia",
      title: "Multimedia Storytelling That Goes Beyond the Report",
      icon: <Mic2 className="w-6 h-6 text-brand-purple-deep" />,
      description: "Text alone is not always enough. We produce video, interactive digital experiences, and long-form media rooted in real work. Projects vary from documentary shorts to immersive digital hubs that translate operational progress into narrative motion. In every medium, we focus on substance over spectacle.",
      outcome: {
        before: "Complex programs struggled to gain traction across channels.",
        after: "Integrated visuals and narrative boosted engagement and retention."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <section className="pt-32 pb-20 px-6 relative z-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src="/images/modern-architecture.jpg" alt="Modern Architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/95 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge variant="outline" className="mb-6 border-brand-indigo/30 text-brand-indigo bg-brand-indigo/5">SELECTED WORK</Badge>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-brand-navy leading-tight">
            Selected Work
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
            We help organizations clarify complex work and share it with the audiences that matter most.
          </p>
          <div className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto space-y-4">
             <p>
               Our clients include established multinational corporations and growth-stage enterprises; global institutions advancing science, sustainability, and development initiatives; cross-sector coalitions uniting around shared purpose; and mission-driven teams reshaping how industries communicate progress and ambition.
             </p>
             <p className="font-medium text-brand-navy">
               Our work draws on deep editorial experience {"\u2014"} from long-form reported storytelling to strategy-shaping narrative frameworks and multimedia production {"\u2014"} all designed to connect understanding with action.
             </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-16">
            {cases.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-brand-navy">
                        {project.icon}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-brand-navy leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 overflow-hidden">
                      <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                        <div className="p-6 bg-slate-50/50">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Before</span>
                          <p className="text-slate-600 font-medium">{project.outcome.before}</p>
                        </div>
                        <div className="p-6 bg-brand-cyan/5">
                          <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-2">After</span>
                          <p className="text-brand-navy font-bold">{project.outcome.after}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {i < cases.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-16" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Case Study */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
           <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-1 bg-brand-cyan rounded-full" />
             <span className="text-brand-cyan font-bold uppercase tracking-widest text-sm">Flagship Case</span>
           </div>

           <div className="grid md:grid-cols-2 gap-12 mb-12">
             <div className="space-y-6 text-lg text-white/80 leading-relaxed">
               <p>For a major global initiative advancing research and policy in sustainable development and community resilience, the team needed a narrative that connected scientific insight, coalition strategy, and stakeholder expectations.</p>
               <p>We led a multi-phase engagement that included research and vision synthesis across partners, year-long strategy creation, interviews with technical and leadership teams, coalition building, iterative narrative development, and multimedia production.</p>
             </div>

             <div className="bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">We produced:</h3>
                <ul className="space-y-4">
                  {[
                    "A long-form editorial series suitable for strategic partners and funders",
                    "A multimedia narrative cascade including video scripts, web narratives, and presentation frameworks",
                    "A messaging playbook for internal and external use"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
           </div>

           <div className="border-t border-white/10 pt-10 grid md:grid-cols-2 gap-8">
              <div>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-2">Before</span>
                <p className="text-white/60 text-lg">Communications were episodic and tactical.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-2">Result</span>
                <p className="text-white text-xl font-bold">
                  The initiative launched public-facing campaigns and policy-oriented materials that consistently reflected shared goals and measurable outcomes across platforms. Narrative coherence supported sustained engagement and strategic alignment.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-slate-50 relative z-10">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-brand-navy">How We Approach Every Engagement</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Across sectors we see a recurring gap: organizations invest heavily in operational progress but struggle to translate that progress into strategic advantage through communication.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
               <p className="text-lg text-brand-navy font-medium leading-relaxed">
                 We bring clarity and structure to that gap. We focus on uncovering the human logic in complex work and shaping communications that reflect both impact and ambition. Our approach is rooted in editorial rigor, narrative strategy, and creative craft.
               </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mb-6">Discuss Your Needs</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              If your organization is doing important work and needs communication that reflects its scale and ambition, let&apos;s start the conversation.
            </p>

            <a href="mailto:hello@electricsynapse.ai">
              <Button size="lg" className="bg-brand-navy text-white hover:bg-brand-indigo rounded-full px-10 h-14 text-lg shadow-lg">
                Book a Consult
              </Button>
            </a>
         </div>
      </section>
    </div>
  );
}
