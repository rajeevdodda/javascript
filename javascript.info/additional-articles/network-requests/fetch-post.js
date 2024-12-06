const fs = require("fs");
const path = require("path");

let sendJSON = fetch("http://127.0.0.1:8000/users-json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John",
    surname: "Smith",
  }),
});

let sendString = fetch("http://127.0.0.1:8000/users-text", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
  body: "hii",
});
