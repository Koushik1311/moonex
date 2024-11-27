import { FEATURES } from "@/constants/features";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {FEATURES.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="bg-[#FFFFFF]/[2%] backdrop-blur-lg py-8 px-7 rounded-lg border-[1px] border-[#FFFFFF]/[5%]"
        >
          <div className="w-[68px] h-[68px] bg-[#D9D9D9]/[10%] rounded-full flex items-center justify-center">
            <item.icon size={38} />
          </div>
          <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
          <p className="mt-3">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
