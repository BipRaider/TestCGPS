'use strict';

const EventEmitter = require('events');

const CGPSBack = require('./server');

new CGPSBack().start();
