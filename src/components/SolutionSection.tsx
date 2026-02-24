import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Link,
  Cog,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

const solutions = [
  { icon: Monitor, title: "Sistemas internos personalizados" },
  { icon: Smartphone, title: "Aplicativos sob medida" },
  { icon: Link, title: "Integrações entre ferramentas" },
  { icon: Cog, title: "Automação de processos repetitivos" },
  { icon: LayoutDashboard, title: "Painéis administrativos estratégicos" },
  { icon: RefreshCw, title: "Evolução de sistemas já existentes" },
];

const SolutionSection = () => (
  <section id="solucao" className="bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Transformamos processos manuais em sistemas organizados.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Não vendemos sistema genérico. Cada projeto é desenhado conforme a
          operação da sua empresa.
        </p>
      </motion.div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group rounded-xl border border-border p-6 transition-all duration-300 hover:border-accent hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-sm font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
