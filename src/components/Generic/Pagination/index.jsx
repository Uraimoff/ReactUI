import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const [page, setPage] = useState(currentPage);

  const handleClick = (newPage) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => handleClick(page - 1)}
        disabled={page === 1}
        className={`border rounded w-10 h-10 flex items-center justify-center ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        &lt;
      </button>

      {/* First Page */}
      {page !== 1 && (
        <button
          onClick={() => handleClick(1)}
          className={`border rounded w-10 h-10 flex items-center justify-center ${page === 1 ? 'bg-blue-500 text-white' : ''}`}
        >
          1
        </button>
      )}

      {/* Ellipsis */}
      {page > 3 && <span className="p-2">...</span>}

      {/* Middle Pages */}
      {page > 2 && (
        <button
          onClick={() => handleClick(page - 1)}
          className="border rounded w-10 h-10 flex items-center justify-center"
        >
          {page - 1}
        </button>
      )}
      <button
        onClick={() => handleClick(page)}
        className="border rounded w-10 h-10 flex items-center justify-center bg-blue-500 text-white"
      >
        {page}
      </button>
      {page < totalPages - 1 && (
        <button
          onClick={() => handleClick(page + 1)}
          className="border rounded w-10 h-10 flex items-center justify-center"
        >
          {page + 1}
        </button>
      )}

      {/* Ellipsis */}
      {page < totalPages - 2 && <span className="p-2">...</span>}

      {/* Last Page */}
      {page !== totalPages && (
        <button
          onClick={() => handleClick(totalPages)}
          className={`border rounded w-10 h-10 flex items-center justify-center ${page === totalPages ? 'bg-blue-500 text-white' : ''}`}
        >
          {totalPages}
        </button>
      )}

      {/* Next Button */}
      <button
        onClick={() => handleClick(page + 1)}
        disabled={page === totalPages}
        className={`border rounded w-10 h-10 flex items-center justify-center ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
