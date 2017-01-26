class ClusterInput {

    /**
     * Add a new VRPN input entry.
     */
    static AddInput() {}

    /**
     * Check the connection status of the device to the VRPN server it connected to.
     */
    static CheckConnectionToServer() {}

    /**
     * Edit an input entry which added via ClusterInput.AddInput.
     */
    static EditInput() {}

    /**
     * Returns the axis value as a continous float.
     */
    static GetAxis() {}

    /**
     * Returns the binary value of a button.
     */
    static GetButton() {}

    /**
     * Return the position of a tracker as a Vector3.
     */
    static GetTrackerPosition() {}

    /**
     * Returns the rotation of a tracker as a Quaternion.
     */
    static GetTrackerRotation() {}

    /**
     * Sets the axis value for this input. Only works for input typed Custom.
     */
    static SetAxis() {}

    /**
     * Sets the button value for this input. Only works for input typed Custom.
     */
    static SetButton() {}

    /**
     * Sets the tracker position for this input. Only works for input typed Custom.
     */
    static SetTrackerPosition() {}

    /**
     * Sets the tracker rotation for this input. Only works for input typed Custom.
     */
    static SetTrackerRotation() {}



}