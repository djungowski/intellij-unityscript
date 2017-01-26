class HumanTrait {
    /**
     * The number of human bone types defined by Mecanim.
     */
    static get BoneCount() {}

    /**
     * The number of human bone types defined by Mecanim.
     */
    static set BoneCount(value) {}

    /**
     * Array of the names of all human bone types defined by Mecanim.
     */
    static get BoneName() {}

    /**
     * Array of the names of all human bone types defined by Mecanim.
     */
    static set BoneName(value) {}

    /**
     * The number of human muscle types defined by Mecanim.
     */
    static get MuscleCount() {}

    /**
     * The number of human muscle types defined by Mecanim.
     */
    static set MuscleCount(value) {}

    /**
     * Array of the names of all human muscle types defined by Mecanim.
     */
    static get MuscleName() {}

    /**
     * Array of the names of all human muscle types defined by Mecanim.
     */
    static set MuscleName(value) {}

    /**
     * The number of bone types that are required by Mecanim for any human model.
     */
    static get RequiredBoneCount() {}

    /**
     * The number of bone types that are required by Mecanim for any human model.
     */
    static set RequiredBoneCount(value) {}


    /**
     * Return the bone to which a particular muscle is connected.
     */
    static BoneFromMuscle() {}

    /**
     * Get the default maximum value of rotation for a muscle in degrees.
     */
    static GetMuscleDefaultMax() {}

    /**
     * Get the default minimum value of rotation for a muscle in degrees.
     */
    static GetMuscleDefaultMin() {}

    /**
     * Returns parent humanoid bone index of a bone.
     */
    static GetParentBone() {}

    /**
     * Obtain the muscle index for a particular bone index and &quot;degree of freedom&quot;.
     */
    static MuscleFromBone() {}

    /**
     * Is the bone a member of the minimal set of bones that Mecanim requires for a human model?
     */
    static RequiredBone() {}



}