import DarkLightThemeProvider from "./components/DarkLightThemeProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { oswald } from "./font";
import "./globals.css";

export const metadata = {
  title: "acksession clone",
  description: "acksession.com clone using next js by Tareq El-Ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <DarkLightThemeProvider>
        <Header />
        <main className="min-h-screen pt-28 lg:pt-36 overflow-hidden  tracking-wider">
          {children}
        </main>
        <Footer />
      </DarkLightThemeProvider>
    </html>
  );
}
