import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export const descriptionService = {
    description: {
        post: async (payload) => {
            const {
                taskId,
                author,
                content,
                timestamp,
                actions,
            } = payload;
            try {
                const descriptionsCollection = collection(db, "descriptions");
                const descriptionDocRef = await addDoc(descriptionsCollection, {
                    taskId,
                    author,
                    content,
                    timestamp,
                    actions,
                });
                const descriptionId = descriptionDocRef.id;
                const updatedDescriptionDoc = doc(db, "descriptions", descriptionId);
                await updateDoc(updatedDescriptionDoc, { descriptionId });
                console.log("Descrição adicionada com sucesso! ID:", descriptionDocRef.id);
                return descriptionDocRef;
            } catch (error) {
                console.error("Erro ao adicionar a descrição:", error);
            }
        },
        getDescriptions: async (id) => {
            if (!id) {
                const descriptions = [];
                const res = await getDocs(collection(db, 'descriptions'));
                res.forEach((description) => {
                    descriptions.push({ id: description.id, ...description.data() });
                });
                return descriptions;
            }
            const docRef = doc(db, 'descriptions', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                alert('No such document!');
            }
        },
        getDescriptionsForTask: async (taskId) => {
            try {
                const descriptions = [];
                const querySnapshot = await getDocs(collection(db, 'descriptions'));
                querySnapshot.forEach((description) => {
                    const descriptionData = description.data();
                    if (descriptionData.taskId === taskId) {
                        descriptions.push({ id: description.id, ...descriptionData });
                    }
                });

                return descriptions;
            } catch (error) {
                console.error("Erro ao obter as descrições:", error);
            }
        },
        likeDescription: async (descriptionId, userId) => {
            try {
                const descriptionRef = doc(db, 'descriptions', descriptionId);
                await updateDoc(descriptionRef, {
                    'actions.likes': arrayUnion(userId),
                });
            } catch (error) {
                console.error('Erro ao dar like na descrição:', error);
            }
        },
        updateDescription: async (descriptionId, updatedDescription) => {
            try {
                const descriptionDocRef = doc(db, 'descriptions', descriptionId);
                await updateDoc(descriptionDocRef, updatedDescription, { merge: true });
                alert('Descrição atualizada com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar a descrição:', error);
            }
        },
        deleteDescription: async (descriptionId) => {
            try {
                const descriptionDocRef = doc(db, 'descriptions', descriptionId);
                await deleteDoc(descriptionDocRef);
                alert('Descrição deletada com sucesso!');
            } catch (error) {
                console.error('Erro ao deletar a descrição:', error);
            }
        },
    }
};
