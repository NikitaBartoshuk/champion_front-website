
interface IVacancies {
    id: null | string;
    title: string;
    description: string;
}

interface IVacanciesReducerState {
    vacancies: {
        items: IVacancies[];
        isError: boolean
    }
}

export const defaultState: IVacanciesReducerState = {
    vacancies: {
        items: [],
        isError: false,
    }
}



export const vacanciesReducer = (state: IVacanciesReducerState = defaultState, action: any) => {
    switch (action.type) {
        case "GET_VACANCIES":
            return {
                ...state,
                vacancies : {
                    ...state.vacancies,
                    items: action.payload
                }
            }

        case 'CREATE_VACANCIE':
            return {
                ...state,
                vacancies: {
                    ...state.vacancies,
                    items: action.payload
                }
            }

        case "ERROR_VACANCIES":
            return {
                ...state,
                vacancies : {
                    ...state.vacancies,
                    isError: action.payload
                }
            }


        default:
            return state
    }
}