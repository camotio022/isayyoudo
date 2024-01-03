import { TaskCard } from "../../../../components/cardTask";
import { taskStatus, taskStatusBgcolor, taskStatusColors } from "../../quirys/taskStatus";
export const PreviewTask = (
    {taskDetails}
) => {
    console.log(taskDetails)
    const backgroundColor = taskStatusBgcolor[taskDetails.taskStatus]
    const color = taskStatusColors[taskDetails.taskStatus]
    return (
        <TaskCard
            width={'100%'}
            name={taskDetails.title}
            action={taskDetails.typeCollection}
            assigner={taskDetails.assigner}
            avatar={taskDetails.assignerPhotoURL}
            assignerTo={'SnowManLabs'}
            missingTime={0}
            dateStarted={taskDetails.startDate}
            dateDelivery={taskDetails.deliveryDate}
            stateTask={taskDetails.taskStatus}
            colorStatus={color}
            backgroundColor={backgroundColor}
        />
    );
}