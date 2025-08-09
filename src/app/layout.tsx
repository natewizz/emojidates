import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ec4899", // Pink theme color
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "EmojiDates - Generate Creative Date Ideas with Emojis",
  description: "Stop wondering what to do! Generate unique, creative date ideas using emojis. Perfect for couples looking for inspiration or anyone wanting to plan memorable experiences. Create, share, and discover fun date ideas with our emoji generator.",
  keywords: [
    "date ideas",
    "emoji dates",
    "couple activities",
    "romantic dates",
    "creative dates",
    "date planning",
    "fun dates",
    "relationship ideas",
    "date generator",
    "emoji generator"
  ],
  authors: [{ name: "EmojiDates Team" }],
  creator: "EmojiDates",
  publisher: "EmojiDates",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emojidates.com",
    siteName: "EmojiDates",
    title: "EmojiDates - Generate Creative Date Ideas with Emojis",
    description: "Stop wondering what to do! Generate unique, creative date ideas using emojis. Perfect for couples looking for inspiration.",
    images: [
      {
        url: "https://emojidates.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EmojiDates - Generate creative date ideas with emojis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmojiDates - Generate Creative Date Ideas with Emojis",
    description: "Stop wondering what to do! Generate unique, creative date ideas using emojis.",
    images: ["https://emojidates.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
