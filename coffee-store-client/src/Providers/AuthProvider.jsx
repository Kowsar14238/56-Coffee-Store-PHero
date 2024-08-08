import { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

// Auth-Step 103:
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
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
