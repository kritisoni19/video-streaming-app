import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from '../components/LiveChat';
function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="ml-24 flex">

        <iframe
          width="920"
          height="550"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>

        <div className=" border border-solid w-96 ml-8 p-2 rounded-2xl overflow-y-scroll h-[500px]">
          <LiveChat></LiveChat>
        </div>

      </div>
    </>
  );
}

export default WatchPage;
