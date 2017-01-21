class ConnectionTesterStatus {


    /**
     * Some unknown error occurred.
     */
    get Error() {}

    /**
     * Some unknown error occurred.
     */
    set Error(value) {}

    /**
     * Test result undetermined, still in progress.
     */
    get Undetermined() {}

    /**
     * Test result undetermined, still in progress.
     */
    set Undetermined(value) {}

    /**
     * Public IP address detected and game listen port is accessible to the internet.
     */
    get PublicIPIsConnectable() {}

    /**
     * Public IP address detected and game listen port is accessible to the internet.
     */
    set PublicIPIsConnectable(value) {}

    /**
     * Public IP address detected but the port is not connectable from the internet.
     */
    get PublicIPPortBlocked() {}

    /**
     * Public IP address detected but the port is not connectable from the internet.
     */
    set PublicIPPortBlocked(value) {}

    /**
     * Public IP address detected but server is not initialized and no port is listening.
     */
    get PublicIPNoServerStarted() {}

    /**
     * Public IP address detected but server is not initialized and no port is listening.
     */
    set PublicIPNoServerStarted(value) {}

    /**
     * Port-restricted NAT type, can do NAT punchthrough to everyone except symmetric.
     */
    get LimitedNATPunchthroughPortRestricted() {}

    /**
     * Port-restricted NAT type, can do NAT punchthrough to everyone except symmetric.
     */
    set LimitedNATPunchthroughPortRestricted(value) {}

    /**
     * Symmetric NAT type, cannot do NAT punchthrough to other symmetric types nor port restricted type.
     */
    get LimitedNATPunchthroughSymmetric() {}

    /**
     * Symmetric NAT type, cannot do NAT punchthrough to other symmetric types nor port restricted type.
     */
    set LimitedNATPunchthroughSymmetric(value) {}

    /**
     * Full cone type, NAT punchthrough fully supported.
     */
    get NATpunchthroughFullCone() {}

    /**
     * Full cone type, NAT punchthrough fully supported.
     */
    set NATpunchthroughFullCone(value) {}

    /**
     * Address-restricted cone type, NAT punchthrough fully supported.
     */
    get NATpunchthroughAddressRestrictedCone() {}

    /**
     * Address-restricted cone type, NAT punchthrough fully supported.
     */
    set NATpunchthroughAddressRestrictedCone(value) {}


}