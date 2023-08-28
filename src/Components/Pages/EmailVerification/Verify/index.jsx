import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Message } from "../../../../Utils/Message/Message";
import { api } from "../../../../Services/API/api.service";

export const VerifyEmail = () => {

    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const emailVerificationToken = searchParams.get("emailVerificationToken");
    
  if (!emailVerificationToken) {
    toast.error(Message.EmailVerificationTokenNull);
  }

  const navigate = useNavigate();

  const emailVerification = async () => {
    
    try {
      const { data } = await api.get(`/users/email/verification/verify?emailVerificationToken=${emailVerificationToken}`);

      if(data.success){
        setVerified(true);
      }
      else{
        setError(data.message);
      }
    } 
    catch (err) {
      toast.error(err.response.data.message);
    }
  
    };

    emailVerification();


    return (
        <>
        {
        verified 
        ?
        <div className="text-center">
            <h3>Your email has been successfully verified</h3>
        </div>
        :
        <div className="text-center">
           <h3>{error}</h3>
        </div>
        }
        <ToastContainer />
        </>
    );

};
