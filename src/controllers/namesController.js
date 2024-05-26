const { getNeo4jDriver } = require('../config');

async function connectNames(req, res) {
    try {
        const { name1, name2 } = req.body;
        console.log(`Received names: ${name1}, ${name2}`);

        const session = getNeo4jDriver().session();

        const result = await session.run(
            'MERGE (n1:Person { name: $name1 }) ' +
            'MERGE (n2:Person { name: $name2 }) ' +
            'MERGE (n1)-[:LIKES]->(n2) ' +
            'RETURN n1, n2',
            { name1, name2 }
        );

        if (result.records.length === 0) {
            throw new Error('No records found');
        }

        const node1 = result.records[0].get('n1').properties.name;
        const node2 = result.records[0].get('n2').properties.name;

        console.log(`Connected ${node1} and ${node2}`);

        session.close();
        res.json({ message: `${node1} polubił(a) ${node2}` });
    } catch (error) {
        console.error('Error in connectNames:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { connectNames };
