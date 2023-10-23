const origCharSet = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+/?,.<>`~;:[]{}',
}

function pickCharSet(charSet, lowercase, uppercase, numbers, symbols) {
  let charList = ''
  // 如果都不勾選擇則包含所有字元組
  if (!lowercase && !uppercase && !numbers && !symbols) {
    charList = Object.values(charSet).join('')
    return charList
  }

  // 依照勾選項目組合字元組
  if (lowercase) {charList += charSet.lowercase}
  if (uppercase) {charList += charSet.uppercase}
  if (numbers) {charList += charSet.numbers}
  if (symbols) {charList += charSet.symbols}
  return charList
}

function addSpecifiedChar(charSet, lowercase, uppercase, numbers, symbols) {
  let pw = ''
  if (lowercase) {pw += charSet.lowercase[Math.floor(Math.random() * charSet.lowercase.length)]}
  if (uppercase) {pw += charSet.uppercase[Math.floor(Math.random() * charSet.uppercase.length)]}
  if (numbers) {pw += charSet.numbers[Math.floor(Math.random() * charSet.numbers.length)]}
  if (symbols) {pw += charSet.symbols[Math.floor(Math.random() * charSet.symbols.length)]}
  return pw
}

function excludeChar(excludedChars) {
  const filteredCharSet = Object.keys(origCharSet).reduce((acc, key) => {
    filteredValue = [...origCharSet[key]].filter((char) => !excludedChars.includes(char)).join('')
    acc[key] = filteredValue
    return acc
  }, {})
  return filteredCharSet
}

function randomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)]
}

function shuffle(pw) {
  const pool = [...pw]
  const shuffled = []
  while (pool.length > 0) {
    shuffled.push(pool.splice(Math.floor(Math.random() * pool.length), 1))
  }
  return shuffled.join('')
}

function generatePassword(order) {
  let charSet = {}
  let pw = ''
  // 先確認是否需要排除指定字元
  if (order.excludedChars && order.excludedChars.length > 0) {
    charSet = excludeChar(order.excludedChars)
  } else {
    charSet = origCharSet
  }
  const chars = pickCharSet(charSet, order.lowercase, order.uppercase, order.numbers, order.symbols)
  if (!chars || chars.length < 1) {
    return console.warn('error')
  }

  // 加入指定字元類型各一字
  pw = addSpecifiedChar(charSet, order.lowercase, order.uppercase, order.numbers, order.symbols)
  // 隨機補足剩餘字數
  while (pw.length < order.Length) {
    pw += randomChar(chars)
  }
  // 密碼隨機重排
  return shuffle(pw)
}

function showPassword(pw) {
  return `
    <div class="row">
      <div class="col-sm-4 d-flex justify-content-end">
        <label for="generated-pw" class="col-form-label">Your Password:</label>
      </div>
      <div class="col-sm-7">
        <input type="text" value="${pw}" class="copy-area" id="generated-pw">
        <div class="copy-msg" class="form-text">Password copied!</div>
      </div>
      <div class="col-sm-1">
        <button type="reset" onclick="copyPw()" class="btn btn-primary copy-btn" >Copy</button>
      </div>
    </div>
  `
}

module.exports = { generatePassword, showPassword }