import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../../Services/API/api.service';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../Input';
import { Button } from 'react-bootstrap';

export const SignIn = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = async(e) => {
        
        e.preventDefault();

        try{
        
            const {data} = await api.post("/users/sign/in", {
                email,
                password
            });

            if(data.success){
                api.defaults.headers.common.Authorization = `Bearer ${data.data}`;
                navigate("/");
            }

        }
        catch(err){
            toast.error(err.response.data.message);
        }


    }

  return (
<>
    <form style={{ width: "20vw" }} onSubmit={signIn}>

      <h3>Sign In</h3>
      <div className="input-group mt-3">
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div className="input-group mt-3">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>

      <Button type="submit" children="Sign In" className="mt-3" />
    </form>
    <ToastContainer />
    </>

)
}
