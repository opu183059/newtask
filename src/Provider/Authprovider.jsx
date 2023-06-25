import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
/* eslint-disable react/prop-types */
export const Authcontex = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOuthandle = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      // console.log("auath state change", curentUser);
      setUser(curentUser);
    });
    return () => {
      unsubscrive();
    };
  }, []);
  const authinfo = {
    user,
    registerUser,
    logIn,
    signOuthandle,
  };
  return <Authcontex.Provider value={authinfo}>{children}</Authcontex.Provider>;
};

export default Authprovider;
