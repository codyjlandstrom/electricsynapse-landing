"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Shield, Target, Scale, LayoutTemplate } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function About() {
  const principles = [
    {
      text: "Evidence comes first.",
      icon: <Shield className="w-5 h-5" />,
      color: "text-brand-orange",
    },
    {
      text: "Ambition must match performance.",
      icon: <Target className="w-5 h-5" />,
      color: "text-brand-cyan",
    },
    {
      text: "Clarity earns trust.",
      icon: <Scale className="w-5 h-5" />,
      color: "text-brand-indigo",
    },
    {
      text: "Structure creates momentum.",
      icon: <LayoutTemplate className="w-5 h-5" />,
      color: "text-brand-purple-deep",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-brand-indigo/30 text-brand-indigo bg-brand-indigo/5"
          >
            ABOUT
          </Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-8 text-brand-navy leading-tight"
          >
            ESG Work Should Create Visible Value
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto"
          >
            Strong ESG performance strengthens procurement standards, supply
            chain decisions, capital allocation, and long-term planning. It
            shapes how companies manage risk and position themselves for growth.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-10 md:p-14 border border-slate-200 shadow-sm">
            <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
              <div className="text-xl leading-relaxed mb-10 space-y-6">
                <p>
                  But operational strength does not automatically shape market
                  perception. Too often, ESG progress remains confined to reports
                  and internal systems. The strategy is sound, but the signal is
                  faint.
                </p>
              </div>

              <div className="my-12 p-8 bg-slate-50 rounded-xl border-l-4 border-brand-navy">
                <p className="font-bold text-brand-navy text-lg m-0 leading-relaxed">
                  Electric Synapse Guild exists to close that gap. We build
                  communications infrastructure for ESG while delivering
                  high-stakes strategic work today. We help leadership teams turn
                  operational substance into public language that strengthens
                  competitive position and supports valuation.
                </p>
              </div>

              <p className="mb-12">
                Our background spans investigative journalism, sustainability
                leadership, corporate communications, and product development.
                We apply editorial rigor and systems thinking to connect internal
                progress with external influence.
              </p>

              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-8 mt-12">
                Our Principles
              </h3>

              <div className="grid md:grid-cols-2 gap-4 not-prose mb-12">
                {principles.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm"
                  >
                    <div
                      className={`p-2 rounded-md bg-slate-50 ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-bold text-brand-navy">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mb-12">
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed">
                  We help organizations turn real ESG progress into sustained
                  strategic value through disciplined communication.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">
                  What We Are Building Toward
                </h3>
                <p className="text-lg leading-relaxed">
                  ESG communication increasingly shapes investor confidence,
                  market perception, and competitive position. Organizations
                  that manage it intentionally will lead. We are building the
                  tools and practices that make that possible.
                </p>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-200">
                <h3 className="font-heading text-2xl font-bold mb-8 text-brand-navy">
                  Leadership
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Michael Keller */}
                  <div className="flex flex-col gap-4">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-2">
                      <img
                        src="/images/team/michael.jpg"
                        alt="Michael Keller"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-navy mb-1">
                        Michael Keller
                      </h4>
                      <p className="text-slate-500 font-medium mb-2">
                        Founder | Narrative Strategy
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="bio" className="border-b-0">
                          <AccordionTrigger className="py-2 text-sm font-medium text-brand-indigo hover:no-underline hover:text-brand-navy data-[state=open]:text-brand-navy p-0 justify-start gap-2">
                            Read Bio
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 leading-relaxed text-sm pt-4 pb-2">
                            <p className="mb-3">
                              Michael is a strategic communications leader
                              working at the intersection of sustainability,
                              infrastructure, and market positioning. His career
                              spans investigative journalism, global
                              environmental coalitions, and executive-level ESG
                              strategy.
                            </p>
                            <p className="mb-3">
                              He previously served as Director of
                              Communications, Outreach, and Advocacy at
                              EcoAgriculture Partners, leading global strategy
                              for the 1000 Landscapes for 1 Billion People
                              initiative. Earlier, he was part of a Pulitzer
                              Prize&ndash;winning reporting team.
                            </p>
                            <p>
                              He founded Electric Synapse Guild to build the
                              communications systems ESG requires, connecting
                              operational substance to durable market influence.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>

                  {/* Terrence Murray */}
                  <div className="flex flex-col gap-4">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-2">
                      <img
                        src="/images/team/terrence.jpg"
                        alt="Terrence Murray"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-navy mb-1">
                        Terrence Murray
                      </h4>
                      <p className="text-slate-500 font-medium mb-2">
                        Co-Founder | Client Delivery
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="bio" className="border-b-0">
                          <AccordionTrigger className="py-2 text-sm font-medium text-brand-indigo hover:no-underline hover:text-brand-navy data-[state=open]:text-brand-navy p-0 justify-start gap-2">
                            Read Bio
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 leading-relaxed text-sm pt-4 pb-2">
                            <p className="mb-3">
                              Terrence leads client delivery and operational
                              strategy. He has directed ESG communications for
                              multinational corporations in energy,
                              manufacturing, and technology, translating complex
                              sustainability initiatives into market-facing
                              messaging.
                            </p>
                            <p className="mb-3">
                              Earlier in his career, he spent years shaping
                              strategy and producing content within WPP creative
                              agency companies, serving clients ranging from
                              global enterprises to growth-stage firms.
                            </p>
                            <p>
                              At Electric Synapse Guild, Terrence ensures that
                              client engagements remain rigorous, aligned, and
                              scalable.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-16 pt-10 border-t border-slate-200">
                <div className="flex-1">
                  <p className="text-lg font-medium text-brand-navy m-0">
                    StoryFlow ESG is in development.
                    <br />
                    <span className="text-slate-500 font-normal">
                      Our studio work continues in parallel.
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="mailto:hello@electricsynapse.ai">
                    <Button className="bg-brand-navy text-white hover:bg-brand-indigo rounded-full px-6">
                      Get in touch
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
