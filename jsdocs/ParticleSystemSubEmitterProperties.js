class ParticleSystemSubEmitterProperties {


    /**
     * When spawning new particles, do not inherit any properties from the parent particles.
     */
    get InheritNothing() {}

    /**
     * When spawning new particles, do not inherit any properties from the parent particles.
     */
    set InheritNothing(value) {}

    /**
     * When spawning new particles, inherit all available properties from the parent particles.
     */
    get InheritEverything() {}

    /**
     * When spawning new particles, inherit all available properties from the parent particles.
     */
    set InheritEverything(value) {}

    /**
     * When spawning new particles, multiply the start color by the color of the parent particles.
     */
    get InheritColor() {}

    /**
     * When spawning new particles, multiply the start color by the color of the parent particles.
     */
    set InheritColor(value) {}

    /**
     * When spawning new particles, multiply the start size by the size of the parent particles.
     */
    get InheritSize() {}

    /**
     * When spawning new particles, multiply the start size by the size of the parent particles.
     */
    set InheritSize(value) {}

    /**
     * When spawning new particles, add the start rotation to the rotation of the parent particles.
     */
    get InheritRotation() {}

    /**
     * When spawning new particles, add the start rotation to the rotation of the parent particles.
     */
    set InheritRotation(value) {}


}