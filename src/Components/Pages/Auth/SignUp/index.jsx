import React from 'react'
import { Input } from '../../../Input'
import { Button } from 'react-bootstrap'
import { api } from '../../../../Services/API/api.service.js';

export const SignUp = () => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState();
    const [birthDate, setBirthDate] = useState();
    

    const signUp = async(e) => {

        e.preventDefault();
  
        const data = await api.post("/users/sign/up", {
          email,
          password
        });
  
        console.log(data);
  
      };
  

  return (

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
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <div className="input-group mt-3">
      <Input 
          type="radio"
          placeholder='Gender'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          />
      </div>
      <div className="input-group mt-3">
      <Input
          type="date"
          placeholder='Birth Date'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          />
      </div>

      <Button
      type="submit"
      children="Sign Up"
      className="mt-3"
      />

  </form>

    )
}
