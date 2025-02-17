

interface IDefaultState {
    token: string
}


const defaultState: IDefaultState = {
    token: ''
}


export const userReducer = (state: any = defaultState, action: {type: string, payload: string}) => {
    switch (action.type) {
        case 'REG_USER' :
            return {
                ...state,
                token: action.payload
            }

        case 'LOGIN_USER':
            return {
                ...state,
                token: action.payload
            }


        default:
            return state
    }
}