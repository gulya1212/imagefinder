import React from "react";

const Pagination = ({ handleNext, handlePrev, currentPage }) => {
  return (
    <div className="pagination">
      <button className="prev" onClick={handlePrev}>
        prev
      </button>
      <span className="page">{currentPage}</span>
      <button className="next" onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Pagination;
