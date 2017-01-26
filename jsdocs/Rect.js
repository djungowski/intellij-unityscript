class Rect {
    /**
     * Shorthand for writing new Rect(0,0,0,0).
     */
    static get zero() {}

    /**
     * Shorthand for writing new Rect(0,0,0,0).
     */
    static set zero(value) {}


    /**
     * Creates a rectangle from min/max coordinate values.
     */
    static MinMaxRect() {}

    /**
     * Returns a point inside a rectangle, given normalized coordinates.
     */
    static NormalizedToPoint() {}

    /**
     * Returns the normalized coordinates cooresponding the the point.
     */
    static PointToNormalized() {}


    /**
     * The position of the center of the rectangle.
     */
    get center() {}

    /**
     * The position of the center of the rectangle.
     */
    set center(value) {}

    /**
     * The height of the rectangle, measured from the Y position.
     */
    get height() {}

    /**
     * The height of the rectangle, measured from the Y position.
     */
    set height(value) {}

    /**
     * The position of the maximum corner of the rectangle.
     */
    get max() {}

    /**
     * The position of the maximum corner of the rectangle.
     */
    set max(value) {}

    /**
     * The position of the minimum corner of the rectangle.
     */
    get min() {}

    /**
     * The position of the minimum corner of the rectangle.
     */
    set min(value) {}

    /**
     * The X and Y position of the rectangle.
     */
    get position() {}

    /**
     * The X and Y position of the rectangle.
     */
    set position(value) {}

    /**
     * The width and height of the rectangle.
     */
    get size() {}

    /**
     * The width and height of the rectangle.
     */
    set size(value) {}

    /**
     * The width of the rectangle, measured from the X position.
     */
    get width() {}

    /**
     * The width of the rectangle, measured from the X position.
     */
    set width(value) {}

    /**
     * The X coordinate of the rectangle.
     */
    get x() {}

    /**
     * The X coordinate of the rectangle.
     */
    set x(value) {}

    /**
     * The maximum X coordinate of the rectangle.
     */
    get xMax() {}

    /**
     * The maximum X coordinate of the rectangle.
     */
    set xMax(value) {}

    /**
     * The minimum X coordinate of the rectangle.
     */
    get xMin() {}

    /**
     * The minimum X coordinate of the rectangle.
     */
    set xMin(value) {}

    /**
     * The Y coordinate of the rectangle.
     */
    get y() {}

    /**
     * The Y coordinate of the rectangle.
     */
    set y(value) {}

    /**
     * The maximum Y coordinate of the rectangle.
     */
    get yMax() {}

    /**
     * The maximum Y coordinate of the rectangle.
     */
    set yMax(value) {}

    /**
     * The minimum Y coordinate of the rectangle.
     */
    get yMin() {}

    /**
     * The minimum Y coordinate of the rectangle.
     */
    set yMin(value) {}


    /**
     * Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
     */
    Contains() {}

    /**
     * Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
     */
    Overlaps() {}

    /**
     * Set components of an existing Rect.
     */
    Set() {}

    /**
     * Returns a nicely formatted string for this Rect.
     */
    ToString() {}

}