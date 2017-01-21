class TextureImporterCompression {


    /**
     * Texture will not be compressed.
     */
    get Uncompressed() {}

    /**
     * Texture will not be compressed.
     */
    set Uncompressed(value) {}

    /**
     * Texture will be compressed using a standard format depending on the platform (DXT, ASTC, ...).
     */
    get Compressed() {}

    /**
     * Texture will be compressed using a standard format depending on the platform (DXT, ASTC, ...).
     */
    set Compressed(value) {}

    /**
     * Texture will be compressed using a high quality format depending on the platform and availability (BC7, ASTC4x4, ...).
     */
    get CompressedHQ() {}

    /**
     * Texture will be compressed using a high quality format depending on the platform and availability (BC7, ASTC4x4, ...).
     */
    set CompressedHQ(value) {}

    /**
     * Texture will be compressed using a low quality but high performance, high compression format depending on the platform and availability (2bpp PVRTC, ASTC8x8, ...).
     */
    get CompressedLQ() {}

    /**
     * Texture will be compressed using a low quality but high performance, high compression format depending on the platform and availability (2bpp PVRTC, ASTC8x8, ...).
     */
    set CompressedLQ(value) {}


}