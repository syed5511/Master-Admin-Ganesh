import React, { useState, useEffect } from "react";

import { BPagination, First, Last, Prev, Next, Item } from "./styles";

const Pagination = ({ page: pageProps, total, onPageChange }) => {
  const [page, setPage] = useState(pageProps);

  useEffect(() => {
    setPage(pageProps);
  }, [pageProps]);

  return (
    <BPagination>
      <First
        disabled={page === 1}
        onClick={() => {
          setPage(1);
          onPageChange(1);
        }}
      />
      <Prev
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
          onPageChange(page - 1);
        }}
      />

      {page - 1 >= 1 && (
        <Item
          onClick={() => {
            setPage(page - 1);
            onPageChange(page - 1);
          }}
        >
          {page - 1}
        </Item>
      )}
      <Item active>{page}</Item>
      {page + 1 <= total && (
        <Item
          onClick={() => {
            setPage(page + 1);
            onPageChange(page + 1);
          }}
        >
          {page + 1}
        </Item>
      )}

      <Next
        disabled={page === total}
        onClick={() => {
          setPage(page + 1);
          onPageChange(page + 1);
        }}
      />
      <Last
        disabled={page === total}
        onClick={() => {
          setPage(total);
          onPageChange(total);
        }}
      />
    </BPagination>
  );
};

export default Pagination;
