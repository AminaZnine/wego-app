import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-wego-purple">WeGo</h1>
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
  );
};

export default Navigation;
