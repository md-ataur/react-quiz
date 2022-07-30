import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    // eslint-disable-next-line prettier/prettier
    updateProfile
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase/firebase';

const AuthContext = React.createContext();

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}

// Auth Provider
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // Clean memory leak
        return unsubscribe;
    }, []);

    // Signup function
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // Update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const updateUser = auth.currentUser;
        setUser({
            ...updateUser,
        });
    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        user,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
