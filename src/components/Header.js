import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [suggestionsList,setSuggestionsList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // it return empty obj
  const searchCache = useSelector((store)=> store.search)

  useEffect(() => {
    // make an API call after every keypress, if diff btw 2 api less than 200ms ,decline api call

    // make APi call after 200ms we can use setTimeout
    const timer = setTimeout(() => {
      // if data present in cache then show suggestion otherwise make an api call
      if(searchCache[searchQuery]){
        setSuggestionsList(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
     
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json =  await data.json();
    console.log(json[1]);
    setSuggestionsList(json[1]);

    // if item is not in cache then make an api call and update state

    dispatch(cacheResult({
      [searchQuery]:json[1]
    }))
  };

  const dispatch = useDispatch();
  const toggleBtnhandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="flex mt-3 justify-between">
        <div className="flex">
          <img
            src="../images/menu.png"
            alt=" logo"
            onClick={() => toggleBtnhandler()}
            className="w-9 h-6 cursor-pointer"
          />
          <img
            src="../images/youtube_icon.png"
            alt="youtube logo"
            className="w-24 h-6 ml-3"
          />
        </div>
        <div className="relative">
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={()=>{setShowSuggestions(true)}}
              onBlur={()=>{setShowSuggestions(false)}}
              placeholder="Search"
              className="w-[36rem] px-4  border-solid border-2 rounded-tr-none rounded-br-none p-2 rounded-full h-10 relative"
            />
            <button className=" border rounded-tr-full rounded-br-full pr-2 pl-2">
              <img
                src="../images/search.png"
                alt="search icon"
                className="w-7"
              />
            </button>
          </div>
         { showSuggestions && <div className="bg-white border-solid border-2 rounded-xl absolute w-[36rem] shadow-md py-2">
            <ul>
              {
                suggestionsList.map((s)=>{
               return (
                <li className="px-4 py-1 hover:bg-gray-100" key={s}> 
                <div className="flex items-center">
                  <img src="../images/search.png" className="w-4 mr-2"  alt=""/>
                  <span>{s}</span>
                </div>
              </li>
               )
                })
              }
        
            
             
            </ul>
          </div>
}
        </div>
        <div>
          <img src="../images/usericon.png" alt="user icon" className="w-7" />
        </div>
      </div>
    </>
  );
}

export default Header;
