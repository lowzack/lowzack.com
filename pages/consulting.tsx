import Head from "next/head";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import GlassContainer from "../components/GlassContainer";

export default function Consulting() {
  const faqItems = [
    {
      question: "Who is this for?",
      answer:
        "Early-stage teams with product-market fit, moving fast on a fragile or vibecoded foundation. Founders who need to scale without breaking what's working.",
    },
    {
      question: "What do you audit exactly?",
      answer: [
        "Architecture, codebase structure, and scale risks",
        "AI/LLM integration boundaries, safety, and evaluation gaps",
        "Observability: logging, tracing, monitoring, and alerting",
        "Developer experience, CI/CD, and reliability bottlenecks",
      ],
    },
    {
      question: "What does a POC include?",
      answer:
        "A working prototype integrated into your stack, baseline metrics, an evaluation plan, and a handoff with architecture notes and next steps.",
    },
    {
      question: "How fast can we start?",
      answer:
        "Typically within 1–2 weeks of our intro call, depending on scope and calendar availability.",
    },
    {
      question: "What does it cost?",
      answer:
        "Pricing depends on scope and timeline. Reach out for a quick intro call to discuss your needs and get a custom quote.",
    },
  ];

  return (
    <div>
      <Head>
        <title>AI Consulting for Scaling Startups - Zack Low</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Audits for vibecoded/early-PMF systems and focused AI POCs that can scale."
        />
      </Head>

      {/* Hero Section */}
      <Hero className="py-12">
        <div className="container mx-auto sm:px-4 p-6" style={{ maxWidth: "1200px" }}>
          <GlassContainer className="text-center text-white max-w-4xl mx-auto" style={{ padding: "2rem" }}>
            <h1 className="mb-4">AI Consulting for Scaling Startups</h1>
            <p className="text-xl mb-8 text-white-70">
              Audits for vibecoded/early-PMF systems and focused AI POCs that can scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="mailto:contact@lowzack.com" variant="primary">
                Book a 30-min intro
              </Button>
              <Button
                href="#offers"
                variant="secondary"
              >
                See what you get
              </Button>
            </div>
          </GlassContainer>
        </div>
      </Hero>

      {/* Who It's For Section */}
      <Section className="bg-warm-eggshell py-12">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-wine-red pb-2 mb-6" style={{ borderBottomWidth: "3px" }}>
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="mb-3">Early PMF teams moving fast</h3>
              <p className="text-base">
                You&apos;ve found product-market fit and need to scale without slowing down or breaking what&apos;s working.
              </p>
            </Card>
            <Card>
              <h3 className="mb-3">Founders with vibecoded or fragile systems</h3>
              <p className="text-base">
                You shipped quickly to validate, but now you need to shore up the foundation before it becomes a blocker.
              </p>
            </Card>
            <Card>
              <h3 className="mb-3">Teams integrating LLMs without clear guardrails</h3>
              <p className="text-base">
                You&apos;re building AI features but lack structure around safety, evals, or boundaries.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Offers Section */}
      <Section className="bg-white py-12" id="offers">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-wine-red pb-2 mb-6" style={{ borderBottomWidth: "3px" }}>
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="flex flex-col">
              <h3 className="mb-4">System & AI Audit (2 weeks)</h3>
              <ul className="mb-6 flex-grow">
                <li>Architecture + codebase review (scale risks, sharp edges)</li>
                <li>AI/LLM integration review (boundaries, safety, evals)</li>
                <li>Data + observability gaps (logging, tracing, metrics)</li>
                <li>Delivery risks (DX, CI/CD, reliability)</li>
                <li>Written report + prioritized 30/60/90 plan</li>
              </ul>
            </Card>
            <Card className="flex flex-col">
              <h3 className="mb-4">AI POC Sprint (30 days)</h3>
              <ul className="mb-6 flex-grow">
                <li>Problem framing + success metrics</li>
                <li>Build vs buy decision + approach selection</li>
                <li>Working prototype integrated into the existing stack</li>
                <li>Evaluation plan + baseline metrics</li>
                <li>Handoff: architecture notes + next-steps roadmap</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-warm-eggshell py-12">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-wine-red pb-2 mb-6" style={{ borderBottomWidth: "3px" }}>
            Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            <div>
              <h3 className="mb-2 text-wine-red">Assess</h3>
              <p className="text-base">
                Understand your system, constraints, and goals. Identify the highest-leverage opportunities.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-wine-red">Propose</h3>
              <p className="text-base">
                Present clear options with tradeoffs, timelines, and expected outcomes. You decide the path forward.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-wine-red">Ship</h3>
              <p className="text-base">
                Execute with fast feedback loops. Deliver working code, docs, or a roadmap your team can run with.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white py-12">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-wine-red pb-2 mb-6" style={{ borderBottomWidth: "3px" }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-modern-black py-12">
        <div className="p-6 text-center text-white">
          <h2 className="h1 mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 text-white-70">
            Book a quick intro call to discuss your needs and see if we&apos;re a good fit.
          </p>
          <Button href="mailto:contact@lowzack.com" variant="primary">
            Book a 30-min intro
          </Button>
        </div>
      </Section>
    </div>
  );
}
