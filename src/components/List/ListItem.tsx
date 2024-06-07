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
  const [showModal, setShowModal] = useState(false);
  const handleNameClick = () => {
    setShowInfo(!showInfo);
  };

  const handleImageClick = () => {
    Swal.fire({
      imageUrl: image,
      imageAlt: "Image",
      showConfirmButton: false,
      customClass: {
        image: "w-[500%] ", 
      },

      
    });
  };

  return (
    <div
      className="py-7 mb-5 flex flex-col items-center bg-blue-200 w-[70%] "
      
    >
      
     <div className="flex items-center w-full ml-4">
        {image && <img className="w-[50%] rounded-lg object-cover shadow-2xl mr-4" onClick={handleImageClick} src={image} alt="My Photo" />}
        <h2 className="text-2xl mb-3 font-semibold flex-grow">{title}</h2>
      </div>
     
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
        <MdArrowDropUp onClick={handleNameClick} className="ml-2 text-4xl cursor-pointer" />
      ) : (
        <p onClick={handleNameClick} className="mt-4 underline cursor-pointer text-stone-950">Click More Info...</p>
      )}
    </div>
  );
};

export default ListItem;

