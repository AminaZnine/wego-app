
import { Shield, MessageSquare, MapPin } from "lucide-react";

const SubscriptionPlans = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Select the perfect plan that suits your needs
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4">Basic</h3>
          <p className="text-3xl font-bold mb-6">Free</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Basic verification</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <span>In-app messaging</span>
            </li>
          </ul>
        </div>
        
        <div className="border-2 border-wego-purple rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-wego-purple text-white px-4 py-1 rounded-full text-sm">
            Popular
          </div>
          <h3 className="text-xl font-bold mb-4">Premium</h3>
          <p className="text-3xl font-bold mb-6">€9.99/mo</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Advanced verification</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <span>Priority messaging</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>Route optimization</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
