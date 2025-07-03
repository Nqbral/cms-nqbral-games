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
          "script-src": ["https://cdn.ckeditor.com"],
          "connect-src": ["https://proxy-event.ckeditor.com"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [process.env.CMS_URL, process.env.NQBRAL_GAMES_URL],
    },
  },
];
