class ModelImporterClipAnimation {


    /**
     * The additive reference pose frame.
     */
    get additiveReferencePoseFrame() {}

    /**
     * The additive reference pose frame.
     */
    set additiveReferencePoseFrame(value) {}

    /**
     * Additionnal curves that will be that will be added during the import process.
     */
    get curves() {}

    /**
     * Additionnal curves that will be that will be added during the import process.
     */
    set curves(value) {}

    /**
     * Offset to the cycle of a looping animation, if a different time in it is desired to be the start.
     */
    get cycleOffset() {}

    /**
     * Offset to the cycle of a looping animation, if a different time in it is desired to be the start.
     */
    set cycleOffset(value) {}

    /**
     * AnimationEvents that will be added during the import process.
     */
    get events() {}

    /**
     * AnimationEvents that will be added during the import process.
     */
    set events(value) {}

    /**
     * First frame of the clip.
     */
    get firstFrame() {}

    /**
     * First frame of the clip.
     */
    set firstFrame(value) {}

    /**
     * Enable to defines an additive reference pose.
     */
    get hasAdditiveReferencePose() {}

    /**
     * Enable to defines an additive reference pose.
     */
    set hasAdditiveReferencePose(value) {}

    /**
     * Keeps the feet aligned with the root transform position.
     */
    get heightFromFeet() {}

    /**
     * Keeps the feet aligned with the root transform position.
     */
    set heightFromFeet(value) {}

    /**
     * Offset to the vertical root position.
     */
    get heightOffset() {}

    /**
     * Offset to the vertical root position.
     */
    set heightOffset(value) {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    get keepOriginalOrientation() {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    set keepOriginalOrientation(value) {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    get keepOriginalPositionXZ() {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    set keepOriginalPositionXZ(value) {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    get keepOriginalPositionY() {}

    /**
     * Keeps the vertical position as it is authored in the source file.
     */
    set keepOriginalPositionY(value) {}

    /**
     * Last frame of the clip.
     */
    get lastFrame() {}

    /**
     * Last frame of the clip.
     */
    set lastFrame(value) {}

    /**
     * Enable to make vertical root motion be baked into the movement of the bones. Disable to make vertical root motion be stored as root motion.
     */
    get lockRootHeightY() {}

    /**
     * Enable to make vertical root motion be baked into the movement of the bones. Disable to make vertical root motion be stored as root motion.
     */
    set lockRootHeightY(value) {}

    /**
     * Enable to make horizontal root motion be baked into the movement of the bones. Disable to make horizontal root motion be stored as root motion.
     */
    get lockRootPositionXZ() {}

    /**
     * Enable to make horizontal root motion be baked into the movement of the bones. Disable to make horizontal root motion be stored as root motion.
     */
    set lockRootPositionXZ(value) {}

    /**
     * Enable to make root rotation be baked into the movement of the bones. Disable to make root rotation be stored as root motion.
     */
    get lockRootRotation() {}

    /**
     * Enable to make root rotation be baked into the movement of the bones. Disable to make root rotation be stored as root motion.
     */
    set lockRootRotation(value) {}

    /**
     * Is the clip a looping animation?
     */
    get loop() {}

    /**
     * Is the clip a looping animation?
     */
    set loop(value) {}

    /**
     * Enable to make the motion loop seamlessly.
     */
    get loopPose() {}

    /**
     * Enable to make the motion loop seamlessly.
     */
    set loopPose(value) {}

    /**
     * Enable to make the clip loop.
     */
    get loopTime() {}

    /**
     * Enable to make the clip loop.
     */
    set loopTime(value) {}

    /**
     * Returns true when the source AvatarMask has changed. This only happens when  ModelImporterClipAnimation.maskType is set to ClipAnimationMaskType.CopyFromOther
To force a reload of the mask, simply set  ModelImporterClipAnimation.maskSource to the desired AvatarMask.
     */
    get maskNeedsUpdating() {}

    /**
     * Returns true when the source AvatarMask has changed. This only happens when  ModelImporterClipAnimation.maskType is set to ClipAnimationMaskType.CopyFromOther
To force a reload of the mask, simply set  ModelImporterClipAnimation.maskSource to the desired AvatarMask.
     */
    set maskNeedsUpdating(value) {}

    /**
     * The AvatarMask used to mask transforms during the import process.
     */
    get maskSource() {}

    /**
     * The AvatarMask used to mask transforms during the import process.
     */
    set maskSource(value) {}

    /**
     * Define mask type.
     */
    get maskType() {}

    /**
     * Define mask type.
     */
    set maskType(value) {}

    /**
     * Mirror left and right in this clip.
     */
    get mirror() {}

    /**
     * Mirror left and right in this clip.
     */
    set mirror(value) {}

    /**
     * Clip name.
     */
    get name() {}

    /**
     * Clip name.
     */
    set name(value) {}

    /**
     * Offset in degrees to the root rotation.
     */
    get rotationOffset() {}

    /**
     * Offset in degrees to the root rotation.
     */
    set rotationOffset(value) {}

    /**
     * Take name.
     */
    get takeName() {}

    /**
     * Take name.
     */
    set takeName(value) {}

    /**
     * The wrap mode of the animation.
     */
    get wrapMode() {}

    /**
     * The wrap mode of the animation.
     */
    set wrapMode(value) {}


    /**
     * Copy the mask settings from an AvatarMask to the clip configuration.
     */
    ConfigureClipFromMask() {}

    /**
     * Copy the current masking settings from the clip to an AvatarMask.
     */
    ConfigureMaskFromClip() {}

}