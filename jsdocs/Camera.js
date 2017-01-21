class Camera {
    /**
     * Returns all enabled cameras in the scene.
     */
    static get allCameras() {}

    /**
     * Returns all enabled cameras in the scene.
     */
    static set allCameras(value) {}

    /**
     * The number of cameras in the current scene.
     */
    static get allCamerasCount() {}

    /**
     * The number of cameras in the current scene.
     */
    static set allCamerasCount(value) {}

    /**
     * The camera we are currently rendering with, for low-level render control only (Read Only).
     */
    static get current() {}

    /**
     * The camera we are currently rendering with, for low-level render control only (Read Only).
     */
    static set current(value) {}

    /**
     * The first enabled camera tagged &quot;MainCamera&quot; (Read Only).
     */
    static get main() {}

    /**
     * The first enabled camera tagged &quot;MainCamera&quot; (Read Only).
     */
    static set main(value) {}

    /**
     * Event that is fired after any camera finishes rendering.
     */
    static get onPostRender() {}

    /**
     * Event that is fired after any camera finishes rendering.
     */
    static set onPostRender(value) {}

    /**
     * Event that is fired before any camera starts culling.
     */
    static get onPreCull() {}

    /**
     * Event that is fired before any camera starts culling.
     */
    static set onPreCull(value) {}

    /**
     * Event that is fired before any camera starts rendering.
     */
    static get onPreRender() {}

    /**
     * Event that is fired before any camera starts rendering.
     */
    static set onPreRender(value) {}


    /**
     * Add a command buffer to be executed at a specified place.
     */
    static AddCommandBuffer() {}

    /**
     * Given viewport coordinates, calculates the view space vectors pointing to the four frustum corners at the specified camera depth.
     */
    static CalculateFrustumCorners() {}

    /**
     * Calculates and returns oblique near-plane projection matrix.
     */
    static CalculateObliqueMatrix() {}

    /**
     * Makes this camera&#039;s settings match other camera.
     */
    static CopyFrom() {}

    /**
     * Get command buffers to be executed at a specified place.
     */
    static GetCommandBuffers() {}

    /**
     * Get the projection matrix of a specific stereo eye.
     */
    static GetStereoProjectionMatrix() {}

    /**
     * Get the view matrix of a specific stereo eye.
     */
    static GetStereoViewMatrix() {}

    /**
     * Remove all command buffers set on this camera.
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
     * Render the camera manually.
     */
    static Render() {}

    /**
     * Render into a static cubemap from this camera.
     */
    static RenderToCubemap() {}

    /**
     * Render the camera with shader replacement.
     */
    static RenderWithShader() {}

    /**
     * Revert the aspect ratio to the screen&#039;s aspect ratio.
     */
    static ResetAspect() {}

    /**
     * Make culling queries reflect the camera&#039;s built in parameters.
     */
    static ResetCullingMatrix() {}

    /**
     * Reset to the default field of view.
     */
    static ResetFieldOfView() {}

    /**
     * Make the projection reflect normal camera&#039;s parameters.
     */
    static ResetProjectionMatrix() {}

    /**
     * Remove shader replacement from camera.
     */
    static ResetReplacementShader() {}

    /**
     * Use the default projection matrix for both stereo eye. Only work in 3D flat panel display.
     */
    static ResetStereoProjectionMatrices() {}

    /**
     * Use the default view matrix for both stereo eye. Only work in 3D flat panel display.
     */
    static ResetStereoViewMatrices() {}

    /**
     * Make the rendering position reflect the camera&#039;s position in the scene.
     */
    static ResetWorldToCameraMatrix() {}

    /**
     * Returns a ray going from camera through a screen point.
     */
    static ScreenPointToRay() {}

    /**
     * Transforms position from screen space into viewport space.
     */
    static ScreenToViewportPoint() {}

    /**
     * Transforms position from screen space into world space.
     */
    static ScreenToWorldPoint() {}

    /**
     * Make the camera render with shader replacement.
     */
    static SetReplacementShader() {}

    /**
     * Sets a custom stereo projection matrix.
     */
    static SetStereoProjectionMatrix() {}

    /**
     * Sets a custom stereo view matrix.
     */
    static SetStereoViewMatrix() {}

    /**
     * Sets the Camera to render to the chosen buffers of one or more RenderTextures.
     */
    static SetTargetBuffers() {}

    /**
     * Returns a ray going from camera through a viewport point.
     */
    static ViewportPointToRay() {}

    /**
     * Transforms position from viewport space into screen space.
     */
    static ViewportToScreenPoint() {}

    /**
     * Transforms position from viewport space into world space.
     */
    static ViewportToWorldPoint() {}

    /**
     * Transforms position from world space into screen space.
     */
    static WorldToScreenPoint() {}

    /**
     * Transforms position from world space into viewport space.
     */
    static WorldToViewportPoint() {}

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
     * Add a command buffer to be executed at a specified place.
     */
    static AddCommandBuffer() {}

    /**
     * Given viewport coordinates, calculates the view space vectors pointing to the four frustum corners at the specified camera depth.
     */
    static CalculateFrustumCorners() {}

    /**
     * Calculates and returns oblique near-plane projection matrix.
     */
    static CalculateObliqueMatrix() {}

    /**
     * Makes this camera&#039;s settings match other camera.
     */
    static CopyFrom() {}

    /**
     * Get command buffers to be executed at a specified place.
     */
    static GetCommandBuffers() {}

    /**
     * Get the projection matrix of a specific stereo eye.
     */
    static GetStereoProjectionMatrix() {}

    /**
     * Get the view matrix of a specific stereo eye.
     */
    static GetStereoViewMatrix() {}

    /**
     * Remove all command buffers set on this camera.
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
     * Render the camera manually.
     */
    static Render() {}

    /**
     * Render into a static cubemap from this camera.
     */
    static RenderToCubemap() {}

    /**
     * Render the camera with shader replacement.
     */
    static RenderWithShader() {}

    /**
     * Revert the aspect ratio to the screen&#039;s aspect ratio.
     */
    static ResetAspect() {}

    /**
     * Make culling queries reflect the camera&#039;s built in parameters.
     */
    static ResetCullingMatrix() {}

    /**
     * Reset to the default field of view.
     */
    static ResetFieldOfView() {}

    /**
     * Make the projection reflect normal camera&#039;s parameters.
     */
    static ResetProjectionMatrix() {}

    /**
     * Remove shader replacement from camera.
     */
    static ResetReplacementShader() {}

    /**
     * Use the default projection matrix for both stereo eye. Only work in 3D flat panel display.
     */
    static ResetStereoProjectionMatrices() {}

    /**
     * Use the default view matrix for both stereo eye. Only work in 3D flat panel display.
     */
    static ResetStereoViewMatrices() {}

    /**
     * Make the rendering position reflect the camera&#039;s position in the scene.
     */
    static ResetWorldToCameraMatrix() {}

    /**
     * Returns a ray going from camera through a screen point.
     */
    static ScreenPointToRay() {}

    /**
     * Transforms position from screen space into viewport space.
     */
    static ScreenToViewportPoint() {}

    /**
     * Transforms position from screen space into world space.
     */
    static ScreenToWorldPoint() {}

    /**
     * Make the camera render with shader replacement.
     */
    static SetReplacementShader() {}

    /**
     * Sets a custom stereo projection matrix.
     */
    static SetStereoProjectionMatrix() {}

    /**
     * Sets a custom stereo view matrix.
     */
    static SetStereoViewMatrix() {}

    /**
     * Sets the Camera to render to the chosen buffers of one or more RenderTextures.
     */
    static SetTargetBuffers() {}

    /**
     * Returns a ray going from camera through a viewport point.
     */
    static ViewportPointToRay() {}

    /**
     * Transforms position from viewport space into screen space.
     */
    static ViewportToScreenPoint() {}

    /**
     * Transforms position from viewport space into world space.
     */
    static ViewportToWorldPoint() {}

    /**
     * Transforms position from world space into screen space.
     */
    static WorldToScreenPoint() {}

    /**
     * Transforms position from world space into viewport space.
     */
    static WorldToViewportPoint() {}


    /**
     * The rendering path that is currently being used (Read Only).
     */
    get actualRenderingPath() {}

    /**
     * The rendering path that is currently being used (Read Only).
     */
    set actualRenderingPath(value) {}

    /**
     * The aspect ratio (width divided by height).
     */
    get aspect() {}

    /**
     * The aspect ratio (width divided by height).
     */
    set aspect(value) {}

    /**
     * The color with which the screen will be cleared.
     */
    get backgroundColor() {}

    /**
     * The color with which the screen will be cleared.
     */
    set backgroundColor(value) {}

    /**
     * Matrix that transforms from camera space to world space (Read Only).
     */
    get cameraToWorldMatrix() {}

    /**
     * Matrix that transforms from camera space to world space (Read Only).
     */
    set cameraToWorldMatrix(value) {}

    /**
     * Identifies what kind of camera this is.
     */
    get cameraType() {}

    /**
     * Identifies what kind of camera this is.
     */
    set cameraType(value) {}

    /**
     * How the camera clears the background.
     */
    get clearFlags() {}

    /**
     * How the camera clears the background.
     */
    set clearFlags(value) {}

    /**
     * Should the camera clear the stencil buffer after the deferred light pass?
     */
    get clearStencilAfterLightingPass() {}

    /**
     * Should the camera clear the stencil buffer after the deferred light pass?
     */
    set clearStencilAfterLightingPass(value) {}

    /**
     * Number of command buffers set up on this camera (Read Only).
     */
    get commandBufferCount() {}

    /**
     * Number of command buffers set up on this camera (Read Only).
     */
    set commandBufferCount(value) {}

    /**
     * This is used to render parts of the scene selectively.
     */
    get cullingMask() {}

    /**
     * This is used to render parts of the scene selectively.
     */
    set cullingMask(value) {}

    /**
     * Sets a custom matrix for the camera to use for all culling queries.
     */
    get cullingMatrix() {}

    /**
     * Sets a custom matrix for the camera to use for all culling queries.
     */
    set cullingMatrix(value) {}

    /**
     * Camera&#039;s depth in the camera rendering order.
     */
    get depth() {}

    /**
     * Camera&#039;s depth in the camera rendering order.
     */
    set depth(value) {}

    /**
     * How and if camera generates a depth texture.
     */
    get depthTextureMode() {}

    /**
     * How and if camera generates a depth texture.
     */
    set depthTextureMode(value) {}

    /**
     * Mask to select which layers can trigger events on the camera.
     */
    get eventMask() {}

    /**
     * Mask to select which layers can trigger events on the camera.
     */
    set eventMask(value) {}

    /**
     * The far clipping plane distance.
     */
    get farClipPlane() {}

    /**
     * The far clipping plane distance.
     */
    set farClipPlane(value) {}

    /**
     * The field of view of the camera in degrees.
     */
    get fieldOfView() {}

    /**
     * The field of view of the camera in degrees.
     */
    set fieldOfView(value) {}

    /**
     * High dynamic range rendering.
     */
    get hdr() {}

    /**
     * High dynamic range rendering.
     */
    set hdr(value) {}

    /**
     * Per-layer culling distances.
     */
    get layerCullDistances() {}

    /**
     * Per-layer culling distances.
     */
    set layerCullDistances(value) {}

    /**
     * How to perform per-layer culling for a Camera.
     */
    get layerCullSpherical() {}

    /**
     * How to perform per-layer culling for a Camera.
     */
    set layerCullSpherical(value) {}

    /**
     * The near clipping plane distance.
     */
    get nearClipPlane() {}

    /**
     * The near clipping plane distance.
     */
    set nearClipPlane(value) {}

    /**
     * Get or set the raw projection matrix with no camera offset (no jittering).
     */
    get nonJitteredProjectionMatrix() {}

    /**
     * Get or set the raw projection matrix with no camera offset (no jittering).
     */
    set nonJitteredProjectionMatrix(value) {}

    /**
     * Opaque object sorting mode.
     */
    get opaqueSortMode() {}

    /**
     * Opaque object sorting mode.
     */
    set opaqueSortMode(value) {}

    /**
     * Is the camera orthographic (true) or perspective (false)?
     */
    get orthographic() {}

    /**
     * Is the camera orthographic (true) or perspective (false)?
     */
    set orthographic(value) {}

    /**
     * Camera&#039;s half-size when in orthographic mode.
     */
    get orthographicSize() {}

    /**
     * Camera&#039;s half-size when in orthographic mode.
     */
    set orthographicSize(value) {}

    /**
     * How tall is the camera in pixels (Read Only).
     */
    get pixelHeight() {}

    /**
     * How tall is the camera in pixels (Read Only).
     */
    set pixelHeight(value) {}

    /**
     * Where on the screen is the camera rendered in pixel coordinates.
     */
    get pixelRect() {}

    /**
     * Where on the screen is the camera rendered in pixel coordinates.
     */
    set pixelRect(value) {}

    /**
     * How wide is the camera in pixels (Read Only).
     */
    get pixelWidth() {}

    /**
     * How wide is the camera in pixels (Read Only).
     */
    set pixelWidth(value) {}

    /**
     * Set a custom projection matrix.
     */
    get projectionMatrix() {}

    /**
     * Set a custom projection matrix.
     */
    set projectionMatrix(value) {}

    /**
     * Where on the screen is the camera rendered in normalized coordinates.
     */
    get rect() {}

    /**
     * Where on the screen is the camera rendered in normalized coordinates.
     */
    set rect(value) {}

    /**
     * The rendering path that should be used, if possible.
     */
    get renderingPath() {}

    /**
     * The rendering path that should be used, if possible.
     */
    set renderingPath(value) {}

    /**
     * Returns the eye that is currently rendering.
If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left.
     */
    get stereoActiveEye() {}

    /**
     * Returns the eye that is currently rendering.
If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left.
     */
    set stereoActiveEye(value) {}

    /**
     * Distance to a point where virtual eyes converge.
     */
    get stereoConvergence() {}

    /**
     * Distance to a point where virtual eyes converge.
     */
    set stereoConvergence(value) {}

    /**
     * Stereoscopic rendering.
     */
    get stereoEnabled() {}

    /**
     * Stereoscopic rendering.
     */
    set stereoEnabled(value) {}

    /**
     * Render only once and use resulting image for both eyes.
     */
    get stereoMirrorMode() {}

    /**
     * Render only once and use resulting image for both eyes.
     */
    set stereoMirrorMode(value) {}

    /**
     * Distance between the virtual eyes.
     */
    get stereoSeparation() {}

    /**
     * Distance between the virtual eyes.
     */
    set stereoSeparation(value) {}

    /**
     * Defines which eye of a VR display the Camera renders into.
     */
    get stereoTargetEye() {}

    /**
     * Defines which eye of a VR display the Camera renders into.
     */
    set stereoTargetEye(value) {}

    /**
     * Set the target display for this Camera.
     */
    get targetDisplay() {}

    /**
     * Set the target display for this Camera.
     */
    set targetDisplay(value) {}

    /**
     * Destination render texture.
     */
    get targetTexture() {}

    /**
     * Destination render texture.
     */
    set targetTexture(value) {}

    /**
     * Transparent object sorting mode.
     */
    get transparencySortMode() {}

    /**
     * Transparent object sorting mode.
     */
    set transparencySortMode(value) {}

    /**
     * Should the jittered matrix be used for transparency rendering?
     */
    get useJitteredProjectionMatrixForTransparentRendering() {}

    /**
     * Should the jittered matrix be used for transparency rendering?
     */
    set useJitteredProjectionMatrixForTransparentRendering(value) {}

    /**
     * Whether or not the Camera will use occlusion culling during rendering.
     */
    get useOcclusionCulling() {}

    /**
     * Whether or not the Camera will use occlusion culling during rendering.
     */
    set useOcclusionCulling(value) {}

    /**
     * Get the world-space speed of the camera (Read Only).
     */
    get velocity() {}

    /**
     * Get the world-space speed of the camera (Read Only).
     */
    set velocity(value) {}

    /**
     * Matrix that transforms from world to camera space.
     */
    get worldToCameraMatrix() {}

    /**
     * Matrix that transforms from world to camera space.
     */
    set worldToCameraMatrix(value) {}

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
     * Given viewport coordinates, calculates the view space vectors pointing to the four frustum corners at the specified camera depth.
     */
    CalculateFrustumCorners() {}

    /**
     * Calculates and returns oblique near-plane projection matrix.
     */
    CalculateObliqueMatrix() {}

    /**
     * Makes this camera&#039;s settings match other camera.
     */
    CopyFrom() {}

    /**
     * Get command buffers to be executed at a specified place.
     */
    GetCommandBuffers() {}

    /**
     * Get the projection matrix of a specific stereo eye.
     */
    GetStereoProjectionMatrix() {}

    /**
     * Get the view matrix of a specific stereo eye.
     */
    GetStereoViewMatrix() {}

    /**
     * Remove all command buffers set on this camera.
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
     * Render the camera manually.
     */
    Render() {}

    /**
     * Render into a static cubemap from this camera.
     */
    RenderToCubemap() {}

    /**
     * Render the camera with shader replacement.
     */
    RenderWithShader() {}

    /**
     * Revert the aspect ratio to the screen&#039;s aspect ratio.
     */
    ResetAspect() {}

    /**
     * Make culling queries reflect the camera&#039;s built in parameters.
     */
    ResetCullingMatrix() {}

    /**
     * Reset to the default field of view.
     */
    ResetFieldOfView() {}

    /**
     * Make the projection reflect normal camera&#039;s parameters.
     */
    ResetProjectionMatrix() {}

    /**
     * Remove shader replacement from camera.
     */
    ResetReplacementShader() {}

    /**
     * Use the default projection matrix for both stereo eye. Only work in 3D flat panel display.
     */
    ResetStereoProjectionMatrices() {}

    /**
     * Use the default view matrix for both stereo eye. Only work in 3D flat panel display.
     */
    ResetStereoViewMatrices() {}

    /**
     * Make the rendering position reflect the camera&#039;s position in the scene.
     */
    ResetWorldToCameraMatrix() {}

    /**
     * Returns a ray going from camera through a screen point.
     */
    ScreenPointToRay() {}

    /**
     * Transforms position from screen space into viewport space.
     */
    ScreenToViewportPoint() {}

    /**
     * Transforms position from screen space into world space.
     */
    ScreenToWorldPoint() {}

    /**
     * Make the camera render with shader replacement.
     */
    SetReplacementShader() {}

    /**
     * Sets a custom stereo projection matrix.
     */
    SetStereoProjectionMatrix() {}

    /**
     * Sets a custom stereo view matrix.
     */
    SetStereoViewMatrix() {}

    /**
     * Sets the Camera to render to the chosen buffers of one or more RenderTextures.
     */
    SetTargetBuffers() {}

    /**
     * Returns a ray going from camera through a viewport point.
     */
    ViewportPointToRay() {}

    /**
     * Transforms position from viewport space into screen space.
     */
    ViewportToScreenPoint() {}

    /**
     * Transforms position from viewport space into world space.
     */
    ViewportToWorldPoint() {}

    /**
     * Transforms position from world space into screen space.
     */
    WorldToScreenPoint() {}

    /**
     * Transforms position from world space into viewport space.
     */
    WorldToViewportPoint() {}

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