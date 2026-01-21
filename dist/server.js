"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // This is necessary for tsyringe
// import express from "express";
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const app_1 = require("./app");
//const PORT = process.env.PORT || 3001;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Starting DB connection...");
        yield (0, db_1.connectDB)();
        console.log("Connected to db!");
        app_1.app.listen(env_1.PORT, () => {
            console.log(`Server is listening on port ${env_1.PORT}`);
            console.log(`MONGO URL: ${env_1.MONGO_URL}\n`);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
});
startServer();
