import "./globals.css";
import HeaderLayout from "@/components/Header/HeaderLayout";

export const metadata = {
  title: "CarpTravel",
  description:
    "Unforgettable trips to the most beautiful parts of the Carpathians",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon_dark.png",
        href: "/icons/favicon_dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon_light.png",
        href: "/icons/favicon_light.png",
      },
    ],
  },
};
// icon: [
//   { url: 'icons/favicon_light.png' },
//   // new URL('/icon.png', 'https://example.com'),
//   { url: 'icons/favicon_dark.png', media: '(prefers-color-scheme: dark)' },
// ],

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}
