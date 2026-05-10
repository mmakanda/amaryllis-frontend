/** @type {import('next').NextConfig} */

const nextConfig = {
  // ── Output ────────────────────────────────────────────────
  // 'standalone' bundles only the files needed for production,
  // which is optimal for Vercel and Docker deployments.
	eslint: {
	   ignoreDuringBuilds:true,
	},

	output: "standalone",

  // ── Images ────────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amaryllissuccess.co.zw",
      },
      {
        protocol: "https",
        hostname: "api.amaryllissuccess.co.zw",
      },
      // Allow Railway-hosted images during development
      {
        protocol: "https",
        hostname: "*.railway.app",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },

  // ── Security Headers ──────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
	  {
  	    key: "X-XSS-Protection",
            value: "1; mode=block",
          },	
          // Stop MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions policy — minimal footprint
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          // Force HTTPS for 1 year + sub-domains
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Content Security Policy
          // NOTE: tighten 'unsafe-inline' once Framer Motion supports nonces
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://api.amaryllissuccess.co.zw wss://api.amaryllissuccess.co.zw",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────
  async redirects() {
    return [
      // Normalise trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },

  // ── Environment Variables exposed to the browser ─────────
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_WA_NUMBER: process.env.NEXT_PUBLIC_WA_NUMBER,
  },

  // ── Compiler options ─────────────────────────────────────
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Experimental ─────────────────────────────────────────
  experimental: {
    // Optimise server-side package imports
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-navigation-menu",
    ],
  },
};

module.exports = nextConfig;
