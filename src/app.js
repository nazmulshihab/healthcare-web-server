import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import routes from "./routes/index.js";

const app = express();
app.use(cors({
  origin:["http://localhost:5173"],
  credentials: true
}));
app.use(express.json());

app.use("/api", routes);
app.use("/api/patients",patientRoutes);
app.use("/api/doctors",doctorRoutes);

app.use("/",(req,res)=>{
  res.send("Congrats!! Server is running on...");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);

export default app;
