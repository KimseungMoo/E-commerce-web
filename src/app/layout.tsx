"use client"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: 'W 쇼핑몰',
//   description: 'W 쇼핑몰에 오신 것을 환영합니다',
//   icons: {
//     icon: '/letter-w.png'
//   }
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0
      }
    }
  }))
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
