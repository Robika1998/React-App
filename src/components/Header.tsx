// import React from "react";
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Fragment } from 'react';
// import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
// import classNames from 'classnames';

// interface NavigationItem {
//   name: string;
//   href: string;
//   current?: boolean;
// }

// interface Props {
//   navigation: NavigationItem[];
//   notes: string[];
// }

// function Header({ navigation, notes }: Props) {
//   return (
//     <Disclosure as="nav" className="bg-green-200 fixed top-0 left-0 w-full z-50 ">
//       <>
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
         
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex flex-shrink-0 items-center">
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                   alt="Your Company"
//                 />
//               </div>
              
//               <div className="hidden sm:ml-6 sm:block">
//                 <h1 className="text-4xl">Information</h1>
//               </div>
//             </div>
//             {/* <div className="flex flex-1 items-center justify-end">
//                     <h1>Note</h1>  
//             </div> */}

//            <div className="flex flex-1 items-center justify-end">
//               <h1>Note</h1>
//               <div className="ml-4 flex items-center space-x-4">
//                 {notes.map((note, index: number) => (
//                   <div key={index} className="bg-white p-2 rounded-lg shadow-md">
//                     {note}
//                   </div>
//                 ))}
//               </div>
//             </div>
          
//           </div>
//         </div>


//       </>
//     </Disclosure>
//   );
// }

// export default Header;


import React from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';

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
  return (
    <Disclosure as="nav" className="bg-green-200 fixed top-0 left-0 w-full z-50">
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
                <h1 className="text-4xl">Information</h1>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <h1>Note</h1>
              <div className="ml-4 flex items-center space-x-4">
                {notes.map((note, index) => (
                  <div key={index} className="bg-white p-2 rounded-lg shadow-md">
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}

export default Header;



