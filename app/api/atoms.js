import { atom } from "recoil";

export const chatState = atom({
  key: "chatState",
  default: false,
});

export const chatBox = atom({
    key: "chatBox",
    default: false,
})
