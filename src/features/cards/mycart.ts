// import { initialUserState, User } from "./user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cart: []
};



const cardpants = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cart = [...state.cart, ...action.payload]
        },
        editCard: (state, action) => {
            const cardToEdit = action.payload;
            const index = state.cart.findIndex((c: any) => c.id === cardToEdit.id);
            state.cart[index].quantity = state.cart[index].quantity + cardToEdit.quantity2;
        },
        deleteCard: (state, action) => {
            const index = state.cart.findIndex((c: any) => c.id === action.payload);
            state.cart.splice(index, 1);
        },
    }
});
// also exported fetchUsers at the top
export const { addCard, editCard, deleteCard } = cardpants.actions;

//export the reducer
export default cardpants.reducer