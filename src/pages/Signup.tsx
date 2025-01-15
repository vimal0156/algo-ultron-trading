import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Apple, Facebook, Github, UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup - replace with actual auth logic
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Create Account
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join thousands of traders using our platform
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full name"
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email address"
              required
              className="h-12"
            />
            <Input
              type="password"
              placeholder="Password"
              required
              className="h-12"
            />
            <Input
              type="password"
              placeholder="Confirm password"
              required
              className="h-12"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <UserPlus className="mr-2 h-5 w-5" />
                Create account
              </span>
            )}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="h-12">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12">
              <Apple className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="link"
              className="font-semibold hover:text-primary"
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;