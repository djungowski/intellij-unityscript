class LocationService {


    /**
     * Specifies whether location service is enabled in user settings.
     */
    get isEnabledByUser() {}

    /**
     * Specifies whether location service is enabled in user settings.
     */
    set isEnabledByUser(value) {}

    /**
     * Last measured device geographical location.
     */
    get lastData() {}

    /**
     * Last measured device geographical location.
     */
    set lastData(value) {}

    /**
     * Returns location service status.
     */
    get status() {}

    /**
     * Returns location service status.
     */
    set status(value) {}


    /**
     * Starts location service updates.  Last location coordinates could be.
     */
    Start() {}

    /**
     * Stops location service updates. This could be useful for saving battery life.
     */
    Stop() {}

}