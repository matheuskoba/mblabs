import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  RotateCcw,
  Unplug,
  Users,
  BarChart3,
} from "lucide-react";

const problems = [
  { icon: MessageSquare, text: "Processos centralizados no WhatsApp" },
  { icon: FileSpreadsheet, text: "Planilhas desatualizadas" },
  { icon: RotateCcw, text: "Retrabalho constante" },
  { icon: Unplug, text: "Falta de integração entre sistemas" },
  { icon: Users, text: "Dependência de funcionários que concentram informação" },
  { icon: BarChart3, text: "Falta de visão clara dos números" },
];

const ProblemSection = () => (
  <section id="problema" className="bg-navy-50 py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          O que está travando o crescimento da sua empresa?
        </h2>
      </motion.div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 shadow-sm"
          >
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span className="text-sm font-medium leading-snug">{item.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center text-lg font-semibold text-gold font-display italic"
      >
        "Crescer sem estrutura tecnológica é crescer no improviso."
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
