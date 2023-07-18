import axios from "axios";


export async function getReply(userQuestion) {
// axios make request to  "localhost:8000/chat?question=" + userQuestion

    try {
        const response = await axios.post(
            "http://localhost:8000/chat?question=" + userQuestion,
        );
       console.log(response);
       return response.data['answer'];
    }
    catch (error) {
        console.error(error);
    }


}