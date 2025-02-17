import axios from "axios";
import {API} from "../../constants/path";


export const getBlogs = (): any => (dispatch: any) => {
    axios
        .get(`${API.blog.getAll}`)
        .then(res => {
            dispatch({
                type: "GET_BLOGS",
                payload: res.data.rows
            });
        })
        .catch(err => {
            dispatch({
                type: "ERROR_BLOG",
                payload: true
            })
        });
};

export const createBlog = (title: any, description: any): any => (dispatch: any) => {
    axios
        .post(API.blog.createBlog, {
                title: title,
                description: description
            },
            {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ1c2VyMTVAbWFpbC5ydSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4MjEwNDA3MCwiZXhwIjoxNjgyMTkwNDcwfQ.iyIni6MpF0zMhvujSV3AcAOySR35XeQ-Npw42vbl-aM'
                }
            })
        .then(res => {
            console.log(res)
            dispatch({
                type: 'CREATE_BLOG',
                payload: res.data.rows
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: 'ERROR_BLOG',
                payload: true
            })
        })
}