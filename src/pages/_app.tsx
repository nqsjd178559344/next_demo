import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </RecoilRoot>
  );
}
