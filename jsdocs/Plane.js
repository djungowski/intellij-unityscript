class Plane {


    /**
     * Distance from the origin to the plane.
     */
    get distance() {}

    /**
     * Distance from the origin to the plane.
     */
    set distance(value) {}

    /**
     * Normal vector of the plane.
     */
    get normal() {}

    /**
     * Normal vector of the plane.
     */
    set normal(value) {}


    /**
     * Returns a signed distance from plane to point.
     */
    GetDistanceToPoint() {}

    /**
     * Is a point on the positive side of the plane?
     */
    GetSide() {}

    /**
     * Intersects a ray with the plane.
     */
    Raycast() {}

    /**
     * Are two points on the same side of the plane?
     */
    SameSide() {}

    /**
     * Sets a plane using three points that lie within it.  The points go around clockwise as you look down on the top surface of the plane.
     */
    Set3Points() {}

    /**
     * Sets a plane using a point that lies within it along with a normal to orient it.
     */
    SetNormalAndPosition() {}

}