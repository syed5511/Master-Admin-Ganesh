import DeliveryPage from "../delivery";
import getSnapShot from "../../utils/getSnapShot";

test("Delivery page snapshot", () => {
  getSnapShot(DeliveryPage)();
});
