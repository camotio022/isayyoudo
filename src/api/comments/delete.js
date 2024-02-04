import { doc, getDoc, setDoc, deleteDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const commentService = {
    deleteComment: async (commentId) => {
        try {
            const commentDocRef = doc(db, 'comments', commentId);
            const commentSnapshot = await getDoc(commentDocRef);
            const commentData = commentSnapshot.data();
            const trashTasksCollectionRef = collection(db, 'trash_comments');
            await addDoc(trashTasksCollectionRef, commentData);
            await deleteDoc(commentDocRef);
            alert('Comentário movido para a lixeira com sucesso!');
        } catch (error) {
            console.error('Erro ao mover o comentário para a lixeira:', error);
        }
    },
};
export default commentService;
