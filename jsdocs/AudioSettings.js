class AudioSettings {
    /**
     * Returns the speaker mode capability of the current audio driver. (Read Only)
     */
    static get driverCapabilities() {}

    /**
     * Returns the speaker mode capability of the current audio driver. (Read Only)
     */
    static set driverCapabilities(value) {}

    /**
     * Returns the current time of the audio system.
     */
    static get dspTime() {}

    /**
     * Returns the current time of the audio system.
     */
    static set dspTime(value) {}

    /**
     * Get the mixer&#039;s current output rate.
     */
    static get outputSampleRate() {}

    /**
     * Get the mixer&#039;s current output rate.
     */
    static set outputSampleRate(value) {}

    /**
     * Gets the current speaker mode. Default is 2 channel stereo.
     */
    static get speakerMode() {}

    /**
     * Gets the current speaker mode. Default is 2 channel stereo.
     */
    static set speakerMode(value) {}


    /**
     * Returns the current configuration of the audio device and system. The values in the struct may then be modified and reapplied via AudioSettings.Reset.
     */
    static GetConfiguration() {}

    /**
     * Get the mixer&#039;s buffer size in samples.
     */
    static GetDSPBufferSize() {}

    /**
     * Performs a change of the device configuration. In response to this the AudioSettings.OnAudioConfigurationChanged delegate is invoked with the argument deviceWasChanged=false. It cannot be guaranteed that the exact settings specified can be used, but the an attempt is made to use the closest match supported by the system.
     */
    static Reset() {}



}