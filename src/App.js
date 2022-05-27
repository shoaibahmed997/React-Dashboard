import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './Helper/Layout'
import UnAuthorisedPage from './Pages/UnAuthorisedPage'
import NotFoundPage from './Pages/NotFoundPage'
import LoginPage from './Pages/LoginPage'
import RequireAuth from './Helper/RequireAuth';
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage';
import TransactionPage from './Pages/TransactionPage';
import ClientPage from './Pages/ClientPage';


function App() {
  
  return (
  <Routes>
    <Route path='/' element={<Layout />}>
        {/* PRIVATE ROUTES */}
        <Route element={<RequireAuth />} >
          <Route index element={<DashboardPage />} />
          <Route path='transactions' element={<TransactionPage />} />
          <Route path='clients' element={<ClientPage />} />
        </Route>

    </Route>

  {/* PUBLIC ROUTES  */}
    <Route path='/login' element={<LoginPage />} />
    <Route path='/about' element={<AboutPage />} />

  {/* NON LAYOUT ROUTES  */}
    <Route path='unauthorised' element={<UnAuthorisedPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
  );
}

export default App;
