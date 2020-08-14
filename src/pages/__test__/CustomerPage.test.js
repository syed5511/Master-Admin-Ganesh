import CustomerPage from "../customer";
import getSnapShot from "../../utils/getSnapShot";

test("Customer page snapshot", () => {
  getSnapShot(CustomerPage)();
});
