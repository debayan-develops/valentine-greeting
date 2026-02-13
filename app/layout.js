import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Setting up the elegant serif font for titles
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

// Setting up the clean sans-serif font for body text
const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  title: "Happy Valentine's Day 🐻❤️",
  description: "A special greeting just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-pink-50`}>
        {children}
      </body>
    </html>
  );
}