import KitchenPage from "../kitchen";
import getSnapShot from "../../utils/getSnapShot";

test("Kitchen page snapshot", () => {
  getSnapShot(KitchenPage)();
});
