const renderItem = (row, col) => {
  switch (col.type) {
    case "render":
      return col.render(row);
    default:
      return row[col.key];
  }
};

export default renderItem;
