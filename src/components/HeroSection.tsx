import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder.jpeg";

const WHATSAPP_URL = "https://wa.me/5561999148523";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden bg-background">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy-100))_0%,transparent_60%)]" />
    <div className="container relative mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Fábrica de Software
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Se sua empresa cresceu, mas seus processos continuam manuais,{" "}
            <span className="text-gold font-display italic">
              você está construindo caos.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            A MB LABS cria sistemas sob medida para empresas que querem crescer
            com controle, previsibilidade e organização.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico estratégico
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={founderImg}
              alt="Fundador da MB LABS"
              className="h-auto w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-accent/20 blur-2xl" />
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
