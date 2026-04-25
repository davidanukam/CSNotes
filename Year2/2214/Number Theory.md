## NUMBER THEORY:

Number theory is the part of mathematics which studies the integers and their properties (divisibility, prime numbers, representation in different bases)

### DIVISIBILITY:

Let $a$ and $b$ be integers with $a\neq 0$. We can say that a divides b (written as $a \ | \ b$) if there exists an integer $c$ such that: $b=ac$.

We can then also say that **$b$ is a multiple of $a$** and that **$a$ is a factor of $b$**

so, yea here a would be the denominator in this notation. $a\ | \ b = \frac{b}{a}$

**Properties of divisibility:**

Let $a,b,c$ be integers with $a\neq 0$

- $a\ | \ b \text{ and } a\ | \ c \rightarrow a\ | \ (b+c)$, this is basic math.. if you ever get confused write a as the denominator and b and c as the numerator
- $a\ | \ b\text{ and }a\ | \ c \rightarrow a\ | \ (mb+nc)$ for any integers $m,n$
- $a\ | \ b \rightarrow a\ | \ (b\times c)$ for whatever $c$ is
- $a\ | \ a$ but with 0 excluded
- $a \ |\ b \text{ and }b \ | \ a \rightarrow |a|=|b|$, where $b\ne 0$ (antisymmetric)
- $a\ | \ b \text{ and } b\ | \ c\rightarrow a\ | \ c$ (transitivity)

so, you can say something like $2\ | \ 16$ since $16=2\times 8$

Some proofs if you want to know how we established 2, 5, and 6:

![image.png](attachment:7581aa25-ae67-472a-9a37-98bb7d2bac64:image.png)

Example:

Find all integer $a$ such that: $a\ | \ a^2+2$

![IMG_2167.jpeg](attachment:5811a989-f1f2-4e88-9a8f-baad3cdc27cc:IMG_2167.jpeg)

### INTEGER DIVISION:

For any integer $n$ (the dividend, or numerator) and $d>0$ (the divisor, or denominator), there are two uniquely determined integers $q$ (the quotient) and $r$ (the remainder) with $0\leq r< d$, such that

$n=dq+r$

- for example, if $a=35$ and $b=6$, we have $35=6\times 5 + 5$, where the quotient is 5 and the remainder is 5

To be clear about integer division vs. real division, we introduce the following notation for integer division:

- $n \ div \ d = q = \text{floor}(n/d)$
- $n\ mod \ d = r = n-dq$ (the modulo operation)

For example:

$105/17 = 6.17647...$ which is real division

- so, **floor division** would be: $\text{floor}(105/17)=q=6$ (remove the decimal)
- **modulo operation** would be: $105 \ mod \ 17 = r = 105-(17)(6)=105-102 = 3$

### CONGRUENCE:

Let $m>1$ be an integer. Remember that, for two integers $a$ and $b$, $a\equiv b\ mod \ m$ means that $a$ and $b$ have the same remainder in the integer division by $m$, that is, $a\ mod \ m = b\ mod \ m$

- in simpler terms, we say two numbers are congruent if they leave the same remainder when you divide them by another number. So, if we said $17\equiv 5 \ (mod \ 6)$ is basically saying when you divide 17 by 6 and when you divide 5 by 6 you get the same remainder (5)

The relation $\{(a,b)\in \Z\times\Z\ | \ a\equiv b\ mod\ m\}$ is an equivalence relation on the integers

- meaning, it will be reflexive, symmetric, and transitive
    - $a\equiv a\ mod \ m$ is obviously reflexive
    - If $a\equiv b \ (mod\ m),$ then obviously $b\equiv a \ (mod \ m)$, so it symmetric
    - If $a\equiv b\ mod\ m, b \equiv c \ mod \ m,$ then $a\equiv c\ mod \ m$. so it is transitive

It is important to know that even if your remainder is negative and one is positive, but they have the same base number, they are still congruent

**THEOREM:**

$a\equiv b\ mod\ m$ iff $m\ | \ (a-b)$ iff there is an integer $k$ such that $a=b+km$

- this is basically just different ways of understanding congruence…

Example:

Take $a=17,b=5,$ and $m=6$

- checking congruence: $17\equiv 5\ mod\ 6$ because both 17 and 5 leave a remainder of 5 when divided by 6
- using divisibility: $6\ | \ (17-5)=6\ | \ 12$ which is true, 6 does divide 12 (you get the value 2)
- equation form: $17=5+6k$, where $k=2$

**PROPERTIES OF CONGRUENCE:**

Let $a,b,c,d$ be integers and let $m$ be a positive integer

