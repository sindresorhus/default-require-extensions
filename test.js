import test from 'ava';
import js from './js';
import json from './json';
import def from './';

require.extensions['.js'] = js;
require.extensions['.json'] = json;

const _require = require;

test(t => {
	t.is(def, js);
	t.is(require('./fixture/foo.js'), 'foo');
	t.is(require('./fixture/foo.json'), 'foo');
	t.throws(() => _require('./fixture/bad.json'), /[\\\/]fixture[\\\/]bad\.json/);
});
