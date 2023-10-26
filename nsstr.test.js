// Filename: nsstr.spec.js
// Timestamp: 2017.09.20-07:04:17 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

import test from 'node:test'
import assert from 'node:assert/strict'
import nsstr from './nsstr.js';

test("should parse '[/dataerrors].subj.childremoved'", () => {
  const nsobj = nsstr.parse('[/dataerrors].subj.childremoved');

  assert.strictEqual( nsobj.fnspath, '/dataerrors' );
  assert.strictEqual( nsobj.fullstr, '[/dataerrors].subj.childremoved' );
  assert.strictEqual( nsobj.nsstr, 'subj.childremoved' );
  assert.strictEqual( nsobj.nskey, 'subj' );
  assert.strictEqual( nsobj.nsprop, 'childremoved' );
  assert.strictEqual( nsobj.fnsstr, '/dataerrors' );
  assert.strictEqual( nsobj.fnskey, undefined );
  assert.strictEqual( nsobj.fnsprop, undefined );
});

test("should parse '[fkey.shapedata].subj.geometry'", () => {
  const nsobj = nsstr.parse('[fkey.shapedata].subj.geometry');
  
  assert.strictEqual( nsobj.fnspath, undefined );
  assert.strictEqual( nsobj.fullstr, '[fkey.shapedata].subj.geometry' );
  assert.strictEqual( nsobj.nsstr, 'subj.geometry' );
  assert.strictEqual( nsobj.nskey, 'subj' );
  assert.strictEqual( nsobj.nsprop, 'geometry' );
  assert.strictEqual( nsobj.fnsstr, 'fkey.shapedata' );
  assert.strictEqual( nsobj.fnskey, 'fkey' );
  assert.strictEqual( nsobj.fnsprop, 'shapedata' );
});

test("should parse 'pkg.start'", () => {
  const nsobj = nsstr.parse('pkg.start');

  assert.strictEqual( nsobj.fnspath, undefined );
  assert.strictEqual( nsobj.fullstr, 'pkg.start' );
  assert.strictEqual( nsobj.nsstr, 'pkg.start' );
  assert.strictEqual( nsobj.nskey, 'pkg' );
  assert.strictEqual( nsobj.nsprop, 'start' );
  assert.strictEqual( nsobj.fnsstr, undefined );
  assert.strictEqual( nsobj.fnskey, undefined );
  assert.strictEqual( nsobj.fnsprop, undefined );
});
