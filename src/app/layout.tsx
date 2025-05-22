import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteDetails } from "@/data/siteDetails";

import "./globals.css";
import { getMenuItems } from "@/data/menuItems";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteDetails = await getSiteDetails();
  const menuItems = await getMenuItems();

  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <Header siteDetails={siteDetails} menuItems={menuItems} />
        <main>{children}</main>
        <Footer siteDetails={siteDetails} />
      </body>
    </html>
  );
}
