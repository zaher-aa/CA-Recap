const { join } = require('path');
const { readFile } = require('fs');

module.exports = (req, res) => {
  const { url: endpoint, method } = req;

  if (endpoint === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readFile(join(__dirname, '../public/index.html'), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (endpoint === '/index.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    readFile(join(__dirname, '../public/index.css'), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (endpoint === '/index.js') {
    res.writeHead(200, { 'Content-Type': 'text/js' });
    readFile(join(__dirname, '../public/index.js'), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (endpoint === '/students' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    readFile(join(__dirname, './students.json'), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (endpoint === '/students' && method === 'POST') {
    let data = '';

    req.on('data', (chunkOfData) => {
      data += chunkOfData;
    });

    req.on('end', () => {
      const dataObj = Object.fromEntries(new URLSearchParams(data));
      const { name } = dataObj;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>Hi ${name}</h1>`);
    });
  }
};
