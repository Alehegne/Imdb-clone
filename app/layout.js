import Header from "@/components/header";
import "./globals.css";
import Providers from "@/components/ThemeProvider";

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="dark:bg-gray-500 dark:text-gray-200 select-none transition-colors duration-500 ease-in-out min-h-screen">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
