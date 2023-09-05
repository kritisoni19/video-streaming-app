 import { useEffect } from 'react';
import ChatMessage from '../components/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
 import {addMessage} from '../utils/chatSlice';

 function LiveChat(){

    const dispatch = useDispatch();
    //subscribe the messages
    const chatMessages  = useSelector(store =>store.chat.messages);

    useEffect(() => {
        // API Polling
      const i =   setInterval(()=>{
            console.log('API Polling');

            dispatch(addMessage({
                name:'Kriti Soni',
                message:'I am developer'
            }))
        },2000)

    

        return()=>clearInterval(i);

    },[])

    return(
        <>
        {
          chatMessages.map((c,index)=>{
            return (
           
                 <ChatMessage name={c.name} message = {c.message} key={index}></ChatMessage>
            
            )
          })  
        }
       
        </>
    )
 }

 export default LiveChat;