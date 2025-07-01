const QRCode = require('qrcode');
const fs = require('fs');

// ✅ QR code එකට encode වෙන්න ඕන text එක
const qrText = 'https://wa.me/940702509233';

// ✅ Pair code එක (ඔයාට dynamic කරන එකත් හැක)
const pairCode = '123-456';

// ✅ QR image එක generate කරලා public/qr.png ලෙස save කරයි
QRCode.toFile('./public/qr.png', qrText, {
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
}, function (err) {
  if (err) {
    console.error('❌ QR code generate කරන්න අසාර්ථක වුණා:', err);
  } else {
    console.log('✅ QR code saved to public/qr.png');
  }
});

// ✅ Pair code එක public/pair-code.txt file එකට ලියන්න
try {
  fs.writeFileSync('./public/pair-code.txt', pairCode, 'utf8');
  console.log('✅ Pair code saved to public/pair-code.txt');
} catch (err) {
  console.error('❌ Pair code save කරන්න අසාර්ථක වුණා:', err);
}
