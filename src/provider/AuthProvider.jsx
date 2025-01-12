import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, 
    GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, 
    signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('CurrentUser',currentUser)
            setLoading(false)
        })
        return() => unsubscribe()
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider