
module.exports = {
    port: process.env.PORT || 3000,
    db: {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: process.env.POSTGRES_PORT || 5432,
        host: process.env.POSTGRES_HOST
    },
}