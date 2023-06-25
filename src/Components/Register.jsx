// eslint-disable-next-line no-unused-vars
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Authcontex } from "../Provider/Authprovider";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(Authcontex);
  const auth = getAuth();
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          console.log(loggedUser);
          form.reset();
        })
        .catch((error) => {
          let errrormessage = error.code.split("auth/")[1];
          console.log(errrormessage);
        });
    }
  };
  return (
    <div>
      <div>
        <h1>Register</h1>
        <form
          onSubmit={handleRegistration}
          noValidate=""
          action=""
          className="form"
        >
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
          <button>Register</button>
        </form>
      </div>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Register;
