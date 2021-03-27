module.exports = {
    developement : {
        username: 'root',
        password: process.env.DATABASE_PASSWORD,
        database: 'checknumber_mobile',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
}