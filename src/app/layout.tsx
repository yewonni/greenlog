import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background text-primary font-sans">
        <main className="max-w-md mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
