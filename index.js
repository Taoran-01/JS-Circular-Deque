"use strict";

const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, 'deque.js'), 'utf-8');
const res = eval(file);

module.exports = res;
