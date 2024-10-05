import { InboxOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Checkbox, Form, Input } from "antd";
import Dragger from "antd/es/upload/Dragger";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import usePhotoUpload from "../hooks/usePhotoUpload";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { uploadProps } = usePhotoUpload();

  const { mutateAsync } = useMutation({
    mutationFn: async (body) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/user/register`,
        body
      );
      return data;
    },
  });

  const handleRegister = async (values) => {
    try {
      const res = await mutateAsync(values);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Please check your email to verify your account.",
        });
        form.resetFields();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="w-full p-12 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <Form
        form={form}
        onFinish={handleRegister}
        layout="vertical"
        initialValues={{ terms: false }}
        className="space-y-3"
      >
        <div className="flex flex-col items-center gap-1 text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-primary font-semibold">
              Log In
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input
              placeholder="Full Name"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter a username!" }]}
          >
            <Input
              placeholder="Username"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>

          <Form.Item
            name="email"
            className="col-span-2"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Email"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>

          <div className="col-span-2">
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
                {
                  pattern: /^\d+$/,
                  message: "Please enter a valid phone number!",
                },
              ]}
            >
              <Input
                placeholder="Phone Number"
                className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
              />
            </Form.Item>
          </div>
          <Form.Item
            initialValue={params.get("referred_by")}
            name="referred_by"
            className="col-span-2"
          >
            <Input
              placeholder="Referral Code"
              className="py-2 px-4 border rounded-md focus:ring focus:ring-primary"
            />
          </Form.Item>
          <div className="col-span-2">
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single upload. Strictly prohibited from uploading
                company data or other banned files.
              </p>
            </Dragger>
          </div>

          <div className="col-span-2 flex items-start gap-3 mt-5">
            <Checkbox name="terms" />
            <p className="text-gray-500">
              I agree to the{" "}
              <Link to={"/terms"} className="text-primary font-medium">
                Terms of Services
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="col-span-2 w-full py-3 text-white bg-gradient-to-r from-blue-500 to-blue-500 rounded-md flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all focus:ring focus:ring-primary"
          >
            <span>Create Account</span>
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
