import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
    users: []
};


// fetch user from api
const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let arr: any = []
            action.payload.forEach((element: any) => {
                const index = state.users.findIndex((c: any) => c._id === element._id);
                if (index === -1) {
                    arr.push(element)
                }
            });
            state.users = [...state.users, ...arr];
        }, delteItem: (state, action) => {
            const index = state.users.findIndex((c: any) => c._id === action.payload);

            //delete the card at index:
            state.users3.splice(index, 1);
        }
    },
    extraReducers: (builder) => {

    },
});
// also exported fetchUsers at the top
export const { addItem, delteItem } = users.actions;

//export the reducer
export default users.reducer