import type { NextPage } from "next";

const SearchResultItem: NextPage = (props) => {
  const {
    data: { name, type },
  } = props;
  return (
    <div className="h-78 border-b leading-[78px] flex justify-between">
      <div className="flex items-center">
        <div className="ml-33">{name}</div>
        {type === "未注册" && (
          <div className="pl-24 pr-24 h-24 leading-[24px] bg-[#EDF4EB] text-[#70bf5b] text-[12px] text-center ml-20">
            {type}
          </div>
        )}
        {type === "已组册，售卖中" && (
          <div className="pl-24 pr-24 h-24 leading-[24px] bg-[#efefef] text-[#9a9a9a] text-[12px] text-center ml-20">
            {type}
          </div>
        )}
      </div>
      {type === "未注册" && (
        <div className="flex items-center">
          <div className="text-[#bebebe] text-[16px]">质押5$DOT</div>
          <div className="w-80 h-23 leading-[23px] text-[14px] text-center border rounded-[4px] text-[#196AD4] border-[#196AD4] ml-20 mr-33 cursor-pointer">
            铸造
          </div>
        </div>
      )}
      {type === "已组册，售卖中" && (
        <div className="flex items-center">
          <div className="text-[#bebebe] text-[16px]">
            10$DOT（其中5$DOT进行质押）
          </div>
          <div className="w-80 h-23 leading-[23px] text-[14px] text-center border rounded-[4px] text-[#196AD4] border-[#196AD4] ml-20 mr-33 cursor-pointer">
            购买
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultItem;
