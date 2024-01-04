import { BoxMain, ContainerTasks } from "../../../components/Global/Styles/styles"
import { tasks } from '../../../mask/tasks.js'
import { TaskCard } from '../../../components/cardTask/index.jsx'
import { statusTasks } from '../../../mask/statusTasksColors.js'
export const ArchivedTasks = () => {
    return (
        <ContainerTasks>
            {tasks
                .filter((task) => task.status === 'archived')
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