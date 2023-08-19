import axios from "axios";

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState={
    products:[],
    error:null,
    message:'',
    success:false,
    loading:false,
    imgLink:''
}

export const getProducts=createAsyncThunk('product/getProducts',async(data,thunkApi)=>{

    try {
        const response=await axios.get("http://localhost:8000/products/getProducts")

        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }

    
})
export const addProduct=createAsyncThunk('product/addProduct',async(data,thunkApi)=>{

    try {
        const response=await axios.post("http://localhost:8000/products/addProduct",data)

        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }

    
})

export const ProductSlice=createSlice({
    name:"product",
    initialState:initialState,
    reducers:{

        reset:(state)=>{
            state.message=""
            state.error=null
            state.loading=false
            state.success=false
        },
        addImg:(state,action)=>{
            state.imgLink=action.payload
        }
    },
    extraReducers:(builder)=>{
            builder.addCase(getProducts.fulfilled,(state,action)=>{
                state.products=action.payload
                
            
            }).addCase(addProduct.fulfilled,(state,action)=>{
                state.message="product added successfully"
                state.success=true

            }).addCase(addProduct.rejected,(state,action)=>{
                state.message="product failed to add"
                state.success=false
                state.error=action.payload
                state.pending=false
            }).addCase(addProduct.pending,(state)=>{
                state.message="product adding pending"
                state.pending=true
            
                
            })
    }
})

export const {reset,addImg}=ProductSlice.actions

export default ProductSlice.reducer
