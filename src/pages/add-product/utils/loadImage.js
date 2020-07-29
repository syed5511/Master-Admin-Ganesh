const loadImage = (input, selector) => {
  console.log(input, selector);
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      selector.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
};

export default loadImage;
