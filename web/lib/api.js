const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const fetchHostels = async () => {
  const response = await fetch(`${API_BASE_URL}/hostels`, { cache: 'no-store' });
  return response.json();
};

export const fetchHostelById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/hostels/${id}`, { cache: 'no-store' });
  return response.json();
};
