import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SubscriptionPlans from "@/components/home/SubscriptionPlans";
import Footer from "@/components/home/Footer";

const Index = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Navigation />
      <Hero onLearnMoreClick={scrollToFeatures} />
      <Features />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Index;
