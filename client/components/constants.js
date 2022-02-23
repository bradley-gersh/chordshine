const MIN_VOL = -50; // dB range is -50 to 0.
const RAMP_TIME_SEC = 0.05; // (sec) 1 second
const CHANGE_TIME_MSEC = 300; // (msec) 3 seconds

export { MIN_VOL, RAMP_TIME_SEC, CHANGE_TIME_MSEC };

// suggested settings:
// 1. Slow waves: RTS = 2, CTM = 6000
// 2. Rhythmic dance: RTS = 0.3, CTM = 500. 0.2/300 a little livelier.
