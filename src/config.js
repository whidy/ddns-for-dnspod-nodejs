require('dotenv').config();

const secretId = process.env.secretId;
const secretKey = process.env.secretKey;
const domain = 'whidy.cn'

module.exports = {
  secretId,
  secretKey,
  domain
}
