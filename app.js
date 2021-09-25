const main = async () => {
  try {
    const express = require("express");
    const path = require("path");
    const app = express();

    const PORT = 3000;
    const db = require("./config/database");

    const indexRouter = require("./routes/index");
    const filmRouter = require("./routes/films");
    const genreRouter = require("./routes/genres");

    app.use(express.static(path.resolve(__dirname, "public")));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // routes
    app.use("/", indexRouter);
    app.use("/films", filmRouter);
    app.use("/genres", genreRouter);

    await db.authenticate();
    await db.sync();
    console.log("Установлено соединение с базой данных.");
    app.listen(PORT, () => console.log(`Сервер запущен. Порт: ${PORT}.`));
  } catch (error) {
    console.error(error);
  }
};

main();
