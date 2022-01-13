import React, { useEffect, useReducer } from 'react';
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import { auth } from '../firebase';
// import Photo from '../images/pngegg (23).png'

export const  AuthContext = React.createContext();
const INIT_STATE ={
    user: null,

};
const reducer = (state, action) =>{
    switch (action.type){
        case "CHECK_USER":
            return {...state, user: action.payload};
        default:
            return state;
    }
}


const AuthProvider = (props) => {

    const [state, dispath] = useReducer(reducer, INIT_STATE);

    const GoogleProvider = new GoogleAuthProvider();

    const AuthWithGoogle = async () =>{
        try{
            const response =await signInWithPopup(auth, GoogleProvider);
            console.log(response)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        checkUser();
    },[])

    const checkUser = () =>{
        onAuthStateChanged(auth, (user) => {
           let action = {
               type: "CHECK_USER",
               payload: user
           }
           dispath(action)
        })
    }
    
    const logout = async () => {
      try{
          await signOut(auth)
      } catch(error){
          console.log(error)
      }
    }

    return <AuthContext.Provider value={{
        logout: logout,
        AuthWithGoogle: AuthWithGoogle,
        user: state.user

    }}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthProvider;