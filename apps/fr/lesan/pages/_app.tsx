import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider, useCreateStore } from 'fr/fr-states';

function CustomApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <Head>
        <title>Welcome to lesan!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default CustomApp;
