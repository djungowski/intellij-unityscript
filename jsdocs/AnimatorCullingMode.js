class AnimatorCullingMode {


    /**
     * Always animate the entire character. Object is animated even when offscreen.
     */
    get AlwaysAnimate() {}

    /**
     * Always animate the entire character. Object is animated even when offscreen.
     */
    set AlwaysAnimate(value) {}

    /**
     * Retarget, IK and write of Transforms are disabled when renderers are not visible.
     */
    get CullUpdateTransforms() {}

    /**
     * Retarget, IK and write of Transforms are disabled when renderers are not visible.
     */
    set CullUpdateTransforms(value) {}

    /**
     * Animation is completely disabled when renderers are not visible.
     */
    get CullCompletely() {}

    /**
     * Animation is completely disabled when renderers are not visible.
     */
    set CullCompletely(value) {}


}