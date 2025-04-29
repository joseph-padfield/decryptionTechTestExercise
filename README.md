# Decryption Tech Test

## Overview

This exercise focuses on implementing a substitution cipher with special properties designed to test both encryption variability and decryption consistency.

## Requirements
- Variable encryption output:
Each time a plaintext message is encrypted, it should produce a different ciphertext — even if the plaintext is identical. The encryption process must introduce randomness or dynamic behavior.
- Stable decryption:
Despite the variability in encryption results, decrypting the ciphertext must always reliably recover the original plaintext, without any loss of information.

## Demonstration
	•	Plaintext: hello world
	•	First encryption: 295245 125524238436 10097379 513 230127770466 38127987424935 30 6213449802582 492075 198746710857 83881572334857
	•	Second encryption: 215233605 4649045868 198746710857 272629233 315675954 73222472421 313810596090 6213449802582 261508830075 7360989291 297
	•	Third encryption: 10935 236196 144886352214753 10097379 11691702 4 15943230 315675954 25 198746710857 216513

In all cases, decrypting any of the ciphertexts returns exactly: hello world

[Test it here](https://joseph-padfield.github.io/decryptionTechTestExercise/)

## Notes
Focus on designing an encryption system that is both non-deterministic (variable outputs) and lossless (perfect decryption).
