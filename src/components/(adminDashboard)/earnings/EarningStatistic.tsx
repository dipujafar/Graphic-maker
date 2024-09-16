import Image from "next/image";
import dollerBule from "@/assets/icons/dollerBule.png";
import dollerYellow from "@/assets/icons/dollerYellow.png";

const EarningStatistic = () => {
  return (
    <div className="flex justify-between gap-6">
      <div className="flex items-center  gap-6 h-[165px] w-full p-4 bg-secondary rounded-xl">
        <div className="bg-[#B0CFFF] p-4 rounded-3xl">
          <Image src={dollerYellow} alt="vendorsIcon"></Image>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Total Earning</h3>
          <p className="text-3xl font-semibold ">$2.5K</p>
        </div>
      </div>
      <div className="flex items-center  gap-6 h-[165px] w-full p-4 bg-secondary rounded-xl">
        <div className="bg-[#FFE0B0] p-4 rounded-3xl">
          <Image src={dollerBule} alt="vendorsIcon"></Image>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Total Earning</h3>
          <p className="text-3xl font-semibold ">$2.5K</p>
        </div>
      </div>
    </div>
  );
};

export default EarningStatistic;
