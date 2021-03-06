import React, { useState } from "react";

import Table from "../../common-components/Table";
import Pagination from "../../common-components/Pagination";
import Form from "../../common-components/Form";
import BreadCrumbs from "../../common-components/BreadCrumbs";
import cols from "./config/cols";
import list from "./config/mock.list";
import filters from "./config/filters";
import { TopContainer } from "./styles";

const CustomerPage = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <BreadCrumbs list={[{ text: "Customer List", active: true }]} />
      <TopContainer>
        <Form form={filters} getValues={(v) => console.log(v)} />
      </TopContainer>
      <Table cols={cols} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
    </>
  );
};

export default CustomerPage;
