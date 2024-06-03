import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import List from "../components/List/List";

import SimpleFooter from "../components/Footer";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import { GetNews } from "../Api/GetNews";
import { DefaultPagination } from "../components/Pagination/Pagination";


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
  const totalItems = data?.pagination?.totalItems || 0;

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
          <DefaultPagination
            page={currentPage}
            totalPages={data?.pagination?.totalPages || 1}
            onPageChange={handlePageChange}
            pageSize={10}
            total={34}
          />

          {/* <DefaultPagination
            page={currentPage}
            pageSize={itemsPerPage}
            total={totalItems}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}
        </div>
      </div>
      <SimpleFooter />
    </>
  );
}
