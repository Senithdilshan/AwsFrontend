import axios from "axios";
import { serverUrl } from "../../../ServerUrl";

export async function  UserRequest(data){
    return await axios.request({
        method:"post",
        url:`${serverUrl}/login`,
        data:{
            email:data.email,
            password:data.password
        }
    })
}