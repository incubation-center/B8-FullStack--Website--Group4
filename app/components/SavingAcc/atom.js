// "use client";
import { atom, selector } from "recoil";

export const bankDataAtom = atom({
  key: "bankDataAtom",
  default: [],
});

export const savingChartDataAtom = atom({
  key: "savingChartDataAtom",
  default: {
    data: [],
    categories: [],
  },
});

export const selectedBankState = atom({
  key: "selectedBankState",
  default: [],
});

export const selectedCurrencyState = atom({
  key: "selectedCurrencyState",
  default: undefined,
});

export const isFilteredBankDataState = atom({
  key: "isFilteredBankDataState",
  default: false,
});

export const filteredBankDataAtom = atom({
  key: "filteredBankDataAtom",
  default: [],
});

export const filteredSavingChartDataAtom = atom({
  key: "filteredSavingChartDataAtom",
  default: [],
});
