import styled from "styled-components";
import BSPagination from "react-bootstrap/Pagination";
const {
  Item: BItem,
  First: BFirst,
  Prev: BPrev,
  Next: BNext,
  Last: BLast,
} = BSPagination;

export const BPagination = styled(BSPagination)`
  &.pagination {
    justify-content: flex-end;
  }
  .page-link {
    color: #10182f;
    border-radius: 5px;
  }
  .page-item {
    margin: 0 6px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &.disabled {
      cursor: no-drop;
    }
  }
`;
export const Item = styled(BItem)`
  &.page-item.active .page-link {
    background-color: #10182f;
    border-color: #10182f;
  }
`;
export const First = styled(BFirst)``;
export const Prev = styled(BPrev)``;
export const Next = styled(BNext)``;
export const Last = styled(BLast)``;
