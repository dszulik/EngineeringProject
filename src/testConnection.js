const neo4j = require('neo4j-driver');
require('dotenv').config();

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

async function testConnection() {
  const session = driver.session();
  try {
    const result = await session.run('RETURN 1');
    console.log('Połączenie z bazą danych jest poprawne', result.records);
  } catch (error) {
    console.error('Błąd połączenia z bazą danych:', error);
  } finally {
    await session.close();
    await driver.close();
  }
}

testConnection();
