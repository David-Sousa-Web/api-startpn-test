module.exports = {
  dialect: "mysql",
  host: 'localhost',
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  define: {
    timestamps: true,
    underscored: true,
  },
};