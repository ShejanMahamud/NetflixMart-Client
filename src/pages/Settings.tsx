import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsProps, Upload } from "antd";
import useAxiosSecure from "../hooks/useAxiosSecure";
import usePhotoUpload from "../hooks/usePhotoUpload";
import useUser from "../hooks/useUser";

const { Dragger } = Upload;

const Settings = () => {
  const axiosSecure = useAxiosSecure();
  const { photo, uploadProps } = usePhotoUpload();
  const user = useUser();
  const {
    data: userDetails,
    isPending: userPending,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_SERVER_URL}/auth/user/me/${user?.email}`
      );
      return data;
    },
  });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Edit Profile",
      children: (
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <img
              src={
                userDetails?.profile_picture
                  ? userDetails?.profile_picture
                  : photo
              }
            />
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Preferences",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Security",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className="p-5 w-full">
      <h1 className="font-medium text-xl">Settings</h1>
      <p>Manage your profile and update your profiles</p>
      <Tabs defaultActiveKey="1" items={items} className="mt-10" />
    </div>
  );
};

export default Settings;
