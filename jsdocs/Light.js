class Light {

    /**
     * Add a command buffer to be executed at a specified place.
     */
    static AddCommandBuffer() {}

    /**
     * Get command buffers to be executed at a specified place.
     */
    static GetCommandBuffers() {}

    /**
     * Remove all command buffers set on this light.
     */
    static RemoveAllCommandBuffers() {}

    /**
     * Remove command buffer from execution at a specified place.
     */
    static RemoveCommandBuffer() {}

    /**
     * Remove command buffers from execution at a specified place.
     */
    static RemoveCommandBuffers() {}

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
     * The size of the area light. Editor only.
     */
    get areaSize() {}

    /**
     * The size of the area light. Editor only.
     */
    set areaSize(value) {}

    /**
     * A unique index, used internally for identifying lights contributing to lightmaps and/or light probes.
     */
    get bakedIndex() {}

    /**
     * A unique index, used internally for identifying lights contributing to lightmaps and/or light probes.
     */
    set bakedIndex(value) {}

    /**
     * The multiplier that defines the strength of the bounce lighting.
     */
    get bounceIntensity() {}

    /**
     * The multiplier that defines the strength of the bounce lighting.
     */
    set bounceIntensity(value) {}

    /**
     * The color of the light.
     */
    get color() {}

    /**
     * The color of the light.
     */
    set color(value) {}

    /**
     * Number of command buffers set up on this light (Read Only).
     */
    get commandBufferCount() {}

    /**
     * Number of command buffers set up on this light (Read Only).
     */
    set commandBufferCount(value) {}

    /**
     * The cookie texture projected by the light.
     */
    get cookie() {}

    /**
     * The cookie texture projected by the light.
     */
    set cookie(value) {}

    /**
     * The size of a directional light&#039;s cookie.
     */
    get cookieSize() {}

    /**
     * The size of a directional light&#039;s cookie.
     */
    set cookieSize(value) {}

    /**
     * This is used to light certain objects in the scene selectively.
     */
    get cullingMask() {}

    /**
     * This is used to light certain objects in the scene selectively.
     */
    set cullingMask(value) {}

    /**
     * The flare asset to use for this light.
     */
    get flare() {}

    /**
     * The flare asset to use for this light.
     */
    set flare(value) {}

    /**
     * The Intensity of a light is multiplied with the Light color.
     */
    get intensity() {}

    /**
     * The Intensity of a light is multiplied with the Light color.
     */
    set intensity(value) {}

    /**
     * Is the light contribution already stored in lightmaps and/or lightprobes (Read Only).
     */
    get isBaked() {}

    /**
     * Is the light contribution already stored in lightmaps and/or lightprobes (Read Only).
     */
    set isBaked(value) {}

    /**
     * This property controls whether this light only affects lightmap baking, or dynamic objects, or both.
     */
    get lightmappingMode() {}

    /**
     * This property controls whether this light only affects lightmap baking, or dynamic objects, or both.
     */
    set lightmappingMode(value) {}

    /**
     * The range of the light.
     */
    get range() {}

    /**
     * The range of the light.
     */
    set range(value) {}

    /**
     * How to render the light.
     */
    get renderMode() {}

    /**
     * How to render the light.
     */
    set renderMode(value) {}

    /**
     * Shadow mapping constant bias.
     */
    get shadowBias() {}

    /**
     * Shadow mapping constant bias.
     */
    set shadowBias(value) {}

    /**
     * The custom resolution of the shadow map.
     */
    get shadowCustomResolution() {}

    /**
     * The custom resolution of the shadow map.
     */
    set shadowCustomResolution(value) {}

    /**
     * Near plane value to use for shadow frustums.
     */
    get shadowNearPlane() {}

    /**
     * Near plane value to use for shadow frustums.
     */
    set shadowNearPlane(value) {}

    /**
     * Shadow mapping normal-based bias.
     */
    get shadowNormalBias() {}

    /**
     * Shadow mapping normal-based bias.
     */
    set shadowNormalBias(value) {}

    /**
     * The resolution of the shadow map.
     */
    get shadowResolution() {}

    /**
     * The resolution of the shadow map.
     */
    set shadowResolution(value) {}

    /**
     * How this light casts shadows
     */
    get shadows() {}

    /**
     * How this light casts shadows
     */
    set shadows(value) {}

    /**
     * Strength of light&#039;s shadows.
     */
    get shadowStrength() {}

    /**
     * Strength of light&#039;s shadows.
     */
    set shadowStrength(value) {}

    /**
     * The angle of the light&#039;s spotlight cone in degrees.
     */
    get spotAngle() {}

    /**
     * The angle of the light&#039;s spotlight cone in degrees.
     */
    set spotAngle(value) {}

    /**
     * The type of the light.
     */
    get type() {}

    /**
     * The type of the light.
     */
    set type(value) {}

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
     * Add a command buffer to be executed at a specified place.
     */
    AddCommandBuffer() {}

    /**
     * Get command buffers to be executed at a specified place.
     */
    GetCommandBuffers() {}

    /**
     * Remove all command buffers set on this light.
     */
    RemoveAllCommandBuffers() {}

    /**
     * Remove command buffer from execution at a specified place.
     */
    RemoveCommandBuffer() {}

    /**
     * Remove command buffers from execution at a specified place.
     */
    RemoveCommandBuffers() {}

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