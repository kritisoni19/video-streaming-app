import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from '../components/LiveChat';
import CommentContainer from '../components/CommentContainer'

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
   

        <div className=" flex justify-between">
        <iframe
          width="820"
          height="500"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>

       
          <LiveChat></LiveChat>

         
        </div>
     

        <CommentContainer/>
    
     
    </>
  );
}

export default WatchPage;
