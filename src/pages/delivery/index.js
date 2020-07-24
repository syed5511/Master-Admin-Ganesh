import React, { useState } from "react";
import { withRouter } from "react-router";

import Table from "../../common-components/Table";
import Pagination from "../../common-components/Pagination";
import Form from "../../common-components/Form";
import cols from "./config/cols";
import list from "./config/list";
// import form from "./config/form";
import filters from "./config/filters";
import { TopContainer, Button } from "./styles";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <TopContainer>
        <Form form={filters} getValues={(v) => console.log(v)} />
        <Button theme="submit" className="add-product">
          + Product
        </Button>
      </TopContainer>
      It is incomplete... just a copy of product page...
      <Table cols={cols} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
      {/* <Form form={form} getValues={(v) => console.log(v)} /> */}
    </>
  );
};

export default withRouter(ProductPage);
