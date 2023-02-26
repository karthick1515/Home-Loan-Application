import { Link } from "react-router-dom";
function Home() {
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            EHomeLoan
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/about">
                About
              </a>
              <a class="nav-link" href="/process">
                Process And Guidence
              </a>
            </div>
          </div>
        </div>
      </nav>
      <center>
        <h1 class="welcome-heading">Welcome To Our Home Loan Application</h1>
        <Link to="/about">
          <button class="btn btn-light about-btn">About Us</button>
        </Link>
        <Link to="/process">
          <button class="btn btn-light loan-process-btn">
            Loan Process Details
          </button>
        </Link>
      </center>
      <center>
        <table class="login-table">
          <tr>
            <td>
              <h5 class="login-heading">Customer Login</h5>
              <p>Register here:</p>
              <Link to="/customer/signup">
                <button class="btn btn-light register-btn">Register</button>
              </Link>
              <p>Sign in if you already registered:</p>
              <Link to="/customer/signin">
                <button class="btn btn-light signin-btn">Sign In</button>
              </Link>
            </td>
            <td>
              <h5 class="login-heading">Land Verification Login</h5>
              <Link to="/landofficerlogin">
                <button class="btn btn-light signin-btn">Sign In</button>
              </Link>
            </td>
            <td>
              <h5 class="login-heading">Finance Verification Login</h5>
              <Link to="/financeofficerlogin">
                <button class="btn btn-light signin-btn">Sign In</button>
              </Link>
            </td>
            <td>
              <h5 class="login-heading">Manager Login</h5>
              <Link to="/managerlogin">
                <button class="btn btn-light signin-btn">Sign In</button>
              </Link>
            </td>
            <td>
              <h5 class="login-heading">Admin Login</h5>
              <Link to="/adminsignin">
                <button class="btn btn-light signin-btn">Sign In</button>
              </Link>
            </td>
          </tr>
        </table>
      </center>
    </>
  );
}
export default Home;
