import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Moluccus | Innovative Solutions for a Better Tomorrow</title>
        <meta
          name="description"
          content="Moluccus is a technology startup that aims to bring innovative solutions to various industries through software development, open-source technology, and medical technology."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Moluccus | Innovative Solutions for a Better Tomorrow"
        />
        <meta
          property="og:description"
          content="Moluccus is a technology startup that aims to bring innovative solutions to various industries through software development, open-source technology, and medical technology."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="Moluccus Logo" />
        <meta property="og:url" content="https://moluccus.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Moluccus | Innovative Solutions for a Better Tomorrow"
        />
        <link rel="preload" href="/logo.jpg" as="image" />
        <meta
          name="twitter:description"
          content="Moluccus is a technology startup that aims to bring innovative solutions to various industries through software development, open-source technology, and medical technology."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:image:alt" content="Moluccus Logo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="p:domain_verify"
          content="ba1b296c10612ddf6be4aec199ce4e10"
        />
        <meta
          name="google-site-verification"
          content="9FpQ3I5GbjKfNphGIlDQB3VgFidlk7zw0QJ10naj6XI"
        />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-fit">
            <Navbar />
            <main className="container mx-auto max-w-full pt-16 px-6 flex-grow">
              {children}
            </main>

            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="Moluccus"
              >
                <span className="text-default-600">powered by</span>
                <p className="text-primary">moluccus</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
