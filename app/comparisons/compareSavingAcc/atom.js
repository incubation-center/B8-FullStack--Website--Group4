import { atom, selector } from "recoil";

export const bankDataAtom = atom({
  key: "bankDataAtom",
  default: [],
});

export const selectedBankState = atom({
  key: "selectedBankState",
  default: [],
});

export const selectedCurrencyState = atom({
  key: "selectedCurrencyState",
  default: undefined,
});

export const filteredBankDataAtom = selector({
  key: "filteredBankDataAtom",
  get: async ({ get }) => {
    const selectedBank = get(selectedBankState) || [];
    const currency = get(selectedCurrencyState) || undefined;

    return [];

    const bankData = get(bankDataAtom);

    if (bankData.length > 0) {
      return bankData.filter((bank) => {
        return selectedBank.includes(bank.bank);
      });
    }

    return [];
  },
});
