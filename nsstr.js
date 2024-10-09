// Filename: nsstr.js
// Timestamp: 2017.09.20-06:59:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const ispathstrre = /^\.?\.?\//
const parsekeyre = /([^.]*)\.(.*)/
const parsefnslnsre = /^(\[.*\]\.)?(.*)$/

export default fullstr => {
  let parsedfnsstr = (fullstr && fullstr.match(parsefnslnsre) || []),
      fnsstr = parsedfnsstr[1],
      nsstr = parsedfnsstr[2],
      parsednsstr = (nsstr && nsstr.match(parsekeyre) || []),
      nskey = parsednsstr[1],
      nsprop = parsednsstr[2],
      fnskey,
      fnsprop,
      fnspath;

  if (fnsstr) {
    // [/dataerrors]. => /dataerrors
    // [fkey.shapedata]. => fkey.shapedata
    fnsstr = fnsstr.substr(1, fnsstr.length - 3);

    if (ispathstrre.test(fnsstr)) {
      fnspath = fnsstr
    } else {
      parsednsstr = (fnsstr && fnsstr.match(parsekeyre) || []),
      fnskey = parsednsstr[1]
      fnsprop = parsednsstr[2]
    }
  }

  return {
    fullstr, // original str, [fkey.articlekey].subj.type

    nsstr,   // local namespace, subj.type
    nskey,   // local key, base|subj|fkey|pkg|init
    nsprop,  // local prop, type

    fnsstr,  // foreign namespace, 'fkey.articlekey' || '/dataerrors'
    fnspath, // foreign path, '/dataerrors'
    fnskey,  // foreign key, fkey
    fnsprop  // foreign prop, articlekey
  }
}
