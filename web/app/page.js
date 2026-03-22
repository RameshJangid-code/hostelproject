import Header from '../components/Header';

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div>
          <p className="badge">Jaipur Hostel Discovery</p>
          <h1>Find a safe, verified and student friendly hostel in Jaipur.</h1>
          <p>
            Search by area, compare rent, check AC/non-AC options, seat availability, food rating and
            student reviews.
          </p>
          <div className="hero-actions">
            <a href="/hostels" className="primary-button">
              Explore Hostels
            </a>
            <a href="/login" className="secondary-button">
              Login / Signup
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
