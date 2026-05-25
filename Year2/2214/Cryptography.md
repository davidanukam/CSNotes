## CRYPTOGRAPHY:

Cryptography means “secret writing”, derived from ‘crypto’ (secret) and ‘graphy’ (writing),,, wow

A **cipher** is an algorithm that converts plaintext (readable text) into ciphertext (gibberish) using a key

**Encryption** is the process of converting plaintext to ciphertext; **decryption** reverses it

### CEASER CIPHER:

Julius Caesar used this cipher by shifting letters forwards by 3 positions (e.g., A → D, B → E, C → F…)

Mathematically:

- Letters are mapped to numbers (A → 0, B → 1, C → 2, …, Z → 25)
- **Encryption:** $e(x)=(x+3)\ mod\ 26$
- **Decryption:** $d(x)=(x-3)\ mod\ 26$

Example:

Encrypt the message “Socrates is mortal” using the Caesar Cipher

![IMG_2350.jpeg](attachment:5d530cc4-77c9-4b6b-bb3c-95d872c9cabe:IMG_2350.jpeg)

### AFFINE CIPHERS:

This just generalizes the Caesar cipher to functions of the form $e(x)=(ax+b)\ mod\ 26$

where $a,b$ are arbitrary integers, with the only condition that the resulting $e$ be bijective

The pair $(a,b)$ is called the **key** of the affine cipher

Theorem: $e(x)=ax+b\ mod\ 26$ is bijective IF AND ONLY IF $gcd(a,26)=1$, and in that case, find an inverse function (which is the decryption function)

Proof:

First, bijective means that every output has EXACTLY one input. No overlaps, no missing outputs

For $e(x)$ to be reversible:

- Each letter must map to a unique encrypted letter
- No two letters can encrypt to the same letter (so both A and N cannot map to → B)

If the $gcd(a,26)\ne 1$, multiple inputs collide to the same output

- For example, let $a=2, b=0.$ Then, $e(x)=2x\ mod\ 26$
- “A” $(x=0)\rightarrow 0$ (”A”), “N” $(x=13)=26\ mod\ 26=0$ (”A”)
- Collision occurs!

If $gcd(a,26)=1$, solve for $x$:

$$ y\equiv ax+b\ mod\ 26 $$

Subtract $b$, then multiply by $a^{-1}$:

$$ x\equiv a^{-1}(y-b)\ mod\ 26 $$

Inverse is the number such that $a.a^{-1}\equiv 1\ mod\ 26$

![where y represents the encrypted number and x represents the original number](attachment:bf40f097-3710-44bf-a3a1-293a3a0f970a:image.png)

where y represents the encrypted number and x represents the original number

### SUBSTITUTION CIPHER:

Substitution ciphers preserve letter frequencies. Example, the most common letter in English is E, so if your cipher translates E to an X, then X will show up the most frequently in the ciphertext.

So, attackers can exploit frequency in order to break the cipher

### PUBLIC VS PRIVATE KEY:

Affine ciphers are private key cryptosystems

**Private keys:** The same key is used to encrypt and decrypt a message

- Kinda like a physical lock and key → only people with the key can open it

**Public key:** There are two types of keys:

- **Public key (shared):** Anyone can use it to encrypt a message
- **Private key (secret):** Only the owner can decrypt a message
    - Kinda like a mailbox, anyone can drop off mail in a mailbox, but only the owner can open it

Therefore, everyone can have a public encryption key. The only key that needs to be kept private is the decryption key.

### THE RSA CRYPTOSYSTEM:

The encryption key (public) is a pair of integers $(n,e)$ where $n=pq$ (the modulus) is the product of two large primes, and $e$ (the exponent) is coprime with the product $(p-1)(q-1)$

The private key is going to be the pair of integers $(n,d)$

So:

- Choose two primes $p,q$ and keep them secret
- Compute $n=pq$ and release it as part of the public key
- Compute $k=lcm(p-1,q-1)$ and keep it a secret
- Choose an integer $e$ such that $1<e<k$ AND $gcd(e,k)=1$ and release it as part of the public key
- Compute $d\equiv e^{-1}\ mod\ k$ (e.g., Euclid + Bezout: $d$ is a Bezout coefficient for $e$ in the Bezout identity $de+tk=1=gcd(e,k)$) and keep it a secret

**Encryption:** $e(x)=x^e\ mod\ n$ (anyone can encrypt a message since $e,n$ are known)

**Decryption:** $d(y)=y^d\ mod\ n$ (only people who can know $d$ can use this function)

To encrypt the message $x$, we compute $y=e(x)=x^e\ mod\ n$ (y is the encrypted message)

To decrypt the message $y$, we compute $x=d(y)=y^d\ mod\ n=(x^e)^d\ mod\ n$

Example:

![IMG_2352.jpeg](attachment:d64aab39-aa03-43ae-97a4-f579f8807934:IMG_2352.jpeg)