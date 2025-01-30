import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/Header";

//Components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";


const robotoMono = Roboto({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700"], 
  variable: '--font-robotoMono'
});

export const metadata = {
  title: "Portafolio Allan Paz",
  description: "Portafolio de Allan Paz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={robotoMono.variable}>
        <LanguageProvider>
          <Header />
          <StairEffect />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
