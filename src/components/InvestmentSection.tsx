import { motion } from "framer-motion";
import { BadgeDollarSign, CalendarClock, CreditCard } from "lucide-react";

const items = [
  { icon: BadgeDollarSign, label: "Projetos sob medida a partir de", value: "R$ 5.000" },
  { icon: CreditCard, label: "Condição de pagamento", value: "50% na assinatura | 50% na entrega" },
  { icon: CalendarClock, label: "Prazo médio de entrega", value: "20 a 40 dias" },
];

const InvestmentSection = () => (
  <section id="investimento" className="bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Investimento
        </h2>
      </motion.div>
      <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <item.icon className="mx-auto mb-3 h-6 w-6 text-gold" />
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-2 font-heading text-lg font-bold">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentSection;
