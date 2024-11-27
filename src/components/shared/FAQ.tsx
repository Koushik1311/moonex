import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/constants/faq";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Accordion type="single" collapsible className="text-white text-sm">
        {FAQData.map((item, index) => (
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="items-start mx-4 md:mx-10 lg:mx-20 text-xl font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="mx-4 md:mx-10 lg:mx-20 text-[#BAB8B8]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
