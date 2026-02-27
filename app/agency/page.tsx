"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, FileText, Mic2, Repeat, Layers, Sparkles } from "lucide-react";

export default function Agency() {
  const services = [
    {
      id: "strategic-messaging",
      icon: <FileText className="w-10 h-10 text-brand-cyan" />,
      title: "Strategic Messaging",
      description: "We define how your organization speaks about its ESG strategy, performance, and ambition.\n\nWe conduct narrative audits, build executive message frameworks, and establish clear claim boundaries. We help leadership teams articulate both progress and direction without overstating impact.\n\nThe result is messaging that reflects real substance and supports long-term credibility."
    },
    {
      id: "investor",
      icon: <BarChart3 className="w-10 h-10 text-brand-orange" />,
      title: "Investor Communications",
      description: "We align sustainability messaging with business performance and growth strategy.\n\nWe support investor decks, board materials, earnings preparation, and executive talking points. We ensure ESG reinforces financial positioning rather than competing with it.\n\nWhen strategy and sustainability move together, confidence grows."
    },
    {
      id: "reporting",
      icon: <Layers className="w-10 h-10 text-brand-indigo" />,
      title: "ESG Reporting",
      description: "We translate disclosure requirements into narrative that communicates progress and ambition.\n\nWe structure reports so they present context, measurable performance, and forward-looking goals in clear language. We prevent complexity from obscuring impact.\n\nA strong report does more than comply. It builds trust and momentum."
    },
    {
      id: "multimedia",
      icon: <Mic2 className="w-10 h-10 text-brand-purple-deep" />,
      title: "Multimedia",
      description: "We develop video, digital hubs, and campaign assets grounded in verified claims.\n\nWe amplify real operational work and meaningful commitments. Visibility should reflect substance.\n\nClear storytelling extends impact beyond the report cycle."
    },
    {
      id: "advisory",
      icon: <Repeat className="w-10 h-10 text-slate-500" />,
      title: "Advisory Support",
      description: "For organizations scaling new initiatives or navigating heightened attention, we provide structured messaging support.\n\nWe help leadership teams stay aligned, respond confidently, and communicate ambition without losing precision.\n\nConsistency strengthens influence."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-brand-indigo/30 text-brand-indigo bg-brand-indigo/5 tracking-wider px-4 py-1.5 font-medium">CAPABILITIES</Badge>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-brand-navy leading-tight">
            ESG Communications for Organizations Building What Comes Next
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">Our studio works with leadership teams that treat environmental, social, and governance strategy as core to business performance.</p>
          <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
             <p className="text-lg text-slate-700 leading-relaxed italic font-medium">These organizations are investing in real change. They want that work to register with markets, partners, and employees. They aren&apos;t looking for better spin. They desire disciplined, creative communication and outreach that expand the value of what they&apos;re already building.</p>
             <div className="mt-6 flex items-center justify-center gap-2 text-brand-indigo font-bold">
               <Sparkles className="w-5 h-5" />
               <span>We help them tell their stories clearly and powerfully.</span>
             </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-2 bg-slate-50 flex items-center justify-center border-r border-slate-100 py-8 md:py-0">
                       {service.icon}
                    </div>
                    <div className="md:col-span-10 p-8 md:p-10">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-navy">{service.title}</h2>
                        <a href="mailto:hello@electricsynapse.ai">
                          <Button variant="outline" className="shrink-0 rounded-full border-brand-indigo/20 text-brand-indigo hover:bg-brand-indigo hover:text-white">
                            Inquire <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      </div>

                      <div className="text-lg text-slate-600 whitespace-pre-line leading-relaxed">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-navy text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#61a3ff]">Engagement Models</h2>
          <p className="text-white/80 mb-8 text-xl leading-relaxed">Engagements range from focused content production and editorial audits to ongoing advisory partnerships and virtual newsrooms. Structure depends on your needs, internal capacity, and goals.</p>
          <a href="mailto:hello@electricsynapse.ai">
            <Button size="lg" className="bg-white text-brand-navy hover:bg-brand-cyan hover:text-brand-navy font-bold rounded-full px-10 h-14 text-lg">
              Book a Consult
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
