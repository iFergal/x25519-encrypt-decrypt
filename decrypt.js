const sodium = require("libsodium-wrappers");
const fs = require("fs");

async function run() {
  await sodium.ready;

  const ciphertext = process.argv[2];
  if (ciphertext === undefined) {
    console.error("Error! Missing ciphertext - usage: node decrypt.js <ciphertext>");
    process.exit(-1);
  }

  const publicKey = fs.readFileSync("ed25519.public");
  const privateKey = fs.readFileSync("ed25519.private");
  
  try {
    const plaintext = sodium.crypto_box_seal_open(
      Buffer.from(ciphertext, "hex"),
      sodium.crypto_sign_ed25519_pk_to_curve25519(publicKey),
      sodium.crypto_sign_ed25519_sk_to_curve25519(privateKey)
    );
    console.log(`Decrypted: ${Buffer.from(plaintext).toString("utf-8")}`);
  } catch (err) {
    console.error(err.message);
  }
}

run();
