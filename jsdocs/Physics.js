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


    /**
     * Casts the box along a ray and returns detailed information on what was hit.
     */
    static BoxCast() {}

    /**
     * Like Physics.BoxCast, but returns all hits.
     */
    static BoxCastAll() {}

    /**
     * Cast the box along the direction, and store hits in the provided buffer.
     */
    static BoxCastNonAlloc() {}

    /**
     * Casts a capsule against all colliders in the scene and returns detailed information on what was hit.
     */
    static CapsuleCast() {}

    /**
     * Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
     */
    static CapsuleCastAll() {}

    /**
     * Casts a capsule against all colliders in the scene and returns detailed information on what was hit into the buffer.
     */
    static CapsuleCastNonAlloc() {}

    /**
     * Check whether the given box overlaps with other colliders or not.
     */
    static CheckBox() {}

    /**
     * Checks if any colliders overlap a capsule-shaped volume in world space.
     */
    static CheckCapsule() {}

    /**
     * Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates.
     */
    static CheckSphere() {}

    /**
     * Are collisions between layer1 and layer2 being ignored?
     */
    static GetIgnoreLayerCollision() {}

    /**
     * Makes the collision detection system ignore all collisions between collider1 and collider2.
     */
    static IgnoreCollision() {}

    /**
     * Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this.
     */
    static IgnoreLayerCollision() {}

    /**
     * Returns true if there is any collider intersecting the line between start and end.
     */
    static Linecast() {}

    /**
     * Find all colliders touching or inside of the given box.
     */
    static OverlapBox() {}

    /**
     * Find all colliders touching or inside of the given box, and store them into the buffer.
     */
    static OverlapBoxNonAlloc() {}

    /**
     * Check the given capsule against the physics world and return all overlapping colliders.
     */
    static OverlapCapsule() {}

    /**
     * Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
     */
    static OverlapCapsuleNonAlloc() {}

    /**
     * Returns an array with all colliders touching or inside the sphere.
     */
    static OverlapSphere() {}

    /**
     * Computes and stores colliders touching or inside the sphere into the provided buffer.
     */
    static OverlapSphereNonAlloc() {}

    /**
     * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the scene.
     */
    static Raycast() {}

    /**
     * Casts a ray through the scene and returns all hits. Note that order is not guaranteed.
     */
    static RaycastAll() {}

    /**
     * Cast a ray through the scene and store the hits into the buffer.
     */
    static RaycastNonAlloc() {}

    /**
     * Casts a sphere along a ray and returns detailed information on what was hit.
     */
    static SphereCast() {}

    /**
     * Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
     */
    static SphereCastAll() {}

    /**
     * Cast sphere along the direction and store the results into buffer.
     */
    static SphereCastNonAlloc() {}



}