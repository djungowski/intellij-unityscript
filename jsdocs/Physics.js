class Physics {
    /**
     * Layer mask constant to select all layers.
     */
    static get AllLayers() {}

    /**
     * Layer mask constant to select all layers.
     */
    static set AllLayers(value) {}

    /**
     * Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
     */
    static get bounceThreshold() {}

    /**
     * Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
     */
    static set bounceThreshold(value) {}

    /**
     * The default contact offset of the newly created colliders.
     */
    static get defaultContactOffset() {}

    /**
     * The default contact offset of the newly created colliders.
     */
    static set defaultContactOffset(value) {}

    /**
     * Layer mask constant to select default raycast layers.
     */
    static get DefaultRaycastLayers() {}

    /**
     * Layer mask constant to select default raycast layers.
     */
    static set DefaultRaycastLayers(value) {}

    /**
     * The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
     */
    static get defaultSolverIterations() {}

    /**
     * The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
     */
    static set defaultSolverIterations(value) {}

    /**
     * The defaultSolverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
     */
    static get defaultSolverVelocityIterations() {}

    /**
     * The defaultSolverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
     */
    static set defaultSolverVelocityIterations(value) {}

    /**
     * The gravity applied to all rigid bodies in the scene.
     */
    static get gravity() {}

    /**
     * The gravity applied to all rigid bodies in the scene.
     */
    static set gravity(value) {}

    /**
     * Layer mask constant to select ignore raycast layer.
     */
    static get IgnoreRaycastLayer() {}

    /**
     * Layer mask constant to select ignore raycast layer.
     */
    static set IgnoreRaycastLayer(value) {}

    /**
     * Whether physics queries should hit back-face triangles.
     */
    static get queriesHitBackfaces() {}

    /**
     * Whether physics queries should hit back-face triangles.
     */
    static set queriesHitBackfaces(value) {}

    /**
     * Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
     */
    static get queriesHitTriggers() {}

    /**
     * Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
     */
    static set queriesHitTriggers(value) {}

    /**
     * The mass-normalized energy threshold, below which objects start going to sleep.
     */
    static get sleepThreshold() {}

    /**
     * The mass-normalized energy threshold, below which objects start going to sleep.
     */
    static set sleepThreshold(value) {}




}