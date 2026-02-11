import express, { Application, Request, Response } from "express";

import { IndexRoutes } from "./app/Routes";



const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use("/api/v1", IndexRoutes)


app.get('/', async (req: Request, res: Response) => {
    res.status(201).json({
        success: true,
        message: 'API is working',
    })
});

app.use()
export default app