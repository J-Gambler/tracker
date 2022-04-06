import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilesPage from './pages/Profiles';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import customTheme from './config/theme';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';

function App() {
  console.log(customTheme);
  
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
      <Box pt={12}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

function Container () {
  return (
    <Box pt={5} pb={13} px={7.5}>
      <Outlet />
    </Box>
  );
}
export default App;
