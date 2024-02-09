import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth'
import React, { Fragment, createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
const provider = new GoogleAuthProvider()
import { getFirestore, doc, setDoc, collection, getDocs, query, where, updateDoc } from 'firebase/firestore'
import { DialogError } from '../components/Dialog'
export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const [isCreatingTask, setIsCreatingTask] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const auth = getAuth()
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(null)
    const [openAddAccounts, setOpenAddAccounts] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const checkUserAuthentication = async () => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInStatus === 'true');
        if (loggedInStatus === 'true') {
            const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user'));
            if (userDataFromLocalStorage) {
                setUserData(userDataFromLocalStorage);
                setUser(userDataFromLocalStorage);
            }
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    };
    useEffect(() => {
        checkUserAuthentication()
    }, [])
    const login = (userData) => {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('users', JSON.stringify(userData));
        window.location.replace('/')
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        window.location.replace('/')
    }
    const loginWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { user } = result;
                const firestore = getFirestore();
                const usersRef = collection(firestore, 'users');
                const querySnapshot = await getDocs(query(usersRef, where('email', '==', user.email)));
                const existingUser = querySnapshot.docs[0];
                if (existingUser) {
                    const userData = {
                        name: user.displayName,
                    };
                    await updateDoc(doc(usersRef, existingUser.id), userData);
                    setUser(existingUser.data());
                } else {
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoURL: user?.photoURL,
                    };

                    await setDoc(doc(usersRef, user.uid), newUser);
                    setUser(newUser);
                }
                login(user);
            })
            .catch((error) => {
                setOpen(true);
                const errorMessage = error.message || 'Ocorreu um erro ao fazer login.';
                setMessage(errorMessage);
            });
    };
    const loginWithEmailAndPassword = async (email, password, type) => {
        if (!email || !password) return;
        try {
            let userCredential;
            if (type === 'addAccounts') {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
                existingUsers.push(userCredential.user);
                localStorage.setItem('users', JSON.stringify(existingUsers));
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user);
                login(userCredential.user);
            }
        } catch (error) {
            setOpen(true);
            const errorMessage = error.message || 'Ocorreu um erro ao fazer login.';
            setMessage(errorMessage);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                loginWithGoogle,
                loginWithEmailAndPassword,
                user,
                users,
                setUsers,
                isCreatingTask,
                setIsCreatingTask,
                openAddAccounts,
                setOpenAddAccounts
            }}
        >
            <Fragment>
                <DialogError
                    open={open}
                    handleClose={handleClose}
                    message={message}
                />
                {children}
            </Fragment>
        </AuthContext.Provider>
    )
}