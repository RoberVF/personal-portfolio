"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactPage = exports.mainPage = void 0;
function mainPage(req, res) {
    res.render("index");
}
exports.mainPage = mainPage;
function contactPage(req, res) {
    res.render("contact");
}
exports.contactPage = contactPage;
