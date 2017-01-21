class AnimatorTransitionInfo {


    /**
     * Returns true if the transition is from an AnyState node, or from Animator.CrossFade().
     */
    get anyState() {}

    /**
     * Returns true if the transition is from an AnyState node, or from Animator.CrossFade().
     */
    set anyState(value) {}

    /**
     * The unique name of the Transition.
     */
    get fullPathHash() {}

    /**
     * The unique name of the Transition.
     */
    set fullPathHash(value) {}

    /**
     * The simplified name of the Transition.
     */
    get nameHash() {}

    /**
     * The simplified name of the Transition.
     */
    set nameHash(value) {}

    /**
     * Normalized time of the Transition.
     */
    get normalizedTime() {}

    /**
     * Normalized time of the Transition.
     */
    set normalizedTime(value) {}

    /**
     * The user-specified name of the Transition.
     */
    get userNameHash() {}

    /**
     * The user-specified name of the Transition.
     */
    set userNameHash(value) {}


    /**
     * Does name match the name of the active Transition.
     */
    IsName() {}

    /**
     * Does userName match the name of the active Transition.
     */
    IsUserName() {}

}