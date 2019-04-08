
// clear localStorage on site refresh
localStorage.clear();

function setEncryption(){
  localStorage['aeskey'] = document.getElementById("password").value;
};

function aesEncrypt(data){
  return CryptoJS.AES.encrypt(data, localStorage['aeskey']).toString();
};

function aesDecrypt(data){
  return CryptoJS.AES.decrypt(data, localStorage['aeskey']).toString(CryptoJS.enc.Utf8);
};

function generateQr(event) {
  if (localStorage.getItem("aeskey") !== null) {
    valuetext = aesEncrypt(event.target.value);
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

function decryptText(event){
  data = event.target.value;
  decrypted = aesDecrypt(data);
  event.target.nextElementSibling.innerText = decrypted;
};
