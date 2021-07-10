import store from "../redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Render MyApp");

  const app = (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );

  return app;
}

export default MyApp;
