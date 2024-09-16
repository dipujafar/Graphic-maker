// import { cn } from "@/lib/utils";
import Image from "next/image";
// import styles from "./UserCard.module.css";

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const  UserCard = ({ user, active }) => {
  const { img, name, latestMsg } = user;

  return (
    <div
    //   className={cn("flex items-stretch gap-x-4 px-2", {
    //     [styles.active]: active === true,
    //   })}
    className={`flex gap-x-4 ${active ? "bg-[#0DB760] text-primaryWhite p-2 rounded": ""}`}
    >
      <div className="w-[16%]">
        <Image src={img} alt={name} className="w-full rounded-full" />
      </div>

      <div className="flex-grow space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-medium text-primary-black">{name}</h4>
          <p className="font-semibold text-secondary-2">12m</p>
        </div>
        <p className="text-ellipsis">{latestMsg}</p>
      </div>
    </div>
  );
}

export default  UserCard