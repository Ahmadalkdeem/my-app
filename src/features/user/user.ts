import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    accessToken: '',
    email: "",
    users2: [],
};


// fetch user from api
const cardpants = createSlice({
    name: "userdetalis",
    initialState,
    reducers: {
        addItem2: (state, action) => {
            state.users2 = [...state.users2, ...action.payload];
        }, delteItem2: (state, action) => {
            const index = state.users2.findIndex((c: any) => c._id === action.payload);

            //delete the card at index:
            state.users2.splice(index, 1);
        }
    }
});
// also exported fetchUsers at the top
export const { addItem2, delteItem2 } = cardpants.actions;

//export the reducer
export default cardpants.reducer