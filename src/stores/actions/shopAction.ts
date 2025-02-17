import axios from "axios";
import {API} from "../../constants/path";


export const getShops = (): any => (dispatch: any) => {
    axios
        .get(`${API.shop.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_SHOPS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_SHOP",
                payload: true
            })
        });
};

export const createShops = (title: any, description: any, img: any): any => (dispatch: any) => {
    axios
        .post(`${API.shop.createShop}`, {
            title: title,
            description: description,
            img: img
        })
        .then(res => {
            dispatch({
                type: "CREATE_SHOPS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_SHOP",
                payload: true
            })
        });
};