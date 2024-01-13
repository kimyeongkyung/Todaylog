import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import axios from "axios";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<T = unknown> = AppProps & {
  Component: NextPageWithLayout<T>;
};

const options = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient(options));
  const [isLogin, setIsLogin] = useState(false);
  const getLayout = Component.getLayout ?? ((page) => page);
  // const routers = useRouter();
  // useAuth(queryClient);
  // useResize();
  // useScrollRestoration(router);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/check-login-status"
        );

        if (response.data.isLogin) {
          console.log(response);
          setIsLogin(true);
          // 로그인 상태인 경우
          console.log("User is logged in:", response.data.isLogin);
        } else {
          // 로그인 상태가 아닌 경우
          console.log("User is not logged in");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
          name="viewport"
        />
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAPS_CLIENT_ID}`}
      />
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        {/* <AppProvider> */}
        {/* <ErrorBoundary> */}
        {/* <RecoilRoot> */}
        {/* Provider를 getLayout에 넣으면 window가 에러남 */}
        <Header isLogin={isLogin} />
        <Navigation />

        {
          getLayout(
            <Component {...pageProps} isLogin={isLogin} />
          ) as ReactElement
        }
        {/* </RecoilRoot> */}
        {/* </ErrorBoundary> */}
        {/* </AppProvider> */}
        {/* </Hydrate> */}
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </>
  );
};

export default MyApp;
