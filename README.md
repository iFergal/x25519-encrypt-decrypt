### Setup
```
~ npm install
```

### Generate keys
```
~ node generateKeyPair.js

Ed25519 public key (hex-encoded): f687a57de6214954218ae776a080665e3d95d9d75e421cf334881de19172dbe3
```

Two new files will be generated on the file system `ed25519.public` and `ed25519.private`, which will be used by the decrypt function.

The hex encoded public key can be shared to allow the other party to encrypt. In this example, it is `f687a57de6214954218ae776a080665e3d95d9d75e421cf334881de19172dbe3`.

### Decrypt

Once encrypted, the ciphertext can be decrypted.
Example ciphertext: `90aa48ad4500b9f7dc200d60334eddf4d65140f5d43385ed75e1ad7e3ed4c5174f774c8f7a234bde0614d13e42637c34cb21b5fa41650412c1b0f9ed693de2f0cc7831e329a391a0167898b07f62e017`

To decrypt using `ed25519.public` and `ed25519.private`:
```
~ node decrypt.js 90aa48ad4500b9f7dc200d60334eddf4d65140f5d43385ed75e1ad7e3ed4c5174f774c8f7a234bde0614d13e42637c34cb21b5fa41650412c1b0f9ed693de2f0cc7831e329a391a0167898b07f62e017

Decrypted: Dek6uSntnEsfeCn1LFkDg4YHWQgj01VD
```

The example result is: `Dek6uSntnEsfeCn1LFkDg4YHWQgj01VD`.
