class Animator {

    /**
     * Generates an parameter id from a string.
     */
    static StringToHash() {}

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
     * Gets the avatar angular velocity for the last evaluated frame.
     */
    get angularVelocity() {}

    /**
     * Gets the avatar angular velocity for the last evaluated frame.
     */
    set angularVelocity(value) {}

    /**
     * Should root motion be applied?
     */
    get applyRootMotion() {}

    /**
     * Should root motion be applied?
     */
    set applyRootMotion(value) {}

    /**
     * Gets/Sets the current Avatar.
     */
    get avatar() {}

    /**
     * Gets/Sets the current Avatar.
     */
    set avatar(value) {}

    /**
     * The position of the body center of mass.
     */
    get bodyPosition() {}

    /**
     * The position of the body center of mass.
     */
    set bodyPosition(value) {}

    /**
     * The rotation of the body center of mass.
     */
    get bodyRotation() {}

    /**
     * The rotation of the body center of mass.
     */
    set bodyRotation(value) {}

    /**
     * Controls culling of this Animator component.
     */
    get cullingMode() {}

    /**
     * Controls culling of this Animator component.
     */
    set cullingMode(value) {}

    /**
     * Gets the avatar delta position for the last evaluated frame.
     */
    get deltaPosition() {}

    /**
     * Gets the avatar delta position for the last evaluated frame.
     */
    set deltaPosition(value) {}

    /**
     * Gets the avatar delta rotation for the last evaluated frame.
     */
    get deltaRotation() {}

    /**
     * Gets the avatar delta rotation for the last evaluated frame.
     */
    set deltaRotation(value) {}

    /**
     * Blends pivot point between body center of mass and feet pivot. At 0%, the blending point is body center of mass. At 100%, the blending point is feet pivot.
     */
    get feetPivotActive() {}

    /**
     * Blends pivot point between body center of mass and feet pivot. At 0%, the blending point is body center of mass. At 100%, the blending point is feet pivot.
     */
    set feetPivotActive(value) {}

    /**
     * The current gravity weight based on current animations that are played.
     */
    get gravityWeight() {}

    /**
     * The current gravity weight based on current animations that are played.
     */
    set gravityWeight(value) {}

    /**
     * Returns true if the current rig has root motion.
     */
    get hasRootMotion() {}

    /**
     * Returns true if the current rig has root motion.
     */
    set hasRootMotion(value) {}

    /**
     * Returns true if the object has a transform hierarchy.
     */
    get hasTransformHierarchy() {}

    /**
     * Returns true if the object has a transform hierarchy.
     */
    set hasTransformHierarchy(value) {}

    /**
     * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
     */
    get humanScale() {}

    /**
     * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
     */
    set humanScale(value) {}

    /**
     * Returns true if the current rig is humanoid, false if it is generic.
     */
    get isHuman() {}

    /**
     * Returns true if the current rig is humanoid, false if it is generic.
     */
    set isHuman(value) {}

    /**
     * Returns whether the animator is initialized successfully.
     */
    get isInitialized() {}

    /**
     * Returns whether the animator is initialized successfully.
     */
    set isInitialized(value) {}

    /**
     * If automatic matching is active.
     */
    get isMatchingTarget() {}

    /**
     * If automatic matching is active.
     */
    set isMatchingTarget(value) {}

    /**
     * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
     */
    get isOptimizable() {}

    /**
     * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
     */
    set isOptimizable(value) {}

    /**
     * See IAnimatorControllerPlayable.layerCount.
     */
    get layerCount() {}

    /**
     * See IAnimatorControllerPlayable.layerCount.
     */
    set layerCount(value) {}

    /**
     * Additional layers affects the center of mass.
     */
    get layersAffectMassCenter() {}

    /**
     * Additional layers affects the center of mass.
     */
    set layersAffectMassCenter(value) {}

    /**
     * Get left foot bottom height.
     */
    get leftFeetBottomHeight() {}

    /**
     * Get left foot bottom height.
     */
    set leftFeetBottomHeight(value) {}

    /**
     * When linearVelocityBlending is set to true, the root motion velocity and angular velocity will be blended linearly.
     */
    get linearVelocityBlending() {}

    /**
     * When linearVelocityBlending is set to true, the root motion velocity and angular velocity will be blended linearly.
     */
    set linearVelocityBlending(value) {}

    /**
     * See IAnimatorControllerPlayable.parameterCount.
     */
    get parameterCount() {}

    /**
     * See IAnimatorControllerPlayable.parameterCount.
     */
    set parameterCount(value) {}

    /**
     * Read only acces to the AnimatorControllerParameters used by the animator.
     */
    get parameters() {}

    /**
     * Read only acces to the AnimatorControllerParameters used by the animator.
     */
    set parameters(value) {}

