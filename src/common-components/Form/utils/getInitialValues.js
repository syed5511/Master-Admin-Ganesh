const getInitialValues = (controls) =>
  controls.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
  }, {});

export default getInitialValues;
