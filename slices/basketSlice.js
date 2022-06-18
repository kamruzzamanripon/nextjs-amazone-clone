import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items:[]
}

const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket: (state, action) => {
            const itemExists = state.items.find((item) => item.id === action.payload.id);
            if (itemExists) {
              itemExists.quantity++;
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }]
            }
          },

        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
          }, 
          
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              const index = state.items.findIndex((item) => item.id === action.payload);
              state.items.splice(index, 1);
            } else {
              item.quantity--;
            }
          },

        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem)=> basketItem.id === action.payload.id
            );

            let newBasket = [...state.items]

            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`can't remove product (id: ${action.payload.id}) as is not in the cart`)
            }

            state.items = newBasket;
        }
    }
})

export const { addToBasket, removeFromBasket, incrementQuantity, decrementQuantity } = basketSlice.actions;

//Selectors- this is how we pull information from the global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state)=> state.basket.items.reduce((total,item)=> total + item.price*item.quantity, 0)

export default basketSlice.reducer;