    /**
     * Get the current position of the pivot.
     */
    get pivotPosition() {}

    /**
     * Get the current position of the pivot.
     */
    set pivotPosition(value) {}

    /**
     * Gets the pivot weight.
     */
    get pivotWeight() {}

    /**
     * Gets the pivot weight.
     */
    set pivotWeight(value) {}

    /**
     * Sets the playback position in the recording buffer.
     */
    get playbackTime() {}

    /**
     * Sets the playback position in the recording buffer.
     */
    set playbackTime(value) {}

    /**
     * Gets the mode of the Animator recorder.
     */
    get recorderMode() {}

    /**
     * Gets the mode of the Animator recorder.
     */
    set recorderMode(value) {}

    /**
     * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
     */
    get recorderStartTime() {}

    /**
     * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
     */
    set recorderStartTime(value) {}

    /**
     * End time of the recorded clip relative to when StartRecording was called.
     */
    get recorderStopTime() {}

    /**
     * End time of the recorded clip relative to when StartRecording was called.
     */
    set recorderStopTime(value) {}

    /**
     * Get right foot bottom height.
     */
    get rightFeetBottomHeight() {}

    /**
     * Get right foot bottom height.
     */
    set rightFeetBottomHeight(value) {}

    /**
     * The root position, the position of the game object.
     */
    get rootPosition() {}

    /**
     * The root position, the position of the game object.
     */
    set rootPosition(value) {}

    /**
     * The root rotation, the rotation of the game object.
     */
    get rootRotation() {}

    /**
     * The root rotation, the rotation of the game object.
     */
    set rootRotation(value) {}

    /**
     * The runtime representation of AnimatorController that controls the Animator.
     */
    get runtimeAnimatorController() {}

    /**
     * The runtime representation of AnimatorController that controls the Animator.
     */
    set runtimeAnimatorController(value) {}

    /**
     * The playback speed of the Animator. 1 is normal playback speed.
     */
    get speed() {}

    /**
     * The playback speed of the Animator. 1 is normal playback speed.
     */
    set speed(value) {}

    /**
     * Automatic stabilization of feet during transition and blending.
     */
    get stabilizeFeet() {}

    /**
     * Automatic stabilization of feet during transition and blending.
     */
    set stabilizeFeet(value) {}

    /**
     * Returns the position of the target specified by SetTarget(AvatarTarget targetIndex, float targetNormalizedTime)).
     */
    get targetPosition() {}

    /**
     * Returns the position of the target specified by SetTarget(AvatarTarget targetIndex, float targetNormalizedTime)).
     */
    set targetPosition(value) {}

    /**
     * Returns the rotation of the target specified by SetTarget(AvatarTarget targetIndex, float targetNormalizedTime)).
     */
    get targetRotation() {}

    /**
     * Returns the rotation of the target specified by SetTarget(AvatarTarget targetIndex, float targetNormalizedTime)).
     */
    set targetRotation(value) {}

    /**
     * Specifies the update mode of the Animator.
     */
    get updateMode() {}

    /**
     * Specifies the update mode of the Animator.
     */
    set updateMode(value) {}

    /**
     * Gets the avatar velocity  for the last evaluated frame.
     */
    get velocity() {}

    /**
     * Gets the avatar velocity  for the last evaluated frame.
     */
    set velocity(value) {}

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
     * Apply the default Root Motion.
     */
    ApplyBuiltinRootMotion() {}

    /**
     * See IAnimatorControllerPlayable.CrossFade.
     */
    CrossFade() {}

    /**
     * See IAnimatorControllerPlayable.CrossFadeInFixedTime.
     */
    CrossFadeInFixedTime() {}

    /**
     * See IAnimatorControllerPlayable.GetAnimatorTransitionInfo.
     */
    GetAnimatorTransitionInfo() {}

    /**
     * Return the first StateMachineBehaviour that match type T or derived from T. Return null if none are found.
     */
    GetBehaviour() {}

    /**
     * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
     */
    GetBehaviours() {}

    /**
     * Returns transform mapped to this human bone id.
     */
    GetBoneTransform() {}

    /**
     * See IAnimatorControllerPlayable.GetBool.
     */
    GetBool() {}

    /**
     * See IAnimatorControllerPlayable.GetCurrentAnimatorClipInfo.
     */
    GetCurrentAnimatorClipInfo() {}

    /**
     * See IAnimatorControllerPlayable.GetCurrentAnimatorClipInfoCount.
     */
    GetCurrentAnimatorClipInfoCount() {}

    /**
     * See IAnimatorControllerPlayable.GetCurrentAnimatorStateInfo.
     */
    GetCurrentAnimatorStateInfo() {}

    /**
     * See IAnimatorControllerPlayable.GetFloat.
     */
    GetFloat() {}

