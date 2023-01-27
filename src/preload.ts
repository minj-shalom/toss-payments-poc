export default function preload() {
  if (!import.meta.env.VITE_REST_API_PROTOCOL) {
    throw new Error("'VITE_REST_API_PROTOCOL' env not found!");
  }
  if (!import.meta.env.VITE_REST_API_URL) {
    throw new Error("'VITE_REST_API_URL' env not found!");
  }
  if (!import.meta.env.VITE_CLIENT_KEY) {
    throw new Error("'VITE_CLIENT_KEY' env not found!");
  }
  if (!import.meta.env.VITE_SECRET_KEY) {
    throw new Error("'VITE_SECRET_KEY' env not found!");
  }
  if (!import.meta.env.VITE_VERSION) {
    throw new Error("'VITE_VERSION' env not found!");
  }

  const protocol = String(import.meta.env.VITE_REST_API_PROTOCOL);
  const url = String(import.meta.env.VITE_REST_API_URL);
  const clientKey = String(import.meta.env.VITE_CLIENT_KEY);
  const secretKey = String(import.meta.env.VITE_SECRET_KEY);
  const version = String(import.meta.env.VITE_VERSION);

  return { protocol, url, clientKey, secretKey, version };
}
