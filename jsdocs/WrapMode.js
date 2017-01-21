class WrapMode {


    /**
     * When time reaches the end of the animation clip, the clip will automatically stop playing and time will be reset to beginning of the clip.
     */
    get Once() {}

    /**
     * When time reaches the end of the animation clip, the clip will automatically stop playing and time will be reset to beginning of the clip.
     */
    set Once(value) {}

    /**
     * When time reaches the end of the animation clip, time will continue at the beginning.
     */
    get Loop() {}

    /**
     * When time reaches the end of the animation clip, time will continue at the beginning.
     */
    set Loop(value) {}

    /**
     * When time reaches the end of the animation clip, time will ping pong back between beginning and end.
     */
    get PingPong() {}

    /**
     * When time reaches the end of the animation clip, time will ping pong back between beginning and end.
     */
    set PingPong(value) {}

    /**
     * Reads the default repeat mode set higher up.
     */
    get Default() {}

    /**
     * Reads the default repeat mode set higher up.
     */
    set Default(value) {}

    /**
     * Plays back the animation. When it reaches the end, it will keep playing the last frame and never stop playing.
     */
    get ClampForever() {}

    /**
     * Plays back the animation. When it reaches the end, it will keep playing the last frame and never stop playing.
     */
    set ClampForever(value) {}


}