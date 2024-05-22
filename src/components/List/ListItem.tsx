import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";



interface ListItemProps {
  description: string;
  price: number;
}

const ListItem: React.FC<ListItemProps> = ({ description, price }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleNameClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      className="py-7 mb-5 flex flex-col items-center bg-blue-200 w-[40%]"
      onClick={handleNameClick}
    >
      <h2 className="text-xl font-semibold cursor-pointer">Name</h2>
      {showInfo ? (
        <MdOutlineKeyboardArrowUp className="ml-2" />
      ) : (
        <MdKeyboardArrowDown className="ml-2" />
      )}

      {showInfo && (
        <>
          <ul className="">
            <li>Image</li>
          </ul>
          <p className="text-gray-600 ">{description}</p>
          <p className="mt-2 text-gray-800">${price.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default ListItem;
