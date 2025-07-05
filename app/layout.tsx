import type { Metadata } from "next";
import { Bricolage_Grotesque, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AA - Full-Stack Developer",
  description: "Full-Stack Developer crafting enterprise-grade solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${firaCode.variable}`}
    >
      <head>
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = {
                config: {
                  theme: {
                    extend: {
                      colors: {
                        'dark-black': '#05030F',
                        'vivid-purple': '#DC65E2',
                        'royal-blue': '#0602B7',
                        'light-gray': '#F4F3F7',
                      },
                      fontFamily: {
                        'bricolage': ['var(--font-bricolage)', 'sans-serif'],
                        'heading': ['var(--font-bricolage)', 'sans-serif'],
                        'body': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                        'mono': ['var(--font-fira-code)', 'monospace'],
                      },
                      animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-dark-black text-light-gray font-body">
        {children}
      </body>
    </html>
  );
}
