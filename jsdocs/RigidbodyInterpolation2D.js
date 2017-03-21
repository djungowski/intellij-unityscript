class RigidbodyInterpolation2D {


    /**
     * Do not apply any smoothing to the object&#039;s movement.
     */
    get None() {}

    /**
     * Do not apply any smoothing to the object&#039;s movement.
     */
    set None(value) {}

    /**
     * Smooth movement based on the object&#039;s positions in previous frames.
     */
    get Interpolate() {}

    /**
     * Smooth movement based on the object&#039;s positions in previous frames.
     */
    set Interpolate(value) {}

    /**
     * Smooth an object&#039;s movement based on an estimate of its position in the next frame.
     */
    get Extrapolate() {}

    /**
     * Smooth an object&#039;s movement based on an estimate of its position in the next frame.
     */
    set Extrapolate(value) {}


}