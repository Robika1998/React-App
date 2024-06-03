import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DefaultPagination({
  page,
  pageSize,
  total,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getItemProps = (index: number) => ({
    variant: page === index ? "filled" : "text",
    color: "gray" as "gray",
    onClick: () => onPageChange(index),
    key: index,
  });

  const next = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  const prev = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-2">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={page === 1}
        color="gray"
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2 ">
        {Array.from({ length: totalPages }, (_, index) => (
          <IconButton {...getItemProps(index + 1)}>{index + 1}</IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={page === totalPages}
        color="gray"
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
