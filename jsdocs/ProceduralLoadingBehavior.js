class ProceduralLoadingBehavior {


    /**
     * Do not generate the textures. RebuildTextures() or RebuildTexturesImmediately() must be called to generate the textures.
     */
    get DoNothing() {}

    /**
     * Do not generate the textures. RebuildTextures() or RebuildTexturesImmediately() must be called to generate the textures.
     */
    set DoNothing(value) {}

    /**
     * Generate the textures when loading to favor application&#039;s size (default on supported platform).
     */
    get Generate() {}

    /**
     * Generate the textures when loading to favor application&#039;s size (default on supported platform).
     */
    set Generate(value) {}

    /**
     * Bake the textures to speed up loading and keep the ProceduralMaterial data so that it can still be tweaked and regenerated later on.
     */
    get BakeAndKeep() {}

    /**
     * Bake the textures to speed up loading and keep the ProceduralMaterial data so that it can still be tweaked and regenerated later on.
     */
    set BakeAndKeep(value) {}

    /**
     * Bake the textures to speed up loading and discard the ProceduralMaterial data (default on unsupported platform).
     */
    get BakeAndDiscard() {}

    /**
     * Bake the textures to speed up loading and discard the ProceduralMaterial data (default on unsupported platform).
     */
    set BakeAndDiscard(value) {}

    /**
     * Generate the textures when loading and cache them to disk/flash to speed up subsequent game/application startups.
     */
    get Cache() {}

    /**
     * Generate the textures when loading and cache them to disk/flash to speed up subsequent game/application startups.
     */
    set Cache(value) {}

    /**
     * Do not generate the textures. RebuildTextures() or RebuildTexturesImmediately() must be called to generate the textures. After the textures have been generrated for the first time, they are cached to disk/flash to speed up subsequent game/application startups.
     */
    get DoNothingAndCache() {}

    /**
     * Do not generate the textures. RebuildTextures() or RebuildTexturesImmediately() must be called to generate the textures. After the textures have been generrated for the first time, they are cached to disk/flash to speed up subsequent game/application startups.
     */
    set DoNothingAndCache(value) {}


}