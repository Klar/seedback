function generateQr(event) {
  // console.log(event.target.value);
  // console.log(elId);
  var canvas = event.target.nextElementSibling
  var qr = new QRious({
    element: canvas,
    size: 150,
    value: event.target.value
  });

  var codeBlock = canvas.nextElementSibling
  console.log(codeBlock)
  codeBlock.innerText = event.target.value + "\n" + event.target.value;

};
