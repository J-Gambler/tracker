import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import ProfilesPage from './pages/Profiles';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import customTheme from './config/theme';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/auth">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/" element={<Main />}>
              <Route index element={<Welcome />} />
              <Route path="/main" element={<Container />}>
                <Route path="profile" element={<Profile />} />
                <Route path="profiles" element={<ProfilesPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

function Main () {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function Container () {
  return (
    <Box pt={4} px={7.5}>
      <Outlet />
    </Box>
  );
}
export default App;
