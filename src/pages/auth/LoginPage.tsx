import { LoginFormComponent } from "../../features/auth/components/LoginFormComponent"
// import { FaGoogle, FaFacebookF } from "react-icons/fa";

import LoginIcon from "@/assets/login-icon.png";

export const LoginPage = () => {  
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-black flex-col justify-center items-center p-10">
        <img src={LoginIcon} alt="Illustration" className="w-3/4 mb-6" />
        <p className="text-lg font-medium text-white">Optimize your business</p>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 bg-gray justify-center items-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-primary mb-2">Login</h2>

          {/* Form */}
          <LoginFormComponent />

          {/* Terms */}
          <p className="mt-6 text-xs text-black text-center">
            By signing up, I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
