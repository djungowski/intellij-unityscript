class RPCMode {


    /**
     * Sends to the server only.
     */
    get Server() {}

    /**
     * Sends to the server only.
     */
    set Server(value) {}

    /**
     * Sends to everyone except the sender.
     */
    get Others() {}

    /**
     * Sends to everyone except the sender.
     */
    set Others(value) {}

    /**
     * Sends to everyone except the sender and adds to the buffer.
     */
    get OthersBuffered() {}

    /**
     * Sends to everyone except the sender and adds to the buffer.
     */
    set OthersBuffered(value) {}

    /**
     * Sends to everyone.
     */
    get All() {}

    /**
     * Sends to everyone.
     */
    set All(value) {}

    /**
     * Sends to everyone and adds to the buffer.
     */
    get AllBuffered() {}

    /**
     * Sends to everyone and adds to the buffer.
     */
    set AllBuffered(value) {}


}