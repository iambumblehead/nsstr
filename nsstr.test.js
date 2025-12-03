// Filename: nsstr.spec.js
// Timestamp: 2017.09.20-07:04:17 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

import test from 'node:test'
import assert from 'node:assert/strict'
import nsstr from './nsstr.js'

test("should parse '[/dataerrors].subj.childremoved'", () => {
  const nsobj = nsstr('[/dataerrors].subj.childremoved')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/dataerrors].subj.childremoved',
    fnspath: '/dataerrors',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,    
    nsstr: 'subj.childremoved',
    nskey: 'subj',
    nsprop: 'childremoved'
  })
})

test("should parse '[/dataerrors]'", () => {
  const nsobj = nsstr('[/dataerrors]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/dataerrors]',
    fnspath: '/dataerrors',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: null,
    nskey: null,
    nsprop: null,
  })
})

test("should parse '[fkey.shapedata].subj.geometry'", () => {
  const nsobj = nsstr('[fkey.shapedata].subj.geometry')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[fkey.shapedata].subj.geometry',
    fnspath: null,
    fnsstr: 'fkey.shapedata',
    fnskey: 'fkey',
    fnsprop: 'shapedata',
    nsstr: 'subj.geometry',
    nskey: 'subj',
    nsprop: 'geometry'
  })
})

test("should parse 'pkg.start'", () => {
  const nsobj = nsstr('pkg.start')

  assert.deepStrictEqual(nsobj, {
    fullstr: 'pkg.start',
    fnspath: null,
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: 'pkg.start',
    nskey: 'pkg',
    nsprop: 'start'
  })
})

test("should parse 'subj'", () => {
  const nsobj = nsstr('subj')

  assert.deepStrictEqual(nsobj, {
    fullstr: 'subj',
    fnspath: null,
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: 'subj',
    nskey: 'subj',
    nsprop: null
  })
})

test("should parse '[fkey.shapedata].subj'", () => {
  const nsobj = nsstr('[fkey.shapedata].subj')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[fkey.shapedata].subj',
    fnspath: null,
    fnsstr: 'fkey.shapedata',
    fnskey: 'fkey',
    fnsprop: 'shapedata',
    nsstr: 'subj',
    nskey: 'subj',
    nsprop: null
  })
})

test("should parse '[fkey.shapedata][[fkey.dynamic].prop]'", () => {
  const nsobj = nsstr('[fkey.shapedata][[fkey.dynamic].prop]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[fkey.shapedata][[fkey.dynamic].prop]',
    fnspath: null,
    fnsstr: 'fkey.shapedata',
    fnskey: 'fkey',
    fnsprop: 'shapedata',
    nsstr: '[fkey.dynamic].prop',
    nskey: '[fkey.dynamic].prop',
    nsprop: null
  })
})

test("should parse '[fkey.shapedata].subj[[fkey.dynamic].prop]'", () => {
  const nsobj = nsstr('[fkey.shapedata].subj[[fkey.dynamic].prop]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[fkey.shapedata].subj[[fkey.dynamic].prop]',
    fnspath: null,
    fnsstr: 'fkey.shapedata',
    fnskey: 'fkey',
    fnsprop: 'shapedata',
    nsstr: 'subj[[fkey.dynamic].prop]',
    nskey: 'subj',
    nsprop: '[fkey.dynamic].prop'
  })
})

test("should parse '[/path].subj[fkey.ordertype]'", () => {
  const nsobj = nsstr('[/path].subj[fkey.ordertype]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/path].subj[fkey.ordertype]',
    fnspath: '/path',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: 'subj[fkey.ordertype]',
    nskey: 'subj',
    nsprop: 'fkey.ordertype'
  })
})

test("should parse '[/path][fkey.ordertype]'", () => {
  const nsobj = nsstr('[/path][fkey.ordertype]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/path][fkey.ordertype]',
    fnspath: '/path',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: 'fkey.ordertype',
    nskey: 'fkey.ordertype',
    nsprop: null
  })
})

test("should parse '[/path][ordertype]'", () => {
  const nsobj = nsstr('[/path][ordertype]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/path][ordertype]',
    fnspath: '/path',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: 'ordertype',
    nskey: 'ordertype',
    nsprop: null
  })
})

test("should parse '[/path][fkey.nstype][fkey.prop]'", () => {
  const nsobj = nsstr('[/path][fkey.nstype][fkey.prop]')

  assert.deepStrictEqual(nsobj, {
    fullstr: '[/path][fkey.nstype][fkey.prop]',
    fnspath: '/path',
    fnsstr: null,
    fnskey: null,
    fnsprop: null,
    nsstr: '[fkey.nstype][fkey.prop]',
    nskey: 'fkey.nstype',
    nsprop: 'fkey.prop',
  })
})
