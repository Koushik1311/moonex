import ComparisonTable from "./components/shared/ComparisonTable";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ConnectWalletButton from "./components/shared/ConnectWalletButton";
import FAQ from "./components/shared/FAQ";
import Features from "./components/shared/Features";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "./components/global/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <div className="relative container min-h-[11vh] lg:min-h-[17vh] flex items-end">
        <Header />

        {/* Background Circle */}
        <div className="bg-ellipse-style bg-ellipse  absolute top-[240px] left-[3px] -z-30" />
        <div className="bg-ellipse-style bg-ellipse-2  absolute top-[120px] -left-[204px] -z-30" />
        <div className="bg-ellipse-style bg-ellipse-3  absolute top-[20px] -left-[360px] -z-30" />

        {/* Background gradient */}
        <div className="h-[856px] w-[856px] bg-[#E4B40D] rounded-full hidden lg:block absolute -top-[90px] left-0 z-30 blur-[150px] opacity-10 " />
        <div className="h-[360px] w-[360px] bg-[#E4B40D] rounded-full block absolute -top-[150px] -left-[100px] lg:-top-[85px] lg:left-0 z-40 blur-[150px] opacity-20 " />
        <div className="h-[241px] w-[170px] bg-[#E4B40D] rounded-full hidden lg:block absolute -top-[10px] left-0 z-50 blur-[150px] opacity-20" />
      </div>

      <main className="container relative z-50">
        {/* Hero */}
        <section
          id="home"
          className="min-h-[89vh] lg:min-h-[83vh] md:px-12 max-w-4xl flex items-center"
        >
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-extrabold text-white"
            >
              Trusted Multi-Chain <span className="text-[#E4B40D]">DEX</span>{" "}
              Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-xl font-normal text-[#9E9E9E] mt-3"
            >
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </motion.p>

            <div className="mt-9 flex items-center gap-x-7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ConnectWalletButton />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  className="border-[#E4B40D] text-[#E4B40D] bg-transparent rounded-full hover:bg-transparent hover:text-[#E4B40D] group"
                  variant="outline"
                >
                  <span>Trade Crypto</span>
                  <span className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200">
                    →
                  </span>
                  <FaEthereum className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Star */}
            <motion.img
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/star-img 2.png"
              alt="Planet"
              className="absolute -top-[150px] left-[100px] z-50 w-12 h-12 lg:w-16 lg:h-16"
            />
            <motion.img
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/star-img.png"
              alt="Planet"
              className="hidden md:block absolute md:-top-[190px] md:right-[10px] lg:-top-[190px] lg:-right-[270px] z-50 w-12 h-13"
            />

            {/* Planet */}
            {/* <div className="hidden lg:block absolute -top-[80px] -right-[350px] z-50 w-[259px] h-[259px] rounded-full bg-gradient-custom" /> */}
            <motion.div
              className="hidden lg:block absolute -top-[80px] -right-[350px] z-50 w-[259px] h-[259px] rounded-full bg-gradient-custom"
              animate={{
                rotate: [0, 360],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Star */}
            <motion.img
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/star-img 2.png"
              alt="Planet"
              className="absolute -bottom-[270px] left-[280px] md:left-[550px] lg:-bottom-[150px] lg:-right-[270px] lg:left-auto z-50 w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>
        </section>

        {/* About */}
        <section id="about-us" className="relative mt-48">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:px-12 mb-8 text-4xl font-extrabold text-white"
          >
            Why <span className="text-[#E4B40D]">MoonEX</span>
          </motion.h2>
          <div className="h-[360px] w-[560px] bg-[#E4B40D] rounded-full block absolute top-[420px] left-[200px] z-40 blur-[150px] opacity-20" />
          <ComparisonTable />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center text-white mb-11 mt-16"
          >
            Our <span className="text-[#E4B40D]">Features</span>
          </motion.h3>
          <Features />
        </section>

        {/* FAQ */}
        <section
          id="faqs"
          className="relative mt-48 bg-[#BBBBBB]/[10%] max-w-full lg:max-w-[997px] pt-8 pb-12 mx-auto rounded-lg"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center text-[#E4B40D]"
          >
            FAQs
          </motion.h4>
          <hr className="mt-8 mb-1 border-t border-[#BBBBBB]/[10%]" />

          <FAQ />

          <div className="h-[600px] w-[600px] bg-[#E4B40D] rounded-full absolute top-[200px] -left-[500px] z-40 blur-[150px] opacity-10 " />
        </section>
      </main>

      {/* Footer */}
      <div id="contact-us" className="relative mt-56 z-50 bg-[#051422]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
