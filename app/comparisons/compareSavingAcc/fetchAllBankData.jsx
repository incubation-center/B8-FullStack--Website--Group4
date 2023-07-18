import axios from "axios";

export async function fetchAllBankData() {
  try {
    const response = await fetch("http://35.240.154.65:8080/savings/all");
    const data = await response.json();
    return data.data.savings;
  } catch (error) {
    console.log(error);
    return [];
  }
}
