class CullingGroupEvent {


    /**
     * The current distance band index of the sphere, after the most recent culling pass.
     */
    get currentDistance() {}

    /**
     * The current distance band index of the sphere, after the most recent culling pass.
     */
    set currentDistance(value) {}

    /**
     * Did this sphere change from being visible to being invisible in the most recent culling pass?
     */
    get hasBecomeInvisible() {}

    /**
     * Did this sphere change from being visible to being invisible in the most recent culling pass?
     */
    set hasBecomeInvisible(value) {}

    /**
     * Did this sphere change from being invisible to being visible in the most recent culling pass?
     */
    get hasBecomeVisible() {}

    /**
     * Did this sphere change from being invisible to being visible in the most recent culling pass?
     */
    set hasBecomeVisible(value) {}

    /**
     * The index of the sphere that has changed.
     */
    get index() {}

    /**
     * The index of the sphere that has changed.
     */
    set index(value) {}

    /**
     * Was the sphere considered visible by the most recent culling pass?
     */
    get isVisible() {}

    /**
     * Was the sphere considered visible by the most recent culling pass?
     */
    set isVisible(value) {}

    /**
     * The distance band index of the sphere before the most recent culling pass.
     */
    get previousDistance() {}

    /**
     * The distance band index of the sphere before the most recent culling pass.
     */
    set previousDistance(value) {}

    /**
     * Was the sphere visible before the most recent culling pass?
     */
    get wasVisible() {}

    /**
     * Was the sphere visible before the most recent culling pass?
     */
    set wasVisible(value) {}


}