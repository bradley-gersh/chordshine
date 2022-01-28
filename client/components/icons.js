import React from "react";

// Glyphs based on the Bravura music font by Daniel Spreadbury

const Notehead = () => (
  <svg viewBox="0 0 100 100">
    <path
      d="M 97 -125
         c -54 0 -97 31 -97 83
         c 0 86 88 167 198 167
         c 57 0 97 -32 97 -83
         c 0 -85 -109 -167 -198 -167
         z"
      transform="matrix(1 0 0 -1 0 3) scale(0.005)"
    />
  </svg>
);

const Treble = () => (
  <svg viewBox="0 0 100 100" transform="translate(10, -15)">
    <path
      d="M 376,415
         l 25,-145
         c 3,-18 3,-18 29,-18
         c 147 0 241 -113 241 -241
         c 0 -113 -67 -198 -168 -238
         c -14 -6 -15 -5 -13 -17
         c 11 -62 29 -157 29 -214
         c 0 -170 -130 -200 -197 -200
         c -151 0 -190 98 -190 163
         c 0 62 40 115 107 115
         c 61 0 96 -47 96 -102
         c 0 -58 -36 -85 -67 -94
         c -23 -7 -32 -10 -32 -17
         c 0 -13 26 -29 80 -29
         c 59 0 159 18 159 166
         c 0 47 -15 134 -27 201
         c -2 12 -4 11 -15 9
         c -20 -4 -46 -6 -69 -6
         c -245 0 -364 165 -364 339
         c 0 202 153 345 297 464
         c 12 10 11 12 9 24
         c -7 41 -14 106 -14 164
         c 0 104 24 229 98 311
         c 20 22 51 48 65 48
         c 11 0 37 -28 52 -50
         c 41 -60 65 -146 65 -233
         c 0 -153 -82 -280 -190 -381
         c -6 -6 -8 -7 -6 -19
         z
         M 470 943
         c -61 0 -133 -96 -133 -252
         c 0 -32 2 -66 6 -92
         c 2 -13 6 -14 13 -8
         c 79 69 174 159 174 270
         c 0 55 -27 82 -60 82
         z
         M 361 262
         l -21 128
         c -2 11 -4 12 -14 4
         c -47 -38 -93 -75 -153 -142
         c -83 -94 -93 -173 -93 -232
         c 0 -139 113 -236 288 -236
         c 20 0 40 2 56 5
         c 15 3 16 3 14 14l-50 298
         c -2 11 -4 12 -20 8
         c -61 -17 -100 -60 -100 -117
         c 0 -46 30 -89 72 -107
         c 7 -3 15 -6 15 -13
         c 0 -6 -4 -11 -12 -11
         c -7 0 -19 3 -27 6
         c -68 23 -115 87 -115 177
         c 0 85 57 164 145 194
         c 18 6 18 5 15 24
         z
         M 430 103l49 -285
         c 2 -12 4 -12 16 -6
         c 56 28 94 79 94 142
         c 0 88 -67 156 -148 163
         c -12 1 -13 -2 -11 -14
         z"
      transform="matrix(1 0 0 -1 0 3.5) scale(0.0032)"
    />
  </svg>
);

const Bass = () => (
  <svg viewBox="0 0 100 100" transform="translate(15, -5)">
    <path
      d="M 252 262
         c 173 0 279 -116 279 -290
         c 0 -304 -260 -482 -506 -602
         c -6 -3 -12 -5 -17 -5
         c -9 0 -13 6 -13 12
         c 0 8 6 13 15 18
         c 233 133 371 289 371 568
         c 0 157 -46 261 -152 261
         c -102 0 -162 -73 -162 -113
         c 0 -10 3 -18 16 -18
         s 23 7 50 7
         c 49 0 96 -40 96 -104
         c 0 -62 -43 -106 -106 -106
         c -81 0 -123 69 -123 149
         c 0 96 78 223 252 223
         z
         M 629 180
         c 31 0 55 -24 55 -55
         s -24 -55 -55 -55
         s -55 24 -55 55
         s 24 55 55 55
         z
         M 630 -71
         c 31 0 54 -23 54 -54
         s -23 -54 -54 -54
         s -54 23 -54 54
         s 23 54 54 54
         z"
      transform="matrix(1 0 0 -1 0 1.4) scale(0.0035)"
    />
  </svg>
);

