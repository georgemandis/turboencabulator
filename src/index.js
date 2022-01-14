/**
 * Turboencabulator
 * ===
 * Relatively self-documenting. Comment out the parts you don't need.
 * 
 * https://github.com/georgemandis/turboencabulator
 */


module.exports = ((g = Object.getOwnPropertyNames, z = global) => {
  ((e) => {
    const c = [];
    for (let i = 0; i < e[2].length; i += 2) c.push(String.fromCharCode(parseInt(e[2].substring(i, i + 2), 36)));
    z[g(z).find(t => btoa(t).includes(e[0]))][atob(e[1])](atob(c.join('')));
  })`Y29uc29sZQ==${Infinity}bG9n${-Infinity}2e202e3d2h311l302q31262w2h322e372h2g2a3a2r2x1u222q31301c2p2f1y372p2g34302i1t1p1p`;
})();