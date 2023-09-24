import axios from "axios";

const Api = "https://thats-my-college.onrender.com/api/courses/get-all/college-details"


export const apiData =async (Api)=>{
    try {
        const res = await axios.get(Api);
        return res;
    } catch (error) {
        console.log("APi Error");
    }
}