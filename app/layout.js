import "./globals.css";

export const metadata = {
  title: "Your Plan Is Ready. What Will Stop the Line? | Gemba Concepts",
  description:
    "Production planning and scheduling diagnostic for personal hygiene and home-care manufacturing. Check readiness, sequence and filling-line capacity before the shift loses hours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
