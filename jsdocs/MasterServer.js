class MasterServer {
    /**
     * Report this machine as a dedicated server.
     */
    static get dedicatedServer() {}

    /**
     * Report this machine as a dedicated server.
     */
    static set dedicatedServer(value) {}

    /**
     * The IP address of the master server.
     */
    static get ipAddress() {}

    /**
     * The IP address of the master server.
     */
    static set ipAddress(value) {}

    /**
     * The connection port of the master server.
     */
    static get port() {}

    /**
     * The connection port of the master server.
     */
    static set port(value) {}

    /**
     * Set the minimum update rate for master server host information update.
     */
    static get updateRate() {}

    /**
     * Set the minimum update rate for master server host information update.
     */
    static set updateRate(value) {}


    /**
     * Clear the host list which was received by MasterServer.PollHostList.
     */
    static ClearHostList() {}

    /**
     * Check for the latest host list received by using MasterServer.RequestHostList.
     */
    static PollHostList() {}

    /**
     * Register this server on the master server.
     */
    static RegisterHost() {}

    /**
     * Request a host list from the master server.
     */
    static RequestHostList() {}

    /**
     * Unregister this server from the master server.
     */
    static UnregisterHost() {}



}