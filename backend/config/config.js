const {
  MYSQL_ADDON_HOST,
  MYSQL_ADDON_DB,
  MYSQL_ADDON_USER,
  MYSQL_ADDON_PASSWORD,
  MYSQL_ADDON_PORT,
} = process.env;

module.exports = {
  development: {
    username: MYSQL_ADDON_USER,
    password: MYSQL_ADDON_PASSWORD,
    database: MYSQL_ADDON_DB,
    host: MYSQL_ADDON_HOST,
    port: MYSQL_ADDON_PORT,
    dialect: 'mysql',
  },
  test: {
    username: MYSQL_ADDON_USER,
    password: MYSQL_ADDON_PASSWORD,
    database: MYSQL_ADDON_DB,
    host: MYSQL_ADDON_HOST,
    port: MYSQL_ADDON_PORT,
    dialect: 'mysql',
  },
  production: {
    username: MYSQL_ADDON_USER,
    password: MYSQL_ADDON_PASSWORD,
    database: MYSQL_ADDON_DB,
    host: MYSQL_ADDON_HOST,
    port: MYSQL_ADDON_PORT,
    dialect: 'mysql',
  },
};
