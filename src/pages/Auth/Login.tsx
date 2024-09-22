import { Button, Form, Input, Steps, message } from "antd";
import "antd/dist/reset.css";
import axios from "axios"; // Axios for API requests
import React, { useState } from "react";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const Login: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [showLoginOptions, setShowLoginOptions] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Send OTP API Call
  const sendOtp = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/user/send-otp`,
        { phone: phoneNumber }
      );
      message.success("OTP sent successfully!");
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Failed to send OTP:", error);
      message.error("Failed to send OTP, please try again.");
    }
  };

  // Verify OTP API Call
  const verifyOtp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/user/verify-otp`,
        {
          phone: phoneNumber,
          otp: otp,
          email: email,
        }
      );
      if (response.data.success) {
        message.success("OTP verified successfully!");
        navigate(`/auth/login-success?token=${response.data.token}`);
      } else {
        message.error("Invalid OTP, please try again.");
      }
    } catch (error) {
      console.error("Failed to verify OTP:", error);
      message.error("OTP verification failed, please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    window.open(`${import.meta.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  const handlePhoneLogin = () => {
    setShowLoginOptions(false);
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      sendOtp(); // Send OTP when user inputs phone number
    } else {
      form
        .validateFields()
        .then(() => {
          setCurrentStep(currentStep + 1);
        })
        .catch((info) => {
          console.log("Validate Failed:", info);
        });
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(() => {
        verifyOtp(); // Verify OTP when user submits
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const steps = [
    {
      title: "Email",
      content: (
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
      ),
    },
    {
      title: "Phone",
      content: (
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^\+?[1-9]\d{1,14}$/,
              message: "Please enter a valid phone number!",
            },
          ]}
        >
          <Input
            placeholder="8801644494180"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </Form.Item>
      ),
    },
    {
      title: "OTP Verification",
      content: (
        <Form.Item
          label="OTP"
          name="otp"
          rules={[
            { required: true, message: "Please input the OTP!" },
            { len: 6, message: "OTP must be 6 digits!" },
          ]}
        >
          <Input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
          />
        </Form.Item>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[60%_40%]">
      {/* Left Section */}
      <div className="bg-login bg-no-repeat bg-cover bg-center h-full flex items-end justify-center px-10 py-10">
        {/* Content */}
      </div>

      <div className="relative w-full flex flex-col items-start gap-10 px-8 py-12 bg-white shadow-lg rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold mb-3">
            Welcome to 🎬 NetflixMart
          </h1>
          <p className="text-gray-600">
            Sign in to explore the best in entertainment.
          </p>
        </div>

        {showLoginOptions && (
          <div className="w-full flex flex-col items-center gap-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full max-w-md bg-blue-50 border border-blue-600/50 text-blue-700 rounded-lg px-4 py-3 flex items-center justify-center gap-3 shadow-md hover:bg-blue-100 transition-all duration-300"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-lg font-medium">Sign in with Google</span>
            </button>

            <button
              onClick={handlePhoneLogin}
              className="w-full max-w-md bg-blue-50 border border-blue-600/50 text-blue-700 rounded-lg px-4 py-3 flex items-center justify-center gap-3 shadow-md hover:bg-blue-100 transition-all duration-300"
            >
              <FcPhone className="text-2xl" />
              <span className="text-lg font-medium">Sign in with Phone</span>
            </button>
          </div>
        )}

        {!showLoginOptions && (
          <div className="w-full max-w-md">
            <Steps current={currentStep} className="mb-6">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <Form form={form} layout="vertical">
              {steps[currentStep].content}

              <div className="flex justify-between mt-6">
                {currentStep > 0 && (
                  <Button onClick={handleBack} className="bg-gray-200">
                    Back
                  </Button>
                )}
                {currentStep === 0 && (
                  <Button
                    onClick={() => setShowLoginOptions(true)}
                    className="bg-gray-200"
                  >
                    Back
                  </Button>
                )}
                {currentStep < steps.length - 1 && (
                  <Button type="primary" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {currentStep === steps.length - 1 && (
                  <Button type="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                )}
              </div>
            </Form>
          </div>
        )}

        <p className="absolute bottom-0 text-xs text-gray-600/50 px-4 left-0">
          © 2024 NetflixMart. All rights reserved. Unauthorized distribution,
          duplication, or any other use of the content on this site without
          express written permission from NetflixMart is prohibited.
        </p>
      </div>
    </div>
  );
};

export default Login;
