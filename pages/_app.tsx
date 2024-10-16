import "#/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const Geist = localFont({
  src: [
    {
      path: "../fonts/Geist/webfonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Geist/webfonts/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Geist/webfonts/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Geist/webfonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

const ITCGaramondStdLtNarrow = localFont({
  src: "../fonts/ITCGaramondStd-LtNarrow.ttf",
  weight: "300",
  style: "normal",
  variable: "--font-itc-garamond-std",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${Geist.variable} ${ITCGaramondStdLtNarrow.variable} font-sans antialiased`}
    >
      <Component {...pageProps} />
    </div>
  );
}
