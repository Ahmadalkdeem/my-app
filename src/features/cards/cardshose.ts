// import { initialUserState, User } from "./user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
    loading3: false,
    error3: "",
    users3: [],
};

export const fetchUsers3 = createAsyncThunk<any[]>("user3/fetchUsers3", (length1: any) =>
    fetch(`http://localhost:3001/uplode/shoesproduct/5/0`).then((res) => res.json())
);

// fetch user from api
const cardpants = createSlice({
    name: "user3",
    initialState,
    reducers: {
        addItem3: (state, action) => {
            state.users3 = [...state.users3, ...action.payload];
        }, delteItem3: (state, action) => {
            const index = state.users3.findIndex((c: any) => c._id === action.payload);

            //delete the card at index:
            state.users3.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers3.pending, (state, action) => {
                state.loading3 = true
                state.error3 = ''
            })
            .addCase(fetchUsers3.fulfilled, (state, action) => {
                state.loading3 = false
                state.users3 = [...action.payload]

            })
            .addCase(fetchUsers3.rejected, (state, action) => {
                state.loading3 = false
                state.users3 = []
                state.error3 = action.error.message ?? 'Something went wrong'
            })
    },
});
// also exported fetchUsers at the top
export const { addItem3, delteItem3 } = cardpants.actions;

//export the reducer
export default cardpants.reducer