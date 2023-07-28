"use strict";
// //
const staff = [
    [0, 'Adankwo', 'adankwo.e@'],
    [1, 'Kanokwan', 'kanokwan.s@'],
    [2, 'Aneurin', 'aneurin.s@', 'Supervisor'],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
