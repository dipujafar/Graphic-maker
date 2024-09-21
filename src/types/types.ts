export type TRequestDataType = {
  _id?: string;
  title?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  user?: {
    _id?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
  };
  status?: "pending" | "delivered" | "ongoing";
  isPaid?: boolean;
  isDeleted?: boolean;
  description?: string;
};

interface Verification {
  otp?: string;
  expiresAt?: string;
  status?: boolean;
}

export type UserData = {
  _id?: string;
  status?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  role?: string;
  address?: string;
  needsPasswordChange?: boolean;
  isDeleted?: boolean;
  verification?: Verification;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TEarning = {
  _id?: string;
  amount?: number;
  user?: string;
  request?: string;
  tnxId?: string;
  accountNumber?: string;
  paymentMethod?: string;
  paymentType?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  userData?: UserData;
  requestData?: TRequestDataType;
};
