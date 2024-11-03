import { API_URL } from "../../constants/apiUrl";
import { axiosInstance } from "../_base/axios.instance";

export async function getAllMatches(){
    const response = await axiosInstance.get(
        `${API_URL}/matches/getAll`,
        {}
    );
    return response;
};