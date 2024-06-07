import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MainPage from "../Pages/MainPage";
import { GetNews } from "../Api/GetNews";
import { UseMainContext } from "../Context/MainContext";



interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

interface Props {
  navigation: NavigationItem[];
  notes: string[];
}

function Header({ navigation, notes }: Props) {
  const { dispatch } = UseMainContext();

  const [sortBy, setSortBy] = useState<"asc" | "desc">("desc");

  const handleDateSort = (value: "asc" | "desc") => {
    setSortBy(value);
    dispatch({ type: "set_date", payload: value });
  };

  const handleResetPage = () => {
    dispatch({
      type: "reset_page",
      payload: undefined
    });
    dispatch({
      type: "fetch_data",
      payload: undefined
    });
  };

  

  return (
    <Disclosure
      as="nav"
      className="bg-green-200 fixed top-0 left-0 w-full z-50"
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <h1 className="text-4xl cursor-pointer" onClick={handleResetPage}>Information</h1>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="flex items-center mr-4">
                <h1>Note</h1>
                <div className="ml-4 flex items-center space-x-4">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      className="bg-white p-2 rounded-lg shadow-md"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) =>
                    handleDateSort(e.target.value as "asc" | "desc")
                  }
                  className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                
                  <option value="desc">New Info</option>
                  <option value="asc">Old Info</option>
             
                 
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 7.293a1 1 0 0 1 1.414 1.414L10 10.414l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}

export default Header;
