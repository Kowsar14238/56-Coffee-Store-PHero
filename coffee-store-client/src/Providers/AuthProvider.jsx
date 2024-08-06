import { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Auth-Step 103:
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
/*
        try {
            // Create user with email and password
            const user = userCredential.user;

            // Save additional details in Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            });

            // Set the user state
            setUser(user);
        } catch (error) {
            console.error("Error creating user: ", error);
            throw error;
        } finally {
            setLoading(false);
        }*/
    };

    const userInfo = {
        user, loading, createUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
