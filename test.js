/* eslint-disable import/no-duplicates, node/no-deprecated-api */
import test from 'ava';
import js from './js';
import json from './json';
import definition from '.';

require.extensions['.js'] = js;
require.extensions['.json'] = json;

const _require = require;

test('main', t => {
	t.is(definition, js);
	t.is(require('./fixture/foo.js'), 'foo');
	t.is(require('./fixture/foo.json'), 'foo');

	t.throws(() => {
		_require('./fixture/bad.json');
	}, /[\\/]fixture[\\/]bad\.json/);
});
