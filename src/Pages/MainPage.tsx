// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import List from "../components/List/List";
// import { DefaultPagination } from '../components/Pagination/Pagination';
// import SimpleFooter from '../components/Footer';
// import classNames from 'classnames';
// import { useQuery } from '@tanstack/react-query';
// import { GetNews } from '../Api/GetNews';

// export default function MainPage() {

//     const [currentPage, setCurrentPage] = useState(1);
//     const [transitionDirection, setTransitionDirection] = useState('');
//     const [notes, setNotes] = useState<string[]>([]);
//     const itemsPerPage = 3;
//     // const totalPages = Math.ceil(dummyData.length / itemsPerPage);

//     useEffect(() => {
//       if (transitionDirection !== '') {
//         const timer = setTimeout(() => {
//           setTransitionDirection('');
//         }, 30);

//         return () => clearTimeout(timer);
//       }
//     }, [transitionDirection]);

//     // const handlePageChange = (page: number) => {
//     //   if (page > currentPage) {
//     //     setTransitionDirection('left');
//     //   } else if (page < currentPage) {
//     //     setTransitionDirection('right');
//     //   }

//     //   setTimeout(() => {
//     //     setCurrentPage(page);
//     //   }, 30);
//     // };

//     const handleAddNote = (note: string) => {
//       setNotes([...notes, note]);
//     };

//     // const currentItems = dummyData.slice(
//     //   (currentPage - 1) * itemsPerPage,
//     //   currentPage * itemsPerPage
//     // );

//     const { data, isPending, isError, error } = useQuery({
//         queryKey: ["get-news" ],
//         queryFn: GetNews,

//       });

//       if(isPending){
//         return <div>Loading...</div>
//       }
//   return (<>
//     <Header navigation={[]} notes={[]} />
//     <div onClick={()=>console.log(data.data)} className="container mx-auto mt-8">
//       <h1 className="text-3xl font-semibold mb-4 flex justify-center">Information's List</h1>
//       <div className="overflow-hidden relative">
//         <div
//           className={classNames(
//             "transition-transform duration-300",
//             transitionDirection === 'right' ? 'translate-x-full' : '',
//             transitionDirection === 'left' ? '-translate-x-full' : ''
//           )}
//         >
//           <List items={data.data} onAddNote={handleAddNote}/>
//         </div>
//       </div>
//         <div className="mt-8 flex justify-center">
//         <DefaultPagination
//            pagination={{ page: currentPage, totalPages: totalPages }}
//            onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//     <SimpleFooter /></>
//   )
// }

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List/List";
import { DefaultPagination } from "../components/Pagination/Pagination";
import SimpleFooter from "../components/Footer";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import { GetNews } from "../Api/GetNews";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionDirection, setTransitionDirection] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    if (transitionDirection !== "") {
      const timer = setTimeout(() => {
        setTransitionDirection("");
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [transitionDirection]);

  const handleAddNote = (note: string) => {
    setNotes([...notes, note]);
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["get-news", currentPage],
    queryFn: () => GetNews({ page: currentPage, pageSize: itemsPerPage }),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.pagination?.totalPages || 1;

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header navigation={[]} notes={[]} />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4 flex justify-center">
          Information's List
        </h1>
        <div className="overflow-hidden relative">
          <div
            className={classNames(
              "transition-transform duration-300",
              transitionDirection === "right" ? "translate-x-full" : "",
              transitionDirection === "left" ? "-translate-x-full" : ""
            )}
          >
            {data.data && <List items={data.data} onAddNote={handleAddNote} />}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          {/* <DefaultPagination
            page={currentPage}
            totalPages={data?.pagination?.totalPages || 1}
            onPageChange={handlePageChange}
            pageSize={10}
            total={34}
          /> */}

         <DefaultPagination
            page={currentPage}
            totalPages={data?.pagination?.totalPages || 1}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <SimpleFooter />
    </>
  );
}
