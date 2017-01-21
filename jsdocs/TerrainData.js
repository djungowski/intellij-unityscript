class TerrainData {

    /**
     * Returns the alpha map at a position x, y given a width and height.
     */
    static GetAlphamaps() {}

    /**
     * Returns a 2D array of the detail object density in the specific location.
     */
    static GetDetailLayer() {}

    /**
     * Gets the height at a certain point x,y.
     */
    static GetHeight() {}

    /**
     * Get an array of heightmap samples.
     */
    static GetHeights() {}

    /**
     * Gets an interpolated height at a point x,y.
     */
    static GetInterpolatedHeight() {}

    /**
     * Get an interpolated normal at a given location.
     */
    static GetInterpolatedNormal() {}

    /**
     * Gets the gradient of the terrain at point (x,y).
     */
    static GetSteepness() {}

    /**
     * Returns an array of all supported detail layer indices in the area.
     */
    static GetSupportedLayers() {}

    /**
     * Get the tree instance at the specified index. It is used as a faster version of treeInstances[index] as this function doesn&#039;t create the entire tree instances array.
     */
    static GetTreeInstance() {}

    /**
     * Reloads all the values of the available prototypes (ie, detail mesh assets) in the TerrainData Object.
     */
    static RefreshPrototypes() {}

    /**
     * Assign all splat values in the given map area.
     */
    static SetAlphamaps() {}

    /**
     * Sets the detail layer density map.
     */
    static SetDetailLayer() {}

    /**
     * Set the resolution of the detail map.
     */
    static SetDetailResolution() {}

    /**
     * Set an array of heightmap samples.
     */
    static SetHeights() {}

    /**
     * Set an array of heightmap samples.
     */
    static SetHeightsDelayLOD() {}

    /**
     * Set the tree instance with new parameters at the specified index. However, TreeInstance.prototypeIndex and TreeInstance.position can not be changed otherwise an ArgumentException will be thrown.
     */
    static SetTreeInstance() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * Height of the alpha map.
     */
    get alphamapHeight() {}

    /**
     * Height of the alpha map.
     */
    set alphamapHeight(value) {}

    /**
     * Number of alpha map layers.
     */
    get alphamapLayers() {}

    /**
     * Number of alpha map layers.
     */
    set alphamapLayers(value) {}

    /**
     * Resolution of the alpha map.
     */
    get alphamapResolution() {}

    /**
     * Resolution of the alpha map.
     */
    set alphamapResolution(value) {}

    /**
     * Alpha map textures used by the Terrain. Used by Terrain Inspector for undo.
     */
    get alphamapTextures() {}

    /**
     * Alpha map textures used by the Terrain. Used by Terrain Inspector for undo.
     */
    set alphamapTextures(value) {}

    /**
     * Width of the alpha map.
     */
    get alphamapWidth() {}

    /**
     * Width of the alpha map.
     */
    set alphamapWidth(value) {}

    /**
     * Resolution of the base map used for rendering far patches on the terrain.
     */
    get baseMapResolution() {}

    /**
     * Resolution of the base map used for rendering far patches on the terrain.
     */
    set baseMapResolution(value) {}

    /**
     * The local bounding box of the TerrainData object.
     */
    get bounds() {}

    /**
     * The local bounding box of the TerrainData object.
     */
    set bounds(value) {}

    /**
     * Detail height of the TerrainData.
     */
    get detailHeight() {}

    /**
     * Detail height of the TerrainData.
     */
    set detailHeight(value) {}

    /**
     * Contains the detail texture/meshes that the terrain has.
     */
    get detailPrototypes() {}

    /**
     * Contains the detail texture/meshes that the terrain has.
     */
    set detailPrototypes(value) {}

    /**
     * Detail Resolution of the TerrainData.
     */
    get detailResolution() {}

    /**
     * Detail Resolution of the TerrainData.
     */
    set detailResolution(value) {}

    /**
     * Detail width of the TerrainData.
     */
    get detailWidth() {}

    /**
     * Detail width of the TerrainData.
     */
    set detailWidth(value) {}

    /**
     * Height of the terrain in samples (Read Only).
     */
    get heightmapHeight() {}

    /**
     * Height of the terrain in samples (Read Only).
     */
    set heightmapHeight(value) {}

    /**
     * Resolution of the heightmap.
     */
    get heightmapResolution() {}

    /**
     * Resolution of the heightmap.
     */
    set heightmapResolution(value) {}

    /**
     * The size of each heightmap sample.
     */
    get heightmapScale() {}

    /**
     * The size of each heightmap sample.
     */
    set heightmapScale(value) {}

    /**
     * Width of the terrain in samples (Read Only).
     */
    get heightmapWidth() {}

    /**
     * Width of the terrain in samples (Read Only).
     */
    set heightmapWidth(value) {}

    /**
     * The total size in world units of the terrain.
     */
    get size() {}

    /**
     * The total size in world units of the terrain.
     */
    set size(value) {}

    /**
     * Splat texture used by the terrain.
     */
    get splatPrototypes() {}

    /**
     * Splat texture used by the terrain.
     */
    set splatPrototypes(value) {}

    /**
     * The thickness of the terrain used for collision detection.
     */
    get thickness() {}

    /**
     * The thickness of the terrain used for collision detection.
     */
    set thickness(value) {}

    /**
     * Returns the number of tree instances.
     */
    get treeInstanceCount() {}

    /**
     * Returns the number of tree instances.
     */
    set treeInstanceCount(value) {}

    /**
     * Contains the current trees placed in the terrain.
     */
    get treeInstances() {}

    /**
     * Contains the current trees placed in the terrain.
     */
    set treeInstances(value) {}

    /**
     * The list of tree prototypes this are the ones available in the inspector.
     */
    get treePrototypes() {}

    /**
     * The list of tree prototypes this are the ones available in the inspector.
     */
    set treePrototypes(value) {}

    /**
     * Amount of waving grass in the terrain.
     */
    get wavingGrassAmount() {}

    /**
     * Amount of waving grass in the terrain.
     */
    set wavingGrassAmount(value) {}

    /**
     * Speed of the waving grass.
     */
    get wavingGrassSpeed() {}

    /**
     * Speed of the waving grass.
     */
    set wavingGrassSpeed(value) {}

    /**
     * Strength of the waving grass in the terrain.
     */
    get wavingGrassStrength() {}

    /**
     * Strength of the waving grass in the terrain.
     */
    set wavingGrassStrength(value) {}

    /**
     * Color of the waving grass that the terrain has.
     */
    get wavingGrassTint() {}

    /**
     * Color of the waving grass that the terrain has.
     */
    set wavingGrassTint(value) {}

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
     * Returns the alpha map at a position x, y given a width and height.
     */
    GetAlphamaps() {}

    /**
     * Returns a 2D array of the detail object density in the specific location.
     */
    GetDetailLayer() {}

    /**
     * Gets the height at a certain point x,y.
     */
    GetHeight() {}

    /**
     * Get an array of heightmap samples.
     */
    GetHeights() {}

    /**
     * Gets an interpolated height at a point x,y.
     */
    GetInterpolatedHeight() {}

    /**
     * Get an interpolated normal at a given location.
     */
    GetInterpolatedNormal() {}

    /**
     * Gets the gradient of the terrain at point (x,y).
     */
    GetSteepness() {}

    /**
     * Returns an array of all supported detail layer indices in the area.
     */
    GetSupportedLayers() {}

    /**
     * Get the tree instance at the specified index. It is used as a faster version of treeInstances[index] as this function doesn&#039;t create the entire tree instances array.
     */
    GetTreeInstance() {}

    /**
     * Reloads all the values of the available prototypes (ie, detail mesh assets) in the TerrainData Object.
     */
    RefreshPrototypes() {}

    /**
     * Assign all splat values in the given map area.
     */
    SetAlphamaps() {}

    /**
     * Sets the detail layer density map.
     */
    SetDetailLayer() {}

    /**
     * Set the resolution of the detail map.
     */
    SetDetailResolution() {}

    /**
     * Set an array of heightmap samples.
     */
    SetHeights() {}

    /**
     * Set an array of heightmap samples.
     */
    SetHeightsDelayLOD() {}

    /**
     * Set the tree instance with new parameters at the specified index. However, TreeInstance.prototypeIndex and TreeInstance.position can not be changed otherwise an ArgumentException will be thrown.
     */
    SetTreeInstance() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}