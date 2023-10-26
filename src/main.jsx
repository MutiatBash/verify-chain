import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css"
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [goerli],
  // [alchemyProvider({ apiKey : process.env.ALCHEMY_ID }), publicProvider()
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://ethereum-goerli.publicnode.com",
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Verify Chain",
  projectId: "975099aa656da932debb8072f60dd528",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MainApp({ children }) {
  return <React.StrictMode>{children}</React.StrictMode>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={lightTheme({accentColor:'transparent',
    accentColorForeground:'white',
    fontStack:'system',})} coolMode>
        <MainApp>
          <App />
        </MainApp>
      </RainbowKitProvider>
    </WagmiConfig>
  </BrowserRouter>
);