- Congruence mod m is an equivalence relation on integers
    - meaning, it is reflexive, transitive, and symmetric
- **Compatibility with operations:** If $a\equiv b\ mod\ m$ and $c\equiv d\ mod \ m$
- $a+c\equiv b+d\ mod\ m$
- $ac\equiv bd\ mod\ m$
- $a^n\equiv b^n \ mod \ m$

![some basic proofs… idk if we should know them but he has them written so](attachment:ea2d297b-ece8-4d7a-bc7e-80dfc407582d:IMG_2169.jpeg)

some basic proofs… idk if we should know them but he has them written so

Example:

Find the remainder of $2^{2023}$ divided by 15

![IMG_2170.jpeg](attachment:485f4319-c3df-458c-aa30-96e9c7cb78fd:IMG_2170.jpeg)

^ its important to note that after you reach a remainder of 1, you dont have to write anything after that. i did it so i can show you the cycle continues

also.. you can do something like this:

![image.png](attachment:37f0e57d-834a-4cd5-9b7c-27ff95194975:image.png)

you establish that 505 x 4 = 2020, its missing a 3 so you do 2^2020 . 2^3, so whatever the remainder of 2^3 mod 15 is is the answer. so i guess

## PRIME NUMBERS:

A prime number is a positive integer greater than 1 whose only factors are 1 and itself

- like 2, 3, 7, so on

Every integer greater than 1 can be written uniquely as a prime or as the product of two or more primes, where the prime factors are written in order of nondecreasing size

- so, for example: 100 = 2 x 2 x 5 x 5 → 100 = $2^2\times 5^2$

How do we check if a number is prime?

- If a number $n$ is prime, we basically should test the divisibility by all integers from $2$ up to $\sqrt{n}$

So, if we wanted to check if $n=29$ is prime, we need to see if $\sqrt{29}=5.385$ (we only care about the 5), so we check the divisibility up till 5

- Is it divisible by 2?
    - $29\div 2= 14.5$, not an integer
- Is it divisible by 3?
    - $29\div3 = 9.666$ which is not an integer
- Is it divisible by 4?
    - $29\div4 = 7.25$ not an integer
- Is it divisible by 5?
    - $29\div 5 = 5.8$ not an integer

Since 29 is not divisible by any integer from 2 → 5, therefore, it has no divisors other than 1 and itself

So, it is a prime number

**Theorem:** Let $N$ be an integer, if $N$ is not prime, then $N$ has a factor less than or equal to $\sqrt{N}$

Proof:

Let $N = tk$ where $t,k>1$ (since N is not a prime number)

On the contrary, assume that $t>\sqrt{N}$ and $k>\sqrt{N}$, if we multiply these two, we get:

- $tk>\sqrt{N}\sqrt{N}\rightarrow N>N$ which.. not true.
- Therefore, $t<\sqrt{N}$ or $k<\sqrt{N}$

### EUCLID’S THEOREM:

How many prime numbers? There are infinitely many prime numbers (is what this guy is saying)

How can we prove that this is true? PROOF BY CONTRADICTION.. YAY…

So, let us assume the opposite, let us assume there are finite number of primes

Let us write this as: $P_1,P_2,...,P_k$

Now let us consider a number $n=P_1.P_2.....P_n+1$ (multiply all primes then add a one to it)

This means that $n$ CANNOT be prime, because $n\not\in\{P_1,P_2,...,P_k\}$

This means, $n$ should have a prime factor in order to factor it out of the prime numbers (meaning it does have something you can divide it by)

Let us call this prime factor $P_i$

So, naturally, $P_i$ is going to be one of the prime numbers → $P_i\in\{P_1,P_2,...,P_k\}$

Therefore, since $P_i$ is a factor of $n$ and of course $P_i$ is a factor of the set of prime numbers, this must mean that $P_i$ is a factor of $n-P_1.P_2....P_k$

But, if we look at the previous formula we established, we can see that $n-P_1.P_2.....P_k = 1$

Here is where we have the contradiction:

$$ n-P_1.P_2.....P_k = 1 $$

And we know that $P_i$ should be a factor of the number on the left hand side, we can divide it by $P_i$, which also means we can divide the right hand side by $P_i$ as well

$$ \frac{n-P_1.P_2.....P_k}{P_i} = \frac{1}{P_i} $$

Since $P_i$ is a factor of the number on the left hand side, we should get an integer.

However, you do NOT get an integer on the right hand side. Why?

- $P_i$ is a prime number, and the smallest prime number we have is 2. so 1/ by anything that isn’t one is not going to be an integer. So how can we say $\Z\neq\Z$…? clearly a contradiction

Therefore, there are infinitely many prime numbers!

