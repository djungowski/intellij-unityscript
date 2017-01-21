class AudioSource {

    /**
     * Get the current custom curve for the given AudioSourceCurveType.
     */
    static GetCustomCurve() {}

    /**
     * Provides a block of the currently playing source&#039;s output data.
     */
    static GetOutputData() {}

    /**
     * Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    static GetSpatializerFloat() {}

    /**
     * Provides a block of the currently playing audio source&#039;s spectrum data.
     */
    static GetSpectrumData() {}

    /**
     * Pauses playing the clip.
     */
    static Pause() {}

    /**
     * Plays the clip with an optional certain delay.
     */
    static Play() {}

    /**
     * Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
     */
    static PlayDelayed() {}

    /**
     * Plays an AudioClip, and scales the AudioSource volume by volumeScale.
     */
    static PlayOneShot() {}

    /**
     * Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
     */
    static PlayScheduled() {}

    /**
     * Set the custom curve for the given AudioSourceCurveType.
     */
    static SetCustomCurve() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
     */
    static SetScheduledEndTime() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will start.
     */
    static SetScheduledStartTime() {}

    /**
     * Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    static SetSpatializerFloat() {}

    /**
     * Stops playing the clip.
     */
    static Stop() {}

    /**
     * Unpause the paused playback of this AudioSource.
     */
    static UnPause() {}

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
     * Get the current custom curve for the given AudioSourceCurveType.
     */
    static GetCustomCurve() {}

    /**
     * Provides a block of the currently playing source&#039;s output data.
     */
    static GetOutputData() {}

    /**
     * Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    static GetSpatializerFloat() {}

    /**
     * Provides a block of the currently playing audio source&#039;s spectrum data.
     */
    static GetSpectrumData() {}

    /**
     * Pauses playing the clip.
     */
    static Pause() {}

    /**
     * Plays the clip with an optional certain delay.
     */
    static Play() {}

    /**
     * Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
     */
    static PlayDelayed() {}

    /**
     * Plays an AudioClip, and scales the AudioSource volume by volumeScale.
     */
    static PlayOneShot() {}

    /**
     * Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
     */
    static PlayScheduled() {}

    /**
     * Set the custom curve for the given AudioSourceCurveType.
     */
    static SetCustomCurve() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
     */
    static SetScheduledEndTime() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will start.
     */
    static SetScheduledStartTime() {}

    /**
     * Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    static SetSpatializerFloat() {}

    /**
     * Stops playing the clip.
     */
    static Stop() {}

    /**
     * Unpause the paused playback of this AudioSource.
     */
    static UnPause() {}


    /**
     * Bypass effects (Applied from filter components or global listener filters).
     */
    get bypassEffects() {}

    /**
     * Bypass effects (Applied from filter components or global listener filters).
     */
    set bypassEffects(value) {}

    /**
     * When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group.
     */
    get bypassListenerEffects() {}

    /**
     * When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group.
     */
    set bypassListenerEffects(value) {}

    /**
     * When set doesn&#039;t route the signal from an AudioSource into the global reverb associated with reverb zones.
     */
    get bypassReverbZones() {}

    /**
     * When set doesn&#039;t route the signal from an AudioSource into the global reverb associated with reverb zones.
     */
    set bypassReverbZones(value) {}

    /**
     * The default AudioClip to play.
     */
    get clip() {}

    /**
     * The default AudioClip to play.
     */
    set clip(value) {}

    /**
     * Sets the Doppler scale for this AudioSource.
     */
    get dopplerLevel() {}

    /**
     * Sets the Doppler scale for this AudioSource.
     */
    set dopplerLevel(value) {}

    /**
     * Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus.
     */
    get ignoreListenerPause() {}

    /**
     * Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus.
     */
    set ignoreListenerPause(value) {}

    /**
     * This makes the audio source not take into account the volume of the audio listener.
     */
    get ignoreListenerVolume() {}

    /**
     * This makes the audio source not take into account the volume of the audio listener.
     */
    set ignoreListenerVolume(value) {}

    /**
     * Is the clip playing right now (Read Only)?
     */
    get isPlaying() {}

    /**
     * Is the clip playing right now (Read Only)?
     */
    set isPlaying(value) {}

    /**
     * True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system.
     */
    get isVirtual() {}

    /**
     * True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system.
     */
    set isVirtual(value) {}

    /**
     * Is the audio clip looping?
     */
    get loop() {}

    /**
     * Is the audio clip looping?
     */
    set loop(value) {}

    /**
     * (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at.
     */
    get maxDistance() {}

    /**
     * (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at.
     */
    set maxDistance(value) {}

    /**
     * Within the Min distance the AudioSource will cease to grow louder in volume.
     */
    get minDistance() {}

    /**
     * Within the Min distance the AudioSource will cease to grow louder in volume.
     */
    set minDistance(value) {}

    /**
     * Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.
     */
    get mute() {}

    /**
     * Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.
     */
    set mute(value) {}

    /**
     * The target group to which the AudioSource should route its signal.
     */
    get outputAudioMixerGroup() {}

    /**
     * The target group to which the AudioSource should route its signal.
     */
    set outputAudioMixerGroup(value) {}

    /**
     * Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.
     */
    get panStereo() {}

    /**
     * Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.
     */
    set panStereo(value) {}

    /**
     * The pitch of the audio source.
     */
    get pitch() {}

    /**
     * The pitch of the audio source.
     */
    set pitch(value) {}

    /**
     * If set to true, the audio source will automatically start playing on awake.
     */
    get playOnAwake() {}

    /**
     * If set to true, the audio source will automatically start playing on awake.
     */
    set playOnAwake(value) {}

    /**
     * Sets the priority of the AudioSource.
     */
    get priority() {}

    /**
     * Sets the priority of the AudioSource.
     */
    set priority(value) {}

    /**
     * The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones.
     */
    get reverbZoneMix() {}

    /**
     * The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones.
     */
    set reverbZoneMix(value) {}

    /**
     * Sets/Gets how the AudioSource attenuates over distance.
     */
    get rolloffMode() {}

    /**
     * Sets/Gets how the AudioSource attenuates over distance.
     */
    set rolloffMode(value) {}

    /**
     * Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D.
     */
    get spatialBlend() {}

    /**
     * Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D.
     */
    set spatialBlend(value) {}

    /**
     * Enables or disables spatialization.
     */
    get spatialize() {}

    /**
     * Enables or disables spatialization.
     */
    set spatialize(value) {}

    /**
     * Determines if the spatializer effect is inserted before or after the effect filters.
     */
    get spatializePostEffects() {}

    /**
     * Determines if the spatializer effect is inserted before or after the effect filters.
     */
    set spatializePostEffects(value) {}

    /**
     * Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space.
     */
    get spread() {}

    /**
     * Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space.
     */
    set spread(value) {}

    /**
     * Playback position in seconds.
     */
    get time() {}

    /**
     * Playback position in seconds.
     */
    set time(value) {}

    /**
     * Playback position in PCM samples.
     */
    get timeSamples() {}

    /**
     * Playback position in PCM samples.
     */
    set timeSamples(value) {}

    /**
     * Whether the Audio Source should be updated in the fixed or dynamic update.
     */
    get velocityUpdateMode() {}

    /**
     * Whether the Audio Source should be updated in the fixed or dynamic update.
     */
    set velocityUpdateMode(value) {}

    /**
     * The volume of the audio source (0.0 to 1.0).
     */
    get volume() {}

    /**
     * The volume of the audio source (0.0 to 1.0).
     */
    set volume(value) {}

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
     * Get the current custom curve for the given AudioSourceCurveType.
     */
    GetCustomCurve() {}

    /**
     * Provides a block of the currently playing source&#039;s output data.
     */
    GetOutputData() {}

    /**
     * Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    GetSpatializerFloat() {}

    /**
     * Provides a block of the currently playing audio source&#039;s spectrum data.
     */
    GetSpectrumData() {}

    /**
     * Pauses playing the clip.
     */
    Pause() {}

    /**
     * Plays the clip with an optional certain delay.
     */
    Play() {}

    /**
     * Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
     */
    PlayDelayed() {}

    /**
     * Plays an AudioClip, and scales the AudioSource volume by volumeScale.
     */
    PlayOneShot() {}

    /**
     * Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
     */
    PlayScheduled() {}

    /**
     * Set the custom curve for the given AudioSourceCurveType.
     */
    SetCustomCurve() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
     */
    SetScheduledEndTime() {}

    /**
     * Changes the time at which a sound that has already been scheduled to play will start.
     */
    SetScheduledStartTime() {}

    /**
     * Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
     */
    SetSpatializerFloat() {}

    /**
     * Stops playing the clip.
     */
    Stop() {}

    /**
     * Unpause the paused playback of this AudioSource.
     */
    UnPause() {}

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