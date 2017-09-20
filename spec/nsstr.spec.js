// Filename: nsstr.spec.js
// Timestamp: 2017.09.20-07:04:17 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const nsstr = require('../');

describe("nsstr.parse", () => {

  it("should parse '[/dataerrors].subj.childremoved'", () => {
    const nsobj = nsstr.parse('[/dataerrors].subj.childremoved');

    expect( nsobj.fnspath ).toBe( '/dataerrors' );
    expect( nsobj.fullstr ).toBe( '[/dataerrors].subj.childremoved' );
    expect( nsobj.nsstr ).toBe( 'subj.childremoved' );
    expect( nsobj.nskey ).toBe( 'subj' );
    expect( nsobj.nsprop ).toBe( 'childremoved' );
    expect( nsobj.fnsstr ).toBe( '/dataerrors' );
    expect( nsobj.fnskey ).toBe( undefined );
    expect( nsobj.fnsprop ).toBe( undefined );
  });

  it("should parse '[fkey.shapedata].subj.geometry'", () => {
    const nsobj = nsstr.parse('[fkey.shapedata].subj.geometry');
    
    expect( nsobj.fnspath ).toBe( undefined );
    expect( nsobj.fullstr ).toBe( '[fkey.shapedata].subj.geometry' );
    expect( nsobj.nsstr ).toBe( 'subj.geometry' );
    expect( nsobj.nskey ).toBe( 'subj' );
    expect( nsobj.nsprop ).toBe( 'geometry' );
    expect( nsobj.fnsstr ).toBe( 'fkey.shapedata' );
    expect( nsobj.fnskey ).toBe( 'fkey' );
    expect( nsobj.fnsprop ).toBe( 'shapedata' );
  });

  it("should parse 'pkg.start'", () => {
    const nsobj = nsstr.parse('pkg.start');

    expect( nsobj.fnspath ).toBe( undefined );
    expect( nsobj.fullstr ).toBe( 'pkg.start' );
    expect( nsobj.nsstr ).toBe( 'pkg.start' );
    expect( nsobj.nskey ).toBe( 'pkg' );
    expect( nsobj.nsprop ).toBe( 'start' );
    expect( nsobj.fnsstr ).toBe( undefined );
    expect( nsobj.fnskey ).toBe( undefined );
    expect( nsobj.fnsprop ).toBe( undefined );
  });

});
