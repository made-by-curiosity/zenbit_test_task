const app = require('./app');

const { PORT = 3000 } = process.env;

const db = require('./models');

db.sequelize
  .sync()
  .then(() => {
    console.log('Database connection successful');

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);

    process.exit(1);
  });
