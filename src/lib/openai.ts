import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-mNhGs3jBT3ZSV6XkPCGWXaOQ",
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);
