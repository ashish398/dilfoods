import app from "./app.js";
import sequelize from "./models/index.js";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync();
    console.log("Database synchronized.");

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
