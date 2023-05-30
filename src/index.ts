import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config()

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json())

const server = http.createServer(app);

server.listen(8081, () => {
  console.log(`Server running on http://localhost:8081/`);
})

const MONGO_URI = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('eror', (error: Error) => console.log(error))