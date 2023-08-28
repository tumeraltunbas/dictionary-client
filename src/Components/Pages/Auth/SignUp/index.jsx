import React, { useState } from "react";
import { Input } from "../../../Input";
import { api } from "../../../../Services/API/api.service.js";
import { Button } from "../../../Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Message } from "../../../../Utils/Message/Message.js";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();

  const navigate = useNavigate();

  
  const signUp = async (e) => {
    e.preventDefault();

    if(!username || !email || !password || !gender || !birthDate){

        return toast.error(Message.FillAllInputs);
    }

    try{

        const {data} = await api.post("/users/sign/up", {
          username,
          email,
          password,
          gender,
          birthDate
        });

        if(data.success){

            //token handling
            api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
            return navigate("/");
        }
        else{
            toast.error(data.message);
        }
    }
    catch(err){
        toast.error(err.response.data.message);
    }
};

return (
<>
    <form style={{ width: "20vw" }} onSubmit={signUp}>
      <h3>Sign Up</h3>
      <div className="input-group mt-3">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
      </div>
      <div className="input-group mt-3">
        <Input
          type="email"
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
      <div className="input-group mt-3">
        <input
          type="radio"
          id="male"
          value="male"
          name="gender"
          className="m-1"
          onChange={(e) => setGender(e.target.value)}
          />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          id="female"
          value="female"
          name="gender"
          className="m-1"
          onChange={(e) => setGender(e.target.value)}
          />
        <label htmlFor="female">Female</label>
        <br />
        <input
          type="radio"
          id="other"
          value="other"
          name="gender"
          className="m-1"
          onChange={(e) => setGender(e.target.value)}
          />
        <label htmlFor="other">Other</label>
      </div>
      <div className="input-group mt-3">
        <Input
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          />
      </div>

      <Button type="submit" children="Sign Up" className="mt-3" />
    </form>
    <ToastContainer />
    </>
  );
};
