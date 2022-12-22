import type { NextPage } from "next";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchResultItem from "../components/SearchResultItem";
import WalletBtn from "../components/WalletBtn";
import LeftNav from "../components/LeftNav";
import {
  getState,
  setState,
  subscribe,
  destroy,
  handleChangeLeftNav,
  store,
} from "../store";
import create from "zustand";
import { useNavigate } from "react-router-dom";
import Router from "next/router";
const useStore = create(store);
const SearchArea = () => {
  return (
    <Select value={1} label="Age" size="small">
      <MenuItem value={1}>.cam</MenuItem>
    </Select>
  );
};
const Right: NextPage = () => {
  const searchRes = [
    {
      name: "cambionetwork",
      type: "未注册",
    },
    {
      name: "cambio",
      type: "已组册，售卖中",
    },
  ];
  return (
    <div className="w-[80%]">
      <div className="mt-36 mr-60 flex flex-row-reverse">
        <WalletBtn />
      </div>
      {/* 搜索区域 */}
      <div className="flex justify-center mt-122">
        <TextField
          label="注域名先查询，请输入域名，如：cambio"
          variant="outlined"
          className="w-508 h-32"
          size="small"
        />
        <SearchArea />
        <div className="ml-38">
          <Button
            variant="contained"
            className="rounded-[4px] ml-38 bg-[#196ad4]"
          >
            查询
          </Button>
        </div>
      </div>
      {/* 结果区域 */}
      <div className="border w-[67%] m-auto mt-65">
        {searchRes.map((item, index) => {
          return (
            <div key={`${item.name}-${index}`}>
              <SearchResultItem data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex xl:w-1280 m-auto h-screen">
      <LeftNav />
      <Right />
    </div>
  );
};

export default Home;
