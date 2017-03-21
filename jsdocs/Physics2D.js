class Physics2D {
    /**
     * Layer mask constant that includes all layers.
     */
    static get AllLayers() {}

    /**
     * Layer mask constant that includes all layers.
     */
    static set AllLayers(value) {}

    /**
     * Should the collider gizmos always be shown even when they are not selected?
     */
    static get alwaysShowColliders() {}

    /**
     * Should the collider gizmos always be shown even when they are not selected?
     */
    static set alwaysShowColliders(value) {}

    /**
     * A rigid-body cannot sleep if its angular velocity is above this tolerance.
     */
    static get angularSleepTolerance() {}

    /**
     * A rigid-body cannot sleep if its angular velocity is above this tolerance.
     */
    static set angularSleepTolerance(value) {}

    /**
     * The scale factor that controls how fast overlaps are resolved.
     */
    static get baumgarteScale() {}

    /**
     * The scale factor that controls how fast overlaps are resolved.
     */
    static set baumgarteScale(value) {}

    /**
     * The scale factor that controls how fast TOI overlaps are resolved.
     */
    static get baumgarteTOIScale() {}

    /**
     * The scale factor that controls how fast TOI overlaps are resolved.
     */
    static set baumgarteTOIScale(value) {}

    /**
     * Whether or not to stop reporting collision callbacks immediately if any of the objects involved in the collision are deleted/moved. 
     */
    static get changeStopsCallbacks() {}

    /**
     * Whether or not to stop reporting collision callbacks immediately if any of the objects involved in the collision are deleted/moved. 
     */
    static set changeStopsCallbacks(value) {}

    /**
     * The color used by the gizmos to show all collider AABBs.
     */
    static get colliderAABBColor() {}

    /**
     * The color used by the gizmos to show all collider AABBs.
     */
    static set colliderAABBColor(value) {}

    /**
     * The color used by the gizmos to show all asleep colliders (collider is asleep when the body is asleep).
     */
    static get colliderAsleepColor() {}

    /**
     * The color used by the gizmos to show all asleep colliders (collider is asleep when the body is asleep).
     */
    static set colliderAsleepColor(value) {}

    /**
     * The color used by the gizmos to show all awake colliders (collider is awake when the body is awake).
     */
    static get colliderAwakeColor() {}

    /**
     * The color used by the gizmos to show all awake colliders (collider is awake when the body is awake).
     */
    static set colliderAwakeColor(value) {}

    /**
     * The color used by the gizmos to show all collider contacts.
     */
    static get colliderContactColor() {}

    /**
     * The color used by the gizmos to show all collider contacts.
     */
    static set colliderContactColor(value) {}

    /**
     * The scale of the contact arrow used by the collider gizmos.
     */
    static get contactArrowScale() {}

    /**
     * The scale of the contact arrow used by the collider gizmos.
     */
    static set contactArrowScale(value) {}

    /**
     * Layer mask constant that includes all layers participating in raycasts by default.
     */
    static get DefaultRaycastLayers() {}

    /**
     * Layer mask constant that includes all layers participating in raycasts by default.
     */
    static set DefaultRaycastLayers(value) {}

    /**
     * Acceleration due to gravity.
     */
    static get gravity() {}

    /**
     * Acceleration due to gravity.
     */
    static set gravity(value) {}

    /**
     * Layer mask constant for the default layer that ignores raycasts.
     */
    static get IgnoreRaycastLayer() {}

    /**
     * Layer mask constant for the default layer that ignores raycasts.
     */
    static set IgnoreRaycastLayer(value) {}

    /**
     * A rigid-body cannot sleep if its linear velocity is above this tolerance.
     */
    static get linearSleepTolerance() {}

    /**
     * A rigid-body cannot sleep if its linear velocity is above this tolerance.
     */
    static set linearSleepTolerance(value) {}

    /**
     * The maximum angular position correction used when solving constraints.  This helps to prevent overshoot.
     */
    static get maxAngularCorrection() {}

    /**
     * The maximum angular position correction used when solving constraints.  This helps to prevent overshoot.
     */
    static set maxAngularCorrection(value) {}

    /**
     * The maximum linear position correction used when solving constraints.  This helps to prevent overshoot.
     */
    static get maxLinearCorrection() {}

    /**
     * The maximum linear position correction used when solving constraints.  This helps to prevent overshoot.
     */
    static set maxLinearCorrection(value) {}

    /**
     * The maximum angular speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
     */
    static get maxRotationSpeed() {}

    /**
     * The maximum angular speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
     */
    static set maxRotationSpeed(value) {}

    /**
     * The maximum linear speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
     */
    static get maxTranslationSpeed() {}

    /**
     * The maximum linear speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
     */
    static set maxTranslationSpeed(value) {}

    /**
     * The minimum contact penetration radius allowed before any separation impulse force is applied.  Extreme caution should be used when modifying this value as making this smaller means that polygons will have an insufficient buffer for continuous collision and making it larger may create artefacts for vertex collision.
     */
    static get minPenetrationForPenalty() {}

    /**
     * The minimum contact penetration radius allowed before any separation impulse force is applied.  Extreme caution should be used when modifying this value as making this smaller means that polygons will have an insufficient buffer for continuous collision and making it larger may create artefacts for vertex collision.
     */
    static set minPenetrationForPenalty(value) {}

    /**
     * The number of iterations of the physics solver when considering objects&#039; positions.
     */
    static get positionIterations() {}

    /**
     * The number of iterations of the physics solver when considering objects&#039; positions.
     */
    static set positionIterations(value) {}

    /**
     * Do raycasts detect Colliders configured as triggers?
     */
    static get queriesHitTriggers() {}

    /**
     * Do raycasts detect Colliders configured as triggers?
     */
    static set queriesHitTriggers(value) {}

    /**
     * Do ray/line casts that start inside a collider(s) detect those collider(s)?
     */
    static get queriesStartInColliders() {}

    /**
     * Do ray/line casts that start inside a collider(s) detect those collider(s)?
     */
    static set queriesStartInColliders(value) {}

    /**
     * Should the collider gizmos show the AABBs for each collider?
     */
    static get showColliderAABB() {}

    /**
     * Should the collider gizmos show the AABBs for each collider?
     */
    static set showColliderAABB(value) {}

    /**
     * Should the collider gizmos show current contacts for each collider?
     */
    static get showColliderContacts() {}

    /**
     * Should the collider gizmos show current contacts for each collider?
     */
    static set showColliderContacts(value) {}

    /**
     * Should the collider gizmos show the sleep-state for each collider?
     */
    static get showColliderSleep() {}

    /**
     * Should the collider gizmos show the sleep-state for each collider?
     */
    static set showColliderSleep(value) {}

    /**
     * The time in seconds that a rigid-body must be still before it will go to sleep.
     */
    static get timeToSleep() {}

    /**
     * The time in seconds that a rigid-body must be still before it will go to sleep.
     */
    static set timeToSleep(value) {}

    /**
     * The number of iterations of the physics solver when considering objects&#039; velocities.
     */
    static get velocityIterations() {}

    /**
     * The number of iterations of the physics solver when considering objects&#039; velocities.
     */
    static set velocityIterations(value) {}

    /**
     * Any collisions with a relative linear velocity below this threshold will be treated as inelastic.
     */
    static get velocityThreshold() {}

    /**
     * Any collisions with a relative linear velocity below this threshold will be treated as inelastic.
     */
    static set velocityThreshold(value) {}


    /**
     * Casts a box against colliders in the scene, returning the first collider to contact with it.
     */
    static BoxCast() {}

    /**
     * Casts a box against colliders in the scene, returning all colliders that contact with it.
     */
    static BoxCastAll() {}

    /**
     * Casts a box into the scene, returning colliders that contact with it into the provided results array.
     */
    static BoxCastNonAlloc() {}

    /**
     * Casts a capsule against colliders in the scene, returning the first collider to contact with it.
     */
    static CapsuleCast() {}

    /**
     * Casts a capsule against colliders in the scene, returning all colliders that contact with it.
     */
    static CapsuleCastAll() {}

    /**
     * Casts a capsule into the scene, returning colliders that contact with it into the provided results array.
     */
    static CapsuleCastNonAlloc() {}

    /**
     * Casts a circle against colliders in the scene, returning the first collider to contact with it.
     */
    static CircleCast() {}

    /**
     * Casts a circle against colliders in the scene, returning all colliders that contact with it.
     */
    static CircleCastAll() {}

    /**
     * Casts a circle into the scene, returning colliders that contact with it into the provided results array.
     */
    static CircleCastNonAlloc() {}

    /**
     * Checks whether the collision detection system will ignore all collisions/triggers between collider1 and collider2 or not.
     */
    static GetIgnoreCollision() {}

    /**
     * Should collisions between the specified layers be ignored?
     */
    static GetIgnoreLayerCollision() {}

    /**
     * Get the collision layer mask that indicates which layer(s) the specified layer can collide with.
     */
    static GetLayerCollisionMask() {}

    /**
     * Cast a 3D ray against the colliders in the scene returning the first collider along the ray.
     */
    static GetRayIntersection() {}

    /**
     * Cast a 3D ray against the colliders in the scene returning all the colliders along the ray.
     */
    static GetRayIntersectionAll() {}

    /**
     * Cast a 3D ray against the colliders in the scene returning the colliders along the ray.
     */
    static GetRayIntersectionNonAlloc() {}

    /**
     * Makes the collision detection system ignore all collisions/triggers between collider1 and collider2.
     */
    static IgnoreCollision() {}

    /**
     * Choose whether to detect or ignore collisions between a specified pair of layers.
     */
    static IgnoreLayerCollision() {}

    /**
     * Check whether collider1 is touching collider2 or not.
     */
    static IsTouching() {}

    /**
     * Checks whether the collider is touching any colliders on the specified layerMask or not.
     */
    static IsTouchingLayers() {}

    /**
     * Casts a line against colliders in the scene.
     */
    static Linecast() {}

    /**
     * Casts a line against colliders in the scene.
     */
    static LinecastAll() {}

    /**
     * Casts a line against colliders in the scene.
     */
    static LinecastNonAlloc() {}

    /**
     * Check if a collider falls within a rectangular area.
     */
    static OverlapArea() {}

    /**
     * Get a list of all colliders that fall within a rectangular area.
     */
    static OverlapAreaAll() {}

    /**
     * Get a list of all colliders that fall within a specified area.
     */
    static OverlapAreaNonAlloc() {}

    /**
     * Check if a collider falls within a box area.
     */
    static OverlapBox() {}

    /**
     * Get a list of all colliders that fall within a box area.
     */
    static OverlapBoxAll() {}

    /**
     * Get a list of all colliders that fall within a box area.
     */
    static OverlapBoxNonAlloc() {}

    /**
     * Check if a collider falls within a capsule area.
     */
    static OverlapCapsule() {}

    /**
     * Get a list of all colliders that fall within a capsule area.
     */
    static OverlapCapsuleAll() {}

    /**
     * Get a list of all colliders that fall within a capsule area.
     */
    static OverlapCapsuleNonAlloc() {}

    /**
     * Check if a collider falls within a circular area.
     */
    static OverlapCircle() {}

    /**
     * Get a list of all colliders that fall within a circular area.
     */
    static OverlapCircleAll() {}

    /**
     * Get a list of all colliders that fall within a circular area.
     */
    static OverlapCircleNonAlloc() {}

    /**
     * Check if a collider overlaps a point in space.
     */
    static OverlapPoint() {}

    /**
     * Get a list of all colliders that overlap a point in space.
     */
    static OverlapPointAll() {}

    /**
     * Get a list of all colliders that overlap a point in space.
     */
    static OverlapPointNonAlloc() {}

    /**
     * Casts a ray against colliders in the scene.
     */
    static Raycast() {}

    /**
     * Casts a ray against colliders in the scene, returning all colliders that contact with it.
     */
    static RaycastAll() {}

    /**
     * Casts a ray into the scene.
     */
    static RaycastNonAlloc() {}

    /**
     * Set the collision layer mask that indicates which layer(s) the specified layer can collide with.
     */
    static SetLayerCollisionMask() {}



}