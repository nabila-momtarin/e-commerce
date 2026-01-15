"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRoute = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.healthRoute = router;
router.get('/', (req, res) => {
    console.log(`in /health`);
    res.json({
        status: "ok",
        message: "healthy",
        environment: process.env.NODE_ENV,
        timeStamp: new Date(),
    });
});
