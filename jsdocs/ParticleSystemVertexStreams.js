class ParticleSystemVertexStreams {


    /**
     * The world space position of each particle.
     */
    get Position() {}

    /**
     * The world space position of each particle.
     */
    set Position(value) {}

    /**
     * The normal of each particle.
     */
    get Normal() {}

    /**
     * The normal of each particle.
     */
    set Normal(value) {}

    /**
     * Tangent vectors for normal mapping.
     */
    get Tangent() {}

    /**
     * Tangent vectors for normal mapping.
     */
    set Tangent(value) {}

    /**
     * The color of each particle.
     */
    get Color() {}

    /**
     * The color of each particle.
     */
    set Color(value) {}

    /**
     * The texture coordinates of each particle.
     */
    get UV() {}

    /**
     * The texture coordinates of each particle.
     */
    set UV(value) {}

    /**
     * With the Texture Sheet Animation module enabled, this contains the UVs for the second texture frame, the blend factor for each particle, and the raw frame, allowing for blending of frames.
     */
    get UV2BlendAndFrame() {}

    /**
     * With the Texture Sheet Animation module enabled, this contains the UVs for the second texture frame, the blend factor for each particle, and the raw frame, allowing for blending of frames.
     */
    set UV2BlendAndFrame(value) {}

    /**
     * The center position of each particle, with the vertex ID of each particle, from 0-3, stored in the w component.
     */
    get CenterAndVertexID() {}

    /**
     * The center position of each particle, with the vertex ID of each particle, from 0-3, stored in the w component.
     */
    set CenterAndVertexID(value) {}

    /**
     * The size of each particle.
     */
    get Size() {}

    /**
     * The size of each particle.
     */
    set Size(value) {}

    /**
     * The rotation of each particle.
     */
    get Rotation() {}

    /**
     * The rotation of each particle.
     */
    set Rotation(value) {}

    /**
     * The 3D velocity of each particle.
     */
    get Velocity() {}

    /**
     * The 3D velocity of each particle.
     */
    set Velocity(value) {}

    /**
     * Alive time as a 0-1 value in the X component, and Total Lifetime in the Y component.
To get the current particle age, simply multiply X by Y.
     */
    get Lifetime() {}

    /**
     * Alive time as a 0-1 value in the X component, and Total Lifetime in the Y component.
To get the current particle age, simply multiply X by Y.
     */
    set Lifetime(value) {}

    /**
     * The first stream of custom data, supplied from script.
     */
    get Custom1() {}

    /**
     * The first stream of custom data, supplied from script.
     */
    set Custom1(value) {}

    /**
     * The second stream of custom data, supplied from script.
     */
    get Custom2() {}

    /**
     * The second stream of custom data, supplied from script.
     */
    set Custom2(value) {}

    /**
     * 4 random numbers. The first 3 are deterministic and assigned once when each particle is born, but the 4th value will change during the lifetime of the particle.
     */
    get Random() {}

    /**
     * 4 random numbers. The first 3 are deterministic and assigned once when each particle is born, but the 4th value will change during the lifetime of the particle.
     */
    set Random(value) {}

    /**
     * A mask with no vertex streams enabled.
     */
    get None() {}

    /**
     * A mask with no vertex streams enabled.
     */
    set None(value) {}

    /**
     * A mask with all vertex streams enabled.
     */
    get All() {}

    /**
     * A mask with all vertex streams enabled.
     */
    set All(value) {}


}