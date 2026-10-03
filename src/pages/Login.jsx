
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const savedUser = localStorage.getItem("mallora-user");

    if (!savedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    let user;

    try {
      user = JSON.parse(savedUser);
    } catch {
      setError("Your saved account data is invalid. Please register again.");
      localStorage.removeItem("mallora-user");
      return;
    }

    const enteredEmail = email.trim().toLowerCase();
    const savedEmail = String(user.email || "").trim().toLowerCase();

    if (
      enteredEmail === savedEmail &&
      password === user.password
    ) {
      localStorage.setItem("mallora-logged-in", "true");
      navigate("/");
      return;
    }

    setError("Invalid email or password.");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <p className="section-small-title">
            MALLORA STORE
          </p>

          <h1>Welcome Back</h1>

          <p>
            Login to your MALLORA account.
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >
          <div className="form-group">
            <label htmlFor="login-email">
              Email
            </label>

            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">
              Password
            </label>

            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p
              className="auth-error"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

