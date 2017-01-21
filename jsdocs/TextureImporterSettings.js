class TextureImporterSettings {

    /**
     * Configure parameters to import a texture for a purpose of type, as described here.
     */
    static ApplyTextureType() {}

    /**
     * Copy parameters into another TextureImporterSettings object.
     */
    static CopyTo() {}


    /**
     * If the provided alpha channel is transparency, enable this to dilate the color to avoid filtering artifacts on the edges.
     */
    get alphaIsTransparency() {}

    /**
     * If the provided alpha channel is transparency, enable this to dilate the color to avoid filtering artifacts on the edges.
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
    get aniso() {}

    /**
     * Anisotropic filtering level of the texture.
     */
    set aniso(value) {}

    /**
     * Enable this to avoid colors seeping out to the edge of the lower Mip levels. Used for light cookies.
     */
    get borderMipmap() {}

    /**
     * Enable this to avoid colors seeping out to the edge of the lower Mip levels. Used for light cookies.
     */
    set borderMipmap(value) {}

    /**
     * Convert heightmap to normal map?
     */
    get convertToNormalMap() {}

    /**
     * Convert heightmap to normal map?
     */
    set convertToNormalMap(value) {}

    /**
     * Convolution mode.
     */
    get cubemapConvolution() {}

    /**
     * Convolution mode.
     */
    set cubemapConvolution(value) {}

    /**
     * Fade out mip levels to gray color?
     */
    get fadeOut() {}

    /**
     * Fade out mip levels to gray color?
     */
    set fadeOut(value) {}

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
     * Mip map bias of the texture.
     */
    get mipmapBias() {}

    /**
     * Mip map bias of the texture.
     */
    set mipmapBias(value) {}

    /**
     * Generate mip maps for the texture?
     */
    get mipmapEnabled() {}

    /**
     * Generate mip maps for the texture?
     */
    set mipmapEnabled(value) {}

    /**
     * Mip level where texture is faded out to gray completely.
     */
    get mipmapFadeDistanceEnd() {}

    /**
     * Mip level where texture is faded out to gray completely.
     */
    set mipmapFadeDistanceEnd(value) {}

    /**
     * Mip level where texture begins to fade out to gray.
     */
    get mipmapFadeDistanceStart() {}

    /**
     * Mip level where texture begins to fade out to gray.
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
    get normalMapFilter() {}

    /**
     * Normal map filtering mode.
     */
    set normalMapFilter(value) {}

    /**
     * Scaling mode for non power of two textures.
     */
    get npotScale() {}

    /**
     * Scaling mode for non power of two textures.
     */
    set npotScale(value) {}

    /**
     * Is texture data readable from scripts.
     */
    get readable() {}

    /**
     * Is texture data readable from scripts.
     */
    set readable(value) {}

    /**
     * Edge-relative alignment of the sprite graphic.
     */
    get spriteAlignment() {}

    /**
     * Edge-relative alignment of the sprite graphic.
     */
    set spriteAlignment(value) {}

    /**
     * Border sizes of the generated sprites.
     */
    get spriteBorder() {}

    /**
     * Border sizes of the generated sprites.
     */
    set spriteBorder(value) {}

    /**
     * The number of blank pixels to leave between the edge of the graphic and the mesh.
     */
    get spriteExtrude() {}

    /**
     * The number of blank pixels to leave between the edge of the graphic and the mesh.
     */
    set spriteExtrude(value) {}

    /**
     * Sprite texture import mode.
     */
    get spriteMode() {}

    /**
     * Sprite texture import mode.
     */
    set spriteMode(value) {}

    /**
     * Pivot point of the Sprite relative to its graphic&#039;s rectangle.
     */
    get spritePivot() {}

    /**
     * Pivot point of the Sprite relative to its graphic&#039;s rectangle.
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
     * The tessellation detail to be used for generating the mesh for the associated sprite if the SpriteMode is set to Single. For Multiple sprites, use the SpriteEditor to specify the value per sprite.
Valid values are in the range [0-1], with higher values generating a tighter mesh. A default of -1 will allow Unity to determine the value automatically.
     */
    get spriteTessellationDetail() {}

    /**
     * The tessellation detail to be used for generating the mesh for the associated sprite if the SpriteMode is set to Single. For Multiple sprites, use the SpriteEditor to specify the value per sprite.
Valid values are in the range [0-1], with higher values generating a tighter mesh. A default of -1 will allow Unity to determine the value automatically.
     */
    set spriteTessellationDetail(value) {}

    /**
     * Is texture storing color data?
     */
    get sRGBTexture() {}

    /**
     * Is texture storing color data?
     */
    set sRGBTexture(value) {}

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
     * Configure parameters to import a texture for a purpose of type, as described here.
     */
    ApplyTextureType() {}

    /**
     * Copy parameters into another TextureImporterSettings object.
     */
    CopyTo() {}

}