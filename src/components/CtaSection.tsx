import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5561999148523";

const CtaSection = () => (
  <section className="bg-navy-950 py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Se sua empresa está crescendo, mas sua estrutura não acompanha,{" "}
          <span className="text-gold font-display italic">vamos organizar isso.</span>
        </h2>
        <div className="mt-10">
          <Button variant="cta" size="xl" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar conversa de 15 minutos
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
