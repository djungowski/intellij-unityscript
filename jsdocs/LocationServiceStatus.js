class LocationServiceStatus {


    /**
     * Location service is stopped.
     */
    get Stopped() {}

    /**
     * Location service is stopped.
     */
    set Stopped(value) {}

    /**
     * Location service is initializing, some time later it will switch to.
     */
    get Initializing() {}

    /**
     * Location service is initializing, some time later it will switch to.
     */
    set Initializing(value) {}

    /**
     * Location service is running and locations could be queried.
     */
    get Running() {}

    /**
     * Location service is running and locations could be queried.
     */
    set Running(value) {}

    /**
     * Location service failed (user denied access to location service).
     */
    get Failed() {}

    /**
     * Location service failed (user denied access to location service).
     */
    set Failed(value) {}


}