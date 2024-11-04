import { API_URL } from "../../constants/apiUrl";
import { axiosInstance } from "../_base/axios.instance";

export async function getTeam({ teamId }){
    
    const response = await axiosInstance.get(
        `${API_URL}/teams/getTeam/${teamId}`
    );
    return response;
}