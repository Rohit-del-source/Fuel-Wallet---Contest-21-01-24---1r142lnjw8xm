import { v4 as uuidv4 } from "uuid";

    const ADD_USER = 'ADD_USER';
    const FILL_FUEL = 'FILL_FUEL';
const reducer = (state, action) => {
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                users: [
                    ...state.users,
                    {
                        id: action.id,
                        name: action.name,
                    },
                ],
            };

        case FILL_FUEL:
            return state; 

        default:
            return state;

    }    
};

export const addUserAction = (id, name) => ({
    type: ADD_USER,
    id,
    name,
});

export const fillFuelAction = () =>({
    type: FILL_FUEL,
});

export default reducer;
