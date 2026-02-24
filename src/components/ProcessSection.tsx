import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Diagnóstico da operação", desc: "Entendemos como sua empresa funciona hoje." },
  { number: "02", title: "Mapeamento de gargalos", desc: "Identificamos onde estão os desperdícios e retrabalhos." },
  { number: "03", title: "Desenvolvimento sob medida", desc: "Construímos o sistema ideal para sua operação." },
  { number: "04", title: "Entrega e acompanhamento", desc: "Implantamos e garantimos que tudo funcione." },
];

const ProcessSection = () => (
  <section id="processo" className="bg-navy-50 py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Como funciona
        </h2>
      </motion.div>
      <div className="mx-auto mt-14 grid max-w-3xl gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            {/* timeline line */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-12 h-full w-px bg-border" />
            )}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {step.number}
            </div>
            <div className="pt-1.5">
              <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-14 text-center text-lg font-semibold text-gold font-display italic"
      >
        "Antes de escrever código, entendemos sua empresa."
      </motion.p>
    </div>
  </section>
);

export default ProcessSection;
