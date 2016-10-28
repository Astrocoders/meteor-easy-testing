#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs2.default.usage('A one-in-all scaffolding tool for React Native, Meteor and React Boilerplate projects.\n\n    Usage: $0 <command> [options]\n    ').command(require('./commands/create')).alias('c', 'create').example('$0 create scene <name>', 'will create a app scene and update the router entries').example('$0 create service <name>', 'will create a service file').example('$0 create helper <name>', 'will create a helper file').example('$0 create container <name>', 'will create a container component').example('$0 create component <name>', 'will create a reusable component').help('h').argv;

console.log('Initializing...'.white);