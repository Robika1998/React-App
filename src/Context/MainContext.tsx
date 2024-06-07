import { UseQueryResult, useQuery  } from "@tanstack/react-query"
import {ReactNode, createContext,useContext, useState, useReducer} from "react"
import { GetNews } from "../Api/GetNews"



type Cell = {
    state:State 
    dispatch: React.Dispatch<Action>
    data:any
}
type State ={
      currentPage:number 
      itemsPerPage:number
      date:"desc" |  "acs"
  
}

type Action = {
     type:string ,
     payload:any 
}
const Context = createContext<Cell | null>(null)



export const ContextProvider = ({children}:{children:ReactNode})=>{
 const initialState:State = { 
         currentPage:1 ,
         itemsPerPage:10 ,
          date:"desc"
     }

 const reducer = (state:State,action:Action)=>{
       switch(action.type){
        case "set_current_page":
            return {...state, currentPage: action.payload};
            case "set_date":
               return { ...state, date: action.payload };
               case "reset_page":
                    return { ...state, currentPage: 1 };
                    case "fetch_data":
                         return { ...state };
         default:
            return {...state}
       }
 }
const [state,dispatch] = useReducer(  reducer ,initialState)
 
      const data = useQuery({
        queryKey: ["get-news", state.currentPage,state.date],
        queryFn: () => GetNews({ page: state.currentPage, pageSize: state.itemsPerPage, date:state.date }),
      });
     return <Context.Provider value={{ state,dispatch , data
     
     }}>{children}</Context.Provider>
}




export const UseMainContext = ()=>{
     const context = useContext(Context)
     if(!context){
        throw new Error("Not Wrapped ")
     }
     return context
}