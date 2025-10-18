// Filename: nsstr.js
// Timestamp: 2017.09.20-06:59:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const ispathstrre = /^\.?\.?\//
const parsefnslnsre = /^(\[[^\]]*\])?\.?(.*)$/

export default fullstr => {
  let idxdot,
      parsedfnsstr = fullstr && fullstr.match(parsefnslnsre) || [],
      fnsblock = parsedfnsstr[1],
      nsblock = parsedfnsstr[2],
      fnspath = null,
      fnsstr = null,
      fnskey = null,
      fnsprop = null,
      nsstr = null,
      nskey = null,
      nsprop = null

  if (nsblock) {
    nsstr = nsblock
    nskey = nsblock
    if (nsblock.startsWith('[')) {
      nskey = nsblock.slice(1, -1)
      nsstr = nskey
    } else if ((idxdot = nsstr.indexOf('[[')) > -1) {
      nskey = nsstr.substr(0, idxdot)
      nsprop = nsstr.slice(idxdot + 1, -1)
    } else if ((idxdot = nsstr.indexOf('.')) > -1) {
      nskey = nsstr.substr(0, idxdot)
      nsprop = nsstr.slice(idxdot + 1)
    }
  }

  if (fnsblock) {
    fnsblock = fnsblock.slice(1, -1)
    if (ispathstrre.test(fnsblock)) {
      // has _either_ {fnspath} _or_ {fnsstr, fnskey, fnsprop}
      fnspath = fnsblock
    } else {
      fnsstr = fnsblock
      idxdot = fnsstr && fnsstr.indexOf('.')
      if (idxdot > -1) {
        fnskey = fnsstr.substr(0, idxdot)
        fnsprop = fnsstr.slice(idxdot + 1)
      } else {
        fnskey = fnsstr
      }
    }
  }

  return {
    fullstr, // original str, [fkey.articlekey].subj.type
    nsstr,   // local namespace, subj.type
    nskey,   // local key, base|subj|fkey|pkg|init
    nsprop,  // local prop, type

    fnspath, // foreign path, '/dataerrors' (local path if undefind)
    fnsstr,  // foreign namespace, 'fkey.articlekey' || '/dataerrors'
    fnskey,  // foreign key, fkey
    fnsprop  // foreign prop, articlekey
  }
}
