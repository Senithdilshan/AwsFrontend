import { FAILD_LOGIN, REQ_LOGIN, SUCCESS_LOGIN } from "../Ducks/User";

const initialState = {
    loading: true,
    log:[],
    posts: [],
    errors: null,
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQ_LOGIN:
            return {
                ...state,
                log: action.payload.userLog,
            };
        case SUCCESS_LOGIN:
            return {
                ...state,
                loading: true,
                posts: action.payload,
            };
        case FAILD_LOGIN:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        default:
            return state;
    }
};