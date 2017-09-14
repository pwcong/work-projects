const base64 = require('../base64');
const notp = require('./vendor/node-notp');

const InvalidSecret = new TypeError('secret is not correct.')

const TradeCrypto = function TradeCryptoConstructor(secret, timeStep) {
  this.secret = secret;
  this.InvalidSecret = InvalidSecret;
  this.key = decryptTOTPKey(secret);
  this.timeStep = timeStep;
};

/**
 * 生成 OTP token
 *
 * @param {string} 需要附加在 key 上的信息
 * @return {string} 6位数字 token
 */
TradeCrypto.prototype.generateToken = function (keyPayload = '') {
  return notp.totp.gen(this.key + keyPayload, { time: this.timeStep });
}

/**
 * 生成收银员的校验码，time_step 秒之后支付码会失效，所以应当定时生成新的
 *
 * @param {number} amount 收款金额
 * @return {string} 6位校验码
 */
TradeCrypto.prototype.generateCashierCode = function (amount) {
  return this.generateToken(amount + '');
}


/**
 * 生成18位支付码，time_step 秒之后支付码会失效，所以应当定时生成新的
 *
 * @param {number} customerId 会员的用户 ID
 * @return {string} 18位支付码
 */
TradeCrypto.prototype.generatePayCode = function (customerId) {
  customerId = padStart(customerId + '', 8, '0');
  const payMethodId = '99';
  const randomSalt = padStart(Math.floor(Math.random() * 100) + '', 2, '0');
  const token = this.generateToken();
  return {
    payCode: [payMethodId, customerId, randomSalt, token].join(''),
    verifyCode: token,
  };
}


/**
 * 将一个字符串用特定字符补全到一定长度
 *
 * @param {string} str
 * @param {number} length 补全长度
 * @param {string} padChar
 * @return {string}
 */
const padStart = function (str, length, padChar = ' ') {
  const lengthToPad = length - str.length;
  if (lengthToPad > 0) {
    const padPart = Array(lengthToPad).fill(padChar[0]).join('');
    str = padPart + str;
  }
  return str;
}

/**
 * 解密从服务器发送过来的 secret，获得 TOTP 算法所需 key
 *
 * @param {string} secret 登陆时获得的 secret
 * @return {string} TOTP 计算 OTP 时的 key
 */
const decryptTOTPKey = function (secret) {
  let hexString = base64.atob(secret);
  if (hexString.length % 2) throw InvalidSecret;

  let key = '';
  let charCode;
  for (let i = 0; i < hexString.length; i += 2) {
    charCode = parseInt(hexString[i + 1] + hexString[i], 16);
    if (isNaN(charCode)) throw InvalidSecret;

    key += String.fromCharCode(charCode);
  }

  return key;
}

module.exports = TradeCrypto;
