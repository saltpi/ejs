import main from "./src/yt/solver/main.ts";

globalThis.YTDLP_EJS = {
  solve(input) {
    return main(input);
  }
};
