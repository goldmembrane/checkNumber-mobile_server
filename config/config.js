module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'checknumbermobile',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  }
}