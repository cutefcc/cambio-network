import type { NextPage } from "next";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LeftNav from "../../components/LeftNav";
import WalletBtn from "../../components/WalletBtn";
import {
  getState,
  setState,
  subscribe,
  destroy,
  handleChangeLeftNav,
  store,
} from "../../store";
import create from "zustand";
import Router from "next/router";
import { useState } from "react";
const useStore = create(store);
const Right: NextPage = () => {
  const lists = [
    {
      name: "cambio.cam",
      record: "27",
      status: "使用中",
    },
  ];
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };
  const [domainstatus, setDomainStatus] = useState("1");
  const [open, setOpen] = useState(false);
  const handleDomainStatusChange = (event: SelectChangeEvent) => {
    setDomainStatus(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[80%]">
      <div className="mt-36 mr-60 flex flex-row-reverse">
        <WalletBtn />
      </div>
      {/* 搜索区域 */}
      <div className="flex justify-start mt-122 ml-60">
        <div>
          <Button variant="contained" className="rounded-[4px] bg-[#196ad4]">
            添加域名
          </Button>
        </div>
      </div>
      {/* 域名管理列表 */}
      <div className="mt-32 ml-60 border-l border-r">
        <div className="h-68 leading-[68px] flex bg-[#EFEFEF] text-[14px] text-[#101010] border-b">
          <div className="w-[30%] pl-50">域名</div>
          <div className="w-[30%] pl-50">记录数</div>
          <div className="w-[30%] pl-50">DNS服务器状态</div>
          <div className="w-[30%] pl-50">操作</div>
        </div>
        <div>
          {lists.map((item) => {
            return (
              <div
                key={item.name}
                className="h-68 leading-[68px] flex text-[14px] border-b"
              >
                <div className="w-[30%] pl-50">{item.name}</div>
                <div className={`w-[30%] pl-50`}>{item.record}</div>
                <div className={`w-[30%] pl-50`}>正常</div>
                <div className="w-[30%] pl-50 flex">
                  <div
                    className="w-90 text-[#1890FF] cursor-pointer"
                    // onClick={handleOpen}
                  >
                    添加记录
                  </div>

                  <div className="w-90 text-[#BD3124] cursor-pointer">删除</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row-reverse mt-45">
        <Pagination count={10} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            域名定价
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="mb-32 flex">
              <TextField
                id="price"
                label="请输入域名的售价"
                variant="outlined"
                size="small"
              />
              <div className="w-80 h-40 leading-[40px] text-center border border-[#ccc] rounded-[4px]">
                $DOT
              </div>
            </div>

            <Button
              variant="outlined"
              className="rounded-[4px]"
              size="small"
              onClick={handleClose}
            >
              取消
            </Button>
            <Button
              variant="contained"
              className="rounded-[4px] ml-20 bg-[#196ad4]"
              size="small"
              onClick={handleClose}
            >
              确定
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const Analyze: NextPage = () => {
  return (
    <div className="flex xl:w-1280 m-auto h-screen">
      <LeftNav />
      <Right />
    </div>
  );
};

export default Analyze;
