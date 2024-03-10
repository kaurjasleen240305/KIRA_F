import google from "../../images/google.png";
import channeli from "../../images/ch_i.jpg";
import Button from "./buttons";

function Login_right() {
    return (
      <div className="flex flex-col justify-evenly items-center h-1/2 w-1/2">
          <Button logo={google} text="LOGIN WITH GOOGLE"/>
          <Button logo={channeli} text="LOGIN WITH Channel-i" />
      </div>
    );
  }
export default Login_right;