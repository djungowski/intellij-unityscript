class AudioSpeakerMode {


    /**
     * Channel count is unaffected.
     */
    get Raw() {}

    /**
     * Channel count is unaffected.
     */
    set Raw(value) {}

    /**
     * Channel count is set to 1. The speakers are monaural.
     */
    get Mono() {}

    /**
     * Channel count is set to 1. The speakers are monaural.
     */
    set Mono(value) {}

    /**
     * Channel count is set to 2. The speakers are stereo. This is the editor default.
     */
    get Stereo() {}

    /**
     * Channel count is set to 2. The speakers are stereo. This is the editor default.
     */
    set Stereo(value) {}

    /**
     * Channel count is set to 4. 4 speaker setup. This includes front left, front right, rear left, rear right.
     */
    get Quad() {}

    /**
     * Channel count is set to 4. 4 speaker setup. This includes front left, front right, rear left, rear right.
     */
    set Quad(value) {}

    /**
     * Channel count is set to 5. 5 speaker setup. This includes front left, front right, center, rear left, rear right.
     */
    get Surround() {}

    /**
     * Channel count is set to 5. 5 speaker setup. This includes front left, front right, center, rear left, rear right.
     */
    set Surround(value) {}

    /**
     * Channel count is set to 6. 5.1 speaker setup. This includes front left, front right, center, rear left, rear right and a subwoofer.
     */
    get Mode5point1() {}

    /**
     * Channel count is set to 6. 5.1 speaker setup. This includes front left, front right, center, rear left, rear right and a subwoofer.
     */
    set Mode5point1(value) {}

    /**
     * Channel count is set to 8. 7.1 speaker setup. This includes front left, front right, center, rear left, rear right, side left, side right and a subwoofer.
     */
    get Mode7point1() {}

    /**
     * Channel count is set to 8. 7.1 speaker setup. This includes front left, front right, center, rear left, rear right, side left, side right and a subwoofer.
     */
    set Mode7point1(value) {}

    /**
     * Channel count is set to 2. Stereo output, but data is encoded in a way that is picked up by a Prologic/Prologic2 decoder and split into a 5.1 speaker setup.
     */
    get Prologic() {}

    /**
     * Channel count is set to 2. Stereo output, but data is encoded in a way that is picked up by a Prologic/Prologic2 decoder and split into a 5.1 speaker setup.
     */
    set Prologic(value) {}


}