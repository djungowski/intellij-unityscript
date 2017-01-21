class ParticleSystemScalingMode {


    /**
     * Scale the particle system using the entire transform hierarchy.
     */
    get Hierarchy() {}

    /**
     * Scale the particle system using the entire transform hierarchy.
     */
    set Hierarchy(value) {}

    /**
     * Scale the particle system using only its own transform scale. (Ignores parent scale).
     */
    get Local() {}

    /**
     * Scale the particle system using only its own transform scale. (Ignores parent scale).
     */
    set Local(value) {}

    /**
     * Only apply transform scale to the shape component, which cotnrols where particles are spawned, but does not affect their size or movement.
     */
    get Shape() {}

    /**
     * Only apply transform scale to the shape component, which cotnrols where particles are spawned, but does not affect their size or movement.
     */
    set Shape(value) {}


}