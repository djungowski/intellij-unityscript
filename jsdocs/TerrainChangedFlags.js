class TerrainChangedFlags {


    /**
     * Indicates a change to the heightmap data.
     */
    get Heightmap() {}

    /**
     * Indicates a change to the heightmap data.
     */
    set Heightmap(value) {}

    /**
     * Indicates a change to the tree data.
     */
    get TreeInstances() {}

    /**
     * Indicates a change to the tree data.
     */
    set TreeInstances(value) {}

    /**
     * Indicates a change to the heightmap data without computing LOD.
     */
    get DelayedHeightmapUpdate() {}

    /**
     * Indicates a change to the heightmap data without computing LOD.
     */
    set DelayedHeightmapUpdate(value) {}

    /**
     * Indicates that a change was made to the terrain that was so significant that the internal rendering data need to be flushed and recreated.
     */
    get FlushEverythingImmediately() {}

    /**
     * Indicates that a change was made to the terrain that was so significant that the internal rendering data need to be flushed and recreated.
     */
    set FlushEverythingImmediately(value) {}

    /**
     * Indicates a change to the detail data.
     */
    get RemoveDirtyDetailsImmediately() {}

    /**
     * Indicates a change to the detail data.
     */
    set RemoveDirtyDetailsImmediately(value) {}

    /**
     * Indicates that the TerrainData object is about to be destroyed.
     */
    get WillBeDestroyed() {}

    /**
     * Indicates that the TerrainData object is about to be destroyed.
     */
    set WillBeDestroyed(value) {}


}