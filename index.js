// Software License Agreement (ISC License)
//
// Copyright (c) 2018, Matthew Voss
//
// Permission to use, copy, modify, and/or distribute this software for
// any purpose with or without fee is hereby granted, provided that the
// above copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// return the list of all primes *at least* to the given limit (cached and sorted low to high)
var PRIMES = [2]
function primes (lim) {
    var ret = PRIMES
    var p = PRIMES[PRIMES.length - 1]
    if (p  >= lim) {
        return PRIMES
    }

    var i = ~~(p/2)
    main_loop: while (true) {
        p = i * 2 + 1
        if (p > lim) {
            return ret
        }
        i++
        for (var j=0; j<ret.length; j++) {
            var d = p/ret[j]
            if (d === ~~d) {
                continue main_loop
            }
        }
        ret.push(p)
    }
}

// return all prime factors of integer x (other than 1 and x) - cached and sorted low to high
var FACTORS = []
function factors (x) {
    var ret = FACTORS[x]
    if (!ret) {
        ret = []
        var lim = ~~(x/2)
        var pr = primes(lim)
        var f = 0
        for (var i=0; pr[i] <= lim; i++) {
            f = x/pr[i]
            if (f === ~~f) {
                ret.push(pr[i])
            }
        }
        FACTORS[x] = ret
    }
    return ret
}

module.exports = {
    primes: primes,
    factors: factors,
}
