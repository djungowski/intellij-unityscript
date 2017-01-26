class Input {
    /**
     * Last measured linear acceleration of a device in three-dimensional space. (Read Only)
     */
    static get acceleration() {}

    /**
     * Last measured linear acceleration of a device in three-dimensional space. (Read Only)
     */
    static set acceleration(value) {}

    /**
     * Number of acceleration measurements which occurred during last frame.
     */
    static get accelerationEventCount() {}

    /**
     * Number of acceleration measurements which occurred during last frame.
     */
    static set accelerationEventCount(value) {}

    /**
     * Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables).
     */
    static get accelerationEvents() {}

    /**
     * Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables).
     */
    static set accelerationEvents(value) {}

    /**
     * Is any key or mouse button currently held down? (Read Only)
     */
    static get anyKey() {}

    /**
     * Is any key or mouse button currently held down? (Read Only)
     */
    static set anyKey(value) {}

    /**
     * Returns true the first frame the user hits any key or mouse button. (Read Only)
     */
    static get anyKeyDown() {}

    /**
     * Returns true the first frame the user hits any key or mouse button. (Read Only)
     */
    static set anyKeyDown(value) {}

    /**
     * Should  Back button quit the application?Only usable on Android, Windows Phone or Windows Tablets.
     */
    static get backButtonLeavesApp() {}

    /**
     * Should  Back button quit the application?Only usable on Android, Windows Phone or Windows Tablets.
     */
    static set backButtonLeavesApp(value) {}

    /**
     * Property for accessing compass (handheld devices only). (Read Only)
     */
    static get compass() {}

    /**
     * Property for accessing compass (handheld devices only). (Read Only)
     */
    static set compass(value) {}

    /**
     * This property controls if input sensors should be compensated for screen orientation.
     */
    static get compensateSensors() {}

    /**
     * This property controls if input sensors should be compensated for screen orientation.
     */
    static set compensateSensors(value) {}

    /**
     * The current text input position used by IMEs to open windows.
     */
    static get compositionCursorPos() {}

    /**
     * The current text input position used by IMEs to open windows.
     */
    static set compositionCursorPos(value) {}

    /**
     * The current IME composition string being typed by the user.
     */
    static get compositionString() {}

    /**
     * The current IME composition string being typed by the user.
     */
    static set compositionString(value) {}

    /**
     * Device physical orientation as reported by OS. (Read Only)
     */
    static get deviceOrientation() {}

    /**
     * Device physical orientation as reported by OS. (Read Only)
     */
    static set deviceOrientation(value) {}

    /**
     * Returns default gyroscope.
     */
    static get gyro() {}

    /**
     * Returns default gyroscope.
     */
    static set gyro(value) {}

    /**
     * Controls enabling and disabling of IME input composition.
     */
    static get imeCompositionMode() {}

    /**
     * Controls enabling and disabling of IME input composition.
     */
    static set imeCompositionMode(value) {}

    /**
     * Does the user have an IME keyboard input source selected?
     */
    static get imeIsSelected() {}

    /**
     * Does the user have an IME keyboard input source selected?
     */
    static set imeIsSelected(value) {}

    /**
     * Returns the keyboard input entered this frame. (Read Only)
     */
    static get inputString() {}

    /**
     * Returns the keyboard input entered this frame. (Read Only)
     */
    static set inputString(value) {}

    /**
     * Property for accessing device location (handheld devices only). (Read Only)
     */
    static get location() {}

    /**
     * Property for accessing device location (handheld devices only). (Read Only)
     */
    static set location(value) {}

    /**
     * The current mouse position in pixel coordinates. (Read Only)
     */
    static get mousePosition() {}

    /**
     * The current mouse position in pixel coordinates. (Read Only)
     */
    static set mousePosition(value) {}

    /**
     * Indicates if a mouse device is detected.
     */
    static get mousePresent() {}

    /**
     * Indicates if a mouse device is detected.
     */
    static set mousePresent(value) {}

    /**
     * The current mouse scroll delta. (Read Only)
     */
    static get mouseScrollDelta() {}

    /**
     * The current mouse scroll delta. (Read Only)
     */
    static set mouseScrollDelta(value) {}

    /**
     * Property indicating whether the system handles multiple touches.
     */
    static get multiTouchEnabled() {}

    /**
     * Property indicating whether the system handles multiple touches.
     */
    static set multiTouchEnabled(value) {}

    /**
     * Enables/Disables mouse simulation with touches. By default this option is enabled.
     */
    static get simulateMouseWithTouches() {}

    /**
     * Enables/Disables mouse simulation with touches. By default this option is enabled.
     */
    static set simulateMouseWithTouches(value) {}

    /**
     * Returns true when Stylus Touch is supported by a device or platform.
     */
    static get stylusTouchSupported() {}

    /**
     * Returns true when Stylus Touch is supported by a device or platform.
     */
    static set stylusTouchSupported(value) {}

    /**
     * Number of touches. Guaranteed not to change throughout the frame. (Read Only)
     */
    static get touchCount() {}

    /**
     * Number of touches. Guaranteed not to change throughout the frame. (Read Only)
     */
    static set touchCount(value) {}

    /**
     * Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables).
     */
    static get touches() {}

    /**
     * Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables).
     */
    static set touches(value) {}

    /**
     * Bool value which let&#039;s users check if touch pressure is supported.
     */
    static get touchPressureSupported() {}

    /**
     * Bool value which let&#039;s users check if touch pressure is supported.
     */
    static set touchPressureSupported(value) {}

    /**
     * Returns whether the device on which application is currently running supports touch input.
     */
    static get touchSupported() {}

    /**
     * Returns whether the device on which application is currently running supports touch input.
     */
    static set touchSupported(value) {}


    /**
     * Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables).
     */
    static GetAccelerationEvent() {}

    /**
     * Returns the value of the virtual axis identified by axisName.
     */
    static GetAxis() {}

    /**
     * Returns the value of the virtual axis identified by axisName with no smoothing filtering applied.
     */
    static GetAxisRaw() {}

    /**
     * Returns true while the virtual button identified by buttonName is held down.
     */
    static GetButton() {}

    /**
     * Returns true during the frame the user pressed down the virtual button identified by buttonName.
     */
    static GetButtonDown() {}

    /**
     * Returns true the first frame the user releases the virtual button identified by buttonName.
     */
    static GetButtonUp() {}

    /**
     * Returns an array of strings describing the connected joysticks.
     */
    static GetJoystickNames() {}

    /**
     * Returns true while the user holds down the key identified by name. Think auto fire.
     */
    static GetKey() {}

    /**
     * Returns true during the frame the user starts pressing down the key identified by name.
     */
    static GetKeyDown() {}

    /**
     * Returns true during the frame the user releases the key identified by name.
     */
    static GetKeyUp() {}

    /**
     * Returns whether the given mouse button is held down.
     */
    static GetMouseButton() {}

    /**
     * Returns true during the frame the user pressed the given mouse button.
     */
    static GetMouseButtonDown() {}

    /**
     * Returns true during the frame the user releases the given mouse button.
     */
    static GetMouseButtonUp() {}

    /**
     * Returns object representing status of a specific touch. (Does not allocate temporary variables).
     */
    static GetTouch() {}

    /**
     * Determine whether a particular joystick model has been preconfigured by Unity. (Linux-only).
     */
    static IsJoystickPreconfigured() {}

    /**
     * Resets all input. After ResetInputAxes all axes return to 0 and all buttons return to 0 for one frame.
     */
    static ResetInputAxes() {}



}