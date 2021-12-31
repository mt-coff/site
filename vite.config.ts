import preactRefresh from "@prefresh/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [preactRefresh()],
};

export default config;
