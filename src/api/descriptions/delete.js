import { doc, getDoc, setDoc, deleteDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const descriptionService = {
    deleteDescription: async (descriptionId) => {
        try {
            const descriptiontDocRef = doc(db, 'descriptions', descriptionId);
            const descriptionSnapshot = await getDoc(descriptiontDocRef);
            const descriptionData = descriptionSnapshot.data();
            console.log(descriptiontDocRef)
            console.log(descriptionId)
            const trashTasksCollectionRef = collection(db, 'trash_descriptions');
            await addDoc(trashTasksCollectionRef, descriptionData);
            await deleteDoc(descriptiontDocRef);
            alert('Descrição movida para a lixeira com sucesso!');
        } catch (error) {
            console.error('Erro ao mover a descrição para a lixeira:', error);
        }
    },
};
export default descriptionService;
