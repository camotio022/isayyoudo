import {
    addDoc,
    collection,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { db } from "../../firebaseConfig";
export const add_users = {
    user: {
        post: async (payload) => {
            const {
                id,
                name,
                email,
                password,
                number,
            } = payload;
            try {
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
                await updateProfile(user, { displayName: `${name} ${name}` });
                const usersCollection = collection(db, "users");
                const userDocRef = await addDoc(usersCollection, {
                    id: user.uid,
                    name,
                    email,
                    number,
                });
                window.location.replace("/");
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    alert("O e-mail já está em uso por outro usuário.");
                } else {
                    console.log(error)
                    alert(error);
                }
            }
        },
    }

}