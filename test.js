import test from 'ava';
import js from './js';
import json from './json';
import def from './';

require.extensions['.js'] = js;
require.extensions['.json'] = json;

var _require = require;

test(t => {
	t.ok(def === js);
	t.is(require('./fixture/foo.js'), 'foo');
	t.is(require('./fixture/foo.json'), 'foo');

	t.throws(function () {
		_require('./fixture/bad.json');
	}, /[\\\/]fixture[\\\/]bad\.json/);
});
