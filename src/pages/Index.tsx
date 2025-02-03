import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CreditCard, Shield, MessageSquare, MapPin } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <img 
          src="/lovable-uploads/0a76533e-b861-4f1c-81d4-1acb3a3819a1.png" 
          alt="WeGo Logo" 
          className="h-20 md:h-24" // Increased logo size even more
        />
        <div className="flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="border-wego-purple text-wego-purple hover:bg-wego-purple/10"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-wego-yellow text-black hover:bg-wego-yellow/90"
          >
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
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
                onClick={scrollToFeatures}
                variant="outline"
                className="border-2 border-wego-purple text-wego-purple hover:bg-wego-purple/10 h-12 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Subscription Plans Section */}
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

      {/* Footer Section */}
      <footer className="bg-wego-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-wego-blue">
                Making student travel easier and more affordable across Finland.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/wego.fi?igsh=aTdvNDRpaTNyendu&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wego-yellow hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/wego.fi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wego-yellow hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-wego-yellow">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-wego-blue hover:text-wego-yellow transition-colors">About Us</a></li>
                <li><a href="#" className="text-wego-blue hover:text-wego-yellow transition-colors">How It Works</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-wego-yellow">Contact</h3>
              <ul className="space-y-2">
                <li className="text-wego-blue">Email: support@wego.fi</li>
                <li className="text-wego-blue">Phone: +358 123 456 789</li>
                <li className="text-wego-blue">Helsinki, Finland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-wego-blue/30 mt-8 pt-8 text-center text-wego-blue">
            <p>&copy; {new Date().getFullYear()} WeGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
