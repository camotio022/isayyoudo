import { BoxMain, ContainerGlobal } from "../../../components/Global/Styles/styles"
import { TepsMenuTasks } from "../../../components/Teps/index.jsx"
export const CompletedTasks=()=> {
    return(
        <ContainerGlobal justifyContent={'flex-start !important'}>
            <TepsMenuTasks />
            <BoxMain>
                Aqui está a vizualização das tarefas concluidas!
            </BoxMain>
        </ContainerGlobal>
    )
}