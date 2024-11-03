import { API_URL } from "../../constants/apiUrl";
import { axiosInstance } from "../_base/axios.instance";

export async function getRanking(){
    console.log(API_URL)
    const response = await axiosInstance.get(
        `${API_URL}/teams/getRanking`,
        {}
    );
    return response;
};