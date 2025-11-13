import "./globals.css";
import Header from "@/src/components/Header";

export const metadata = {
  title: "Portfolio",
  description: "Personal Portfolio built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
