import { Route, Routes, useHref } from "react-router-dom"

import { MainLayout } from "../layout/"
import { HomePage } from "../pages/home/"
import { Community } from "../pages/community/"
import { Catalog } from "../pages/catalog/"
import { MyTasks } from "../pages/tasks/"
import { Fragment } from "react"
import { Cadastro } from "../auth/Cadastro"
import { useContext } from "react"
import { LogoutComponent } from "../components/Logout/"
import { Footer } from '../layout/components/footer/'
import { Login } from "../auth/Login"
import { AuthContext, AuthProvider } from "../authcontext"
import { ArchivedTasks } from "../pages/subpages/archived/index.jsx"
import { CompletedTasks } from "../pages/subpages/completed/index.jsx"
import { TasksClosed } from "../pages/subpages/close/index.jsx"
import { CreateTask } from "../pages/createTasks/index.jsx"
import { NotFound } from "../components/NotFound/index.jsx"
import { TasksActiveOrToDo } from "../pages/subpages/active/index.jsx"
const pageUrls = [
    '/',
    '/active',
    '/community',
    '/catalog',
    '/mytasks',
    '/taskArchived',
    '/taskCompleted',
    '/taskClose',
    '/createTask'
];
export const Main = () => {


    const refRouter = useHref()
    const auth = useContext(AuthContext)
    if (auth?.isLoggedIn) {
        if (pageUrls.includes(refRouter)) {
            return (
                <MainLayout>
                    <>
                        <LogoutComponent />
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/community' element={<Community />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/mytasks' element={<MyTasks />} />
                            <Route path='/active' element={<TasksActiveOrToDo />} />
                            <Route path='/taskArchived' element={<ArchivedTasks />} />
                            <Route path='/taskCompleted' element={<CompletedTasks />} />
                            <Route path='/taskClose' element={<TasksClosed />} />
                            <Route path='/createTask' element={<CreateTask />} />
                        </Routes>
                    </>
                </MainLayout>
            )
        }
        return (
            <MainLayout>
                <NotFound />
            </MainLayout>
        )
    }
    return (
        <>
            <Fragment>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Cadastro />} />
                </Routes>
                <Footer />
            </Fragment>
        </>
    )
}
