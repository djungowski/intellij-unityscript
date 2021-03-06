class CanvasRenderer {

    /**
     * Take the Vertex steam and split it corrisponding arrays (positions, colors, uv0s, uv1s, normals and tangents).
     */
    static AddUIVertexStream() {}

    /**
     * Convert a set of vertex components into a stream of UIVertex.
     */
    static CreateUIVertexStream() {}

    /**
     * Given a list of UIVertex, split the stream into it&#039;s component types.
     */
    static SplitUIVertexStreams() {}

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}


    /**
     * Depth of the renderer relative to the root canvas.
     */
    get absoluteDepth() {}

    /**
     * Depth of the renderer relative to the root canvas.
     */
    set absoluteDepth(value) {}

    /**
     * Indicates whether geometry emitted by this renderer is ignored.
     */
    get cull() {}

    /**
     * Indicates whether geometry emitted by this renderer is ignored.
     */
    set cull(value) {}

    /**
     * True if any change has occured that would invalidate the positions of generated geometry.
     */
    get hasMoved() {}

    /**
     * True if any change has occured that would invalidate the positions of generated geometry.
     */
    set hasMoved(value) {}

    /**
     * Enable &#039;render stack&#039; pop draw call.
     */
    get hasPopInstruction() {}

    /**
     * Enable &#039;render stack&#039; pop draw call.
     */
    set hasPopInstruction(value) {}

    /**
     * True if rect clipping has been enabled on this renderer.
See Also: CanvasRenderer.EnableRectClipping, CanvasRenderer.DisableRectClipping.
     */
    get hasRectClipping() {}

    /**
     * True if rect clipping has been enabled on this renderer.
See Also: CanvasRenderer.EnableRectClipping, CanvasRenderer.DisableRectClipping.
     */
    set hasRectClipping(value) {}

    /**
     * The number of materials usable by this renderer.
     */
    get materialCount() {}

    /**
     * The number of materials usable by this renderer.
     */
    set materialCount(value) {}

    /**
     * The number of materials usable by this renderer. Used internally for masking.
     */
    get popMaterialCount() {}

    /**
     * The number of materials usable by this renderer. Used internally for masking.
     */
    set popMaterialCount(value) {}

    /**
     * Depth of the renderer realative to the parent canvas.
     */
    get relativeDepth() {}

    /**
     * Depth of the renderer realative to the parent canvas.
     */
    set relativeDepth(value) {}

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
     * Remove all cached vertices.
     */
    Clear() {}

    /**
     * Disables rectangle clipping for this CanvasRenderer.
     */
    DisableRectClipping() {}

    /**
     * Enables rect clipping on the CanvasRendered. Geometry outside of the specified rect will be clipped (not rendered).
     */
    EnableRectClipping() {}

    /**
     * Get the current alpha of the renderer.
     */
    GetAlpha() {}

    /**
     * Get the current color of the renderer.
     */
    GetColor() {}

    /**
     * Gets the current Material assigned to the CanvasRenderer.
     */
    GetMaterial() {}

    /**
     * Gets the current Material assigned to the CanvasRenderer. Used internally for masking.
     */
    GetPopMaterial() {}

    /**
     * Set the alpha of the renderer. Will be multiplied with the UIVertex alpha and the Canvas alpha.
     */
    SetAlpha() {}

    /**
     * The Alpha Texture that will be passed to the Shader under the _AlphaTex property.
     */
    SetAlphaTexture() {}

    /**
     * Set the color of the renderer. Will be multiplied with the UIVertex color and the Canvas color.
     */
    SetColor() {}

    /**
     * Set the material for the canvas renderer. If a texture is specified then it will be used as the &#039;MainTex&#039; instead of the material&#039;s &#039;MainTex&#039;.
See Also: CanvasRenderer.SetMaterialCount, CanvasRenderer.SetTexture.
     */
    SetMaterial() {}

    /**
     * Sets the Mesh used by this renderer.
     */
    SetMesh() {}

    /**
     * Set the material for the canvas renderer. Used internally for masking.
     */
    SetPopMaterial() {}

    /**
     * Sets the texture used by this renderer&#039;s material.
     */
    SetTexture() {}

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