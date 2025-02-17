import axios, {AxiosResponse} from "axios";
import {API} from "../../constants/path";


export const registerUser = (email: string, password: string): any => (dispatch: any) => {
    axios
        .post(`${API.user.registration}`, {
            email: email,
            password: password
        })
        .then(res => {
            const maxAge = "max-age=" + 2 * 24 * 60 * 60;
            document.cookie = `token=${res.data.token}` + maxAge + ";path=/";
            dispatch({
                type: 'REG_USER',
                payload: res.data.token
            });
        })
        .catch(err => {
            dispatch({
                type: 'ERROR_USER',
                payload: true
            })
        });
};

export const loginUser = (email: string, password: string): any => (dispatch: any) => {
    axios
        .post(`${API.user.login}`, {
            email: email,
            password: password
        })
        .then(res => {
            const maxAge = "max-age=" + 2 * 24 * 60 * 60;
            document.cookie = `token=${res.data.token}` + maxAge + ";path=/";
            dispatch({
                type: 'LOGIN_USER',
                payload: res.data.token
            })
        })
        .catch(err => {
            dispatch({
                type: 'ERROR_USER',
                payload: true
            })
        })
}