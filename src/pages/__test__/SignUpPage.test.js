import SignUpPage from "../signup";
import getSnapShot from "../../utils/getSnapShot";

test("SignUp page snapshot", () => {
  getSnapShot(SignUpPage)();
});
