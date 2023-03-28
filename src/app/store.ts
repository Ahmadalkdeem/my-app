import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productSlice from '../features/cards/cardshirts'
import productSlice2 from '../features/cards/cardPants'
import productSlice3 from '../features/cards/cardshose'
import cart from '../features/cards/mycart'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cardshirts: productSlice,
    cardPants: productSlice2,
    cardshose: productSlice3,
    mycart: cart,
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
