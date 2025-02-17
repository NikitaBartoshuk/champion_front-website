import axios from "axios";
import {API} from "../../constants/path";

export const getVacancies = (): any => (dispatch: any) => {
    axios
        .get(`${API.vacancies.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_VACANCIES",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_VACANCIES",
                payload: true
            })
        });
};

export const createVacancie = (title: string, description: string): any => (dispatch: any) => {
    axios.
        post(API.vacancies.createVacancie, {
            title: title,
            description: description
    }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ1c2VyMTVAbWFpbC5ydSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4MjEwMjUwNywiZXhwIjoxNjgyMTg4OTA3fQ.P36GyNUwW2F22t2IHkwNT-ZpaPYDPiZchrFeoPIbcQ0'
            }
    }).
        then(res => {
        console.log(res)
        dispatch({
            type: 'CREATE_VACANCIE',
            payload: res.data.rows
        })
    }).
        catch(err => {
        console.log(err)
        dispatch({
            type: 'ERROR_VACANCIES',
            payload: true
        })
    })
}