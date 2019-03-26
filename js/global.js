function generateQr(event, elId) {
  // console.log(event.target.value);
  // console.log(elId);
  var qr = new QRious({
    element: document.getElementById(elId),
    size: 150,
    value: event.target.value
  });
};
