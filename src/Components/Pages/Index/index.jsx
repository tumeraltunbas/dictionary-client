import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../../Services/API/api.service';
import { EntryCard } from '../../EntryCard';

export const Index = () => {
  
    const [titles, setTitles] = useState([]);

    useEffect(() => {

        const fetchTitles = async() => {

            try{
                
                const {data} = await api.get(`/titles/random/5`);

                if(data.success){
                    console.log(data.data);
                    setTitles(data.data);
                }

            }
            catch(err){
                toast.error(err.response.data.message);
            }


        }

        fetchTitles();

    }, []);
  
    return (

        titles.map(t => {

            return <EntryCard 
                    content={t.content}
                    entries={t.entries}
                    />
        })

    )
}
