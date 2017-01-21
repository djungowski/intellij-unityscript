class NetworkConnectionError {


    /**
     * No error occurred.
     */
    get NoError() {}

    /**
     * No error occurred.
     */
    set NoError(value) {}

    /**
     * We presented an RSA public key which does not match what the system we connected to is using.
     */
    get RSAPublicKeyMismatch() {}

    /**
     * We presented an RSA public key which does not match what the system we connected to is using.
     */
    set RSAPublicKeyMismatch(value) {}

    /**
     * The server is using a password and has refused our connection because we did not set the correct password.
     */
    get InvalidPassword() {}

    /**
     * The server is using a password and has refused our connection because we did not set the correct password.
     */
    set InvalidPassword(value) {}

    /**
     * Connection attempt failed, possibly because of internal connectivity problems.
     */
    get ConnectionFailed() {}

    /**
     * Connection attempt failed, possibly because of internal connectivity problems.
     */
    set ConnectionFailed(value) {}

    /**
     * The server is at full capacity, failed to connect.
     */
    get TooManyConnectedPlayers() {}

    /**
     * The server is at full capacity, failed to connect.
     */
    set TooManyConnectedPlayers(value) {}

    /**
     * We are banned from the system we attempted to connect to (likely temporarily).
     */
    get ConnectionBanned() {}

    /**
     * We are banned from the system we attempted to connect to (likely temporarily).
     */
    set ConnectionBanned(value) {}

    /**
     * We are already connected to this particular server (can happen after fast disconnect/reconnect).
     */
    get AlreadyConnectedToServer() {}

    /**
     * We are already connected to this particular server (can happen after fast disconnect/reconnect).
     */
    set AlreadyConnectedToServer(value) {}

    /**
     * Cannot connect to two servers at once. Close the connection before connecting again.
     */
    get AlreadyConnectedToAnotherServer() {}

    /**
     * Cannot connect to two servers at once. Close the connection before connecting again.
     */
    set AlreadyConnectedToAnotherServer(value) {}

    /**
     * Internal error while attempting to initialize network interface. Socket possibly already in use.
     */
    get CreateSocketOrThreadFailure() {}

    /**
     * Internal error while attempting to initialize network interface. Socket possibly already in use.
     */
    set CreateSocketOrThreadFailure(value) {}

    /**
     * Incorrect parameters given to Connect function.
     */
    get IncorrectParameters() {}

    /**
     * Incorrect parameters given to Connect function.
     */
    set IncorrectParameters(value) {}

    /**
     * No host target given in Connect.
     */
    get EmptyConnectTarget() {}

    /**
     * No host target given in Connect.
     */
    set EmptyConnectTarget(value) {}

    /**
     * Client could not connect internally to same network NAT enabled server.
     */
    get InternalDirectConnectFailed() {}

    /**
     * Client could not connect internally to same network NAT enabled server.
     */
    set InternalDirectConnectFailed(value) {}

    /**
     * The NAT target we are trying to connect to is not connected to the facilitator server.
     */
    get NATTargetNotConnected() {}

    /**
     * The NAT target we are trying to connect to is not connected to the facilitator server.
     */
    set NATTargetNotConnected(value) {}

    /**
     * Connection lost while attempting to connect to NAT target.
     */
    get NATTargetConnectionLost() {}

    /**
     * Connection lost while attempting to connect to NAT target.
     */
    set NATTargetConnectionLost(value) {}

    /**
     * NAT punchthrough attempt has failed. The cause could be a too restrictive NAT implementation on either endpoints.
     */
    get NATPunchthroughFailed() {}

    /**
     * NAT punchthrough attempt has failed. The cause could be a too restrictive NAT implementation on either endpoints.
     */
    set NATPunchthroughFailed(value) {}


}