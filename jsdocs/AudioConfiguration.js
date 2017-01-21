class AudioConfiguration {


    /**
     * The length of the DSP buffer in samples determining the latency of sounds by the audio output device.
     */
    get dspBufferSize() {}

    /**
     * The length of the DSP buffer in samples determining the latency of sounds by the audio output device.
     */
    set dspBufferSize(value) {}

    /**
     * The current maximum number of simultaneously audible sounds in the game.
     */
    get numRealVoices() {}

    /**
     * The current maximum number of simultaneously audible sounds in the game.
     */
    set numRealVoices(value) {}

    /**
     * The  maximum number of managed sounds in the game. Beyond this limit sounds will simply stop playing.
     */
    get numVirtualVoices() {}

    /**
     * The  maximum number of managed sounds in the game. Beyond this limit sounds will simply stop playing.
     */
    set numVirtualVoices(value) {}

    /**
     * The current sample rate of the audio output device used.
     */
    get sampleRate() {}

    /**
     * The current sample rate of the audio output device used.
     */
    set sampleRate(value) {}

    /**
     * The current speaker mode used by the audio output device.
     */
    get speakerMode() {}

    /**
     * The current speaker mode used by the audio output device.
     */
    set speakerMode(value) {}


}