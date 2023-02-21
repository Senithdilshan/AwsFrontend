import { call, put } from "redux-saga/effects";
import { FaildDelete, SuccessDelete } from "../../Ducks/DeleteUser";
import { FaildUser, SuccessUser } from "../../Ducks/GetUser";
import { FaildUpdate, SuccessUpdate } from "../../Ducks/UpdateUser";
import { FaildLogin, SuccessLogin } from "../../Ducks/User";
import { UserDeleteRequest } from "../Reqests/DeleteRequest";
import { GetAllRequest } from "../Reqests/GetAllRequest";
import { UserUpdateRequest } from "../Reqests/UpdateUserRequest";
import { UserRequest } from "../Reqests/UserRequest";


export function* UserHandler(action) {
    let islogged =false;
    try {
        const response = yield call(() => UserRequest(action.payload.userLog));
        const { data } = response;
        islogged=true;
        const success ={data,islogged}
        yield put(SuccessLogin(success));
        // console.log(data.accessToken);
        sessionStorage.setItem("token", "Bearer " + data.accessToken)
        window.alert('Login Successful');
        action.payload.callback();
    } catch (error) {
        window.alert('Login Unsccessful');
        yield put(FaildLogin(error));
        action.payload.faildCallback();
    }
}

export function* GetallHandler(action) {
    try {
        // console.log(action.data);
        const response = yield call(() => GetAllRequest());
        const { data } = response;
        yield put(SuccessUser(data))
    } catch (error) {
        yield put(FaildUser(error));
        action.payload.callback();
    }
}

export function* UpdateHandler(action) {
    try {
        // console.log(action.data);
        const response = yield call(() => UserUpdateRequest(action.payload.data));
        const { data } = response;
        yield put(SuccessUpdate(data))
        window.alert('User Update Success!')
        action.payload.callback();
    } catch (error) {
        window.alert('User Update Faild');
        yield put(FaildUpdate(error));
        action.payload.callbackFaild();
    }
}

export function* DeleteHandler(action) {
    try {
        // console.log(action.data);
        const response = yield call(() => UserDeleteRequest(action.payload.id));
        const { data } = response;
        yield put(SuccessDelete(data))
        window.alert('User Delete Success!')
        action.payload.fetchcallback();
        action.payload.callback();
    } catch (error) {
        window.alert('User Delete failed!');
        yield put(FaildDelete(error)); 
    }
}
