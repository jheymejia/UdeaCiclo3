import './login.css';

export default function Login(){
    return (
    <div className="App">
      <div class="col-6 mx-auto ">
        <h1>Login</h1>
        <form class="text-start mt-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onSubmit="handleOnSubmit"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}