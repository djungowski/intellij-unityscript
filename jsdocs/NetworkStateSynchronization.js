class NetworkStateSynchronization {


    /**
     * No state data will be synchronized.
     */
    get Off() {}

    /**
     * No state data will be synchronized.
     */
    set Off(value) {}

    /**
     * All packets are sent reliable and ordered.
     */
    get ReliableDeltaCompressed() {}

    /**
     * All packets are sent reliable and ordered.
     */
    set ReliableDeltaCompressed(value) {}

    /**
     * Brute force unreliable state sending.
     */
    get Unreliable() {}

    /**
     * Brute force unreliable state sending.
     */
    set Unreliable(value) {}


}