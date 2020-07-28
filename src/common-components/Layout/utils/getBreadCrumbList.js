const getBreadCrumbList = (pathname, pageOptions) => {
  const pathArr = pathname.split("/");
  const list = [];
  pathArr.forEach((item, i) => {
    if (item) {
      const obj = pageOptions.find((temp) => temp.key === item);
      if (i !== pathArr.length - 1) {
        list.push({
          text: obj.breadCrumbValue,
          href: obj.value,
          active: false,
        });
      } else {
        list.push({
          text: obj.breadCrumbValue,
          active: true,
        });
      }
    }
  });
  return list;
};

export default getBreadCrumbList;
