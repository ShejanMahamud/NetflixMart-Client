import { FaSpinner } from "react-icons/fa"; // You can choose any icon from react-icons

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaSpinner className="text-5xl text-orange-500 animate-spin" />
      {/* <span className="mt-4 text-lg font-medium text-gray-700">Loading...</span> */}
    </div>
  );
};

export default Loading;
