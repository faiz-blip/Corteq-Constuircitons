import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corteq Solutions LLC | Construction Division",
  description:
    "FEMA floodplain management, construction, storm sewer design, and engineering consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
