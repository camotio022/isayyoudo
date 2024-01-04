import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}
export const taskService = {
    task: {
        post: async (payload) => {
            const {
                title,
                description,
                typeCollection,
                startDate,
                deliveryDate,
                assigned,
                priority,
                taskStatus,
                estimated,
                assigner,
                assignerId,
                assignerTasksCreated,
                tags,
                completionPercentage,
                requiredResources,
                communications,
                attachments,
                activityLogs,
                changeHistory,
                comments,
                relatedTasks,
                responsibles,
                collaborators,
            } = payload;

            try {
                const tasksCollection = collection(db, "tasks");
                const taskDocRef = await addDoc(tasksCollection, {
                    title,
                    description,
                    typeCollection,
                    startDate: startDate ? formatDate(startDate) : startDate,
                    deliveryDate: deliveryDate ? formatDate(deliveryDate) : deliveryDate,
                    assigned,
                    priority,
                    taskStatus,
                    estimated,
                    assigner,
                    assignerId,
                    assignerTasksCreated,
                    tags,
                    completionPercentage,
                    requiredResources,
                    communications,
                    attachments,
                    activityLogs,
                    changeHistory,
                    comments,
                    relatedTasks,
                    responsibles,
                    collaborators,
                });
                const taskId = taskDocRef.id;
                const updatedTaskDoc = doc(db, "tasks", taskId);
                await updateDoc(updatedTaskDoc, { taskId });
                console.log("Tarefa adicionada com sucesso! ID:", taskDocRef.id);
                return taskDocRef;
            } catch (error) {
                console.error("Erro ao adicionar a tarefa:", error);
            }
        },
        getTasks: async (id) => {
            if (!id) {
                const tasks = []
                const res = await getDocs(collection(db, 'tasks'))
                res.forEach((task) => {
                    tasks.push({ id: task.id, ...task.data() })
                })
                return tasks
            }
            const docRef = doc(db, 'tasks', id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return docSnap.data()
            } else {
                alert('No such document!')
            }

        },
        updateTask: async (taskId, updatedTask) => {
            try {
                const recipeDocRef = doc(db, 'recipes', taskId)
                await updateDoc(recipeDocRef, updatedTask, { merge: true })
                alert('Receita atualizada com sucesso!')
            } catch (error) {
                alert('Erro ao atualizar a receita:', error)
            }
        },
        deleteTask: async (taskId) => {
            try {
                const taskDocRef = doc(db, 'tasks', taskId);
                await deleteDoc(taskDocRef);
                alert('Tarefa deletada com sucesso!');
            } catch (error) {
                console.error('Erro ao deletar a tarefa:', error);
            }
        },
        
    }
};
