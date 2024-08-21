"use client"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { CartProvider } from "@/context/CartContext";

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
      <title>W 쇼핑몰</title>
      <meta name='description' content='다양한 상품을 판매하는 W 쇼핑몰입니다.' />
      <link rel="icon" href="/letter-w.png" />
      <body>
        <SearchProvider>
          <CartProvider>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
