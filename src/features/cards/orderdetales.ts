import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
    loading4: false,
    error4: "",
    users4: [],
};

export const ordersdetalies = createAsyncThunk<any[]>("orders/fetchUsers2", () =>
    fetch(`http://localhost:3001/carts/getorders`).then((res) => res.json())
);

const orders = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addItem2: (state, action) => {
            state.users2 = [...state.users2, ...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ordersdetalies.pending, (state, action) => {
                state.loading4 = true
                state.error4 = ''
            })
            .addCase(ordersdetalies.fulfilled, (state, action) => {
                state.loading4 = false
                state.users4 = [...action.payload]

            })
            .addCase(ordersdetalies.rejected, (state, action) => {
                state.loading4 = false
                state.users4 = []
                state.error4 = action.error.message ?? 'Something went wrong'
            })
    },
});
// also exported fetchUsers at the top
export const { addItem2 } = orders.actions;

//export the reducer
export default orders.reducer