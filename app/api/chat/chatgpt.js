import axios from "axios";


export async function getReply(userQuestion) {
// axios make request to  "localhost:8000/chat?question=" + userQuestion

const url = 'http://34.143.180.195:8000/chat';
const headers = {
  'accept': 'application/json',
  'Content-Type': 'application/json',
};
const data = {
  question: userQuestion,
};

try {
  const response = await axios.post(url, data, { headers });

  console.log(response.data);
  return response;
  // Do something with the response data
} catch (error) {
  console.error(error);
  return error;
  // Handle errors if any
}


}