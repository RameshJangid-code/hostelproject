import FilterSidebar from '../../components/FilterSidebar';
import HostelCard from '../../components/HostelCard';

const sampleHostels = [
  {
    id: '1',
    name: 'BlueNest Girls Hostel',
    area: 'Malviya Nagar',
    rent: 8500,
    rating: 4.5,
    foodRating: 4.1,
    genderType: 'Girls',
    acType: 'AC',
    seatStatus: 'Few beds left'
  },
  {
    id: '2',
    name: 'StudyHub Boys Residency',
    area: 'Mansarovar',
    rent: 6500,
    rating: 4.2,
    foodRating: 3.9,
    genderType: 'Boys',
    acType: 'Non-AC',
    seatStatus: 'Available'
  }
];

export default function HostelListingPage() {
  return (
    <main className="page-shell">
      <div className="listing-layout">
        <FilterSidebar />
        <section className="listing-content">
          <div className="listing-header">
            <h1>Hostels in Jaipur</h1>
            <p>Smart search, budget filters, ratings and student friendly hostel details.</p>
          </div>
          <div className="hostel-grid">
            {sampleHostels.map((hostel) => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
