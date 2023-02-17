import {
  Merriweather_Sans,
  Source_Sans_Pro,
  Source_Serif_Pro,
  Titillium_Web,
} from "@next/font/google";
import { Navbar } from "@/components/Navigation";
import "./globals.css";

const titillium = Titillium_Web({
  weight: "700",
  subsets: ["latin"],
});

const sourceSerifPro = Source_Serif_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const fonts = `${titillium.className} ${sourceSerifPro.className} ${merriweatherSans.className} ${sourceSansPro.className}`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fonts}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
