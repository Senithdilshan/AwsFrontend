import axios from "axios";
import { serverUrl } from "../../../ServerUrl";

export function UserUpdateRequest(data){
    // console.log("Hellooooo", data);
    let id=data.id;
    return axios.request({
        method:"put",
        url:`${serverUrl}/updateById/${id}`,
        data:{
            userName:data.userName,
            email:data.email,
        },
        headers:{
            "Authorization": sessionStorage.getItem("token")
        }
    })
}