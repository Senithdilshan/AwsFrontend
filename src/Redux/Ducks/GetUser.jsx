export const GET_USER = "GET_USER";
export const SUCCESS_USER = "SUCCESS_USER";
export const FAILD_USER = "FAILD_USER";

export const GetUser = (callback) => ({
    type: GET_USER,
    payload:callback
});

export const SuccessUser = (data) => ({
    type: SUCCESS_USER,
    payload: data
});

export const FaildUser = (error) => ({
    type: FAILD_USER,
    payload: error,
});
