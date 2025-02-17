
interface IBlogs {
    id: null | string;
    title: string;
    description: string;
}

interface IBlogReducerState {
    blogs: {
        items: IBlogs[];
        isError: boolean;
    }
}

export const defaultState: IBlogReducerState = {
    blogs: {
        items: [],
        isError: false,
    }
}


export const blogReducer = (state: IBlogReducerState = defaultState, action: any) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return {
                ...state,
                blogs : {
                    ...state.blogs,
                    items: action.payload
                }
            }

        case 'CREATE_BLOG':
            return {
                ...state,
                blogs : {
                    ...state.blogs,
                    isError: action.payload
                }
            }

        case 'ERROR_BLOG':
            return {
                ...state,
                blogs : {
                    ...state.blogs,
                    isError: action.payload
                }
            }


        default:
            return state
    }
}