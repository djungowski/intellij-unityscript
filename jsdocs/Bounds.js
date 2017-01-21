class Bounds {


    /**
     * The center of the bounding box.
     */
    get center() {}

    /**
     * The center of the bounding box.
     */
    set center(value) {}

    /**
     * The extents of the box. This is always half of the size.
     */
    get extents() {}

    /**
     * The extents of the box. This is always half of the size.
     */
    set extents(value) {}

    /**
     * The maximal point of the box. This is always equal to center+extents.
     */
    get max() {}

    /**
     * The maximal point of the box. This is always equal to center+extents.
     */
    set max(value) {}

    /**
     * The minimal point of the box. This is always equal to center-extents.
     */
    get min() {}

    /**
     * The minimal point of the box. This is always equal to center-extents.
     */
    set min(value) {}

    /**
     * The total size of the box. This is always twice as large as the extents.
     */
    get size() {}

    /**
     * The total size of the box. This is always twice as large as the extents.
     */
    set size(value) {}


    /**
     * The closest point on the bounding box.
     */
    ClosestPoint() {}

    /**
     * Is point contained in the bounding box?
     */
    Contains() {}

    /**
     * Grows the Bounds to include the point.
     */
    Encapsulate() {}

    /**
     * Expand the bounds by increasing its size by amount along each side.
     */
    Expand() {}

    /**
     * Does ray intersect this bounding box?
     */
    IntersectRay() {}

    /**
     * Does another bounding box intersect with this bounding box?
     */
    Intersects() {}

    /**
     * Sets the bounds to the min and max value of the box.
     */
    SetMinMax() {}

    /**
     * The smallest squared distance between the point and this bounding box.
     */
    SqrDistance() {}

    /**
     * Returns a nicely formatted string for the bounds.
     */
    ToString() {}

}