import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}

export const commentService = {
    comment: {
        post: async (payload) => {
            const {
                taskId,
                author,
                content,
                timestamp,
                actions,
                replies,
            } = payload;
            try {
                const commentsCollection = collection(db, "comments");
                const commentDocRef = await addDoc(commentsCollection, {
                    taskId,
                    author,
                    content,
                    timestamp,
                    actions,
                    replies,
                });

                const commentId = commentDocRef.id;
                const updatedCommentDoc = doc(db, "comments", commentId);
                await updateDoc(updatedCommentDoc, { commentId });
                console.log("Comentário adicionado com sucesso! ID:", commentDocRef.id);
                return commentDocRef;
            } catch (error) {
                console.error("Erro ao adicionar o comentário:", error);
            }
        },
        getComments: async (id) => {
            if (!id) {
                const comments = []
                const res = await getDocs(collection(db, 'comments'))
                res.forEach((comment) => {
                    comments.push({ id: comment.id, ...comment.data() })
                })
                return comments
            }
            const docRef = doc(db, 'comments', id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return docSnap.data()
            } else {
                alert('No such document!')
            }
        },
        getCommentsForTask: async (taskId) => {
            try {
                const comments = [];
                const querySnapshot = await getDocs(collection(db, 'comments'));
                querySnapshot.forEach((comment) => {
                    const commentData = comment.data();
                    if (commentData.taskId === taskId) {
                        comments.push({ id: comment.id, ...commentData });
                    }
                });
                
                return comments;
            } catch (error) {
                console.error("Erro ao obter os comentários:", error);
            }
        },
        updateComment: async (commentId, updatedComment) => {
            try {
                const commentDocRef = doc(db, 'comments', commentId)
                await updateDoc(commentDocRef, updatedComment, { merge: true })
                alert('Comentário atualizado com sucesso!')
            } catch (error) {
                alert('Erro ao atualizar o comentário:', error)
            }
        },
        deleteComment: async (commentId) => {
            try {
                const commentDocRef = doc(db, 'comments', commentId);
                await deleteDoc(commentDocRef);
                alert('Comentário deletado com sucesso!');
            } catch (error) {
                console.error('Erro ao deletar o comentário:', error);
            }
        },
    }
};
