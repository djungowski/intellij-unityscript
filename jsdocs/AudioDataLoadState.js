class AudioDataLoadState {


    /**
     * Value returned by AudioClip.loadState for an AudioClip that has no audio data loaded and where loading has not been initiated yet.
     */
    get Unloaded() {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that has no audio data loaded and where loading has not been initiated yet.
     */
    set Unloaded(value) {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that is currently loading audio data.
     */
    get Loading() {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that is currently loading audio data.
     */
    set Loading(value) {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that has succeeded loading its audio data.
     */
    get Loaded() {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that has succeeded loading its audio data.
     */
    set Loaded(value) {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that has failed loading its audio data.
     */
    get Failed() {}

    /**
     * Value returned by AudioClip.loadState for an AudioClip that has failed loading its audio data.
     */
    set Failed(value) {}


}