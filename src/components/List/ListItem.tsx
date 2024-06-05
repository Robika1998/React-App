import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import img from '../../assets/information-1015298_1280.webp';
import Swal from "sweetalert2";
import { UseMainContext } from "../../Context/MainContext";

interface ListItemProps {
  
  id: number;
  web_site: string;
  title: string;
  text: string;
  image?: string;
  date: string;
  createdAt: number;
  onAddNote: (note: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ id, web_site, title, text, image, date, createdAt, onAddNote}) => {
  const [showInfo, setShowInfo] = useState(false);
  // const {setCount} = UseMainContext()
  const handleNameClick = () => {
    setShowInfo(!showInfo);
  };


  return (
    <div
      className="py-7 mb-5 flex flex-col items-center bg-blue-200 w-[40%] "
      onClick={handleNameClick}
    >
          <h2 className="text-2xl mb-3 font-semibold cursor-pointer ml-5">{title}</h2>
      <ul className=" w-[50%] rounded-lg object-cover object-center shadow-2xl ">
      {image && <img src={image} alt="My Photo" />}
      </ul>
     
      {showInfo && (
        <>
        <p className="text-black-900 text-justify p-5">{text}</p>
          <p className="text-black-900 text-justify p-5">{date}</p>
          <p className="text-black-900 text-justify p-5">{createdAt}</p>
          <p className="text-black-900 text-justify p-5">{web_site}</p>
          <button className="rounded-full bg-green-800 p-1 w-[30%] text-white" >Save</button>
        </>
      )}
       {showInfo ? (
        <MdArrowDropUp className="ml-2 text-4xl" />
      ) : (
        <p className="mt-4 underline cursor-pointer text-stone-950">Click More Info...</p>
      )}
    </div>
  );
};

export default ListItem;

