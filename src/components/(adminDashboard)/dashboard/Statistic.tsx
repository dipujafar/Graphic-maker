import Image from "next/image";
import moneyIcon from "@/assets/icons/money.png";

const Statistic = ({totalEarnings}:{totalEarnings: string}) => {
  console.log(totalEarnings);
  return (
    <div >
      <div className="flex items-center  gap-6 h-[165px] w-full p-4 bg-secondary rounded-xl">
        <div className="bg-[#DDE0FF] p-4 rounded-full">
          <Image src={moneyIcon} alt="vendorsIcon"></Image>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Total Earning</h3>
          <p className="text-3xl font-semibold ">${totalEarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
