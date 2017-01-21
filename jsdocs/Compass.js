class Compass {


    /**
     * Used to enable or disable compass. Note, that if you want Input.compass.trueHeading property to contain a valid value, you must also enable location updates by calling Input.location.Start().
     */
    get enabled() {}

    /**
     * Used to enable or disable compass. Note, that if you want Input.compass.trueHeading property to contain a valid value, you must also enable location updates by calling Input.location.Start().
     */
    set enabled(value) {}

    /**
     * Accuracy of heading reading in degrees.
     */
    get headingAccuracy() {}

    /**
     * Accuracy of heading reading in degrees.
     */
    set headingAccuracy(value) {}

    /**
     * The heading in degrees relative to the magnetic North Pole. (Read Only)
     */
    get magneticHeading() {}

    /**
     * The heading in degrees relative to the magnetic North Pole. (Read Only)
     */
    set magneticHeading(value) {}

    /**
     * The raw geomagnetic data measured in microteslas. (Read Only)
     */
    get rawVector() {}

    /**
     * The raw geomagnetic data measured in microteslas. (Read Only)
     */
    set rawVector(value) {}

    /**
     * Timestamp (in seconds since 1970) when the heading was last time updated. (Read Only)
     */
    get timestamp() {}

    /**
     * Timestamp (in seconds since 1970) when the heading was last time updated. (Read Only)
     */
    set timestamp(value) {}

    /**
     * The heading in degrees relative to the geographic North Pole. (Read Only)
     */
    get trueHeading() {}

    /**
     * The heading in degrees relative to the geographic North Pole. (Read Only)
     */
    set trueHeading(value) {}


}