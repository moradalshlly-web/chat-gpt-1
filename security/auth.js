import { config } from "../settings/config.js";

export function apiKeyMiddleware(req, res, next) {
  const key = req.headers["x-api-key"];
  if (!config.security.apiKey) return next();
  if (key !== config.security.apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}
