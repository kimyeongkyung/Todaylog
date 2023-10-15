import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

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

  const getLayout = Component.getLayout ?? ((page) => page);
  // const routers = useRouter();
  // useAuth(queryClient);
  // useResize();
  // useScrollRestoration(router);
  
  return (
    <>
      <Head>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
          name="viewport"
        />
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
        <GlobalStyle />
        {/* <QueryClientProvider client={queryClient}> */}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          {/* <Hydrate state={pageProps.dehydratedState}> */}
            {/* <AppProvider> */}
              {/* <ErrorBoundary> */}
                {/* <RecoilRoot> */}
                  {/* Provider를 getLayout에 넣으면 window가 에러남 */}
                    {getLayout(<Component {...pageProps} />) as ReactElement}
                {/* </RecoilRoot> */}
              {/* </ErrorBoundary> */}
            {/* </AppProvider> */}
          {/* </Hydrate> */}
        {/* </QueryClientProvider> */}
      {/* </ThemeProvider> */}
    </>
  );
};

export default MyApp;
