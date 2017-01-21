class TextureImporterPlatformSettings {


    /**
     * Allows Alpha splitting on the imported texture when needed (for example ETC1 compression for textures with transparency).
     */
    get allowsAlphaSplitting() {}

    /**
     * Allows Alpha splitting on the imported texture when needed (for example ETC1 compression for textures with transparency).
     */
    set allowsAlphaSplitting(value) {}

    /**
     * Quality of texture compression in the range [0..100].
     */
    get compressionQuality() {}

    /**
     * Quality of texture compression in the range [0..100].
     */
    set compressionQuality(value) {}

    /**
     * Use crunch compression when available.
     */
    get crunchedCompression() {}

    /**
     * Use crunch compression when available.
     */
    set crunchedCompression(value) {}

    /**
     * Format of imported texture.
     */
    get format() {}

    /**
     * Format of imported texture.
     */
    set format(value) {}

    /**
     * Maximum texture size.
     */
    get maxTextureSize() {}

    /**
     * Maximum texture size.
     */
    set maxTextureSize(value) {}

    /**
     * Name of the build target.
     */
    get name() {}

    /**
     * Name of the build target.
     */
    set name(value) {}

    /**
     * Set to true in order to override the Default platform parameters by those provided in the TextureImporterPlatformSettings structure.
     */
    get overridden() {}

    /**
     * Set to true in order to override the Default platform parameters by those provided in the TextureImporterPlatformSettings structure.
     */
    set overridden(value) {}

    /**
     * Compression of imported texture.
     */
    get textureCompression() {}

    /**
     * Compression of imported texture.
     */
    set textureCompression(value) {}


    /**
     * Copy parameters into another TextureImporterPlatformSettings object.
     */
    CopyTo() {}

}