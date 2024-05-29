const sodium = require("libsodium-wrappers");

async function run() {
  await sodium.ready;

  const [ publicKeyHex, plaintext ] = process.argv.slice(2);
  if (publicKeyHex === undefined || plaintext === undefined) {
    console.error("Error! Hex public key and plaintext must be passed: node encrypt.js <publicKeyHex> <plaintext>");
    process.exit(-1);
  }

  const publicKey = sodium.crypto_sign_ed25519_pk_to_curve25519(Buffer.from(publicKeyHex, "hex"));
  const ciphertext = sodium.crypto_box_seal(plaintext, publicKey);
  console.log(`Hex encoded ciphertext: ${Buffer.from(ciphertext).toString("hex")}`);
}

run();
