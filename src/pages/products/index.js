import React, { useState } from "react";

import BreadCrumbs from "../../common-components/BreadCrumbs";
import Table from "../../common-components/Table";
import Pagination from "../../common-components/Pagination";
import Form from "../../common-components/Form";
import Modal from "../../common-components/Modal";
import cols from "./config/cols";
import list from "./config/mock.list";
import history from "../../history";
import filters from "./config/filters";
import SetServingDays from "./SetServingDays";
import { TopContainer, Button } from "./styles";

const ProductPage = () => {
  const [showServingDays, setShowServingDays] = useState({
    item: null,
    show: false,
  });
  const [page, setPage] = useState(1);

  const setServingDays = (item) => {
    setShowServingDays({
      item,
      show: true,
    });
  };

  return (
    <>
      <BreadCrumbs list={[{ text: "Products", active: true }]} />
      <TopContainer>
        <Form form={filters} getValues={(v) => console.log(v)} />
        <Button
          theme="submit"
          className="add-product"
          onClick={() => {
            history.push("/products/add-product");
          }}
        >
          + Product
        </Button>
      </TopContainer>
      <Table cols={cols(setServingDays)} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
      {showServingDays.show && (
        <Modal
          title="Select Serving Days"
          show={showServingDays.show}
          onClose={() => {
            setShowServingDays({
              item: null,
              show: false,
            });
          }}
        >
          <SetServingDays data={showServingDays.item} />
        </Modal>
      )}
    </>
  );
};

export default ProductPage;
