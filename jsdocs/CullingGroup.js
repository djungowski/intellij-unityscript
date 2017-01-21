class CullingGroup {


    /**
     * Pauses culling group execution.
     */
    get enabled() {}

    /**
     * Pauses culling group execution.
     */
    set enabled(value) {}

    /**
     * Sets the callback that will be called when a sphere&#039;s visibility and/or distance state has changed.
     */
    get onStateChanged() {}

    /**
     * Sets the callback that will be called when a sphere&#039;s visibility and/or distance state has changed.
     */
    set onStateChanged(value) {}

    /**
     * Locks the CullingGroup to a specific camera.
     */
    get targetCamera() {}

    /**
     * Locks the CullingGroup to a specific camera.
     */
    set targetCamera(value) {}


    /**
     * Clean up all memory used by the CullingGroup immediately.
     */
    Dispose() {}

    /**
     * Erase a given bounding sphere by moving the final sphere on top of it.
     */
    EraseSwapBack() {}

    /**
     * Get the current distance band index of a given sphere.
     */
    GetDistance() {}

    /**
     * Returns true if the bounding sphere at index is currently visible from any of the contributing cameras.
     */
    IsVisible() {}

    /**
     * Retrieve the indices of spheres that have particular visibility and/or distance states.
     */
    QueryIndices() {}

    /**
     * Set bounding distances for &#039;distance bands&#039; the group should compute, as well as options for how spheres falling into each distance band should be treated.
     */
    SetBoundingDistances() {}

    /**
     * Sets the number of bounding spheres in the bounding spheres array that are actually being used.
     */
    SetBoundingSphereCount() {}

    /**
     * Sets the array of bounding sphere definitions that the CullingGroup should compute culling for.
     */
    SetBoundingSpheres() {}

    /**
     * Set the reference point from which distance bands are measured.
     */
    SetDistanceReferencePoint() {}

}