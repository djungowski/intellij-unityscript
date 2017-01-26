class Network {
    /**
     * All connected players.
     */
    static get connections() {}

    /**
     * All connected players.
     */
    static set connections(value) {}

    /**
     * The IP address of the connection tester used in Network.TestConnection.
     */
    static get connectionTesterIP() {}

    /**
     * The IP address of the connection tester used in Network.TestConnection.
     */
    static set connectionTesterIP(value) {}

    /**
     * The port of the connection tester used in Network.TestConnection.
     */
    static get connectionTesterPort() {}

    /**
     * The port of the connection tester used in Network.TestConnection.
     */
    static set connectionTesterPort(value) {}

    /**
     * Set the password for the server (for incoming connections).
     */
    static get incomingPassword() {}

    /**
     * Set the password for the server (for incoming connections).
     */
    static set incomingPassword(value) {}

    /**
     * Returns true if your peer type is client.
     */
    static get isClient() {}

    /**
     * Returns true if your peer type is client.
     */
    static set isClient(value) {}

    /**
     * Enable or disable the processing of network messages.
     */
    static get isMessageQueueRunning() {}

    /**
     * Enable or disable the processing of network messages.
     */
    static set isMessageQueueRunning(value) {}

    /**
     * Returns true if your peer type is server.
     */
    static get isServer() {}

    /**
     * Returns true if your peer type is server.
     */
    static set isServer(value) {}

    /**
     * Set the log level for network messages (default is Off).
     */
    static get logLevel() {}

    /**
     * Set the log level for network messages (default is Off).
     */
    static set logLevel(value) {}

    /**
     * Set the maximum amount of connections/players allowed.
     */
    static get maxConnections() {}

    /**
     * Set the maximum amount of connections/players allowed.
     */
    static set maxConnections(value) {}

    /**
     * Get or set the minimum number of ViewID numbers in the ViewID pool given to clients by the server.
     */
    static get minimumAllocatableViewIDs() {}

    /**
     * Get or set the minimum number of ViewID numbers in the ViewID pool given to clients by the server.
     */
    static set minimumAllocatableViewIDs(value) {}

    /**
     * The IP address of the NAT punchthrough facilitator.
     */
    static get natFacilitatorIP() {}

    /**
     * The IP address of the NAT punchthrough facilitator.
     */
    static set natFacilitatorIP(value) {}

    /**
     * The port of the NAT punchthrough facilitator.
     */
    static get natFacilitatorPort() {}

    /**
     * The port of the NAT punchthrough facilitator.
     */
    static set natFacilitatorPort(value) {}

    /**
     * The status of the peer type, i.e. if it is disconnected, connecting, server or client.
     */
    static get peerType() {}

    /**
     * The status of the peer type, i.e. if it is disconnected, connecting, server or client.
     */
    static set peerType(value) {}

    /**
     * Get the local NetworkPlayer instance.
     */
    static get player() {}

    /**
     * Get the local NetworkPlayer instance.
     */
    static set player(value) {}

    /**
     * The IP address of the proxy server.
     */
    static get proxyIP() {}

    /**
     * The IP address of the proxy server.
     */
    static set proxyIP(value) {}

    /**
     * Set the proxy server password.
     */
    static get proxyPassword() {}

    /**
     * Set the proxy server password.
     */
    static set proxyPassword(value) {}

    /**
     * The port of the proxy server.
     */
    static get proxyPort() {}

    /**
     * The port of the proxy server.
     */
    static set proxyPort(value) {}

    /**
     * The default send rate of network updates for all Network Views.
     */
    static get sendRate() {}

    /**
     * The default send rate of network updates for all Network Views.
     */
    static set sendRate(value) {}

    /**
     * Get the current network time (seconds).
     */
    static get time() {}

    /**
     * Get the current network time (seconds).
     */
    static set time(value) {}

    /**
     * Indicate if proxy support is needed, in which case traffic is relayed through the proxy server.
     */
    static get useProxy() {}

    /**
     * Indicate if proxy support is needed, in which case traffic is relayed through the proxy server.
     */
    static set useProxy(value) {}


    /**
     * Query for the next available network view ID number and allocate it (reserve).
     */
    static AllocateViewID() {}

    /**
     * Close the connection to another system.
     */
    static CloseConnection() {}

    /**
     * Connect to the specified host (ip or domain name) and server port.
     */
    static Connect() {}

    /**
     * Destroy the object associated with this view ID across the network.
     */
    static Destroy() {}

    /**
     * Destroy all the objects based on view IDs belonging to this player.
     */
    static DestroyPlayerObjects() {}

    /**
     * Close all open connections and shuts down the network interface.
     */
    static Disconnect() {}

    /**
     * The last average ping time to the given player in milliseconds.
     */
    static GetAveragePing() {}

    /**
     * The last ping time to the given player in milliseconds.
     */
    static GetLastPing() {}

    /**
     * Check if this machine has a public IP address.
     */
    static HavePublicAddress() {}

    /**
     * Initializes security layer.
     */
    static InitializeSecurity() {}

    /**
     * Initialize the server.
     */
    static InitializeServer() {}

    /**
     * Network instantiate a prefab.
     */
    static Instantiate() {}

    /**
     * Remove all RPC functions which belong to this player ID.
     */
    static RemoveRPCs() {}

    /**
     * Remove all RPC functions which belong to given group number.
     */
    static RemoveRPCsInGroup() {}

    /**
     * Set the level prefix which will then be prefixed to all network ViewID numbers.
     */
    static SetLevelPrefix() {}

    /**
     * Enable or disables the reception of messages in a specific group number from a specific player.
     */
    static SetReceivingEnabled() {}

    /**
     * Enables or disables transmission of messages and RPC calls on a specific network group number.
     */
    static SetSendingEnabled() {}

    /**
     * Test this machines network connection.
     */
    static TestConnection() {}

    /**
     * Test the connection specifically for NAT punch-through connectivity.
     */
    static TestConnectionNAT() {}



}