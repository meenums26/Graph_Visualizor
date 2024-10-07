const Node = require('../models/nodeModel');

/* Controller for graphData fetching */
const getAllNodes = async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json({ data: nodes });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Error retrieving data');
  }
};

module.exports = {
  getAllNodes,
};
