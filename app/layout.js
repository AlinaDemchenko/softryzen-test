import "./globals.css";
import HeaderLayout from "@/components/Header/HeaderLayout";

export const metadata = {
  title: "CarpTravel",
  description:
    "Unforgettable trips to the most beautiful parts of the Carpathians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout/>
        {children}
      </body>
    </html>
  );
}
