import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#051422] fixed top-0 left-0 z-[999]">
      <motion.div
        className="w-16 h-16 border-4 border-[#E4B40D] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
