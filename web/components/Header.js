export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="brand">
        HostelFinder
      </a>
      <nav>
        <a href="/hostels">Hostels</a>
        <a href="/owner">Owner Dashboard</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
