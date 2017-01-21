class TextureImporter {

    /**
     * Clear specific target platform settings.
     */
    static ClearPlatformTextureSettings() {}

    /**
     * Does textures source image have alpha channel.
     */
    static DoesSourceTextureHaveAlpha() {}

    /**
     * TODO.
     */
    static GetAutomaticFormat() {}

    /**
     * Get the default platform specific texture settings.
     */
    static GetDefaultPlatformTextureSettings() {}

    /**
     * Get platform specific texture settings.
     */
    static GetPlatformTextureSettings() {}

    /**
     * Reads the active texture output instructions of this TextureImporter.
     */
    static ReadTextureImportInstructions() {}

    /**
     * Read texture settings into TextureImporterSettings class.
     */
    static ReadTextureSettings() {}

    /**
     * Set specific target platform settings.
     */
    static SetPlatformTextureSettings() {}

    /**
     * Set texture importers settings from TextureImporterSettings class.
     */
    static SetTextureSettings() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    static SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    static SetAssetBundleNameAndVariant() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * Allows alpha splitting on relevant platforms for this texture.
     */
    get allowAlphaSplitting() {}

    /**
     * Allows alpha splitting on relevant platforms for this texture.
     */
    set allowAlphaSplitting(value) {}

    /**
     * If the provided alpha channel is transparency, enable this to prefilter the color to avoid filtering artifacts.
     */
    get alphaIsTransparency() {}

    /**
     * If the provided alpha channel is transparency, enable this to prefilter the color to avoid filtering artifacts.
     */
    set alphaIsTransparency(value) {}

    /**
     * Select how the alpha of the imported texture is generated.
     */
    get alphaSource() {}

    /**
     * Select how the alpha of the imported texture is generated.
     */
    set alphaSource(value) {}

    /**
     * Anisotropic filtering level of the texture.
     */
    get anisoLevel() {}

    /**
     * Anisotropic filtering level of the texture.
     */
    set anisoLevel(value) {}

    /**
     * Keep texture borders the same when generating mipmaps?
     */
    get borderMipmap() {}

    /**
     * Keep texture borders the same when generating mipmaps?
     */
    set borderMipmap(value) {}

    /**
     * Quality of Texture Compression in the range [0..100].
     */
    get compressionQuality() {}

    /**
     * Quality of Texture Compression in the range [0..100].
     */
    set compressionQuality(value) {}

    /**
     * Convert heightmap to normal map?
     */
    get convertToNormalmap() {}

    /**
     * Convert heightmap to normal map?
     */
    set convertToNormalmap(value) {}

    /**
     * Use crunched compression when available.
     */
    get crunchedCompression() {}

    /**
     * Use crunched compression when available.
     */
    set crunchedCompression(value) {}

    /**
     * Fade out mip levels to gray color?
     */
    get fadeout() {}

    /**
     * Fade out mip levels to gray color?
     */
    set fadeout(value) {}

    /**
     * Filtering mode of the texture.
     */
    get filterMode() {}

    /**
     * Filtering mode of the texture.
     */
    set filterMode(value) {}

    /**
     * Cubemap generation mode.
     */
    get generateCubemap() {}

    /**
     * Cubemap generation mode.
     */
    set generateCubemap(value) {}

    /**
     * Amount of bumpyness in the heightmap.
     */
    get heightmapScale() {}

    /**
     * Amount of bumpyness in the heightmap.
     */
    set heightmapScale(value) {}

    /**
     * Set this to true if you want texture data to be readable from scripts. Set it to false to prevent scripts from reading texture data.
     */
    get isReadable() {}

    /**
     * Set this to true if you want texture data to be readable from scripts. Set it to false to prevent scripts from reading texture data.
     */
    set isReadable(value) {}

    /**
     * Maximum texture size.
     */
    get maxTextureSize() {}

    /**
     * Maximum texture size.
     */
    set maxTextureSize(value) {}

    /**
     * Mip map bias of the texture.
     */
    get mipMapBias() {}

    /**
     * Mip map bias of the texture.
     */
    set mipMapBias(value) {}

    /**
     * Generate Mip Maps.
     */
    get mipmapEnabled() {}

    /**
     * Generate Mip Maps.
     */
    set mipmapEnabled(value) {}

    /**
     * Mip level where texture is faded out completely.
     */
    get mipmapFadeDistanceEnd() {}

    /**
     * Mip level where texture is faded out completely.
     */
    set mipmapFadeDistanceEnd(value) {}

    /**
     * Mip level where texture begins to fade out.
     */
    get mipmapFadeDistanceStart() {}

    /**
     * Mip level where texture begins to fade out.
     */
    set mipmapFadeDistanceStart(value) {}

    /**
     * Mipmap filtering mode.
     */
    get mipmapFilter() {}

    /**
     * Mipmap filtering mode.
     */
    set mipmapFilter(value) {}

    /**
     * Normal map filtering mode.
     */
    get normalmapFilter() {}

    /**
     * Normal map filtering mode.
     */
    set normalmapFilter(value) {}

    /**
     * Scaling mode for non power of two textures.
     */
    get npotScale() {}

    /**
     * Scaling mode for non power of two textures.
     */
    set npotScale(value) {}

    /**
     * Returns true if this TextureImporter is setup for Sprite packing.
     */
    get qualifiesForSpritePacking() {}

    /**
     * Returns true if this TextureImporter is setup for Sprite packing.
     */
    set qualifiesForSpritePacking(value) {}

    /**
     * Border sizes of the generated sprites.
     */
    get spriteBorder() {}

    /**
     * Border sizes of the generated sprites.
     */
    set spriteBorder(value) {}

    /**
     * Selects Single or Manual import mode for Sprite textures.
     */
    get spriteImportMode() {}

    /**
     * Selects Single or Manual import mode for Sprite textures.
     */
    set spriteImportMode(value) {}

    /**
     * Selects the Sprite packing tag.
     */
    get spritePackingTag() {}

    /**
     * Selects the Sprite packing tag.
     */
    set spritePackingTag(value) {}

    /**
     * The point in the Sprite object&#039;s coordinate space where the graphic is located.
     */
    get spritePivot() {}

    /**
     * The point in the Sprite object&#039;s coordinate space where the graphic is located.
     */
    set spritePivot(value) {}

    /**
     * The number of pixels in the sprite that correspond to one unit in world space.
     */
    get spritePixelsPerUnit() {}

    /**
     * The number of pixels in the sprite that correspond to one unit in world space.
     */
    set spritePixelsPerUnit(value) {}

    /**
     * Array representing the sections of the atlas corresponding to individual sprite graphics.
     */
    get spritesheet() {}

    /**
     * Array representing the sections of the atlas corresponding to individual sprite graphics.
     */
    set spritesheet(value) {}

    /**
     * Is texture storing color data?
     */
    get sRGBTexture() {}

    /**
     * Is texture storing color data?
     */
    set sRGBTexture(value) {}

    /**
     * Compression of imported texture.
     */
    get textureCompression() {}

    /**
     * Compression of imported texture.
     */
    set textureCompression(value) {}

    /**
     * Shape of imported texture.
     */
    get textureShape() {}

    /**
     * Shape of imported texture.
     */
    set textureShape(value) {}

    /**
     * Which type of texture are we dealing with here.
     */
    get textureType() {}

    /**
     * Which type of texture are we dealing with here.
     */
    set textureType(value) {}

    /**
     * Wrap mode (Repeat or Clamp) of the texture.
     */
    get wrapMode() {}

    /**
     * Wrap mode (Repeat or Clamp) of the texture.
     */
    set wrapMode(value) {}

    /**
     * Get or set the AssetBundle name.
     */
    get assetBundleName() {}

    /**
     * Get or set the AssetBundle name.
     */
    set assetBundleName(value) {}

    /**
     * Get or set the AssetBundle variant.
     */
    get assetBundleVariant() {}

    /**
     * Get or set the AssetBundle variant.
     */
    set assetBundleVariant(value) {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    get assetPath() {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    set assetPath(value) {}

    /**
     * Get or set any user data.
     */
    get userData() {}

    /**
     * Get or set any user data.
     */
    set userData(value) {}

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
     * Clear specific target platform settings.
     */
    ClearPlatformTextureSettings() {}

    /**
     * Does textures source image have alpha channel.
     */
    DoesSourceTextureHaveAlpha() {}

    /**
     * TODO.
     */
    GetAutomaticFormat() {}

    /**
     * Get the default platform specific texture settings.
     */
    GetDefaultPlatformTextureSettings() {}

    /**
     * Get platform specific texture settings.
     */
    GetPlatformTextureSettings() {}

    /**
     * Reads the active texture output instructions of this TextureImporter.
     */
    ReadTextureImportInstructions() {}

    /**
     * Read texture settings into TextureImporterSettings class.
     */
    ReadTextureSettings() {}

    /**
     * Set specific target platform settings.
     */
    SetPlatformTextureSettings() {}

    /**
     * Set texture importers settings from TextureImporterSettings class.
     */
    SetTextureSettings() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    SetAssetBundleNameAndVariant() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}