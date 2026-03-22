const amenities = ['Wi-Fi', 'Geyser', 'RO Water', 'Laundry', 'Study Room', 'Power Backup'];
const reviews = [
  { id: 1, name: 'Aditi', comment: 'Safe hostel and food quality is good.', rating: 5 },
  { id: 2, name: 'Rohit', comment: 'Nice environment for study and decent facilities.', rating: 4 }
];

export default function HostelDetailPage({ params }) {
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div>
          <p className="badge">Verified Hostel</p>
          <h1>Hostel Details #{params.id}</h1>
          <p>
            Photos, room types, amenities, food rating, student reviews, rules, timings and contact
            details all in one page.
          </p>
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-card">
          <h2>Room & Rent</h2>
          <ul>
            <li>Single Room: ₹9,500</li>
            <li>Double Room: ₹7,500</li>
            <li>AC Available</li>
            <li>Seat Status: 🟡 Few beds left</li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>Amenities</h2>
          <div className="amenities-grid">
            {amenities.map((item) => (
              <span key={item} className="amenity-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-card">
          <h2>Rules & Timings</h2>
          <ul>
            <li>Gate closing time: 9:30 PM</li>
            <li>No outside visitors after 8 PM</li>
            <li>ID mandatory at check-in</li>
            <li>Contact: +91-9876543210</li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>Why choose this hostel?</h2>
          <p>
            Good study environment, reliable meals, strong security, nearby coaching areas and value for
            money for Jaipur students.
          </p>
        </div>
      </section>

      <section className="reviews-section">
        <h2>Student Reviews</h2>
        {reviews.map((review) => (
          <article key={review.id} className="review-card">
            <strong>{review.name}</strong>
            <p>Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
