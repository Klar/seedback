
// clear localStorage on site refresh
localStorage.clear();

function setEncryption(){
  localStorage['aeskey'] = document.getElementById("password").value;
};

function aes_encrypt(data){
  return CryptoJS.AES.encrypt(data, localStorage['aeskey']).toString();
};

function aes_decrypt(data){
  return CryptoJS.AES.decrypt(data, localStorage['aeskey']).toString(CryptoJS.enc.Utf8);
};

function generateQr(event) {
  if (localStorage.getItem("aeskey") !== null) {
    valuetext = aes_encrypt(event.target.value);
  } else {
    valuetext = event.target.value;
  };

  var canvas = event.target.nextElementSibling
  var qr = new QRious({
    element: canvas,
    size: 150,
    value: valuetext
  });

  var codeBlock = canvas.nextElementSibling
  codeBlock.innerText = valuetext;
};
