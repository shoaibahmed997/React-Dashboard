import { configureStore } from "@reduxjs/toolkit";
import {BankReducer, CategoryReducer, ClientsReducer, CurrentClientReducer, CurrentTransactionDetailReducer, UserReducer} from './reducers'

export const store = configureStore({
    reducer :{
        // reducerAlias : reducerName
        UserState:UserReducer,
        BankState:BankReducer,
        CategoryState:CategoryReducer,
        CurrentTransactionState:CurrentTransactionDetailReducer,
        ClientState:ClientsReducer,
        CurrentClientState:CurrentClientReducer
    }
})