import React, { useState } from "react";
import Pagination from "./../../Generic/Pagination";
import ComponentTable from "../../Generic/ComponentTable";
import { PaginationApi, Paginations } from "../../mock/data";
import APIComponent from './../../Generic/APIComponent'

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <>
    {Paginations?
      <div className='  md:columns-2 w-full md:h-fit md:box-border' style={{color: "white"}}>
  {Paginations.map(dat=>
    <ComponentTable Descriptions={dat.description} Title={dat.title} wholeCode={dat.component}>
  <h1 className="text-center">Page {currentPage}</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
</ComponentTable>
  )} 
  </div>
  : undefined}
<APIComponent data={PaginationApi} />
  </>
  );
};

export default PaginationPage;