### **FINDING PRIMES:**

**SIEVE OF ERATOSTHENES:**

To find all primes $\leq N$:

- List all natural numbers from $2$ to $N$
- Remove all the multiples of the first number in the list (2), except itself
- Move to the next number still in the list (3) and remove all its multiples except for itself
- Move to the next number still in the list (5, since 4 has been removed) and remove all its multiplies except itself
- Keep moving to the next number still in the list and removing all its multiples except itself, stopping when that number is $>\sqrt{N}$
- The remaining numbers are all and only primes from 2 to $N$

Example:

Find all primes up to 30:

![IMG_2179.jpeg](attachment:53cbb88d-72bc-479e-b06b-63cd0b3e9c9b:IMG_2179.jpeg)

You wanna know the time complexity of this algo is… cause dont forget this IS a cs course $O(n\log\log n)$ which is crazy crazy

However, while this might be helpful for smaller numbers… the biggest prime number found is $2^{82,589,933}-1$ by some computer volunteered by Patrick Laroche of the Great Interner Mersenne Prime Search (GIMPS). So imagine if you used that algo above to find the prime numbers between 2 and whatever the fart that number is… yea good luck bro see you in 100 years

### MERSENNE PRIMES:

Prime numbers in the form $2^k-1$ is called a Mersenne prime.

If $k$ is prime, $2^k-1$= may or may not be prime

- if $k=5$ (which is prime) → $2^5-1=32-1=31$ which is prime
- if $k=11$(which is prime) → $2^{11}-1=2048-1=2047$ which is not prime $(\frac{2047}{23}=89)$

If $k$ is NOT prime, then surely $2^k-1$ is not prime either

- if $k=10$ (which is not prime) → $2^{10}-1=1024-1=1023$ which is not prime $(\frac{1023}{3}=341)$

![image.png](attachment:e851ef27-b1e0-4b28-ac9b-4d034b6f3373:image.png)

## GREATEST COMMON DIVISOR (GCD):

For integers $a$ and $b$ (not zero), the greatest common divisor, denoted as gcd(a,b) is the LARGEST integer $d$ such that $d \ | \ a$ and $d\ |\ b$

- Integers $a$ and $b$ are relatively prime, or coprime, if $gcd(a,b)=1$
- A set of integers is pairwise coprime if every pair in the set has a gcd of 1
    - Say you have the set $S=\{6,11,13\}$, every pair in this set is going to have a gcd of 1
    - $gcd(6,11)=1$
    - $gcd(6,13)=1$
    - $gcd(11,13)=1$
    - Therefore, this set is pairwise coprime because every pair has a gcd of 1

Well how can we compute gcd? The gcd can be computed using prime factorizations by taking the minimum exponents for each prime

Example:

Find $gcd(24,18)$

![IMG_2339.jpeg](attachment:943b7aa0-61e7-4beb-97af-2cf7f3a4b7fc:IMG_2339.jpeg)

A more difficult one:

Find $gcd(10!, 2^{10}\times3^{10})$

![IMG_2340.jpeg](attachment:f1f2f440-41e4-46fe-a795-69cbd8ab5af6:IMG_2340.jpeg)

Finding the gcd through factorization is not an efficient method, cause sometimes the numbers are just way too big

### EUCLIDEAN ALGORITHM:

1. Divide $a$ by $b$, get remainder $r_0$ $(a\geq b)$, a MUST be ≥ b, if it isn’t immediately swap them
2. Replace $a$ with $b$, $b$ with $r_0$, and repeat until the remainder is 0
3. The last non-zero remainder is the gcd

Example:

Find the $gcd(24,18)$

![IMG_2341.jpeg](attachment:db1c4cd8-4b7d-483b-bee7-743173a9b471:IMG_2341.jpeg)

Find the $gcd(120,700)$

![IMG_2342.jpeg](attachment:aaec6841-d8df-4be1-867b-19b47c5c0f68:IMG_2342.jpeg)

### BEZOUT’S THEOREM:

For integers $a,b$, there exists integers $s,t$ such that:

$$ gcd(a,b)=sa+tb $$

Example:

Find the $gcd(432,126)$

Now, his examples are literally one sentence and make no sense so I am going to explain it a bit longer but it’ll make sense!

![IMG_2343.jpeg](attachment:06ec967f-8bd5-4991-9dcd-05d1984bb0b7:IMG_2343.jpeg)

## LEAST COMMON MULTIPLE:

The smallest positive integer $m$ divisible by both $a$ and $b$. So basically

For integers $a$ and $b$ (not zero), the least common multiple, denoted as $lcm(a,b)$ is the SMALLEST integer $m$ such that $a \ | \ m$ and $b\ |\ m$

