import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { SignUp } from './Components/Pages/Auth/SignUp';

function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/auth" element={<Layout />}>
        <Route path="sign/up" element={ <SignUp />} />
      </Route>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
