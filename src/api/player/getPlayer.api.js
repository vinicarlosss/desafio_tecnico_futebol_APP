import { API_URL } from "../../constants/apiUrl";
import { axiosInstance } from "../_base/axios.instance";

export async function getPlayer({ playerId }){
    const response = await axiosInstance.get(
        `${API_URL}/players/getPlayer/${playerId}`);
    return response;
}