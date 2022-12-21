import create from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

const DEFAULT_STORE = {
  currLeftNav: "domainSearch", // domainSearch、domainManage、domainAnalyze
};

const store = create(immer<typeof DEFAULT_STORE>(() => ({ ...DEFAULT_STORE })));
const { getState, setState, subscribe, destroy } = store;
function handleChangeLeftNav(nav: string) {
  setState((preState) => {
    preState.currLeftNav = nav;
  });
}

export { getState, setState, subscribe, destroy, handleChangeLeftNav, store };
