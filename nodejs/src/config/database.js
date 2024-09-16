var pg = require("pg");
const { faker } = require("@faker-js/faker");

const config = {
  user: "postgres",
  database: "fullcycle",
  password: "root",
  port: "5432",
  host: "database",
  keepAlive: true,
};

function getClient() {
  return new pg.Client(config);
}

async function initDB() {
  const client = getClient();
  try {
    await client.connect();
    console.log("Initializing database...");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS people (
        id UUID DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL
      );
    `;

    await client.query(createTableQuery);
    console.log("Finished initializing database.");
  } catch (err) {
    console.error("Error initializing database:", err);
  } finally {
    await client.end();
  }
}

const createPeople = async () => {
  const client = getClient();
  await client.connect();
  const randomName = faker.person.firstName();
  const insertQuery = `
    INSERT INTO people (name) VALUES
    ('${randomName}')
  `;

  await client.query(insertQuery);
};

const getAllPeople = async () => {
  const client = getClient();
  await client.connect();
  const query = "SELECT * FROM people;";
  const result = await client.query(query);
  return result.rows;
};

module.exports = {
  getClient,
  initDB,
  getAllPeople,
  createPeople,
};
