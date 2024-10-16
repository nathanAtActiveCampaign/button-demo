import "@/styles/figma-vars.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="__app_root" className={cn(fontSans.variable)}>
      <Component {...pageProps} />
    </div>
  );
}
