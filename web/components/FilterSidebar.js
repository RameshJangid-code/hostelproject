export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>
      <label>
        Search by Area
        <input type="text" placeholder="Malviya Nagar" />
      </label>
      <label>
        Budget
        <input type="range" min="3000" max="15000" />
      </label>
      <label>
        Gender
        <select>
          <option>Girls</option>
          <option>Boys</option>
          <option>Unisex</option>
        </select>
      </label>
      <label>
        AC Type
        <select>
          <option>AC</option>
          <option>Non-AC</option>
          <option>Both</option>
        </select>
      </label>
      <label>
        Environment
        <select>
          <option>Study</option>
          <option>Fun</option>
          <option>Balanced</option>
        </select>
      </label>
    </aside>
  );
}
