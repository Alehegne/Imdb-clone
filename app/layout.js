import Header from "@/components/header";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-max-[1519px] px-4 sm:px-[20px] md:px-[40px]   lg:px-[138px] bg-#FBFBFB dark:bg-gray-500 dark:text-gray-200">
        <Providers>
          <div className="  select-none transition-colors duration-500 ease-in-out min-h-screen">
            <Header />
            <NavBar />

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
