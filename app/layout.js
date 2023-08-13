import Header from "@/components/Header";
import "./globals.css";
// import { inter } from './fonts'

export const metadata = {
  title: "CarpTravel",
  description:
    "Unforgettable trips to the most beautiful parts of the Carpathians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
