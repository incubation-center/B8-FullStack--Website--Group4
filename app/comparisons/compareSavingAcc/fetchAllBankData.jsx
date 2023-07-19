import axios from "axios";

export async function fetchAllBankDataOld() {
  try {
    const response = await fetch('http://35.240.154.65:8080/savings/all')

    const data = await response.json()
    return data.data.savings;
  } catch (error) {
    console.log(error)
    return []
  }
} 

export async function fetchAllBankData() {
  try {
    const response = await fetch("http://35.240.154.65:8080/savings");

    const data = await response.json();
    return data.data.saving;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchBankDataByParams(banks, currency) {
  try {
    let url = `http://35.240.154.65:8080/savings?`;

    console.log(banks, "banks");
    console.log(currency, "currency");

    let banksParam = "";
    let currencyParam = currency ? `ccy=${currency}` : "";

    console.log(currencyParam, "currencyParam");

    if (banks.length > 0) {
      banksParam = banks.map((bank) => `banks=${bank}`).join("&");
    }

    const params = banksParam + (currencyParam ? `&${currencyParam}` : "");

    console.log(params, "params");

    const response = await fetch(url + params);
    const data = await response.json();

    console.log(data, "data");
    return data.data?.saving || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
