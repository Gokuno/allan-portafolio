import { Roboto_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";


const robotoMono = Roboto_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"], 
  variable: '--font-robotoMono'
});

export const metadata = {
  title: "Portafolio Allan Paz",
  description: "Portafolio de Allan Paz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
