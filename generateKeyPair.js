const sodium = require("libsodium-wrappers");
const fs = require("fs");

async function run() {
  await sodium.ready;

  const keyPair = sodium.crypto_sign_keypair();
  fs.writeFileSync("ed25519.public", keyPair.publicKey);
  fs.writeFileSync("ed25519.private", keyPair.privateKey);
  console.log(`Ed25519 public key (hex-encoded): ${Buffer.from(keyPair.publicKey).toString("hex")}`);
}

run();
