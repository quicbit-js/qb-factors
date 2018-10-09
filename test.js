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

var test = require('test-kit').tape()
var qbf = require('.')

test('primes', function (t) {
    t.table_assert([
        [ 'lim',                        'exp' ],
        [ 2,     [ 2 ] ],
        [ 3,     [ 2, 3 ] ],
        [ 4,     [ 2, 3 ] ],
        [ 5,     [ 2, 3, 5 ] ],
        '# always grow',
        [ 3,     [ 2, 3, 5 ] ],
        [ 20,    [ 2, 3, 5, 7, 11, 13, 17, 19 ] ],
        [ 3,     [ 2, 3, 5, 7, 11, 13, 17, 19 ] ],
        [ 100,   [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ] ],
    ], qbf.primes)
})


test('factors', function (t) {
    t.table_assert([
        [ 'x',  'exp' ],
        [ 2,    [] ],
        [ 3,    [] ],
        [ 4,    [ 2 ] ],
        [ 5,    [] ],
        [ 6,    [ 2, 3 ] ],
        '# read cache',
        [ 6,    [ 2, 3 ] ],
        [ 8,    [ 2 ] ],
        [ 9,    [ 3 ] ],
        [ 10,   [ 2, 5 ] ],
        [ 15,   [ 3, 5 ] ],
        [ 60, [  2, 3, 5 ] ],
        [ 1001, [ 7, 11, 13 ] ],
        [ 48227, [ 29, 1663 ] ],

    ], qbf.factors)
})
