

function HeaderTabsList(props){
     
    const listTabHandle = () =>{
        console.log('fff');
    }

    return (
        <>
        
            <button className="p-2 bg-[#e5e5e5] text-black font-medium mr-3 rounded-md text-sm" 
            onClick={listTabHandle}>{props.name}</button>
        </>
    )
}

export default HeaderTabsList;