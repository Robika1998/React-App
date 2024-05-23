import React, { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import img from '../../assets/information-1015298_1280.webp';
import {
  Button,

} from "@material-tailwind/react";
import Swal from "sweetalert2";

interface ListItemProps {
  photo?: string;
  description: string;
  price: number;
}



const ListItem: React.FC<ListItemProps> = ({ photo, description }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleNameClick = () => {
    setShowInfo(!showInfo);
  };


 
  const handleOpen = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div
      className="py-7 mb-5 flex flex-col items-center bg-blue-200 w-[40%]"
      onClick={handleNameClick}
    >
      <h2 className="text-4xl mb-3 font-semibold cursor-pointer">Name</h2>
      <ul className=" w-[50%] rounded-lg object-cover object-center shadow-2xl ">
        <img src={photo ? photo : img} alt="My Photo" />
      </ul>
     
      {showInfo && (
        <>
          <p className="text-black-900 text-justify p-5">{description}</p>
          
        <button className="rounded-full bg-green-800 p-1 w-[30%] text-white" onClick={() => handleOpen()}>Save</button>

        </>
      )}
       {showInfo ? (
        <MdArrowDropUp className="ml-2 text-4xl" />
      ) : (
        <p className="mt-4 underline decoration-red-500 cursor-pointer ">Click More Info...</p>
      )}
    </div>
  );
};

export default ListItem;

