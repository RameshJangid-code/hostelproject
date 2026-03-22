export default function HostelCard({ hostel }) {
  return (
    <article className="hostel-card">
      <div className="image-placeholder">Photo</div>
      <div className="hostel-card-content">
        <div className="hostel-card-header">
          <h3>{hostel.name}</h3>
          <span>⭐ {hostel.rating}</span>
        </div>
        <p>{hostel.area}, Jaipur</p>
        <p>Rent: ₹{hostel.rent}/month</p>
        <p>
          {hostel.genderType} • {hostel.acType} • Food {hostel.foodRating}
        </p>
        <p>{hostel.seatStatus}</p>
        <a href={`/hostels/${hostel.id}`} className="primary-button small-button">
          View Details
        </a>
      </div>
    </article>
  );
}
