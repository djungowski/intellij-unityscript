class HandleUtility {
    /**
     * Get standard acceleration for dragging values (Read Only).
     */
    static get acceleration() {}

    /**
     * Get standard acceleration for dragging values (Read Only).
     */
    static set acceleration(value) {}

    /**
     * Get nice mouse delta to use for dragging a float value (Read Only).
     */
    static get niceMouseDelta() {}

    /**
     * Get nice mouse delta to use for dragging a float value (Read Only).
     */
    static set niceMouseDelta(value) {}

    /**
     * Get nice mouse delta to use for zooming (Read Only).
     */
    static get niceMouseDeltaZoom() {}

    /**
     * Get nice mouse delta to use for zooming (Read Only).
     */
    static set niceMouseDeltaZoom(value) {}


    /**
     * Record a distance measurement from a handle.
     */
    static AddControl() {}

    /**
     * Add the ID for a default control. This will be picked if nothing else is.
     */
    static AddDefaultControl() {}

    /**
     * Map a mouse drag onto a movement along a line in 3D space.
     */
    static CalcLineTranslation() {}

    /**
     * Get the point on an arc (in 3D space) which is closest to the current mouse position.
     */
    static ClosestPointToArc() {}

    /**
     * Get the point on an disc (in 3D space) which is closest to the current mouse position.
     */
    static ClosestPointToDisc() {}

    /**
     * Get the point on a polyline (in 3D space) which is closest to the current mouse position.
     */
    static ClosestPointToPolyLine() {}

    /**
     * Calculate distance between a point and a Bezier curve.
     */
    static DistancePointBezier() {}

    /**
     * Calculate distance between a point and a line.
     */
    static DistancePointLine() {}

    /**
     * Distance from a point p in 2d to a line defined by two points a and b.
     */
    static DistancePointToLine() {}

    /**
     * Distance from a point p in 2d to a line segment defined by two points a and b.
     */
    static DistancePointToLineSegment() {}

    /**
     * Pixel distance from mouse pointer to a 3D section of a disc.
     */
    static DistanceToArc() {}

    /**
     * Pixel distance from mouse pointer to camera facing circle.
     */
    static DistanceToCircle() {}

    /**
     * Pixel distance from mouse pointer to a 3D disc.
     */
    static DistanceToDisc() {}

    /**
     * Pixel distance from mouse pointer to line.
     */
    static DistanceToLine() {}

    /**
     * Pixel distance from mouse pointer to a polyline.
     */
    static DistanceToPolyLine() {}

    /**
     * Pixel distance from mouse pointer to a rectangle on screen.
     */
    static DistanceToRectangle() {}

    /**
     * Get world space size of a manipulator handle at given position.
     */
    static GetHandleSize() {}

    /**
     * Convert 2D GUI position to a world space ray.
     */
    static GUIPointToWorldRay() {}

    /**
     * Pick game object closest to specified position.
     */
    static PickGameObject() {}

    /**
     * Pick GameObjects that lie within a specified screen rectangle.
     */
    static PickRectObjects() {}

    /**
     * Returns the parameter for the projection of the point on the given line.
     */
    static PointOnLineParameter() {}

    /**
     * Retrieve all camera settings.
     */
    static PopCamera() {}

    /**
     * Project point onto a line.
     */
    static ProjectPointLine() {}

    /**
     * Store all camera settings.
     */
    static PushCamera() {}

    /**
     * Casts ray against the scene and report if an object lies in its path.
     */
    static RaySnap() {}

    /**
     * Repaint the current view.
     */
    static Repaint() {}

    /**
     * Calculate a rectangle to display a 2D GUI element near a projected point in 3D space.
     */
    static WorldPointToSizedRect() {}

    /**
     * Convert world space point to a 2D GUI position.
     */
    static WorldToGUIPoint() {}



}