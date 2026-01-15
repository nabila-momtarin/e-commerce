"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const health_route_1 = require("./routes/health.route");
//import cors from "cors";
exports.app = (0, express_1.default)();
//app.use(cors());
exports.app.use(express_1.default.json());
//routes
//app.get('/', );
exports.app.use('/health', health_route_1.healthRoute);
