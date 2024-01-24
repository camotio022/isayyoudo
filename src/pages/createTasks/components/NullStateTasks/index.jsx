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
    assigner: user.displayName,
    assignerPhotoURL: user.photoURL,
    assignerId: user.uid,
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
