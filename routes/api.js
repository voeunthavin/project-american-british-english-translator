"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (req.body.text === "") {
      return res.json({ error: "No text to translate" });
    }
    if (!req.body.text || !req.body.locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    const validate = ["american-to-british", "british-to-american"];
    if (!validate.includes(req.body.locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }
    const result = translator.translate(req.body.text, req.body.locale);
    if (result) {
      return res.json({
        text: req.body.text,
        translation: result[1],
      });
    } else {
      return res.json({
        text: req.body.text,
        translation: "Everything looks good to me!",
      });
    }
  });
};
