import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profiles from './pages/Profiles';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Singup';
import customTheme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
