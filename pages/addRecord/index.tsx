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
      type: "Web2 CNAME",
      value: "XXXXXXXXXX",
      ttl: "10分钟",
      status: "正常",
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
  const [type, setType] = useState("1");
  const [subType, setSubType] = useState("1");
  const [ttl, setTtl] = useState("1");
  const [open, setOpen] = useState(false);
  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleSubTypeChange = (event: SelectChangeEvent) => {
    setSubType(event.target.value);
  };
  const handleTtlChange = (event: SelectChangeEvent) => {
    setTtl(event.target.value);
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
          <Button
            variant="contained"
            className="rounded-[4px] bg-[#196ad4]"
            onClick={handleOpen}
          >
            创建记录
          </Button>
        </div>
      </div>
      {/* 域名管理列表 */}
      <div className="mt-32 ml-60 border-l border-r">
        <div className="h-68 leading-[68px] flex bg-[#EFEFEF] text-[14px] text-[#101010] border-b">
          <div className="w-[20%] pl-50">记录类型</div>
          <div className="w-[20%] pl-50">记录值</div>
          <div className="w-[20%] pl-50">TTL</div>
          <div className="w-[20%] pl-50">状态</div>
          <div className="w-[20%] pl-50">操作</div>
        </div>
        <div>
          {lists.map((item, index) => {
            return (
              <div
                key={item.value}
                className="h-68 leading-[68px] flex text-[14px] border-b"
              >
                <div className="w-[20%] pl-50">{item.type}</div>
                <div className={`w-[20%] pl-50`}>{item.value}</div>
                <div className={`w-[20%] pl-50`}>{item.ttl}</div>
                <div className={`w-[20%] pl-50 text-[#70BF5B]`}>
                  {item.status}
                </div>
                <div className="w-[20%] pl-50 flex">
                  <div className="w-90 text-[#1890FF] cursor-pointer">修改</div>
                  <div className="w-90 text-[#BD3124] cursor-pointer">暂停</div>
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
            新增数据源
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="mb-32 flex items-center">
              <div>记录类型：</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                // label="选择已有域名"
                size="small"
                className="w-102"
                onChange={handleTypeChange}
              >
                <MenuItem value={"1"}>Web2</MenuItem>
                <MenuItem value={"2"}>Web3</MenuItem>
              </Select>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subType}
                // label="选择已有域名"
                size="small"
                className="w-142 ml-9"
                onChange={handleSubTypeChange}
              >
                <MenuItem value={"1"}>A</MenuItem>
              </Select>
            </div>
            <div className="mb-32 flex">
              <div className="w-80">记录值：</div>
              <TextField
                className="w-253"
                //   id="outlined-multiline-static"
                label="请输入记录值"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <div className="mb-32 flex items-center">
              <div className="w-80">TTL：</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ttl}
                // label="选择已有域名"
                size="small"
                className="w-253"
                onChange={handleTtlChange}
              >
                <MenuItem value={"1"}>10分钟</MenuItem>
                <MenuItem value={"2"}>30分钟</MenuItem>
                <MenuItem value={"3"}>60分钟</MenuItem>
              </Select>
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

const AddRecord: NextPage = () => {
  return (
    <div className="flex xl:w-1280 m-auto h-screen">
      <LeftNav />
      <Right />
    </div>
  );
};

export default AddRecord;
