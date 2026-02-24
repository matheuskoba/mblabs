import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import InvestmentSection from "@/components/InvestmentSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <InvestmentSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
