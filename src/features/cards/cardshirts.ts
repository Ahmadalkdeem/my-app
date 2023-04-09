// import { initialUserState, User } from "./user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
    loading: false,
    error: "",
    users: [],
};
console.log(initialState.users.length);

export const fetchUsers = createAsyncThunk<any[]>("user/fetchUsers", (length1: any) =>
    fetch(`http://localhost:3001/uplode/Shirtsproduct/5/0`).then((res) => res.json())
);

// fetch user from api
const cardshirts = createSlice({
    name: "user",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.users = [...state.users, ...action.payload];
        }, delteItem: (state, action) => {
            const index = state.users.findIndex((c: any) => c._id === action.payload);

            //delete the card at index:
            state.users.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true
                state.error = ''
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = [...action.payload]

            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message ?? 'Something went wrong'
            })
    },
});
// also exported fetchUsers at the top
export const { addItem, delteItem } = cardshirts.actions;

//export the reducer
export default cardshirts.reducer