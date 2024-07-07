import React from "react";

type PaginationProps = {
    totalProducts: number;
    productsPerPage: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
                                                   totalProducts,
                                                   productsPerPage,
                                                   currentPage,
                                                   paginate,
                                               }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2">
                {pageNumbers.map((number) => (
                    <li key={number} className={`px-3 py-1 rounded hover:bg-opacity-50 ${currentPage === number ? 'bg-primary text-white' : 'bg-white text-blue-500'} cursor-pointer`} onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
