# qb-factors

Calculate primes and factors with caching.

# install

npm install qb-factors

# usage

primes(x) returns up to and including the value passed in:

    let qbf = require('qb-factors')
    qbf.primes(37)
    > [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]
    

factors(x) returns prime factors *other than* 1 and the value passed in: 

    qbf.factors(37)
    > []
    
    qbf.factors(88)
    > [ 2, 11 ] 
   


