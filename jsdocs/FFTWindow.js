class FFTWindow {


    /**
     * W[n] = 1.0.
     */
    get Rectangular() {}

    /**
     * W[n] = 1.0.
     */
    set Rectangular(value) {}

    /**
     * W[n] = TRI(2n/N).
     */
    get Triangle() {}

    /**
     * W[n] = TRI(2n/N).
     */
    set Triangle(value) {}

    /**
     * W[n] = 0.54 - (0.46 * COS(n/N) ).
     */
    get Hamming() {}

    /**
     * W[n] = 0.54 - (0.46 * COS(n/N) ).
     */
    set Hamming(value) {}

    /**
     * W[n] = 0.5 * (1.0 - COS(n/N) ).
     */
    get Hanning() {}

    /**
     * W[n] = 0.5 * (1.0 - COS(n/N) ).
     */
    set Hanning(value) {}

    /**
     * W[n] = 0.42 - (0.5 * COS(n/N) ) + (0.08 * COS(2.0 * n/N) ).
     */
    get Blackman() {}

    /**
     * W[n] = 0.42 - (0.5 * COS(n/N) ) + (0.08 * COS(2.0 * n/N) ).
     */
    set Blackman(value) {}

    /**
     * W[n] = 0.35875 - (0.48829 * COS(1.0 * n/N)) + (0.14128 * COS(2.0 * n/N)) - (0.01168 * COS(3.0 * n/N)).
     */
    get BlackmanHarris() {}

    /**
     * W[n] = 0.35875 - (0.48829 * COS(1.0 * n/N)) + (0.14128 * COS(2.0 * n/N)) - (0.01168 * COS(3.0 * n/N)).
     */
    set BlackmanHarris(value) {}


}