import { Signale } from "signale";
import express from "express";
import { clientRouter } from "./Cliente/infrastructure/Router";
import cors from 'cors';
import { adminRouter } from "./Admin/infrastructure/Router";

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(cors());
app.use("/cliente", clientRouter);
app.use('/admin', adminRouter);

const port = 3003;
const host = '0.0.0.0';

app.listen(port, host, () => {
  signale.success("Server online in port 3003");
});
