class ParticleSystem {

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}


    /**
     * Access the particle system collision module.
     */
    get collision() {}

    /**
     * Access the particle system collision module.
     */
    set collision(value) {}

    /**
     * Access the particle system color by lifetime module.
     */
    get colorBySpeed() {}

    /**
     * Access the particle system color by lifetime module.
     */
    set colorBySpeed(value) {}

    /**
     * Access the particle system color over lifetime module.
     */
    get colorOverLifetime() {}

    /**
     * Access the particle system color over lifetime module.
     */
    set colorOverLifetime(value) {}

    /**
     * Access the particle system emission module.
     */
    get emission() {}

    /**
     * Access the particle system emission module.
     */
    set emission(value) {}

    /**
     * Access the particle system external forces module.
     */
    get externalForces() {}

    /**
     * Access the particle system external forces module.
     */
    set externalForces(value) {}

    /**
     * Access the particle system force over lifetime module.
     */
    get forceOverLifetime() {}

    /**
     * Access the particle system force over lifetime module.
     */
    set forceOverLifetime(value) {}

    /**
     * Access the particle system velocity inheritance module.
     */
    get inheritVelocity() {}

    /**
     * Access the particle system velocity inheritance module.
     */
    set inheritVelocity(value) {}

    /**
     * Is the particle system currently emitting particles? A particle system may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using Stop with the StopEmitting flag. Resume emitting by calling Play.
     */
    get isEmitting() {}

    /**
     * Is the particle system currently emitting particles? A particle system may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using Stop with the StopEmitting flag. Resume emitting by calling Play.
     */
    set isEmitting(value) {}

    /**
     * Is the particle system paused right now ?
     */
    get isPaused() {}

    /**
     * Is the particle system paused right now ?
     */
    set isPaused(value) {}

    /**
     * Is the particle system playing right now ?
     */
    get isPlaying() {}

    /**
     * Is the particle system playing right now ?
     */
    set isPlaying(value) {}

    /**
     * Is the particle system stopped right now ?
     */
    get isStopped() {}

    /**
     * Is the particle system stopped right now ?
     */
    set isStopped(value) {}

    /**
     * Access the particle system lights module.
     */
    get lights() {}

    /**
     * Access the particle system lights module.
     */
    set lights(value) {}

    /**
     * Access the particle system limit velocity over lifetime module.
     */
    get limitVelocityOverLifetime() {}

    /**
     * Access the particle system limit velocity over lifetime module.
     */
    set limitVelocityOverLifetime(value) {}

    /**
     * Access the main particle system settings.
     */
    get main() {}

    /**
     * Access the main particle system settings.
     */
    set main(value) {}

    /**
     * Access the particle system noise module.
     */
    get noise() {}

    /**
     * Access the particle system noise module.
     */
    set noise(value) {}

    /**
     * The current number of particles (Read Only).
     */
    get particleCount() {}

    /**
     * The current number of particles (Read Only).
     */
    set particleCount(value) {}

    /**
     * Override the random seed used for the particle system emission.
     */
    get randomSeed() {}

    /**
     * Override the random seed used for the particle system emission.
     */
    set randomSeed(value) {}

    /**
     * Access the particle system rotation by speed  module.
     */
    get rotationBySpeed() {}

    /**
     * Access the particle system rotation by speed  module.
     */
    set rotationBySpeed(value) {}

    /**
     * Access the particle system rotation over lifetime module.
     */
    get rotationOverLifetime() {}

    /**
     * Access the particle system rotation over lifetime module.
     */
    set rotationOverLifetime(value) {}

    /**
     * Access the particle system shape module.
     */
    get shape() {}

    /**
     * Access the particle system shape module.
     */
    set shape(value) {}

    /**
     * Access the particle system size by speed module.
     */
    get sizeBySpeed() {}

    /**
     * Access the particle system size by speed module.
     */
    set sizeBySpeed(value) {}

    /**
     * Access the particle system size over lifetime module.
     */
    get sizeOverLifetime() {}

    /**
     * Access the particle system size over lifetime module.
     */
    set sizeOverLifetime(value) {}

    /**
     * Access the particle system sub emitters module.
     */
    get subEmitters() {}

    /**
     * Access the particle system sub emitters module.
     */
    set subEmitters(value) {}

    /**
     * Access the particle system texture sheet animation module.
     */
    get textureSheetAnimation() {}

    /**
     * Access the particle system texture sheet animation module.
     */
    set textureSheetAnimation(value) {}

    /**
     * Playback position in seconds.
     */
    get time() {}

    /**
     * Playback position in seconds.
     */
    set time(value) {}

    /**
     * Access the particle system trails module.
     */
    get trails() {}

    /**
     * Access the particle system trails module.
     */
    set trails(value) {}

    /**
     * Access the particle system trigger module.
     */
    get trigger() {}

    /**
     * Access the particle system trigger module.
     */
    set trigger(value) {}

    /**
     * Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
     */
    get useAutoRandomSeed() {}

    /**
     * Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
     */
    set useAutoRandomSeed(value) {}

    /**
     * Access the particle system velocity over lifetime module.
     */
    get velocityOverLifetime() {}

    /**
     * Access the particle system velocity over lifetime module.
     */
    set velocityOverLifetime(value) {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    get gameObject() {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    set gameObject(value) {}

    /**
     * The tag of this game object.
     */
    get tag() {}

    /**
     * The tag of this game object.
     */
    set tag(value) {}

    /**
     * The Transform attached to this GameObject.
     */
    get transform() {}

    /**
     * The Transform attached to this GameObject.
     */
    set transform(value) {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    get hideFlags() {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    set hideFlags(value) {}

    /**
     * The name of the object.
     */
    get name() {}

    /**
     * The name of the object.
     */
    set name(value) {}


    /**
     * Remove all particles in the particle system.
     */
    Clear() {}

    /**
     * Emit count particles immediately.
     */
    Emit() {}

    /**
     * Get a stream of custom per-particle data.
     */
    GetCustomParticleData() {}

    /**
     * Get the particles of this particle system.
     */
    GetParticles() {}

    /**
     * Does the system have any live particles (or will produce more)?
     */
    IsAlive() {}

    /**
     * Pauses the system so no new particles are emitted and the existing particles are not updated.
     */
    Pause() {}

    /**
     * Starts the particle system.
     */
    Play() {}

    /**
     * Set a stream of custom per-particle data.
     */
    SetCustomParticleData() {}

    /**
     * Set the particles of this particle system. size is the number of particles that is set.
     */
    SetParticles() {}

    /**
     * Fastforwards the particle system by simulating particles over given period of time, then pauses it.
     */
    Simulate() {}

    /**
     * Stops playing the particle system using the supplied stop behaviour.
     */
    Stop() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
     */
    BroadcastMessage() {}

    /**
     * Is this game object tagged with tag ?
     */
    CompareTag() {}

    /**
     * Returns the component of Type type if the game object has one attached, null if it doesn&#039;t.
     */
    GetComponent() {}

    /**
     * Returns the component of Type type in the GameObject or any of its children using depth first search.
     */
    GetComponentInChildren() {}

    /**
     * Returns the component of Type type in the GameObject or any of its parents.
     */
    GetComponentInParent() {}

    /**
     * Returns all components of Type type in the GameObject.
     */
    GetComponents() {}

    /**
     * Returns all components of Type type in the GameObject or any of its children.
     */
    GetComponentsInChildren() {}

    /**
     * Returns all components of Type type in the GameObject or any of its parents.
     */
    GetComponentsInParent() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object.
     */
    SendMessage() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
     */
    SendMessageUpwards() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}