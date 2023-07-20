import React ,{ createContext, useContext, useReducer} from 'react';

//prepares the dataLlayer
export const StateContext=createContext();

//wrap our app ans provide the Data Layer
export const StateProvider= ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </StateContext.Provider>
    );

//pulll inoformation from the data layer
export const useStateValue=()=> useContext(StateContext);
