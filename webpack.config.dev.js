import { merge } from "webpack-merge";
import commonConfig from "./webpack.config.common.js";
import ESLintPlugin from "eslint-webpack-plugin";

export default merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "ts"],
      emitWarning: true,
    }),
  ],
});
