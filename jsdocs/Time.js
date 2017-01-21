class Time {
    /**
     * Slows game playback time to allow screenshots to be saved between frames.
     */
    static get captureFramerate() {}

    /**
     * Slows game playback time to allow screenshots to be saved between frames.
     */
    static set captureFramerate(value) {}

    /**
     * The time in seconds it took to complete the last frame (Read Only).
     */
    static get deltaTime() {}

    /**
     * The time in seconds it took to complete the last frame (Read Only).
     */
    static set deltaTime(value) {}

    /**
     * The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour&#039;s FixedUpdate) are performed.
     */
    static get fixedDeltaTime() {}

    /**
     * The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour&#039;s FixedUpdate) are performed.
     */
    static set fixedDeltaTime(value) {}

    /**
     * The time the latest FixedUpdate has started (Read Only). This is the time in seconds since the start of the game.
     */
    static get fixedTime() {}

    /**
     * The time the latest FixedUpdate has started (Read Only). This is the time in seconds since the start of the game.
     */
    static set fixedTime(value) {}

    /**
     * The total number of frames that have passed (Read Only).
     */
    static get frameCount() {}

    /**
     * The total number of frames that have passed (Read Only).
     */
    static set frameCount(value) {}

    /**
     * The maximum time a frame can take. Physics and other fixed frame rate updates (like MonoBehaviour&#039;s FixedUpdate).
     */
    static get maximumDeltaTime() {}

    /**
     * The maximum time a frame can take. Physics and other fixed frame rate updates (like MonoBehaviour&#039;s FixedUpdate).
     */
    static set maximumDeltaTime(value) {}

    /**
     * The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates.
     */
    static get maximumParticleDeltaTime() {}

    /**
     * The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates.
     */
    static set maximumParticleDeltaTime(value) {}

    /**
     * The real time in seconds since the game started (Read Only).
     */
    static get realtimeSinceStartup() {}

    /**
     * The real time in seconds since the game started (Read Only).
     */
    static set realtimeSinceStartup(value) {}

    /**
     * A smoothed out Time.deltaTime (Read Only).
     */
    static get smoothDeltaTime() {}

    /**
     * A smoothed out Time.deltaTime (Read Only).
     */
    static set smoothDeltaTime(value) {}

    /**
     * The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
     */
    static get time() {}

    /**
     * The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
     */
    static set time(value) {}

    /**
     * The scale at which the time is passing. This can be used for slow motion effects.
     */
    static get timeScale() {}

    /**
     * The scale at which the time is passing. This can be used for slow motion effects.
     */
    static set timeScale(value) {}

    /**
     * The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded.
     */
    static get timeSinceLevelLoad() {}

    /**
     * The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded.
     */
    static set timeSinceLevelLoad(value) {}

    /**
     * The timeScale-independent time in seconds it took to complete the last frame (Read Only).
     */
    static get unscaledDeltaTime() {}

    /**
     * The timeScale-independent time in seconds it took to complete the last frame (Read Only).
     */
    static set unscaledDeltaTime(value) {}

    /**
     * The timeScale-independant time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
     */
    static get unscaledTime() {}

    /**
     * The timeScale-independant time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
     */
    static set unscaledTime(value) {}




}