There is a theorem you can use to get the lcm

$$ lcm(a,b)=\frac{a\times b}{gcd(a,b)} $$

This is because there is a theorem that states:

Let $a$ and $b$ be positive integers. Then: $a\times b = gcd(a,b)\ .\ lcm(a,b)$

How can we prove this?:

(i ask prof let us even pray he answers bro)

## LINEAR CONGRUENCES:

A congruence of the form $ax\equiv b\ (mod \ m)$, where $a$ and $b$ are integers, $m$ is a positive integer, and $x$ is a variable, called a linear congruence.

The solutions of a linear congruence are all integers $x$ that satisfy the congruence IF AND ONLY IF $gcd(a,m)$ divides $b$

How to solve linear congruence?

1. **Check if a solution exists (by finding the gcd of a and m and seeing if it divides b)**
    
    1. If $gcd(a,m)=1$, then there is only one unique solution modulo m
    2. If $gcd(a,m)\neq 1$:
        1. If $d\not|\ b$, then no solution exists
        2. If $d\ |\ b$, then there are $d$ distinct solutions modulo m
2. **Simplify the congruence**
    
    1. If $gcd(a,m)=d>1$ AND $d\ | \ b$, divide the entire congruence by $d$
        1. $\frac{a}{d}x\equiv\frac{b}{d}\ (mod\ \frac{m}{d})$, which gives us a new congruence such that $gcd(\frac{a}{d},\frac{m}{d})=1$
3. **Find the modular inverse (this only exists IF $gcd(a,m)=1$)**
    
    1. If $gcd(a,m)=1$, the congruence can be solved by multiplying both sides by the modular inverse of $a\ mod\ m$, denoted by $a^{-1}$
    2. The modular inverse $a^{-1}$ is an integer such that:
    
    $$ a.a^{-1}\equiv 1 \ (mod\ m) $$
    

- How do we find the inverse? Using the extended Euclidean Algorithm (you use the coefficient, this will make sense with an example)

1. **Multiply both sides by the inverse**
    
    1. Once the inverse $a^{-1}$ has been found, multiply both sides of the original congruence
    
    $$ x\equiv a^{-1}.b\ (mod\ m) $$
    
2. **General solution**
    
    1. If $gcd(a,m)=1$, the unique solution is:
    
    $$ x\equiv x_0\ (mod\ m) $$
    
    b. If $gcd(a,m)=d>1$ and $d\ |\ b$, there are $d$ solutions
    
    $$ x\equiv x_0,\ x_0+\frac{m}{d},\ x_0+2\frac{m}{d}+\ x_0+(d-1)\frac{m}{d}\ (mod\ m) $$
    

It is important to note that if you have something like $x\equiv a\ mod\ n$, you can rewrite this as an equation: $x=n.k+a$

Examples:

Solve $3x\equiv 4\ mod\ 20$

![IMG_2344.jpeg](attachment:ea79d338-3c9f-45a6-a22c-e6e652a049e4:IMG_2344.jpeg)

Solve $2x\equiv 1\ mod \ 20$

![IMG_2345.jpeg](attachment:cf6b77da-e03b-49d0-9bb1-74e63e476514:IMG_2345.jpeg)

What if we were given the inverse of a number and we had to get its original form?

Consider the following:

$5^{-1}$ in $\text{ mod }7$

![IMG_2346.jpeg](attachment:cfb49fa3-7a23-42c0-bd7d-117b55865693:IMG_2346.jpeg)

An inverse of a modulo m exists IFF $gcd(a,m)=1$

### CHINESE REMAINDER THEOREM:

Let $m,n$ be two coprime integers. For every $a,b\in\Z$, there exists $c\in\Z$ such that the system:

$$ \begin{cases}x\equiv a\ mod\ m\\x\equiv b\ mod\ n\end{cases} $$

is equivalent to the single congruence $x\equiv c\ mod\ mn$. Moreover, if a Bezout identity $sm+tn=1$ is known, $c$ can be determined as $c=a+(b-a)sm=(a-b)tn+b$

Example for this nonsense!

Solve for $x$:

$\begin{cases}x\equiv 2\ mod\ 5\\x\equiv 3\ mod\ 7\end{cases}$

![IMG_2347.jpeg](attachment:d7bf17df-aebc-4e1e-b50c-1323c209412c:IMG_2347.jpeg)

Find the common solutions of the 2 congruences $x\equiv1\ mod\ 3$ and $x\equiv 4\ mod \ 5$

![IMG_2348.jpeg](attachment:1b812718-8f65-459b-a761-c44425b4b1bc:IMG_2348.jpeg)