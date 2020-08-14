import SignInPage from "../login";
import getSnapShot from "../../utils/getSnapShot";

test("Signin page snapshot", () => {
  getSnapShot(SignInPage)();
});
