import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "./shared/infra/typeorm"
import "./shared/container"

import { AppError } from "./shared/errors/AppError";
import { router } from "./shared/infra/http/routes/inde";


const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`,
    });
});

export { app }
