import { useContext } from 'react';
import { AuthContext } from '../../../../authcontext';

export const nullStateTasks = () => {
    const { user } = useContext(AuthContext);
  return {
    title: '',
    description: '',
    typeCollection: '',
    startDate: '',
    deliveryDate: '',
    assigned: '',
    priority: '',
    taskStatus: '',
    estimated: '',
    assigner: user.name,
    assignerPhotoURL: user?.photoURL,
    assignerId: user.id,
    assignerTasksCreated: 0,
    tags: '',
    completionPercentage: '',
    requiredResources: '',
    communications: '',
    attachments: '',
    activityLogs: '',
    changeHistory: '',
    comments: [],
    relatedTasks: [],
    responsibles: [],
    collaborators: [],
  };
};
