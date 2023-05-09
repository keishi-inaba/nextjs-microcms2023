import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "gajyumaru",
  apiKey: process.env.API_KEY,
});
