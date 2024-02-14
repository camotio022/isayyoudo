import { Route, Routes, useHref } from "react-router-dom"
import { useContext } from "react"

import { MainLayout } from "../layout/"
import { HomePage } from "../pages/home/"
import { Community } from "../pages/community/"
import { Catalog } from "../pages/catalog/"
import { MyTasks } from "../pages/tasks/"
import { Fragment, useState } from "react"
import { Cadastro } from "../auth/Cadastro"
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
import { Perfil } from "../pages/perfil/index.jsx"
import { AddAcounts } from "../components/AddAccounts/index.jsx"
const pageUrls = [
    '/',
    '/active',
    '/community',
    '/catalog',
    '/mytasks',
    '/taskArchived',
    '/taskCompleted',
    '/taskClose',
    '/createTask',
    '/perfil',
];
export const Main = () => {
    const refRouter = useHref()
    const { openAddAccounts, setOpenAddAccounts } = useContext(AuthContext)
    const auth = useContext(AuthContext)
    if (auth?.isLoggedIn) {
        if (pageUrls.includes(refRouter)) {
            return (
                <MainLayout>
                    <>
                        <LogoutComponent />
                        {openAddAccounts && <AddAcounts />}
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
                            <Route path='/perfil' element={<Perfil />} />
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
            </Fragment>
        </>
    )
}
