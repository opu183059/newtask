import { useContext, useEffect } from "react";
import { Authcontex } from "../Provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn, user } = useContext(Authcontex);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const loggedInUser = result.user;
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} noValidate="" action="" className="form">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              required
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button>Log in</button>
      </form>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Login;
