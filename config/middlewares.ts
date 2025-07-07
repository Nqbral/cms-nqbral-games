export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'", "https://cdn.ckeditor.com"],
          "connect-src": ["'self'", "https://proxy-event.ckeditor.com"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.ckeditor.com",
          ],
          "img-src": ["'self'", "data:"],
          "font-src": ["'self'"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [process.env.CMS_URL, process.env.NQBRAL_GAMES_URL],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },
];
