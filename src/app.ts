import express, { Application, Request, Response } from "express";

import { IndexRoutes } from "./app/Routes";
import { globalErrorHandler } from "./app/Middleware/globalErrorHandler";
import { notFound } from "./app/Middleware/notFound";



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


app.use(globalErrorHandler)
app.use(notFound)

export default app