import ProductPage from "../products";
import getSnapShot from "../../utils/getSnapShot";

test("Product page snapshot", () => {
  getSnapShot(ProductPage)();
});
