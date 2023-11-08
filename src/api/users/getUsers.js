import {
    addDoc,
    collection,
    getDocs,
    query,
    getFirestore,
    where,
    getDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const get_users = {
    user: {
        get: async (id) => {
            if (id) {
                const docSnap = await getDoc(doc(db, "users", id));
                if (docSnap.exists()) {
                    return docSnap.data();
                } else {
                    console.log("No such document!");
                }
                return {};
            }
            const querySnapshot = await getDocs(collection(db, "users"));
            const usersData = [];
            querySnapshot.forEach((doc) => {
                usersData.push(doc.data());
            });
            return usersData;
        },
        post: async (payload) => {
            const {
                id,
                email,
                password,
            } = payload;
            const auth = getAuth();

            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
                await updateProfile(user, { displayName: `${name} ${lastName}` });
                const firestore = getFirestore();
                const usersCollection = collection(firestore, "users");
                const emailQuery = query(usersCollection, where("email", "==", email));
                const emailQuerySnapshot = await getDocs(emailQuery);
                if (!emailQuerySnapshot.empty) {
                    alert("O email já está sendo usado por outro usuário.");
                    // window.location.replace("/signup");
                    return;
                }
                const userDocRef = await addDoc(usersCollection, {
                    id: user.uid,
                    email,
                    password,
                });
                console.log("Usuário criado com sucesso:", userDocRef.id);
                window.location.replace("/");
            } catch (error) {
                alert("Erro ao criar usuário e vincular perfil:", error);
            }
        },
    }

}