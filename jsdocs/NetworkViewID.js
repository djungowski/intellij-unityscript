class NetworkViewID {
    /**
     * Represents an invalid network view ID.
     */
    static get unassigned() {}

    /**
     * Represents an invalid network view ID.
     */
    static set unassigned(value) {}



    /**
     * True if instantiated by me.
     */
    get isMine() {}

    /**
     * True if instantiated by me.
     */
    set isMine(value) {}

    /**
     * The NetworkPlayer who owns the NetworkView. Could be the server.
     */
    get owner() {}

    /**
     * The NetworkPlayer who owns the NetworkView. Could be the server.
     */
    set owner(value) {}


    /**
     * Returns a formatted string with details on this NetworkViewID.
     */
    ToString() {}

}