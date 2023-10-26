// Filename: nsstr.js
// Timestamp: 2017.09.20-06:59:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const ispathstrre = /^\.?\.?\//
const isfnstrre = /^\[[^\]]*\]\./
const parsekeyre = /([^.]*)\.(.*)/
const parsefnslnsre = /^(\[.*\]\.)?(.*)$/

export default (o => {
  o = opts =>
    o.parse(opts);

  o.ispathstr = str =>
    ispathstrre.test(str);

  o.isfnsstr = str =>
    isfnstrre.test(str);

  o.parsekeyprop = str =>
    (str && str.match(parsekeyre) || []).slice(1);

  o.parsefnslns = str =>
    (str && str.match(parsefnslnsre) || []).slice(1);

  o.parse = fullstr => {
    let [ fnsstr, nsstr ] = o.parsefnslns(fullstr),
        [ nskey, nsprop ] = o.parsekeyprop(nsstr),
        fnskey,
        fnsprop,
        fnspath;

    if (fnsstr) {
      fnsstr = fnsstr.substr(1, fnsstr.length - 3);

      if (o.ispathstr(fnsstr)) {
        fnspath = fnsstr;
      } else {
        [ fnskey, fnsprop ] = o.parsekeyprop(fnsstr);
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
    };
  };

  return o;
})();
