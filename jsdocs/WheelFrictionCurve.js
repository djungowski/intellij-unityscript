class WheelFrictionCurve {


    /**
     * Asymptote point slip (default 2).
     */
    get asymptoteSlip() {}

    /**
     * Asymptote point slip (default 2).
     */
    set asymptoteSlip(value) {}

    /**
     * Force at the asymptote slip (default 10000).
     */
    get asymptoteValue() {}

    /**
     * Force at the asymptote slip (default 10000).
     */
    set asymptoteValue(value) {}

    /**
     * Extremum point slip (default 1).
     */
    get extremumSlip() {}

    /**
     * Extremum point slip (default 1).
     */
    set extremumSlip(value) {}

    /**
     * Force at the extremum slip (default 20000).
     */
    get extremumValue() {}

    /**
     * Force at the extremum slip (default 20000).
     */
    set extremumValue(value) {}

    /**
     * Multiplier for the extremumValue and asymptoteValue values (default 1).
     */
    get stiffness() {}

    /**
     * Multiplier for the extremumValue and asymptoteValue values (default 1).
     */
    set stiffness(value) {}


}