export default function OwnerDashboardPage() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <h1>Owner Dashboard</h1>
        <p>Add hostel, upload photos, manage seats and update facilities from one place.</p>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Add Hostel</h2>
          <p>Create a new hostel listing with rent, room types and area.</p>
        </div>
        <div className="dashboard-card">
          <h2>Upload Photos</h2>
          <p>Connect Cloudinary to manage hostel gallery images.</p>
        </div>
        <div className="dashboard-card">
          <h2>Manage Seat Availability</h2>
          <p>Show available, few beds left or full status.</p>
        </div>
      </section>
    </main>
  );
}
