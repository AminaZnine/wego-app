
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onLearnMoreClick: () => void;
}

const Hero = ({ onLearnMoreClick }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ride-Sharing Made Easy for Students in Finland
          </h1>
          <p className="text-lg text-gray-600">
            WeGo connects students and drivers to create a safe and reliable ride-sharing community. Whether you need a ride or want to earn extra money, WeGo makes it simple and convenient.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/signup")}
              className="bg-wego-yellow text-black hover:bg-wego-yellow/90 h-12 px-8"
            >
              Get Started
            </Button>
            <Button
              onClick={onLearnMoreClick}
              variant="outline"
              className="border-2 border-wego-purple text-wego-purple hover:bg-wego-purple/10 h-12 px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
