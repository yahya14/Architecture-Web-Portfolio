import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";
export const dynamic = "force-dynamic";
const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default App;
