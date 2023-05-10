// import { initialUserState, User } from "./user";
import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const initialState: any = {
    cart: []
};

//quantity  

const cardpants = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCard: (state, action) => {
            let x: any = ''
            console.log('bb');
            state.cart.map((e: any, index: number) => {
                console.log('cc', e._id, action.payload);
                if (action.payload._id === e._id) {
                    console.log('aa');
                    console.log(e.quantity, action.payload.quantity, state.cart[index]);

                    if (action.payload.sizeselect === e.sizeselect && action.payload.color === e.color) {
                        if (e.quantity + action.payload.quantity > 10) {
                            state.cart[index].quantity = 10
                        }
                        else {
                            state.cart[index].quantity = e.quantity + action.payload.quantity
                        }
                        console.log('aaaaaaa');

                        x = true
                    }
                }
            })
            if (x === '') {
                state.cart = [...state.cart, action.payload]
            }
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
        deleteArr: (state, action) => {
            state.cart = []
        },
    }
});
export const { addCard, editCard, deleteCard, deleteArr } = cardpants.actions;

export default cardpants.reducer