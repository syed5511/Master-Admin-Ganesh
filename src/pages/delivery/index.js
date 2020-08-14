import React, { useState } from "react";

import Table from "../../common-components/Table";
import BreadCrumbs from "../../common-components/BreadCrumbs";
import Pagination from "../../common-components/Pagination";
import Form from "../../common-components/Form";
import Modal from "../../common-components/Modal";
import AddZipCodes from "./AddZipCodes";
import cols from "./config/cols";
import list from "./config/mock.list";
import filters from "./config/filters";
import { TopContainer, Button } from "./styles";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState({
    item: null,
    show: false,
  });

  const onClose = () => {
    setShowAddModal({
      item: null,
      show: false,
    });
  };

  return (
    <>
      <BreadCrumbs
        list={[{ text: "Delivery zip codes & Serving kitchens", active: true }]}
      />
      <TopContainer>
        <Form form={filters} getValues={(v) => console.log(v)} />
        <Button
          theme="submit"
          className="add-zip-code"
          onClick={() => {
            setShowAddModal({
              item: null,
              show: true,
            });
          }}
        >
          + Zip Code
        </Button>
      </TopContainer>
      <Table cols={cols} list={list} size="sm" />
      <Pagination page={page} onPageChange={setPage} total={10} />
      {showAddModal.show && (
        <Modal
          title="Add Zip Code & Kitchen"
          show={showAddModal.show}
          onClose={onClose}
        >
          <AddZipCodes data={showAddModal.item} onCancel={onClose} />
        </Modal>
      )}
    </>
  );
};

export default ProductPage;
