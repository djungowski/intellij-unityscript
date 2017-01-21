class AudioSampleRateSetting {


    /**
     * Do not change the sample rate of the imported audio file. The sample rate will be preserved for the imported AudioClip.
     */
    get PreserveSampleRate() {}

    /**
     * Do not change the sample rate of the imported audio file. The sample rate will be preserved for the imported AudioClip.
     */
    set PreserveSampleRate(value) {}

    /**
     * Let Unity deduce the optimal sample rate for the AudioClip being imported. The audio file will be analysed and a minimal sample rate chosen while still preserving audio quality.
     */
    get OptimizeSampleRate() {}

    /**
     * Let Unity deduce the optimal sample rate for the AudioClip being imported. The audio file will be analysed and a minimal sample rate chosen while still preserving audio quality.
     */
    set OptimizeSampleRate(value) {}

    /**
     * Override the sample rate of the imported audio file with a custom value.
     */
    get OverrideSampleRate() {}

    /**
     * Override the sample rate of the imported audio file with a custom value.
     */
    set OverrideSampleRate(value) {}


}