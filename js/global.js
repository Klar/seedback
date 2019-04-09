
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

function addQRInput(divName){
  var newdiv = document.createElement('div');
  newdiv.innerHTML = '<input placeholder="QR Text Definition" type="text" onInput="qrheader(event)"/> <h3></h3> <textarea rows="9" cols="51" onInput="generateQr(event)"></textarea><canvas></canvas><code></code>';
  document.getElementById(divName).appendChild(newdiv);
};

function qrheader(event){
  data = event.target.value;
  event.target.nextElementSibling.innerText = data;
};

function decryptText(event){
  data = event.target.value;
  decrypted = aesDecrypt(data);
  event.target.nextElementSibling.innerText = decrypted;
};
