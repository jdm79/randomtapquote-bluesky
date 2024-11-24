import { AtpAgent } from "@atproto/api";
import * as dotenv from "dotenv";
import * as process from "process";
import pkg from "tap-quotes-npm-pkg";
const { randomTapQuote } = pkg;

dotenv.config();

const agent = new AtpAgent({
  service: "https://bsky.social",
});

async function main() {
  await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
  });
  let text = randomTapQuote();
  await agent.post({
    text: text,
  });
  console.log(`Posted: ${text}`);
}

main();
