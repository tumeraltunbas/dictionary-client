import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { SignUp } from './Components/Pages/Auth/SignUp';
import { SignIn } from './Components/Pages/Auth/SignIn';
import { VerifyEmail } from './Components/Pages/EmailVerification/Verify';
import { Index } from './Components/Pages/Index';

function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>

      <Route path="/" index element={<Index />}/>

        {/* Auth Routes*/}
        <Route path='auth'>
          <Route path="sign/up" element={ <SignUp />} />
          <Route path="sign/in" element={ <SignIn />} />
        </Route>

        {/* Email Routes */}
        <Route path="email">
          <Route path="verify" element={<VerifyEmail />}/>
        </Route>


      </Route>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
