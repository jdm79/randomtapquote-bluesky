import { AtpAgent } from "@atproto/api";
import * as dotenv from "dotenv";
import { CronJob } from "cron";
import * as process from "process";
import pkg from "tap-quotes-npm-pkg";
const { randomTapQuote } = pkg;

dotenv.config();

// Create a Bluesky Agent
const agent = new AtpAgent({
  service: "https://bsky.social",
});

async function main() {
  await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
  });
  await agent.post({
    text: randomTapQuote(),
  });
  console.log("Just posted!");
}

// Run this on a cron job
// const scheduleExpressionMinute = "* * * * *"; // Run once every minute for testing
// const scheduleExpression = "0 * * * *"; // Run once every hour in prod

// const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing

// job.start();
