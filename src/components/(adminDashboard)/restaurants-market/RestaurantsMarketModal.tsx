import { Button, Form, Input, Modal, Upload } from "antd";
import Image, { StaticImageData } from "next/image";
import menu1 from "@/assets/image/menu1.png";
import menu2 from "@/assets/image/manu2.png";
import { UploadOutlined } from "@ant-design/icons";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type TMenuItems = {
  key: number;
  iamge: StaticImageData;
  itemName: string;
  manuName: string;
}[];

const menuItems: TMenuItems = [
  {
    key: 1,
    iamge: menu1,
    itemName: "Grilled Beef Steak",
    manuName: "Main Manu",
  },
  {
    key: 2,
    iamge: menu2,
    itemName: "Avocado Crispy Bread",
    manuName: "Sneaks",
  },
];

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const handleSubmit = (values) => {
  console.log("Success:", values);
};

const RestaurantsMarketModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div
        className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine size={18} color="#fff" className="absolute top-1/3 left-1/3" />
      </div>
      <div className="flex justify-between gap-10 lg:w-[900px] pt-16 pb-40">
        <div className="flex-1">
          <h1 className="text-lg">Menu Item</h1>
          <div className="grid grid-cols-1 gap-6">
            {menuItems?.map((item) => (
              <div
                key={item?.key}
                className="mt-3 flex items-center gap-4 bg-lightPink px-4 py-3 rounded"
              >
                <Image src={item?.iamge} alt="menuImage"></Image>
                <div>
                  <h5 className="font-medium text-primaryBlack">
                    {item?.itemName}
                  </h5>
                  <p className="text-primaryGray">{item?.manuName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* madal form for upload menu */}
        <div className="flex-1">
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              marginTop: "25px",
            }}
          >
            {/* image upload  */}
            <Form.Item
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              rules={[{ required: true }]}
              style={{
                textAlign: "center",
                border: "2px dashed #B87CAE",
                paddingBlock: "20px",
                borderRadius: "10px",
              }}
            >
              <Upload
                name="image"
                listType="picture"
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Upload Menu Image</Button>
              </Upload>
            </Form.Item>
            {/*  input  menu name */}
            <Form.Item
              label="Menu Name"
              name="menuName"
              rules={[{ required: true, message: "Please enter menu name" }]}
            >
              <Input size="large" placeholder="Enter menu name "></Input>
            </Form.Item>

            {/* input  Item Name  */}
            <Form.Item
              label="Item Name"
              name="itemName"
              rules={[{ required: true, message: "Please enter Item Name" }]}
            >
              <Input size="large" placeholder="Please enter item name"></Input>
            </Form.Item>

            <Button htmlType="submit" size="large" block>
              Upload
            </Button>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default RestaurantsMarketModal;
