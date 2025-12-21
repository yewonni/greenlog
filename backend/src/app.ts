import express from "express";
import authRouter from "./routes/auth";
import plantTypeRouter from "./routes/plantType";
import careRoutineRouter from "./routes/careRoutine";
import myPlantRouter from "./routes/myPlant";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/plant-types", plantTypeRouter);
app.use("/api/care-routines", careRoutineRouter);
app.use("/api/my-plants", myPlantRouter);

export default app;
