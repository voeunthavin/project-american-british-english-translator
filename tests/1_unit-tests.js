const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

let translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate to British English", () => {
    test("Mangoes are my favorite fruit.", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, "Mangoes are my favourite fruit.");
      done();
    });
    test("I ate yogurt for breakfast.", function (done) {
      let expected = "I ate yoghurt for breakfast.";
      let text = "I ate yogurt for breakfast.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("We had a party at my friend's condo.", function (done) {
      let expected = "We had a party at my friend's flat.";
      let text = "We had a party at my friend's condo.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Can you toss this in the trashcan for me?", function (done) {
      let expected = "Can you toss this in the bin for me?";
      let text = "Can you toss this in the trashcan for me?";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("The parking lot was full.", function (done) {
      let expected = "The car park was full.";
      let text = "The parking lot was full.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Like a high tech Rube Goldberg machine.", function (done) {
      let expected = "Like a high tech Heath Robinson device.";
      let text = "Like a high tech Rube Goldberg machine.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("To play hooky means to skip class or work.", function (done) {
      let expected = "To bunk off means to skip class or work.";
      let text = "To play hooky means to skip class or work.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("No Mr. Bond, I expect you to die.", function (done) {
      let expected = "No Mr Bond, I expect you to die.";
      let text = "No Mr. Bond, I expect you to die.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Dr. Grosh will see you now.", function (done) {
      let expected = "Dr Grosh will see you now.";
      let text = "Dr. Grosh will see you now.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Lunch is at 12:15 today.", function (done) {
      let expected = "Lunch is at 12.15 today.";
      let text = "Lunch is at 12:15 today.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
  });
  suite("Translate to American English", () => {
    test("We watched the footie match for a while.", function (done) {
      let expected = "We watched the soccer match for a while.";
      let text = "We watched the footie match for a while.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Paracetamol takes up to an hour to work.", function (done) {
      let expected = "Tylenol takes up to an hour to work.";
      let text = "Paracetamol takes up to an hour to work.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("First, caramelise the onions.", function (done) {
      let expected = "First, caramelize the onions.";
      let text = "First, caramelise the onions.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("I spent the bank holiday at the funfair.", function (done) {
      let expected = "I spent the public holiday at the carnival.";
      let text = "I spent the bank holiday at the funfair.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("I had a bicky then went to the chippy.", function (done) {
      let expected = "I had a cookie then went to the fish-and-chip shop.";
      let text = "I had a bicky then went to the chippy.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("I've just got bits and bobs in my bum bag.", function (done) {
      let expected = "I've just got odds and ends in my fanny pack.";
      let text = "I've just got bits and bobs in my bum bag.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("The car boot sale at Boxted Airfield was called off.", function (done) {
      let expected = "The swap meet at Boxted Airfield was called off.";
      let text = "The car boot sale at Boxted Airfield was called off.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Have you met Mrs Kalyani?", function (done) {
      let expected = "Have you met Mrs. Kalyani?";
      let text = "Have you met Mrs Kalyani?";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Prof Joyner of King's College, London.", function (done) {
      let expected = "Prof. Joyner of King's College, London.";
      let text = "Prof Joyner of King's College, London.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
    test("Tea time is usually around 4 or 4.30.", function (done) {
      let expected = "Tea time is usually around 4 or 4:30.";
      let text = "Tea time is usually around 4 or 4.30.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[0];
      assert.equal(result, expected);
      done();
    });
  });
  suite("Highlight Translation", () => {
    test("Mangoes are my favorite fruit.", function (done) {
      let expected =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
      let text = "Mangoes are my favorite fruit.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[1];
      assert.equal(result, expected);
      done();
    });
    test("I ate yogurt for breakfast.", function (done) {
      let expected =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';
      let text = "I ate yogurt for breakfast.";
      let mode = "american-to-british";
      let result = translator.translate(text, mode)[1];
      assert.equal(result, expected);
      done();
    });
    test("We watched the footie match for a while.", function (done) {
      let expected =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      let text = "We watched the footie match for a while.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[1];
      assert.equal(result, expected);
      done();
    });
    test("Paracetamol takes up to an hour to work.", function (done) {
      let expected =
        '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      let text = "Paracetamol takes up to an hour to work.";
      let mode = "british-to-american";
      let result = translator.translate(text, mode)[1];
      assert.equal(result, expected);
      done();
    });
  });
});