const Flat = () => (
  <svg height="40" width="20">
    <path
      d="M 12,-170
         c -8,10 -12,581 -12,581
         c 1,18 17,28 31,28
         c 10,0 19,-6 19,-17
         c 0,-20 -6,-260 -7,-282
         c 0,-7 4,-14 11,-17
         c 2,-1 3,-1 5,-1
         c 5,0 16,9 22,14
         c 14,9 38,17 55,17
         c 46,-3 90,-39 90,-96
         c 0,-46 -31,-107 -120,-169
         c -25,-17 -49,-44 -79,-61
         c 0,0 -3,-2 -6,-2
         s -6,1 -9,5
         z
         M 47 -81
         c 0,-5 2,-15 11,-15
         c 3,0 6,1 10,3
         c 43,27 89,81 89,135
         c 0,25 -12,58 -41,58
         c -23,0 -63,-29 -70,-49
         c -1,-4 -2,-16 -2,-32
         c 0,-40 3,-100 3,-100
         z"
      transform="matrix(1 0 0 -1 0 25) scale(0.05)"
    />{" "}
  </svg>
);

const Natural = () => (
  <svg height="40" width="20">
    <path
      d="M12 -170c-8 10 -12 581 -12 581c1 18 17 28 31 28c10 0 19 -6 19 -17c0 -20 -6 -260 -7 -282c0 -7 4 -14 11 -17c2 -1 3 -1 5 -1c5 0 16 9 22 14c14 9 38 17 55 17c46 -3 90 -39 90 -96c0 -46 -31 -107 -120 -169c-25 -17 -49 -44 -79 -61c0 0 -3 -2 -6 -2s-6 1 -9 5z
  M47 -81c0 -5 2 -15 11 -15c3 0 6 1 10 3c43 27 89 81 89 135c0 25 -12 58 -41 58c-23 0 -63 -29 -70 -49c-1 -4 -2 -16 -2 -32c0 -40 3 -100 3 -100z"
      transform="matrix(1 0 0 -1 0 25) scale(0.05)"
    />{" "}
  </svg>
);

const Sharp = () => (
  <svg height="40" width="20">
    <path
      d="M237 118l-26 -10c-8 -3 -13 -22 -13 -29v-93c0 -12 7 -18 13 -18l26 10c2 1 3 1 5 1c4 0 7 -3 7 -8v-71c0 -6 -5 -14 -12 -17c0 0 -21 -8 -28 -11s-11 -15 -11 -23v-142c0 -6 -6 -11 -17 -11c-7 0 -13 5 -13 11v125c0 6 -5 18 -14 18l-2 -1h-1l-61 -25
c-5 -2 -10 -9 -10 -22v-139c0 -6 -7 -11 -17 -11c-7 0 -13 5 -13 11v123c0 5 -5 16 -12 16c-1 0 -2 0 -3 -1c-9 -3 -23 -9 -24 -9l-2 -1c-6 0 -9 3 -9 9v71c0 6 5 14 12 16c0 0 21 9 27 11c6 3 11 12 11 23v99c0 8 -6 18 -14 18l-1 -1c-8 -4 -23 -10 -24 -10l-2 -1
c-6 0 -9 3 -9 9v71c0 6 5 14 12 16c0 0 20 8 26 11s12 13 12 27v135c0 6 6 11 16 11c7 0 14 -5 14 -11v-120c0 -8 3 -20 12 -20c17 4 51 18 63 25c9 6 12 19 13 29v130c0 6 6 11 16 11c8 0 14 -5 14 -11v-122c0 -8 7 -13 14 -13c5 1 25 9 25 9c2 1 3 1 5 1c4 0 7 -3 7 -8
v-71c0 -6 -5 -14 -12 -17zM168 -45c2 9 4 37 4 64s-2 52 -4 57c-2 4 -8 6 -15 6c-25 0 -71 -21 -73 -38c-2 -8 -3 -43 -3 -74c0 -24 1 -46 3 -50c1 -3 6 -5 12 -5c23 0 70 20 76 40z"
      transform="matrix(1 0 0 -1 0 25) scale(0.05)"
    />
  </svg>
);

export { Notehead, Treble, Bass, Flat, Sharp, Natural };
