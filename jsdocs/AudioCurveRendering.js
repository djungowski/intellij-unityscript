class AudioCurveRendering {

    /**
     * Renders a thin curve determined by the curve evaluation function. The solid color of the curve is set by the curveColor argument.
     */
    static DrawCurve() {}

    /**
     * Fills the area between the curve evaluated by the AudioCurveAndColorEvaluator provided and the bottom of the rectngle with smooth gradients along the edges.
     */
    static DrawFilledCurve() {}

    /**
     * Fills the area between the two curves evaluated by the AudioMinMaxCurveAndColorEvaluator provided with smooth gradients along the edges.
     */
    static DrawMinMaxFilledCurve() {}

    /**
     * Fills the area between the curve evaluated by the AudioCurveAndColorEvaluator provided and its vertical mirror image with smooth gradients along the edges. Useful for drawing amplitude plots of audio signals.
     */
    static DrawSymmetricFilledCurve() {}



}