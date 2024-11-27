import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import comparisonData from "@/constants/comparison";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-[#BBBBBB]/[10%] rounded-lg px-4 md:px-12 pb-10 overflow-x-auto"
    >
      <Table className="text-white min-w-[900px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-3xl font-semibold text-center py-10 text-[#E4B40D]">
              Comparison
            </TableHead>
            <TableHead className="py-8 w-[360px]">
              <div className="flex items-center gap-3 justify-center">
                <img
                  src="/dewfwefwef 2.png"
                  alt="Logo Icon"
                  className="h-[50px] w-auto"
                />
                <img
                  src="/fcawfrfwq 1.png"
                  alt="Logo Icon"
                  className="h-[45px] w-auto"
                />
              </div>
            </TableHead>
            <TableHead className="py-8 w-[360px]">
              <div className="flex items-center justify-center">
                <img
                  src="/2560px-Uniswap_Logo_and_Wordmark 1.png"
                  alt="Uniswap logo"
                  className="h-[45px] w-auto"
                />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((item) => (
            <TableRow key={item.comparison}>
              <TableCell className="text-xl text-gray-400 py-6 pl-10">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.comparison}
                </motion.p>
              </TableCell>
              <TableCell>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  {item.moonex ? (
                    <Check className="text-green-500" />
                  ) : (
                    <X className="text-red-500" />
                  )}
                </motion.div>
              </TableCell>
              <TableCell>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  {item.uniswap ? (
                    <Check className="text-green-500" />
                  ) : (
                    <X className="text-red-500" />
                  )}
                </motion.div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
