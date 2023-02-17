import axios from "axios";
import { serverUrl } from "../../../ServerUrl";

export function GetAllRequest(){
    return axios.request({
        method:"get",
        url:`${serverUrl}/getAll`,
        headers:{
            "Authorization": sessionStorage.getItem("token")
        }
    })
}