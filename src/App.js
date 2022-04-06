import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProfilesPage from './pages/Profiles';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Singup';
import customTheme from './config/theme';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Header />
          <Box pt={4} px={7.5}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profiles" element={<ProfilesPage />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
