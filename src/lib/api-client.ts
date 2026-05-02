import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.amaryllissuccess.co.zw/api/v1";

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,   // send HttpOnly cookies for auth
});

/* ── Request interceptor — attach Bearer token if present ── */
apiClient.interceptors.request.use(
  (config) => {
    // Token is injected server-side via NextAuth session.
    // Client-side calls that need auth should use getSession() and
    // pass the token manually, or rely on the HttpOnly cookie.
    return config;
  },
  (error) => Promise.reject(error)
);

/* ── Response interceptor — normalise errors ────────────── */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.detail ??
      error.response?.data?.message ??
      error.message ??
      "An unexpected error occurred";
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
