import { atom, selector } from "recoil";

export const countState = atom({
  key: "count",
  default: 0,
});