    /**
     * Gets the position of an IK hint.
     */
    GetIKHintPosition() {}

    /**
     * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
     */
    GetIKHintPositionWeight() {}

    /**
     * Gets the position of an IK goal.
     */
    GetIKPosition() {}

    /**
     * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
     */
    GetIKPositionWeight() {}

    /**
     * Gets the rotation of an IK goal.
     */
    GetIKRotation() {}

    /**
     * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
     */
    GetIKRotationWeight() {}

    /**
     * See IAnimatorControllerPlayable.GetInteger.
     */
    GetInteger() {}

    /**
     * See IAnimatorControllerPlayable.GetLayerIndex.
     */
    GetLayerIndex() {}

    /**
     * See IAnimatorControllerPlayable.GetLayerName.
     */
    GetLayerName() {}

    /**
     * See IAnimatorControllerPlayable.GetLayerWeight.
     */
    GetLayerWeight() {}

    /**
     * See IAnimatorControllerPlayable.GetNextAnimatorClipInfo.
     */
    GetNextAnimatorClipInfo() {}

    /**
     * See IAnimatorControllerPlayable.GetNextAnimatorClipInfoCount.
     */
    GetNextAnimatorClipInfoCount() {}

    /**
     * See IAnimatorControllerPlayable.GetNextAnimatorStateInfo.
     */
    GetNextAnimatorStateInfo() {}

    /**
     * See AnimatorController.GetParameter.
     */
    GetParameter() {}

    /**
     * See IAnimatorControllerPlayable.HasState.
     */
    HasState() {}

    /**
     * Interrupts the automatic target matching.
     */
    InterruptMatchTarget() {}

    /**
     * See IAnimatorControllerPlayable.IsInTransition.
     */
    IsInTransition() {}

    /**
     * See IAnimatorControllerPlayable.IsParameterControlledByCurve.
     */
    IsParameterControlledByCurve() {}

    /**
     * Automatically adjust the gameobject position and rotation so that the AvatarTarget reaches the matchPosition when the current state is at the specified progress.
     */
    MatchTarget() {}

    /**
     * See IAnimatorControllerPlayable.Play.
     */
    Play() {}

    /**
     * See IAnimatorControllerPlayable.PlayInFixedTime.
     */
    PlayInFixedTime() {}

    /**
     * Rebind all the animated properties and mesh data with the Animator.
     */
    Rebind() {}

    /**
     * See IAnimatorControllerPlayable.ResetTrigger.
     */
    ResetTrigger() {}

    /**
     * Sets local rotation of a human bone during a IK pass.
     */
    SetBoneLocalRotation() {}

    /**
     * See IAnimatorControllerPlayable.SetBool.
     */
    SetBool() {}

    /**
     * See IAnimatorControllerPlayable.SetFloat.
     */
    SetFloat() {}

    /**
     * Sets the position of an IK hint.
     */
    SetIKHintPosition() {}

    /**
     * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
     */
    SetIKHintPositionWeight() {}

    /**
     * Sets the position of an IK goal.
     */
    SetIKPosition() {}

    /**
     * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
     */
    SetIKPositionWeight() {}

    /**
     * Sets the rotation of an IK goal.
     */
    SetIKRotation() {}

    /**
     * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
     */
    SetIKRotationWeight() {}

    /**
     * See IAnimatorControllerPlayable.SetInteger.
     */
    SetInteger() {}

    /**
     * See IAnimatorControllerPlayable.SetLayerWeight.
     */
    SetLayerWeight() {}

    /**
     * Sets the look at position.
     */
    SetLookAtPosition() {}

    /**
     * Set look at weights.
     */
    SetLookAtWeight() {}

    /**
     * Sets an AvatarTarget and a targetNormalizedTime for the current state.
     */
    SetTarget() {}

    /**
     * See IAnimatorControllerPlayable.SetTrigger.
     */
    SetTrigger() {}

    /**
     * Sets the animator in playback mode.
     */
    StartPlayback() {}

    /**
     * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
     */
    StartRecording() {}

    /**
     * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
     */
    StopPlayback() {}

    /**
     * Stops animator record mode.
     */
    StopRecording() {}

    /**
     * Evaluates the animator based on deltaTime.
     */
    Update() {}

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
     * Returns the Player&#039;s current local time.
     */
    GetTime() {}

    /**
     * Returns the current DirectorUpdateMode.
     */
    GetTimeUpdateMode() {}

    /**
     * Starts playing a Playable tree.
     */
    Play() {}

    /**
     * Sets the Player&#039;s local time.
     */
    SetTime() {}

    /**
     * Specifies the way the Player&#039;s will increment when it is playing.
     */
    SetTimeUpdateMode() {}

    /**
     * Stop the playback of the Player and Playable.
     */
    Stop() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}