import React from "react";

const PaginationComponent = ({setCurrentPage, pages}) => {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationComponent;
