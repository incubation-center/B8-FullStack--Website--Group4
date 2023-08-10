"use client";
import axios from "axios";
import React from "react";
export async function fetchAllBankDataOld() {
  try {
    const response = await fetch("http://34.143.152.92:8080/savings/all");

    const data = await response.json();
    return data.data.savings;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchAllBankData() {
  try {
    const response = await fetch("http://34.143.152.92:8080/savings?ccy=KHR");

    const data = await response.json();

    const result = [];

    for (const [key, value] of Object.entries(data.data.saving)) {
      const logo = value[0].logo;

      value.forEach((item) => {
        item.logo = logo;
      });

      result.push(...value);
    }

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchAllSavingLineChart() {
  try {
    const response = await fetch("http://34.143.152.92:8080/savings/hist");

    const data = await response.json();

    const result = [];

    const categories = new Set();

    for (const [bank, value] of Object.entries(data.data.saving)) {
      const obj = {
        name: bank,
        data: [],
      };

      for (const [date, number] of Object.entries(value)) {
        obj.data.push(number);
        categories.add(date);
      }

      result.push(obj);
    }

    return {
      data: result,
      categories: [...categories],
    };
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchAllSavingLineChartByParams(banks, currency) {
  try {
    const url = "http://34.143.152.92:8080/savings/hist?";

    let banksParam = "";
    let currencyParam = currency ? `ccy=${currency}` : "";

    if (banks.length > 0) {
      banksParam = banks.map((bank) => `banks=${bank}`).join("&");
    }

    const params = banksParam + (currencyParam ? `&${currencyParam}` : "");

    const response = await fetch(url + params);

    const data = await response.json();

    const result = [];

    const categories = new Set();

    for (const [bank, value] of Object.entries(data.data.saving)) {
      const obj = {
        name: bank,
        data: [],
      };

      for (const [date, number] of Object.entries(value)) {
        obj.data.push(number);
        categories.add(date);
      }

      result.push(obj);
    }

    return {
      data: result,
      categories: [...categories],
    };
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchBankDataByParams(banks, currency) {
  try {
    let url = `http://34.143.152.92:8080/savings?`;

    let banksParam = "";
    let currencyParam = currency ? `ccy=${currency}` : "";

    if (banks.length > 0) {
      banksParam = banks.map((bank) => `banks=${bank}`).join("&");
    }

    const params = banksParam + (currencyParam ? `&${currencyParam}` : "");

    const response = await fetch(url + params);
    const data = await response.json();

    const result = [];

    for (const [key, value] of Object.entries(data.data.saving)) {
      const logo = value[0].logo;

      value.forEach((item) => {
        item.logo = logo;
      });

      result.push(...value);
    }

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
