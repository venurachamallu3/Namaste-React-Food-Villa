import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            const inde= state.items.indexOf(action.payload)
            if(inde!==-1){state.items.splice(inde,1)}
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const { addItem,removeItem,clearCart}= CartSlice.actions


export default CartSlice.reducer;