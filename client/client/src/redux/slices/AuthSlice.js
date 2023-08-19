import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
 
const user=JSON.parse( localStorage.getItem('user'))
const initialState={

    user:user?user:null,
    error:null,
    message:'',
    success:false,
    loading:false
   
    
}

export const register=createAsyncThunk('auth/register',async(data,thunkApi)=>{
     
   try {
    const user=await axios.post('http://localhost:8000/users/register',data)

    console.log(user)
  if(user.data)
      localStorage.setItem('user',JSON.stringify(user.data))

  return user.data
   } catch (error) {
    return thunkApi.rejectWithValue(error.response.data)
    
   }     
  




})
export const login=createAsyncThunk('auth/login',async(data,thunkApi)=>{
     
    try {
     const user=await axios.post('http://localhost:8000/users/login',data)
 
     console.log(user)
   if(user.data)
       localStorage.setItem('user',JSON.stringify(user.data))
 
   return user.data
    } catch (error) {
     return thunkApi.rejectWithValue(error.response.data)
     
    }     
   
 
 
 
 
 })
 
 export const logout=createAsyncThunk('auth/logout',(data,thunkApi)=>{

    try {
        localStorage.removeItem('user');

    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)

    }

 })

export const authSlice=createSlice({

    name:"auth",
    initialState:initialState,
    reducers:{
            reset:(state)=>{
                state.message=""
                state.error=null
                state.loading=false
                state.success=false
            }
    },
    extraReducers:(builder)=>{
        builder.addCase(register.fulfilled,(state,action)=>{
            state.message="user registered successfully"
            state.success=true
            state.user=action.payload
        }).addCase(register.rejected,(state,action)=>{
            state.message="user failed to register"
            state.success=false
            state.error=action.payload
            state.pending=false
        }).addCase(register.pending,(state)=>{
            state.message="user pending registration"
            state.pending=true
        
            
        }).addCase(login.fulfilled,(state,action)=>{
            state.message="user login successfully"
            state.success=true
            state.user=action.payload
        }).addCase(login.rejected,(state,action)=>{
            state.message="user failed to login"
            state.success=false
            state.error=action.payload
            state.pending=false
        }).addCase(login.pending,(state)=>{
            state.message="user pending login"
            state.pending=true
        
            
        }).addCase(logout.fulfilled,(state)=>{
            state.user=null
            state.message=""
            state.error=null
            state.loading=false
            state.success=false
        })
    }
    
})
export const {reset}=authSlice.actions
export default authSlice.reducer
   
    
     