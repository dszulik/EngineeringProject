const neo4j = require('neo4j-driver');
require('dotenv').config();

let driver;

function configNeo4jDriver() {
  const uri = process.env.NEO4J_URI;
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;

  if (!uri || !user || !password) {
    throw new Error('Missing or invalid NEO4J_URI, NEO4J_USERNAME, or NEO4J_PASSWORD in environment variables');
  }

  driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  console.log('Driver initialized successfully:', driver);
  return driver;
}

function getNeo4jDriver() {
  if (!driver) {
    configNeo4jDriver();
  }
  return driver;
}

module.exports = { configNeo4jDriver, getNeo4jDriver };
