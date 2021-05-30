import store from "../redux/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("Render MyApp");

  const app = (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );

  return app;
}

export default MyApp;
