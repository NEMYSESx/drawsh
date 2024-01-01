"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv = require("dotenv");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
var mongoose_1 = require("mongoose");
var app = (0, express_1.default)(); //It is of type apllication which is a inbuild type in express
dotenv.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, helmet_1.default)()); // When you call helmet(), it returns a function that configures and sets various HTTP headers to improve security.
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" })); //The Cross-Origin-Resource-Policy header is designed to control whether the browser should allow the web page to request the specified resource from a different origin. It's a security feature that helps prevent certain types of Cross-Site Request Forgery (CSRF) attacks.
app.use((0, morgan_1.default)("common"));
var port = parseInt(process.env.PORT, 10) || 6000;
mongoose_1.default
    .connect(process.env.DATABASE_URI, {})
    .then(function () {
    app.listen(port, function () {
        console.log("app is running on ".concat(port));
    });
})
    .catch(function (err) {
    console.log("connection failed with mongodb" + ", " + err.message);
    process.exit(1);
});
