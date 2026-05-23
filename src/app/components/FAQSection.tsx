import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { GlassCard } from "./GlassCard";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need prior AI experience?",
      answer: "No. The workflows are beginner-friendly and structured step-by-step."
    },
    {
      question: "Which AI tools are supported?",
      answer: "Works with ChatGPT, Gemini, Midjourney, Nano Banana, and most modern AI image tools."
    },
    {
      question: "Is this only for architects?",
      answer: "Built primarily for architects, interior designers, and architecture students."
    },
    {
      question: "Will this help improve presentations?",
      answer: "Yes. The system is heavily focused on presentation-quality architectural visuals."
    },
    {
      question: "Do I get lifetime access?",
      answer: "Yes. One-time purchase with lifetime access."
    },
    {
      question: "Are prompts customizable?",
      answer: "Yes. All workflows are modular and adaptable to your projects."
    },
    {
      question: "What are the best AI tools for architecture rendering in 2026?",
      answer: "Midjourney, Stable Diffusion, Nano Banana AI, Gemini AI, Photoshop AI, and ChatGPT are the top tools. Together they help architects generate faster iterations, explore multiple design moods, and produce cinematic presentation visuals with far less manual effort."
    },
    {
      question: "How do architects create AI renders?",
      answer: "By combining a 3D base model with AI image generation, prompt engineering, and light post-production. Tools like Midjourney, Gemini AI, and Nano Banana AI turn simple clay renders into realistic, atmosphere-rich visuals in a fraction of the time."
    },
    {
      question: "What is the best AI rendering workflow for architecture students?",
      answer: "Start with a clean 3D model, set up basic lighting, feed it into an AI tool like Midjourney or Nano Banana AI, then refine in Photoshop AI. This structured approach helps students produce portfolio-grade renders faster and present more confidently during juries."
    },
    {
      question: "Which AI tool is best for architectural exterior renders?",
      answer: "Midjourney, Stable Diffusion, Gemini AI, and Nano Banana AI all excel at exteriors — delivering cinematic lighting, realistic landscaping, and atmospheric depth quickly. The best choice depends on your workflow, but combining two or more yields the strongest results."
    },
    {
      question: "How can I improve architectural presentation boards using AI?",
      answer: "Use AI tools to enhance render quality, generate conceptual mood visuals, and refine composition. Gemini AI, Photoshop AI, and Midjourney are especially useful for creating cohesive, story-driven boards that communicate design intent more clearly to clients and reviewers."
    },
    {
      question: "What makes a good Midjourney prompt for architecture?",
      answer: "A strong prompt specifies the architecture style, materials, lighting conditions, camera angle, atmosphere, and rendering aesthetic. The more structured and specific the prompt, the more consistent and presentation-ready your AI renders will be."
    },
    {
      question: "How do I create photorealistic AI architectural renders?",
      answer: "Combine accurate geometry, strong lighting references, detailed prompts, and AI-enhanced post-production. Tools like Midjourney, Stable Diffusion, and Gemini AI — paired with Photoshop AI — help achieve sharp materials, cinematic realism, and presentation-grade quality."
    },
    {
      question: "Why are my AI architectural renders inconsistent?",
      answer: "Inconsistency usually comes from unstructured prompts, unclear lighting references, or a random workflow. Using a systematic approach — with tools like ChatGPT for prompt refinement and Midjourney or Nano Banana AI for generation — dramatically improves visual coherence across renders."
    },
    {
      question: "What are the key benefits of AI rendering for architects?",
      answer: "Faster iteration, lower production time, stronger presentation quality, and more creative exploration. AI tools let architects focus on design thinking instead of spending hours on repetitive rendering tasks — and clients approve concepts faster when visuals look great."
    },
    {
      question: "Can AI fully replace traditional architectural rendering?",
      answer: "Not entirely. AI accelerates the workflow significantly, but great results still require a solid understanding of architecture, lighting, composition, and materials. Think of AI tools as workflow multipliers — they enhance your output, they don't replace your expertise."
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-[28px] md:text-7xl font-bold tracking-tight mb-3 md:mb-6 text-[#1a1a1a] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <GlassCard className="p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#e5e5e5] last:border-b-0">
                <AccordionTrigger className="text-left text-sm md:text-lg font-bold text-[#1a1a1a] hover:no-underline py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-[#404040] leading-relaxed pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </div>
    </section>
  );
}
