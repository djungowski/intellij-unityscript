class Mathf {
    /**
     * Degrees-to-radians conversion constant (Read Only).
     */
    static get Deg2Rad() {}

    /**
     * Degrees-to-radians conversion constant (Read Only).
     */
    static set Deg2Rad(value) {}

    /**
     * A tiny floating point value (Read Only).
     */
    static get Epsilon() {}

    /**
     * A tiny floating point value (Read Only).
     */
    static set Epsilon(value) {}

    /**
     * A representation of positive infinity (Read Only).
     */
    static get Infinity() {}

    /**
     * A representation of positive infinity (Read Only).
     */
    static set Infinity(value) {}

    /**
     * A representation of negative infinity (Read Only).
     */
    static get NegativeInfinity() {}

    /**
     * A representation of negative infinity (Read Only).
     */
    static set NegativeInfinity(value) {}

    /**
     * The infamous 3.14159265358979... value (Read Only).
     */
    static get PI() {}

    /**
     * The infamous 3.14159265358979... value (Read Only).
     */
    static set PI(value) {}

    /**
     * Radians-to-degrees conversion constant (Read Only).
     */
    static get Rad2Deg() {}

    /**
     * Radians-to-degrees conversion constant (Read Only).
     */
    static set Rad2Deg(value) {}


    /**
     * Returns the absolute value of f.
     */
    static Abs() {}

    /**
     * Returns the arc-cosine of f - the angle in radians whose cosine is f.
     */
    static Acos() {}

    /**
     * Compares two floating point values if they are similar.
     */
    static Approximately() {}

    /**
     * Returns the arc-sine of f - the angle in radians whose sine is f.
     */
    static Asin() {}

    /**
     * Returns the arc-tangent of f - the angle in radians whose tangent is f.
     */
    static Atan() {}

    /**
     * Returns the angle in radians whose Tan is y/x.
     */
    static Atan2() {}

    /**
     * Returns the smallest integer greater to or equal to f.
     */
    static Ceil() {}

    /**
     * Returns the smallest integer greater to or equal to f.
     */
    static CeilToInt() {}

    /**
     * Clamps a value between a minimum float and maximum float value.
     */
    static Clamp() {}

    /**
     * Clamps value between 0 and 1 and returns value.
     */
    static Clamp01() {}

    /**
     * Returns the closest power of two value.
     */
    static ClosestPowerOfTwo() {}

    /**
     * Returns the cosine of angle f in radians.
     */
    static Cos() {}

    /**
     * Calculates the shortest difference between two given angles given in degrees.
     */
    static DeltaAngle() {}

    /**
     * Returns e raised to the specified power.
     */
    static Exp() {}

    /**
     * Returns the largest integer smaller to or equal to f.
     */
    static Floor() {}

    /**
     * Returns the largest integer smaller to or equal to f.
     */
    static FloorToInt() {}

    /**
     * Converts the given value from gamma (sRGB) to linear color space.
     */
    static GammaToLinearSpace() {}

    /**
     * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
     */
    static InverseLerp() {}

    /**
     * Returns true if the value is power of two.
     */
    static IsPowerOfTwo() {}

    /**
     * Linearly interpolates between a and b by t.
     */
    static Lerp() {}

    /**
     * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
     */
    static LerpAngle() {}

    /**
     * Linearly interpolates between a and b by t with no limit to t.
     */
    static LerpUnclamped() {}

    /**
     * Converts the given value from linear to gamma (sRGB) color space.
     */
    static LinearToGammaSpace() {}

    /**
     * Returns the logarithm of a specified number in a specified base.
     */
    static Log() {}

    /**
     * Returns the base 10 logarithm of a specified number.
     */
    static Log10() {}

    /**
     * Returns largest of two or more values.
     */
    static Max() {}

    /**
     * Returns the smallest of two or more values.
     */
    static Min() {}

    /**
     * Moves a value current towards target.
     */
    static MoveTowards() {}

    /**
     * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
     */
    static MoveTowardsAngle() {}

    /**
     * Returns the next power of two value.
     */
    static NextPowerOfTwo() {}

    /**
     * Generate 2D Perlin noise.
     */
    static PerlinNoise() {}

    /**
     * PingPongs the value t, so that it is never larger than length and never smaller than 0.
     */
    static PingPong() {}

    /**
     * Returns f raised to power p.
     */
    static Pow() {}

    /**
     * Loops the value t, so that it is never larger than length and never smaller than 0.
     */
    static Repeat() {}

    /**
     * Returns f rounded to the nearest integer.
     */
    static Round() {}

    /**
     * Returns f rounded to the nearest integer.
     */
    static RoundToInt() {}

    /**
     * Returns the sign of f.
     */
    static Sign() {}

    /**
     * Returns the sine of angle f in radians.
     */
    static Sin() {}

    /**
     * Gradually changes a value towards a desired goal over time.
     */
    static SmoothDamp() {}

    /**
     * Gradually changes an angle given in degrees towards a desired goal angle over time.
     */
    static SmoothDampAngle() {}

    /**
     * Interpolates between min and max with smoothing at the limits.
     */
    static SmoothStep() {}

    /**
     * Returns square root of f.
     */
    static Sqrt() {}

    /**
     * Returns the tangent of angle f in radians.
     */
    static Tan() {}



}