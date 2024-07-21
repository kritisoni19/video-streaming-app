function ChatMessage({name,message}){
    return (
        <>
            <div className="flex items-start mb-2 p-3 shadow-lg bg-white">
                <img src="../images/usericon.png" alt="user icon" className="w-6 mr-2"/>
                <p><span className="mr-1 font-medium text-[14px]">{name}</span><span className="text-[13px]">{message}</span></p>
            </div>
          
        </>
    )
}

export default ChatMessage;


