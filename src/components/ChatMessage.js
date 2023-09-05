function ChatMessage({name,message}){
    return (
        <>
            <div className="flex items-center mb-2 p-3 shadow-lg bg-gray-100">
                <img src="../images/usericon.png" alt="user icon" className="w-7 mr-2"/>
                <p><span className="mr-1 font-medium">{name}</span><span>{message}</span></p>
            </div>
        </>
    )
}

export default ChatMessage;