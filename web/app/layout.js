import './globals.css';

export const metadata = {
  title: 'Hostel Finder Jaipur',
  description: 'Student friendly hostel discovery platform for Jaipur'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
