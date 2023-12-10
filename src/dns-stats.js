const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObject = {};
  const domainNameRevers = domains.map(item => item.split('.').reverse().join('.'));

  domainNameRevers.forEach(domain => {
    const domainArray = domain.split('.');
    let domainName = '';
    domainArray.forEach(element => {
      domainName += `.${element}`;
      if (!domainsObject[domainName]) {
        domainsObject[domainName] = 1;
      } else {
        domainsObject[domainName] += 1;
      }
    })
  })
  return domainsObject;
}

module.exports = {
  getDNSStats,
};

console.log("getDNSStats(['epam.com']):", getDNSStats(['epam.com']));