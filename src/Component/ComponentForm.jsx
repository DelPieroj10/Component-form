import { useForm } from "../formHook/formHook";

export const ComponentForm = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };
  
  const { formState, onInputChange } = useForm(initialForm)
  
  const { userName, email, password } = formState;

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  };

  return (
    <form onSubmit = {onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your User name"
          name="userName"
          value={userName}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={onInputChange}
        ></input>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="Check"
        ></input>
        <label className="form-check-label" htmlFor="Check">
          I'm not a bot
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
