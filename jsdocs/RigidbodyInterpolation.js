class RigidbodyInterpolation {


    /**
     * No Interpolation.
     */
    get None() {}

    /**
     * No Interpolation.
     */
    set None(value) {}

    /**
     * Interpolation will always lag a little bit behind but can be smoother than extrapolation.
     */
    get Interpolate() {}

    /**
     * Interpolation will always lag a little bit behind but can be smoother than extrapolation.
     */
    set Interpolate(value) {}

    /**
     * Extrapolation will predict the position of the rigidbody based on the current velocity.
     */
    get Extrapolate() {}

    /**
     * Extrapolation will predict the position of the rigidbody based on the current velocity.
     */
    set Extrapolate(value) {}


}