const express = require('express');
const { reverseWord } = require('./strings');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'GitHub Actions CI/CD Pipeline - Live on EC2',
    example: reverseWord('github'),
    status: 'running',
    deployedBy: 'GitHub Actions + SSM'
  });
});

app.get('/reverse/:word', (req, res) => {
  const result = reverseWord(req.params.word);
  res.json({ input: req.params.word, reversed: result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
