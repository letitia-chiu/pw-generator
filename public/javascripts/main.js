async function copyPw() {
  // Get the text filed
  const copyText = document.getElementById('generated-pw')

  // Select the text filed
  copyText.focus()
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices

  try {
    await navigator.clipboard.writeText(copyText.value)

    // Show copy success message
    const copyMsg = document.querySelector('.copy-msg')
    copyMsg.style.display = 'initial'
    setTimeout(() => {
      copyMsg.style.display = 'none'
    }, 5000)
  } catch (err) {
    console.error('Unable to copy: ', err)
  }
}