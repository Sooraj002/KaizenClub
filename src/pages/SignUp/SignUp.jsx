import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";
import Logo from "../../components/Logo/Logo";
import Slide from "../../components/Slider/slider";
import ErrorPop from "../../components/ErrorPop/ErrorPop";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(email, password);

      if (!res) {
        setError("Email already in use");
        return;
      } else {
        console.log("user Added");
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/KaizenClub/home");
      }
    } catch (err) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <Slide>
          <div className=" w-[27rem] max-md:w-[20rem] max-md:h-auto bg-gray-800 h-[34rem] p-8 space-y-6  shadow-md rounded-lg flex flex-col justify-center items-center">
            <Logo />
            {error && <ErrorPop errmsg={error} />}
            <form onSubmit={handleSubmit}>
              <div className="form-outer flex flex-col gap-7">
                <FormInput
                  Label={"Username"}
                  textField={"username"}
                  inpType={"text"}
                  handleFunc={(e) => setUsername(e.target.value)}
                  valuein={username}
                />
                <FormInput
                  Label={"Email"}
                  textField={"email"}
                  inpType={"email"}
                  handleFunc={(e) => setEmail(e.target.value)}
                  valuein={email}
                />
                <FormInput
                  Label={"Password"}
                  textField={"password"}
                  inpType={"password"}
                  handleFunc={(e) => setPassword(e.target.value)}
                  valuein={password}
                />
                <FormBtn text={"Sign Up"} />
              </div>
            </form>
            <p className="text-white">
              Already Have an Account?{" "}
              <Link className="text-blue-400" to={"/KaizenClub/"}>
                Login
              </Link>
            </p>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default SignIn;
