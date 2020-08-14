import AddProductPage from "../add-product";
import getSnapShot from "../../utils/getSnapShot";

test("Add Product page snapshot", () => {
  getSnapShot(AddProductPage)();
});
