const sum = require("./sum");
sum = 1+2;
sum ++;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bonjour');
  });