module.exports = {
  HOST: "localhost",
  USER: "Alex",
  PASSWORD: "Zeppelin8",
  DB: "tutoriales",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};