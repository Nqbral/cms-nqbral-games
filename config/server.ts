export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("CMS_URL", "https://cms.nqbral-games.fr"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
