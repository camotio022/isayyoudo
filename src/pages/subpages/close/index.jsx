import { BoxMain, ContainerTasks } from "../../../components/Global/Styles/styles"
import { TaskCard } from "../../../components/cardTask";
import { statusTasks } from "../../../mask/statusTasksColors";
import { tasks } from "../../../mask/tasks";

export const TasksClosed = () => {
    return (
        <ContainerTasks>
            {tasks
                .filter((task) => task.status === 'close')
                .map((task, index) => {
                    const colors = statusTasks[task.stateTask];
                    return (
                        <TaskCard
                            key={index}
                            name={task.name}
                            action={task.action}
                            assigner={task.assigner}
                            avatar={''}
                            assignerTo={'SnowManLabs'}
                            missingTime={task.missingTime}
                            dateStarted={task.dateStarted}
                            dateDelivery={task.dateDelivery}
                            stateTask={task.stateTask}
                            colorStatus={colors}
                        />
                    );
                })}
        </ContainerTasks>
    )
}