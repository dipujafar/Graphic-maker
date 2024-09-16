import { Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const UserDetails = ({ open, setOpen }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative"
      }}
    >
       <div
        className="w-12 h-12 bg-mainColor  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine size={18} color="#fff" className="absolute top-1/3 left-1/3" />
      </div>
      <div className="pb-20">
        <h4 className="text-center text-2xl font-medium" >User  Details</h4>
        <div className="mt-10">
            <div className="flex justify-between">
                <h4>Date :</h4>
                <p className="font-medium">01-24-2024</p>
            </div>
           <Divider></Divider>
           <div className="flex justify-between">
                <h4>User name :</h4>
                <p className="font-medium">James Tracy</p>
            </div>
           <Divider></Divider>
           <div className="flex justify-between">
                <h4>Email :</h4>
                <p className="font-medium">james1234@gmail.com</p>
            </div>
           <Divider></Divider>
           <div className="flex justify-between">
                <h4>Phone Number :</h4>
                <p className="font-medium">+1-800-925-6278</p>
            </div>
           <Divider></Divider>
           <div className="flex justify-between">
                <h4>Address :</h4>
                <p className="font-medium">New York,USA</p>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
