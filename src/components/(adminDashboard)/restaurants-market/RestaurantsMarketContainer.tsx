"use client";
import { AutoComplete, AutoCompleteProps } from "antd";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import RestaurantsMarketTable from "./RestaurantsMarketTable";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const RestaurantsMarketContainer = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);  
    console.log(value); 
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-[#333] text-4xl font-medium">
          Restaurants & Market
        </h1>
        <div className="relative border border-mainColor rounded-lg">
          <AutoComplete
            options={options}
            style={{ width: 330}}
            size="large"
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            onChange={onChange}
            placeholder="Search"
          />
          <div className="absolute top-3 right-5">
          <RiSearchLine size={15} />
          </div>
        </div>
      </div>

      {/* Restaurants & Market Table */}
      <RestaurantsMarketTable></RestaurantsMarketTable>
    </div>
  );
};

export default RestaurantsMarketContainer;
