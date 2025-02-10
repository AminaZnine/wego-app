import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to WeGo!",
    });
    // In a real app, you would handle authentication here
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    // This will be implemented with Supabase
    console.log("Google login clicked");
    toast({
      title: "Google Login",
      description: "Google authentication will be implemented with Supabase",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <img 
        src="/lovable-uploads/0a76533e-b861-4f1c-81d4-1acb3a3819a1.png" 
        alt="WeGo Logo" 
        className="h-20 mb-8"
      />
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>

        <Button 
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full flex items-center justify-center gap-2 py-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </Button>

        <div className="relative my-6">
          <Separator className="absolute inset-0 flex items-center" />
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-wego-purple hover:bg-wego-purple/90">
              Sign in
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium text-wego-purple hover:text-wego-purple/90"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
