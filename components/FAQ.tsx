import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Vaanika and how does it work?",
    answer:
      "Vaanika, made by FuturixAI, is an AI-driven voice cloning and multilingual dubbing platform. It uses advanced machine learning algorithms to generate high-quality, natural-sounding voices in multiple languages for various applications like content creation, podcasts, and customer support.",
  },
  {
    question: "What languages does Vaanika support?",
    answer:
      "Vaanika supports a wide range of Indian languages including Hindi, Tamil, Telugu, Punjabi, Marathi, Kannada, and Gujarati. We're continuously expanding our language support to cater to diverse regions.",
  },
  {
    question: "How can I access Vaanika's voice cloning API?",
    answer:
      "You can access Vaanika's API documentation through the 'API Docs' link in the footer. The documentation includes integration guides, authentication methods, and code examples to help you integrate voice cloning and multilingual dubbing into your projects.",
  },
  {
    question: "What is the relationship between Vaanika and FuturixAI?",
    answer:
      "Vaanika is a product developed by FuturixAI, designed to provide high-quality voice cloning and multilingual dubbing. It leverages cutting-edge AI technology to generate realistic and expressive voices for various use cases such as content creation, e-learning, and customer support.",
  },
  {
    question: "How do I request any enterprise support?",
    answer: "Mail us at connect@futurixai.com with your requirements."
  },
  {
    question: "What support channels are available for Vaanika?",
    answer:
      "For support, we offer multiple channels including Discord for community discussions, LinkedIn for professional inquiries, and Instagram for updates and announcements. If you have further queries, please mail us at connect@futurixai.com",
  },
];

export function FAQ() {
  return (
    <div className='h-fit w-full bg-black pt-20 pb-54 relative'>
      <div className='container max-w-6xl mx-auto text-white/60 md:px-20 px-5 pt-14 pb-6 relative flex flex-col gap-4'>
        <div className='font-bold pb-12 leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>
          Frequently Asked Questions
        </div>

        <Accordion
          className="w-[60rem]"
          type="single"
          defaultValue={`item-0`}
          collapsible
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}