import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scryfall App",
  description: "A frontend for the Scryfall API",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="mb-4">
            <h1>Scryfall API Frontend</h1>
          </header>
          <div className="d-flex align-items-start">
            <div className="sidebar me-3">
              <ul className="nav flex-column">
                <li className="nav-item"> 
                  <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item"> 
                  <Link href="/api/" className="nav-link">Rivals of Ixalan Set</Link>
                </li>
              </ul>
            </div>
            <main className="content">
              {children}
            </main>
          </div>
          <footer>
            <p>
              Data provided by <a href="https://scryfall.com/docs/api">Scryfall API</a>.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
