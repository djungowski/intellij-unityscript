class TouchScreenKeyboard {
    /**
     * Returns portion of the screen which is covered by the keyboard.
     */
    static get area() {}

    /**
     * Returns portion of the screen which is covered by the keyboard.
     */
    static set area(value) {}

    /**
     * Will text input field above the keyboard be hidden when the keyboard is on screen?
     */
    static get hideInput() {}

    /**
     * Will text input field above the keyboard be hidden when the keyboard is on screen?
     */
    static set hideInput(value) {}

    /**
     * Is touch screen keyboard supported.
     */
    static get isSupported() {}

    /**
     * Is touch screen keyboard supported.
     */
    static set isSupported(value) {}

    /**
     * Returns true whenever any keyboard is completely visible on the screen.
     */
    static get visible() {}

    /**
     * Returns true whenever any keyboard is completely visible on the screen.
     */
    static set visible(value) {}


    /**
     * Opens the native keyboard provided by OS on the screen.
     */
    static Open() {}


    /**
     * Is the keyboard visible or sliding into the position on the screen?
     */
    get active() {}

    /**
     * Is the keyboard visible or sliding into the position on the screen?
     */
    set active(value) {}

    /**
     * Specifies if input process was finished. (Read Only)
     */
    get done() {}

    /**
     * Specifies if input process was finished. (Read Only)
     */
    set done(value) {}

    /**
     * Specified on which display the software keyboard will appear.
     */
    get targetDisplay() {}

    /**
     * Specified on which display the software keyboard will appear.
     */
    set targetDisplay(value) {}

    /**
     * Returns the text displayed by the input field of the keyboard.
     */
    get text() {}

    /**
     * Returns the text displayed by the input field of the keyboard.
     */
    set text(value) {}

    /**
     * Specifies if input process was canceled. (Read Only)
     */
    get wasCanceled() {}

    /**
     * Specifies if input process was canceled. (Read Only)
     */
    set wasCanceled(value) {}


}