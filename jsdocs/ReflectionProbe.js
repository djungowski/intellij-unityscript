class ReflectionProbe {

    /**
     * Checks if a probe has finished a time-sliced render.
     */
    static IsFinishedRendering() {}

    /**
     * Refreshes the probe&#039;s cubemap.
     */
    static RenderProbe() {}

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
     * Checks if a probe has finished a time-sliced render.
     */
    static IsFinishedRendering() {}

    /**
     * Refreshes the probe&#039;s cubemap.
     */
    static RenderProbe() {}


    /**
     * The color with which the texture of reflection probe will be cleared.
     */
    get backgroundColor() {}

    /**
     * The color with which the texture of reflection probe will be cleared.
     */
    set backgroundColor(value) {}

    /**
     * Reference to the baked texture of the reflection probe&#039;s surrounding.
     */
    get bakedTexture() {}

    /**
     * Reference to the baked texture of the reflection probe&#039;s surrounding.
     */
    set bakedTexture(value) {}

    /**
     * Distance around probe used for blending (used in deferred probes).
     */
    get blendDistance() {}

    /**
     * Distance around probe used for blending (used in deferred probes).
     */
    set blendDistance(value) {}

    /**
     * The bounding volume of the reflection probe (Read Only).
     */
    get bounds() {}

    /**
     * The bounding volume of the reflection probe (Read Only).
     */
    set bounds(value) {}

    /**
     * Should this reflection probe use box projection?
     */
    get boxProjection() {}

    /**
     * Should this reflection probe use box projection?
     */
    set boxProjection(value) {}

    /**
     * The center of the box area in which reflections will be applied to the objects. Measured in the probes&#039;s local space.
     */
    get center() {}

    /**
     * The center of the box area in which reflections will be applied to the objects. Measured in the probes&#039;s local space.
     */
    set center(value) {}

    /**
     * How the reflection probe clears the background.
     */
    get clearFlags() {}

    /**
     * How the reflection probe clears the background.
     */
    set clearFlags(value) {}

    /**
     * This is used to render parts of the reflecion probe&#039;s surrounding selectively.
     */
    get cullingMask() {}

    /**
     * This is used to render parts of the reflecion probe&#039;s surrounding selectively.
     */
    set cullingMask(value) {}

    /**
     * Reference to the baked texture of the reflection probe&#039;s surrounding. Use this to assign custom reflection texture.
     */
    get customBakedTexture() {}

    /**
     * Reference to the baked texture of the reflection probe&#039;s surrounding. Use this to assign custom reflection texture.
     */
    set customBakedTexture(value) {}

    /**
     * The far clipping plane distance when rendering the probe.
     */
    get farClipPlane() {}

    /**
     * The far clipping plane distance when rendering the probe.
     */
    set farClipPlane(value) {}

    /**
     * Should this reflection probe use HDR rendering?
     */
    get hdr() {}

    /**
     * Should this reflection probe use HDR rendering?
     */
    set hdr(value) {}

    /**
     * Reflection probe importance.
     */
    get importance() {}

    /**
     * Reflection probe importance.
     */
    set importance(value) {}

    /**
     * The intensity modifier that is applied to the texture of reflection probe in the shader.
     */
    get intensity() {}

    /**
     * The intensity modifier that is applied to the texture of reflection probe in the shader.
     */
    set intensity(value) {}

    /**
     * Should reflection probe texture be generated in the Editor (ReflectionProbeMode.Baked) or should probe use custom specified texure (ReflectionProbeMode.Custom)?
     */
    get mode() {}

    /**
     * Should reflection probe texture be generated in the Editor (ReflectionProbeMode.Baked) or should probe use custom specified texure (ReflectionProbeMode.Custom)?
     */
    set mode(value) {}

    /**
     * The near clipping plane distance when rendering the probe.
     */
    get nearClipPlane() {}

    /**
     * The near clipping plane distance when rendering the probe.
     */
    set nearClipPlane(value) {}

    /**
     * Sets the way the probe will refresh.See Also: ReflectionProbeRefreshMode.
     */
    get refreshMode() {}

    /**
     * Sets the way the probe will refresh.See Also: ReflectionProbeRefreshMode.
     */
    set refreshMode(value) {}

    /**
     * Resolution of the underlying reflection texture in pixels.
     */
    get resolution() {}

    /**
     * Resolution of the underlying reflection texture in pixels.
     */
    set resolution(value) {}

    /**
     * Shadow drawing distance when rendering the probe.
     */
    get shadowDistance() {}

    /**
     * Shadow drawing distance when rendering the probe.
     */
    set shadowDistance(value) {}

    /**
     * The size of the box area in which reflections will be applied to the objects. Measured in the probes&#039;s local space.
     */
    get size() {}

    /**
     * The size of the box area in which reflections will be applied to the objects. Measured in the probes&#039;s local space.
     */
    set size(value) {}

    /**
     * Texture which is passed to the shader of the objects in the vicinity of the reflection probe (Read Only).
     */
    get texture() {}

    /**
     * Texture which is passed to the shader of the objects in the vicinity of the reflection probe (Read Only).
     */
    set texture(value) {}

    /**
     * Sets this probe time-slicing modeSee Also: ReflectionProbeTimeSlicingMode.
     */
    get timeSlicingMode() {}

    /**
     * Sets this probe time-slicing modeSee Also: ReflectionProbeTimeSlicingMode.
     */
    set timeSlicingMode(value) {}

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
     * Checks if a probe has finished a time-sliced render.
     */
    IsFinishedRendering() {}

    /**
     * Refreshes the probe&#039;s cubemap.
     */
    RenderProbe() {}

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