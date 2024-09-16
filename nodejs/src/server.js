const express = require("express");
const { initDB, getAllPeople, createPeople } = require("./config/database");

const app = express();
const port = 3000;

function appStart() {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  initDB();

  app.get("/", async (req, res) => {
    await createPeople();
    const peoples = await getAllPeople();
    const data = peoples.map((person) => person.name);
    const html = `
      <html>
        <head>
          <title>FullCycle</title>
        </head>
        <body>
          <h1>Full Cycle Rocks!</h1>
          <ul>
            ${data.map((name) => `<li>${name}</li>`).join("")}
          </ul>
        </body>
      </html>
    `;
    res.send(html);
  });
}
appStart();
