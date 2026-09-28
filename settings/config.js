export const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || "0.0.0.0",
  providers: {
    openai: process.env.OPENAI_API_KEY || "",
    anthropic: process.env.ANTHROPIC_API_KEY || "",
  },
  security: {
    apiKey: process.env.MOROAI_API_KEY || "dev-key-change-me",
  },
};
