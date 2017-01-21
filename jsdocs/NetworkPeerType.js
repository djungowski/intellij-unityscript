class NetworkPeerType {


    /**
     * No client connection running. Server not initialized.
     */
    get Disconnected() {}

    /**
     * No client connection running. Server not initialized.
     */
    set Disconnected(value) {}

    /**
     * Running as server.
     */
    get Server() {}

    /**
     * Running as server.
     */
    set Server(value) {}

    /**
     * Running as client.
     */
    get Client() {}

    /**
     * Running as client.
     */
    set Client(value) {}

    /**
     * Attempting to connect to a server.
     */
    get Connecting() {}

    /**
     * Attempting to connect to a server.
     */
    set Connecting(value) {}


}