class MotionVectorGenerationMode {


    /**
     * Use only camera movement to track motion.
     */
    get Camera() {}

    /**
     * Use only camera movement to track motion.
     */
    set Camera(value) {}

    /**
     * Use a specific pass (if required) to track motion.
     */
    get Object() {}

    /**
     * Use a specific pass (if required) to track motion.
     */
    set Object(value) {}

    /**
     * Do not track motion. Motion vectors will be 0.
     */
    get ForceNoMotion() {}

    /**
     * Do not track motion. Motion vectors will be 0.
     */
    set ForceNoMotion(value) {}


}