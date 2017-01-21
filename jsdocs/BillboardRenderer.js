class BillboardRenderer {

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
     * Returns an array of closest reflection probes with weights, weight shows how much influence the probe has on the renderer, this value is also used when blending between reflection probes occur.
     */
    static GetClosestReflectionProbes() {}

    /**
     * Get per-renderer material property block.
     */
    static GetPropertyBlock() {}

    /**
     * Lets you add per-renderer material parameters without duplicating a material.
     */
    static SetPropertyBlock() {}


    /**
     * The BillboardAsset to render.
     */
    get billboard() {}

    /**
     * The BillboardAsset to render.
     */
    set billboard(value) {}

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
     * The bounding volume of the renderer (Read Only).
     */
    get bounds() {}

    /**
     * The bounding volume of the renderer (Read Only).
     */
    set bounds(value) {}

    /**
     * Makes the rendered 3D object visible if enabled.
     */
    get enabled() {}

    /**
     * Makes the rendered 3D object visible if enabled.
     */
    set enabled(value) {}

    /**
     * Has this renderer been statically batched with any other renderers?
     */
    get isPartOfStaticBatch() {}

    /**
     * Has this renderer been statically batched with any other renderers?
     */
    set isPartOfStaticBatch(value) {}

    /**
     * Is this renderer visible in any camera? (Read Only)
     */
    get isVisible() {}

    /**
     * Is this renderer visible in any camera? (Read Only)
     */
    set isVisible(value) {}

    /**
     * The index of the baked lightmap applied to this renderer.
     */
    get lightmapIndex() {}

    /**
     * The index of the baked lightmap applied to this renderer.
     */
    set lightmapIndex(value) {}

    /**
     * The UV scale &amp; offset used for a lightmap.
     */
    get lightmapScaleOffset() {}

    /**
     * The UV scale &amp; offset used for a lightmap.
     */
    set lightmapScaleOffset(value) {}

    /**
     * If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject.
     */
    get lightProbeProxyVolumeOverride() {}

    /**
     * If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject.
     */
    set lightProbeProxyVolumeOverride(value) {}

    /**
     * The light probe interpolation type.
     */
    get lightProbeUsage() {}

    /**
     * The light probe interpolation type.
     */
    set lightProbeUsage(value) {}

    /**
     * Matrix that transforms a point from local space into world space (Read Only).
     */
    get localToWorldMatrix() {}

    /**
     * Matrix that transforms a point from local space into world space (Read Only).
     */
    set localToWorldMatrix(value) {}

    /**
     * Returns the first instantiated Material assigned to the renderer.
     */
    get material() {}

    /**
     * Returns the first instantiated Material assigned to the renderer.
     */
    set material(value) {}

    /**
     * Returns all the instantiated materials of this object.
     */
    get materials() {}

    /**
     * Returns all the instantiated materials of this object.
     */
    set materials(value) {}

    /**
     * Specifies the mode for motion vector rendering.
     */
    get motionVectorGenerationMode() {}

    /**
     * Specifies the mode for motion vector rendering.
     */
    set motionVectorGenerationMode(value) {}

    /**
     * If set, Renderer will use this Transform&#039;s position to find the light or reflection probe.
     */
    get probeAnchor() {}

    /**
     * If set, Renderer will use this Transform&#039;s position to find the light or reflection probe.
     */
    set probeAnchor(value) {}

    /**
     * The index of the realtime lightmap applied to this renderer.
     */
    get realtimeLightmapIndex() {}

    /**
     * The index of the realtime lightmap applied to this renderer.
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
     * Does this object receive shadows?
     */
    get receiveShadows() {}

    /**
     * Does this object receive shadows?
     */
    set receiveShadows(value) {}

    /**
     * Should reflection probes be used for this Renderer?
     */
    get reflectionProbeUsage() {}

    /**
     * Should reflection probes be used for this Renderer?
     */
    set reflectionProbeUsage(value) {}

    /**
     * Does this object cast shadows?
     */
    get shadowCastingMode() {}

    /**
     * Does this object cast shadows?
     */
    set shadowCastingMode(value) {}

    /**
     * The shared material of this object.
     */
    get sharedMaterial() {}

    /**
     * The shared material of this object.
     */
    set sharedMaterial(value) {}

    /**
     * All the shared materials of this object.
     */
    get sharedMaterials() {}

    /**
     * All the shared materials of this object.
     */
    set sharedMaterials(value) {}

    /**
     * Unique ID of the Renderer&#039;s sorting layer.
     */
    get sortingLayerID() {}

    /**
     * Unique ID of the Renderer&#039;s sorting layer.
     */
    set sortingLayerID(value) {}

    /**
     * Name of the Renderer&#039;s sorting layer.
     */
    get sortingLayerName() {}

    /**
     * Name of the Renderer&#039;s sorting layer.
     */
    set sortingLayerName(value) {}

    /**
     * Renderer&#039;s order within a sorting layer.
     */
    get sortingOrder() {}

    /**
     * Renderer&#039;s order within a sorting layer.
     */
    set sortingOrder(value) {}

    /**
     * Matrix that transforms a point from world space into local space (Read Only).
     */
    get worldToLocalMatrix() {}

    /**
     * Matrix that transforms a point from world space into local space (Read Only).
     */
    set worldToLocalMatrix(value) {}


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

    /**
     * Returns an array of closest reflection probes with weights, weight shows how much influence the probe has on the renderer, this value is also used when blending between reflection probes occur.
     */
    GetClosestReflectionProbes() {}

    /**
     * Get per-renderer material property block.
     */
    GetPropertyBlock() {}

    /**
     * Lets you add per-renderer material parameters without duplicating a material.
     */
    SetPropertyBlock() {}

}