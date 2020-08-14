import CustomerDetailsPage from "../customer-details";
import getSnapShot from "../../utils/getSnapShot";

test("Customer Details page snapshot", () => {
  getSnapShot(CustomerDetailsPage)();
});
