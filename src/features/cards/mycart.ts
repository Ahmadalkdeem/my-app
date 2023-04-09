// import { initialUserState, User } from "./user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cart: []
};



// fetch user from api
const cardpants = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action) => {
            state.cart.push(action.payload);
        },
        editCard: (state, action) => {
            //get the card from action.payload
            const cardToEdit = action.payload;

            //find the index of the card to edit:
            const index = state.cart.findIndex((c: any) => c._id === action.payload.id);
            // const x = state.cart.find((c: any) => c._id === action.payload.id);
            // console.log(x);

            // let x = state.cart[index]
            // x.quantity = x.quantity + cardToEdit.quantity
            //replace the card at index with:
            state.cart[index].quantity = state.cart[index].quantity + cardToEdit.quantity;
        },
        deleteCard: (state, action) => {
            //action.payload = id of the card to remove
            const index = state.cart.findIndex((c: any) => c._id === action.payload);

            //delete the card at index:
            state.cart.splice(index, 1);
        },
    }
});
// also exported fetchUsers at the top
export const { addCard, editCard, deleteCard } = cardpants.actions;

//export the reducer
export default cardpants.reducer