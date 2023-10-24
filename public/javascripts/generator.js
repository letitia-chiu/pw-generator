function createCharacterSet(option) {
  const charSet = {
    low: 'abcdefghijklmnopqrstuvwxyz',
    up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    num: '0123456789',
    sym: '!@#$%^&*()-_=+/?,.<>`~;:[]{}'
  }

  // If there's no excluded characters, return the original charSet
  if (!option.exclude || option.exclude.length < 1) {
    return charSet
  }

  // Generate filtered charSet
  const filteredCharSet = Object.keys(charSet).reduce((acc, key) => {
    const filteredValue = [...charSet[key]].filter((char) => !option.exclude.includes(char)).join('')
    acc[key] = filteredValue
    return acc
  }, {})
  return filteredCharSet
}

function randomIndex(string) {
  return Math.floor(Math.random() * string.length)
}

function shuffle(password) {
  const pool = [...password]
  const shuffled = []
  while (pool.length > 0) {
    shuffled.push(pool.splice(Math.floor(Math.random() * pool.length), 1))
  }
  return shuffled.join('')
}

function renderPassword(password) {
  return `
    <div class="row">
      <div class="col-sm-4 d-flex justify-content-end">
        <label for="generated-pw" class="col-form-label">Your Password:</label>
      </div>
      <div class="col-sm-7">
        <input type="text" value="${password}" class="copy-area" id="generated-pw">
        <div class="copy-msg" class="form-text">Password copied!</div>
      </div>
      <div class="col-sm-1">
        <button type="reset" onclick="copyPw()" class="btn btn-primary copy-btn" >Copy</button>
      </div>
    </div>
  `
}

function renderError(err) {
  return `
    <div id="invalidOpt" class="form-text invalidOpt-msg">
      Character set not available: ${err}.
    </div>
  `
}

function generatePassword(option) {
  const charSet = createCharacterSet(option)
  const invalidOption = []
  let chars = ''
  let password = ''

  // Check lowercase
  if (option.lowercase === 'on') {
    if (!charSet.low) {invalidOption.push('lowercase')}
    else {
      password += charSet.low[randomIndex(charSet.low)]
      chars += charSet.low
    }
  }
  // Check uppercase
  if (option.uppercase === 'on') {
    if (!charSet.up) {invalidOption.push('uppercase')}
    else {
      password += charSet.up[randomIndex(charSet.up)]
      chars += charSet.up
    }
  }
  // Check numbers
  if (option.numbers === 'on') {
    if (!charSet.num) {invalidOption.push('numbers')}
    else {
      password += charSet.num[randomIndex(charSet.num)]
      chars += charSet.num
    }
  }
  // Check symbols
  if (option.symbols === 'on') {
    if (!charSet.sym) {invalidOption.push('symbols')}
    else {
      password += charSet.sym[randomIndex(charSet.sym)]
      chars += charSet.sym
    }
  }
  // If there's no selected character set, select all
  if (!option.lowercase && !option.uppercase && !option.numbers && !option.symbols) {
    chars = Object.values(charSet).join('')
  }

  // Check if invalid option exist
  if (invalidOption.length > 0) {
    const err = invalidOption.join(', ')
    return renderError(err)
  }
  
  // Add random characters until the password length matches the option
  while (password.length < option.length) {
    password += chars[randomIndex(chars)]
  }
  return renderPassword(shuffle(password))
}

module.exports = { generatePassword }