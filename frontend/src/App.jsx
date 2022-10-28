import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import "./root.css"

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Chat from './pages/Chat'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute><HomePage /></PrivateRoute>} path="/"/>
          <Route element={<LoginPage />} path="/login"/>
          <Route element={<RegisterPage />} path="/register"/>
          <Route element={<PrivateRoute><Chat /></PrivateRoute>} path="/:name/:password"/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;