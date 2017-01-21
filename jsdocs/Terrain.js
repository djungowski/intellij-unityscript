class Terrain {
    /**
     * The active terrain. This is a convenience function to get to the main terrain in the scene.
     */
    static get activeTerrain() {}

    /**
     * The active terrain. This is a convenience function to get to the main terrain in the scene.
     */
    static set activeTerrain(value) {}

    /**
     * The active terrains in the scene.
     */
    static get activeTerrains() {}

    /**
     * The active terrains in the scene.
     */
    static set activeTerrains(value) {}


    /**
     * Adds a tree instance to the terrain.
     */
    static AddTreeInstance() {}

    /**
     * Update the terrain&#039;s LOD and vegetation information after making changes with TerrainData.SetHeightsDelayLOD.
     */
    static ApplyDelayedHeightmapModification() {}

    /**
     * Flushes any change done in the terrain so it takes effect.
     */
    static Flush() {}

    /**
     * Fills the list with reflection probes whose AABB intersects with terrain&#039;s AABB. Their weights are also provided. Weight shows how much influence the probe has on the terrain, and is used when the blending between multiple reflection probes occurs.
     */
    static GetClosestReflectionProbes() {}

    /**
     * Get the position of the terrain.
     */
    static GetPosition() {}

    /**
     * Get the previously set splat material properties by copying to the dest MaterialPropertyBlock object.
     */
    static GetSplatMaterialPropertyBlock() {}

    /**
     * Samples the height at the given position defined in world space, relative to the terrain space.
     */
    static SampleHeight() {}

    /**
     * Lets you setup the connection between neighboring Terrains.
     */
    static SetNeighbors() {}

    /**
     * Set the additional material properties when rendering the terrain heightmap using the splat material.
     */
    static SetSplatMaterialPropertyBlock() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
     */
    static BroadcastMessage() {}

    /**
     * Is this game object tagged with tag ?
     */
    static CompareTag() {}

    /**
     * Returns the component of Type type if the game object has one attached, null if it doesn&#039;t.
     */
    static GetComponent() {}

    /**
     * Returns the component of Type type in the GameObject or any of its children using depth first search.
     */
    static GetComponentInChildren() {}

    /**
     * Returns the component of Type type in the GameObject or any of its parents.
     */
    static GetComponentInParent() {}

    /**
     * Returns all components of Type type in the GameObject.
     */
    static GetComponents() {}

    /**
     * Returns all components of Type type in the GameObject or any of its children.
     */
    static GetComponentsInChildren() {}

    /**
     * Returns all components of Type type in the GameObject or any of its parents.
     */
    static GetComponentsInParent() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object.
     */
    static SendMessage() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
     */
    static SendMessageUpwards() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}

    /**
     * Adds a tree instance to the terrain.
     */
    static AddTreeInstance() {}

    /**
     * Update the terrain&#039;s LOD and vegetation information after making changes with TerrainData.SetHeightsDelayLOD.
     */
    static ApplyDelayedHeightmapModification() {}

    /**
     * Flushes any change done in the terrain so it takes effect.
     */
    static Flush() {}

    /**
     * Fills the list with reflection probes whose AABB intersects with terrain&#039;s AABB. Their weights are also provided. Weight shows how much influence the probe has on the terrain, and is used when the blending between multiple reflection probes occurs.
     */
    static GetClosestReflectionProbes() {}

    /**
     * Get the position of the terrain.
     */
    static GetPosition() {}

    /**
     * Get the previously set splat material properties by copying to the dest MaterialPropertyBlock object.
     */
    static GetSplatMaterialPropertyBlock() {}

    /**
     * Samples the height at the given position defined in world space, relative to the terrain space.
     */
    static SampleHeight() {}

    /**
     * Lets you setup the connection between neighboring Terrains.
     */
    static SetNeighbors() {}

    /**
     * Set the additional material properties when rendering the terrain heightmap using the splat material.
     */
    static SetSplatMaterialPropertyBlock() {}


    /**
     * Specifies if an array of internal light probes should be baked for terrain trees. Available only in editor.
     */
    get bakeLightProbesForTrees() {}

    /**
     * Specifies if an array of internal light probes should be baked for terrain trees. Available only in editor.
     */
    set bakeLightProbesForTrees(value) {}

    /**
     * Heightmap patches beyond basemap distance will use a precomputed low res basemap.
     */
    get basemapDistance() {}

    /**
     * Heightmap patches beyond basemap distance will use a precomputed low res basemap.
     */
    set basemapDistance(value) {}

    /**
     * Should terrain cast shadows?.
     */
    get castShadows() {}

    /**
     * Should terrain cast shadows?.
     */
    set castShadows(value) {}

    /**
     * Collect detail patches from memory.
     */
    get collectDetailPatches() {}

    /**
     * Collect detail patches from memory.
     */
    set collectDetailPatches(value) {}

    /**
     * Density of detail objects.
     */
    get detailObjectDensity() {}

    /**
     * Density of detail objects.
     */
    set detailObjectDensity(value) {}

    /**
     * Detail objects will be displayed up to this distance.
     */
    get detailObjectDistance() {}

    /**
     * Detail objects will be displayed up to this distance.
     */
    set detailObjectDistance(value) {}

    /**
     * Specify if terrain heightmap should be drawn.
     */
    get drawHeightmap() {}

    /**
     * Specify if terrain heightmap should be drawn.
     */
    set drawHeightmap(value) {}

    /**
     * Specify if terrain trees and details should be drawn.
     */
    get drawTreesAndFoliage() {}

    /**
     * Specify if terrain trees and details should be drawn.
     */
    set drawTreesAndFoliage(value) {}

    /**
     * Controls what part of the terrain should be rendered.
     */
    get editorRenderFlags() {}

    /**
     * Controls what part of the terrain should be rendered.
     */
    set editorRenderFlags(value) {}

    /**
     * Lets you essentially lower the heightmap resolution used for rendering.
     */
    get heightmapMaximumLOD() {}

    /**
     * Lets you essentially lower the heightmap resolution used for rendering.
     */
    set heightmapMaximumLOD(value) {}

    /**
     * An approximation of how many pixels the terrain will pop in the worst case when switching lod.
     */
    get heightmapPixelError() {}

    /**
     * An approximation of how many pixels the terrain will pop in the worst case when switching lod.
     */
    set heightmapPixelError(value) {}

    /**
     * The shininess value of the terrain.
     */
    get legacyShininess() {}

    /**
     * The shininess value of the terrain.
     */
    set legacyShininess(value) {}

    /**
     * The specular color of the terrain.
     */
    get legacySpecular() {}

    /**
     * The specular color of the terrain.
     */
    set legacySpecular(value) {}

    /**
     * The index of the baked lightmap applied to this terrain.
     */
    get lightmapIndex() {}

    /**
     * The index of the baked lightmap applied to this terrain.
     */
    set lightmapIndex(value) {}

    /**
     * The UV scale &amp; offset used for a baked lightmap.
     */
    get lightmapScaleOffset() {}

    /**
     * The UV scale &amp; offset used for a baked lightmap.
     */
    set lightmapScaleOffset(value) {}

    /**
     * The custom material used to render the terrain.
     */
    get materialTemplate() {}

    /**
     * The custom material used to render the terrain.
     */
    set materialTemplate(value) {}

    /**
     * The type of the material used to render the terrain. Could be one of the built-in types or custom. See MaterialType.
     */
    get materialType() {}

    /**
     * The type of the material used to render the terrain. Could be one of the built-in types or custom. See MaterialType.
     */
    set materialType(value) {}

    /**
     * The index of the realtime lightmap applied to this terrain.
     */
    get realtimeLightmapIndex() {}

    /**
     * The index of the realtime lightmap applied to this terrain.
     */
    set realtimeLightmapIndex(value) {}

    /**
     * The UV scale &amp; offset used for a realtime lightmap.
     */
    get realtimeLightmapScaleOffset() {}

    /**
     * The UV scale &amp; offset used for a realtime lightmap.
     */
    set realtimeLightmapScaleOffset(value) {}

    /**
     * How reflection probes are used for terrain. See ReflectionProbeUsage.
     */
    get reflectionProbeUsage() {}

    /**
     * How reflection probes are used for terrain. See ReflectionProbeUsage.
     */
    set reflectionProbeUsage(value) {}

    /**
     * The Terrain Data that stores heightmaps, terrain textures, detail meshes and trees.
     */
    get terrainData() {}

    /**
     * The Terrain Data that stores heightmaps, terrain textures, detail meshes and trees.
     */
    set terrainData(value) {}

    /**
     * Distance from the camera where trees will be rendered as billboards only.
     */
    get treeBillboardDistance() {}

    /**
     * Distance from the camera where trees will be rendered as billboards only.
     */
    set treeBillboardDistance(value) {}

    /**
     * Total distance delta that trees will use to transition from billboard orientation to mesh orientation.
     */
    get treeCrossFadeLength() {}

    /**
     * Total distance delta that trees will use to transition from billboard orientation to mesh orientation.
     */
    set treeCrossFadeLength(value) {}

    /**
     * The maximum distance at which trees are rendered.
     */
    get treeDistance() {}

    /**
     * The maximum distance at which trees are rendered.
     */
    set treeDistance(value) {}

    /**
     * The multiplier to the current LOD bias used for rendering LOD trees (i.e. SpeedTree trees).
     */
    get treeLODBiasMultiplier() {}

    /**
     * The multiplier to the current LOD bias used for rendering LOD trees (i.e. SpeedTree trees).
     */
    set treeLODBiasMultiplier(value) {}

    /**
     * Maximum number of trees rendered at full LOD.
     */
    get treeMaximumFullLODCount() {}

    /**
     * Maximum number of trees rendered at full LOD.
     */
    set treeMaximumFullLODCount(value) {}

    /**
     * Enabled Behaviours are Updated, disabled Behaviours are not.
     */
    get enabled() {}

    /**
     * Enabled Behaviours are Updated, disabled Behaviours are not.
     */
    set enabled(value) {}

    /**
     * Has the Behaviour had enabled called.
     */
    get isActiveAndEnabled() {}

    /**
     * Has the Behaviour had enabled called.
     */
    set isActiveAndEnabled(value) {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    get gameObject() {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    set gameObject(value) {}

    /**
     * The tag of this game object.
     */
    get tag() {}

    /**
     * The tag of this game object.
     */
    set tag(value) {}

    /**
     * The Transform attached to this GameObject.
     */
    get transform() {}

    /**
     * The Transform attached to this GameObject.
     */
    set transform(value) {}

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
     * Adds a tree instance to the terrain.
     */
    AddTreeInstance() {}

    /**
     * Update the terrain&#039;s LOD and vegetation information after making changes with TerrainData.SetHeightsDelayLOD.
     */
    ApplyDelayedHeightmapModification() {}

    /**
     * Flushes any change done in the terrain so it takes effect.
     */
    Flush() {}

    /**
     * Fills the list with reflection probes whose AABB intersects with terrain&#039;s AABB. Their weights are also provided. Weight shows how much influence the probe has on the terrain, and is used when the blending between multiple reflection probes occurs.
     */
    GetClosestReflectionProbes() {}

    /**
     * Get the position of the terrain.
     */
    GetPosition() {}

    /**
     * Get the previously set splat material properties by copying to the dest MaterialPropertyBlock object.
     */
    GetSplatMaterialPropertyBlock() {}

    /**
     * Samples the height at the given position defined in world space, relative to the terrain space.
     */
    SampleHeight() {}

    /**
     * Lets you setup the connection between neighboring Terrains.
     */
    SetNeighbors() {}

    /**
     * Set the additional material properties when rendering the terrain heightmap using the splat material.
     */
    SetSplatMaterialPropertyBlock() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
     */
    BroadcastMessage() {}

    /**
     * Is this game object tagged with tag ?
     */
    CompareTag() {}

    /**
     * Returns the component of Type type if the game object has one attached, null if it doesn&#039;t.
     */
    GetComponent() {}

    /**
     * Returns the component of Type type in the GameObject or any of its children using depth first search.
     */
    GetComponentInChildren() {}

    /**
     * Returns the component of Type type in the GameObject or any of its parents.
     */
    GetComponentInParent() {}

    /**
     * Returns all components of Type type in the GameObject.
     */
    GetComponents() {}

    /**
     * Returns all components of Type type in the GameObject or any of its children.
     */
    GetComponentsInChildren() {}

    /**
     * Returns all components of Type type in the GameObject or any of its parents.
     */
    GetComponentsInParent() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object.
     */
    SendMessage() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
     */
    SendMessageUpwards() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}