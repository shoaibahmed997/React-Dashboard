import { createReducer } from "@reduxjs/toolkit";
import alltransactions from '../data'

const initialUserState = {
    user : JSON.parse(localStorage.getItem('DashboardAppUser')) || {}
}

const initialBankState = {
    bank : JSON.parse(localStorage.getItem('DashboardAppbank')) || {balance:20480,transactions:alltransactions}
}

const initialCategoryState = {
    categories : JSON.parse(localStorage.getItem("DashboardAppcategories")) || [{name:'Income',col:'green',income:true},{name:'Expense',col:'red',income:false}] 
}

const initialClientsState = {
    clients : JSON.parse(localStorage.getItem("DashboardAppClients")) || [{name:"Shoaib Ahmed",company:"Google",companyLogo:"https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png",location:"India",contact:"+91(858-076-8053)",email:"falakshabir123@gmail.com"},{name:"Umer Basheer",company:"Amazon",companyLogo:"https://pngimg.com/uploads/amazon/amazon_PNG5.png",location:"India",contact:"(455-355-0897)",email:"umerbasheer1304@gmail.com"},{name:"Zubair Zahoor",company:"Safe Security",companyLogo:"https://zenprospect-production.s3.amazonaws.com/uploads/pictures/6148dbdeece8e6000182e624/picture",location:"India",contact:"(462-305-0897)",email:"zubair@gmail.com"}]
}

export const UserReducer = createReducer(initialUserState,{
    // user logic
    'USER_ADD':(state,action) => {
        state.user = action.payload;
    },
    'USER_REMOVE' : (state) => {state.user = {}}
})


export const BankReducer = createReducer(initialBankState,{
    'ADD_TRANSACTION':(state,action)=>{
        let d = new Date()
        let datestring = (d.toDateString() + " " + d.toLocaleTimeString()).substring(4)
        action.payload = {...action.payload,date:datestring}
        state.bank.transactions.unshift(action.payload);
        localStorage.setItem('DashboardAppbank',JSON.stringify(state.bank))
    },
    'RESET_BANK' : (state,action) => {state.bank = {balance:20480,transactions:alltransactions};localStorage.setItem('DashboardAppbank',JSON.stringify({balance:20480,transactions:alltransactions})) },
    "ADD_BALANCE" :(state,action) => {
        state.bank.balance = state.bank.balance + action.payload;
        localStorage.setItem('DashboardAppbank',JSON.stringify(state.bank))
        },
    "REDUCE_BALANCE":(state,action) => { 
        state.bank.balance = state.bank.balance - action.payload;
        localStorage.setItem('DashboardAppbank',JSON.stringify(state.bank))
    },
})

export const CategoryReducer = createReducer(initialCategoryState,{
    'ADD_CATEGORY':(state,action) =>{state.categories.push(action.payload);localStorage.setItem('DashboardAppcategories',JSON.stringify(state.categories)) },

})

export const CurrentTransactionDetailReducer = createReducer({transaction:{}},{
    "SELECT" :(state,action) =>{state.transaction = action.payload},
    "DESELECT" :(state)=>{state.transaction={}}

})

export const ClientsReducer = createReducer(initialClientsState,{
    "ADD_CLIENT" :(state,action) =>{
        state.clients.unshift(action.payload)
        localStorage.setItem('DashboardAppClients',JSON.stringify(state.clients))
    },
    "UPDATE_CLIENT" :(state,action)=>{
        // index of the element
        let ind = state.clients.findIndex(client=>client.email === action.payload.email)
        if (ind >=0){
            state.clients[ind] = action.payload;
            localStorage.setItem('DashboardAppClients',JSON.stringify(state.clients))
        }
    },
    "DELETE_CLIENT":(state,action)=>{
        state.clients = state.clients.filter(client=> client.email !== action.payload);
        localStorage.setItem('DashboardAppClients',JSON.stringify(state.clients))
    }
})

export const CurrentClientReducer = createReducer({SelectedClient:{}},{
    "SELECT_CLIENT" :(state,action)=>{state.SelectedClient = action.payload}
})