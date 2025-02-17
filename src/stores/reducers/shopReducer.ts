
interface IShops {
    id: null | string;
    title: string;
    description: string;
    img: Blob
}

interface IShopReducerState {
    shops: {
        items: IShops[];
        isError: boolean;
    }
}

export const defaultState: IShopReducerState = {
    shops: {
        items: [],
        isError: false,
    }
}



export const shopReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case "GET_SHOPS":
            return {
                ...state,
                shops : {
                    ...state.shops,
                    items: action.payload
                }
            }

        case 'CREATE_SHOPS':
            return {
                ...state,
                shops : {
                    ...state.shops,
                    isError: action.payload
                }
            }

        case "ERROR_SHOP":
            return {
                ...state,
                shops : {
                    ...state.shops,
                    isError: action.payload
                }
            }


        default:
            return state
    }
}