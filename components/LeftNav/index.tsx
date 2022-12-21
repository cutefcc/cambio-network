import { NextPage } from "next/types";
import Router from "next/router";
import { getCurrRouter } from "../../utils";
import { useEffect, useState } from "react";
const LeftNav: NextPage = () => {
  const [currRouter, setCurrRouter] = useState("/");
  useEffect(() => {
    const currRouter = getCurrRouter();
    setCurrRouter(currRouter);
  });
  return (
    <div className="w-[20%] border-r border-[#bbbbbb]">
      <div className="w-232 h-41 leading-41 text-[28px] text-[#101010] m-auto mt-31 text-center mb-45">
        Cambio Network
      </div>
      <div
        className={`w-72 h-26 leading-26 ml-40 mb-45 text-[#101010] text-[18px] text-left cursor-pointer ${
          currRouter === "/" && "text-[#196AD4]"
        }`}
        onClick={() => {
          Router.push("/");
        }}
      >
        域名查询
      </div>
      <div
        className={`w-72 h-26 leading-26 ml-40 mb-45 text-[#101010] text-[18px] text-left cursor-pointer ${
          currRouter === "/manage" && "text-[#196AD4]"
        }`}
        onClick={() => {
          Router.push("/manage");
        }}
      >
        域名管理
      </div>
      <div
        className={`w-72 h-26 leading-26 ml-40 mb-45 text-[#101010] text-[18px] text-left cursor-pointer`}
        onClick={() => {
          Router.push("/analyze");
        }}
      >
        域名解析
      </div>
    </div>
  );
};

export default LeftNav;
