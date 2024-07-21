import { useEffect, useState } from "react";
import ChatMessage from "../components/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { randomMessageGenerator } from "../utils/helper";
function LiveChat() {
  const dispatch = useDispatch();
  //subscribe the messages
  const chatMessages = useSelector((store) => store.chat.messages);
  const [chatMessageSend, setChatMessageSent] = useState([]);

  useEffect(() => {
    // API Polling
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessageGenerator() + "🚀",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);


  
  return (
    <>
     <div className="flex flex-col ">
     <div
        className=" border border-solid w-96 ml-8 p-2 rounded-2xl overflow-y-scroll h-[500px]
         bg-gray-100 flex flex-col-reverse"
      >
        {chatMessages.map((c, index) => {
          return (
            <ChatMessage
              name={c.name}
              message={c.message}
              key={index}
            ></ChatMessage>
          );
        })}
      </div>
      
      <form className="ml-8 p-2 flex" onSubmit={(e)=>{
        e.preventDefault()
        console.log(chatMessageSend);
            dispatch(addMessage({
              name:'KRITI',
              message:chatMessageSend
            }))

            setChatMessageSent('');
      }}>
                <input type='text' value={chatMessageSend} className="border w-full px-2" onChange={(e)=>
                
                  setChatMessageSent(e.target.value)}
                  
                  />
                <button type='button' className="border p-2 bg-blue-600 text-white">Send</button>
            </form>
     </div>
    </>
  );
}

export default LiveChat;
