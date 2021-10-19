import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FireBase/FireBase.init";
initializeAuthentication()



const UseFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider)
      .finally(() => { setLoading(false) });
  }
  const registerByEmailPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("")
      })
      .catch((error) => {
        setError(error.code);
      });
  }
  const logInEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("")
      })
      .catch((error) => {
        setError(error.code);
      });
  }
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("")

      }
      else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [])
  return { handleGoogleSignIn, user, error, logOut, loading, registerByEmailPass, logInEmailPassword }
};

export default UseFirebase;