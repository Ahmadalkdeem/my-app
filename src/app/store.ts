import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productSlice from '../features/cards/cardshirts'
import productSlice2 from '../features/cards/cardPants'
import productSlice3 from '../features/cards/cardshose'
import orders from '../features/cards/orderdetales'
import cart from '../features/cards/mycart'
import user from '../features/user/user'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cardshirts: productSlice,
    cardPants: productSlice2,
    cardshose: productSlice3,
    orders: orders,
    mycart: cart,
    user: user,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
