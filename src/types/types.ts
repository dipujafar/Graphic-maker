export type TRequestDataType = {
    _id: string;
    title: string;
    name: string;
    email: string;
    phoneNumber: string;
    user: {
      _id: string;
      name: string;
      email: string;
      phoneNumber: string;
    };
    status: "pending" | "delivered" | "ongoing"; 
    isPaid: boolean;
    isDeleted: boolean;
    description: string;
  };