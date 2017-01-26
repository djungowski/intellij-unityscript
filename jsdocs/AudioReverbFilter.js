class AudioReverbFilter {

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
     * Decay HF Ratio : High-frequency to low-frequency decay time ratio. Ranges from 0.1 to 2.0. Default is 0.5.
     */
    get decayHFRatio() {}

    /**
     * Decay HF Ratio : High-frequency to low-frequency decay time ratio. Ranges from 0.1 to 2.0. Default is 0.5.
     */
    set decayHFRatio(value) {}

    /**
     * Reverberation decay time at low-frequencies in seconds. Ranges from 0.1 to 20.0. Default is 1.0.
     */
    get decayTime() {}

    /**
     * Reverberation decay time at low-frequencies in seconds. Ranges from 0.1 to 20.0. Default is 1.0.
     */
    set decayTime(value) {}

    /**
     * Reverberation density (modal density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
     */
    get density() {}

    /**
     * Reverberation density (modal density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
     */
    set density(value) {}

    /**
     * Reverberation diffusion (echo density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
     */
    get diffusion() {}

    /**
     * Reverberation diffusion (echo density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
     */
    set diffusion(value) {}

    /**
     * Mix level of dry signal in output in mB. Ranges from -10000.0 to 0.0. Default is 0.
     */
    get dryLevel() {}

    /**
     * Mix level of dry signal in output in mB. Ranges from -10000.0 to 0.0. Default is 0.
     */
    set dryLevel(value) {}

    /**
     * Reference high frequency in Hz. Ranges from 20.0 to 20000.0. Default is 5000.0.
     */
    get hfReference() {}

    /**
     * Reference high frequency in Hz. Ranges from 20.0 to 20000.0. Default is 5000.0.
     */
    set hfReference(value) {}

    /**
     * Reference low-frequency in Hz. Ranges from 20.0 to 1000.0. Default is 250.0.
     */
    get lfReference() {}

    /**
     * Reference low-frequency in Hz. Ranges from 20.0 to 1000.0. Default is 250.0.
     */
    set lfReference(value) {}

    /**
     * Late reverberation level relative to room effect in mB. Ranges from -10000.0 to 2000.0. Default is 0.0.
     */
    get reflectionsDelay() {}

    /**
     * Late reverberation level relative to room effect in mB. Ranges from -10000.0 to 2000.0. Default is 0.0.
     */
    set reflectionsDelay(value) {}

    /**
     * Early reflections level relative to room effect in mB. Ranges from -10000.0 to 1000.0. Default is -10000.0.
     */
    get reflectionsLevel() {}

    /**
     * Early reflections level relative to room effect in mB. Ranges from -10000.0 to 1000.0. Default is -10000.0.
     */
    set reflectionsLevel(value) {}

    /**
     * Late reverberation delay time relative to first reflection in seconds. Ranges from 0.0 to 0.1. Default is 0.04.
     */
    get reverbDelay() {}

    /**
     * Late reverberation delay time relative to first reflection in seconds. Ranges from 0.0 to 0.1. Default is 0.04.
     */
    set reverbDelay(value) {}

    /**
     * Late reverberation level relative to room effect in mB. Ranges from -10000.0 to 2000.0. Default is 0.0.
     */
    get reverbLevel() {}

    /**
     * Late reverberation level relative to room effect in mB. Ranges from -10000.0 to 2000.0. Default is 0.0.
     */
    set reverbLevel(value) {}

    /**
     * Set/Get reverb preset properties.
     */
    get reverbPreset() {}

    /**
     * Set/Get reverb preset properties.
     */
    set reverbPreset(value) {}

    /**
     * Room effect level at low frequencies in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    get room() {}

    /**
     * Room effect level at low frequencies in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    set room(value) {}

    /**
     * Room effect high-frequency level re. low frequency level in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    get roomHF() {}

    /**
     * Room effect high-frequency level re. low frequency level in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    set roomHF(value) {}

    /**
     * Room effect low-frequency level in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    get roomLF() {}

    /**
     * Room effect low-frequency level in mB. Ranges from -10000.0 to 0.0. Default is 0.0.
     */
    set roomLF(value) {}

    /**
     * Rolloff factor for room effect. Ranges from 0.0 to 10.0. Default is 10.0.
     */
    get roomRolloff() {}

    /**
     * Rolloff factor for room effect. Ranges from 0.0 to 10.0. Default is 10.0.
     */
    set roomRolloff(value) {}

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