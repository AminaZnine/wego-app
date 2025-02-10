
import { Shield, MessageSquare, MapPin, CreditCard } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Key Features for Your Journey
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience seamless ride-sharing with our comprehensive feature set
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <Shield className="w-12 h-12 text-wego-purple mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-center">Verified Profiles</h3>
            <p className="text-gray-600 text-center">Enhanced security with student verification system</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <MessageSquare className="w-12 h-12 text-wego-purple mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-center">Instant Chat</h3>
            <p className="text-gray-600 text-center">Direct communication with your ride partner</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <MapPin className="w-12 h-12 text-wego-purple mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-center">Easy Navigation</h3>
            <p className="text-gray-600 text-center">Real-time tracking and route optimization</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <CreditCard className="w-12 h-12 text-wego-purple mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-center">Secure Payments</h3>
            <p className="text-gray-600 text-center">Safe and transparent payment system</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
