import Layout from "@/components/common/Layout";
import LoadingUi from "@/components/common/LoadingUi";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init();
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);
  return (
    <Layout>
      {loading && <LoadingUi />}
      <Component {...pageProps} />
    </Layout>
  );
}
