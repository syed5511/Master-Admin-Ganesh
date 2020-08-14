import KitchenDetailsPage from "../kitchen-details";
import getSnapShot from "../../utils/getSnapShot";

test("Kitchen Details page snapshot", () => {
  getSnapShot(KitchenDetailsPage)();
});
