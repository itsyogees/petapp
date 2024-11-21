import { Comfortaa } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as per your preference
});

export const metadata = {
  title: "Treasuremount",
  description: "treasuremount",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
