import { atom } from "recoil";

export const selectedDateState = atom({
    key: 'selectedDateState', // 고유한 키값
    default: new Date(), // 기본 값
  });