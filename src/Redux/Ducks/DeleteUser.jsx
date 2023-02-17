export const REQ_DELETE = "REQ_DELETE";
export const SUCCESS_DELETE = "SUCCESS_DELETE";
export const FAILD_DELETE = "FAILD_DELETE";

export const ReqestDelete= (id,callback,callbackFaild) => ({
    type: REQ_DELETE,
    payload:{id,callback,callbackFaild}
});

export const SuccessDelete = (posts) => ({
    type: SUCCESS_DELETE,
    payload: posts
});

export const FaildDelete = (error) => ({
    type: FAILD_DELETE,
    payload: error,
});