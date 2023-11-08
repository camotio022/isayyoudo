import React from 'react'
import { Main } from './routes/index.jsx'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './authcontext/index.jsx'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App
