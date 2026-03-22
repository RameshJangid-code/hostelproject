export default function LoginPage() {
  return (
    <main className="auth-page">
      <form className="auth-card">
        <h1>Login / Signup</h1>
        <input type="text" placeholder="Full name" />
        <input type="tel" placeholder="Mobile number" />
        <input type="email" placeholder="Email (optional)" />
        <input type="password" placeholder="Password" />
        <select defaultValue="student">
          <option value="student">Student</option>
          <option value="owner">Owner</option>
        </select>
        <button type="submit" className="primary-button">
          Continue
        </button>
      </form>
    </main>
  );
}
