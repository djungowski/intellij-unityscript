class Handles {
    /**
     * Color to use for handles that represent the center of something.
     */
    static get centerColor() {}

    /**
     * Color to use for handles that represent the center of something.
     */
    static set centerColor(value) {}

    /**
     * Look up or set the Color of the handles.
     */
    static get color() {}

    /**
     * Look up or set the Color of the handles.
     */
    static set color(value) {}

    /**
     * The inverse of the matrix for all handle operations.
     */
    static get inverseMatrix() {}

    /**
     * The inverse of the matrix for all handle operations.
     */
    static set inverseMatrix(value) {}

    /**
     * Are handles lit?
     */
    static get lighting() {}

    /**
     * Are handles lit?
     */
    static set lighting(value) {}

    /**
     * Matrix for all handle operations.
     */
    static get matrix() {}

    /**
     * Matrix for all handle operations.
     */
    static set matrix(value) {}

    /**
     * Soft color to use for for less interactive UI, or handles that are used rarely (or not at all).
     */
    static get secondaryColor() {}

    /**
     * Soft color to use for for less interactive UI, or handles that are used rarely (or not at all).
     */
    static set secondaryColor(value) {}

    /**
     * Color to use for the currently active handle.
     */
    static get selectedColor() {}

    /**
     * Color to use for the currently active handle.
     */
    static set selectedColor(value) {}

    /**
     * Color to use for handles that manipulate the X coordinate of something.
     */
    static get xAxisColor() {}

    /**
     * Color to use for handles that manipulate the X coordinate of something.
     */
    static set xAxisColor(value) {}

    /**
     * Color to use for handles that manipulates the Y coordinate of something.
     */
    static get yAxisColor() {}

    /**
     * Color to use for handles that manipulates the Y coordinate of something.
     */
    static set yAxisColor(value) {}

    /**
     * Color to use for handles that manipulates the Z coordinate of something.
     */
    static get zAxisColor() {}

    /**
     * Color to use for handles that manipulates the Z coordinate of something.
     */
    static set zAxisColor(value) {}


    /**
     * Draw an arrow like those used by the move tool.
     */
    static ArrowCap() {}

    /**
     * Draw an arrow like those used by the move tool.
     */
    static ArrowHandleCap() {}

    /**
     * Begin a 2D GUI block inside the 3D handle GUI.
     */
    static BeginGUI() {}

    /**
     * Make a 3D button.
     */
    static Button() {}

    /**
     * Draw a camera-facing Circle. Pass this into handle functions.
     */
    static CircleCap() {}

    /**
     * Draw a circle handle. Pass this into handle functions.
     */
    static CircleHandleCap() {}

    /**
     * Clears the camera.
     */
    static ClearCamera() {}

    /**
     * Draw a Cone. Pass this into handle functions.
     */
    static ConeCap() {}

    /**
     * Draw a cone handle. Pass this into handle functions.
     */
    static ConeHandleCap() {}

    /**
     * Draw a cube. Pass this into handle functions.
     */
    static CubeCap() {}

    /**
     * Draw a cube handle. Pass this into handle functions.
     */
    static CubeHandleCap() {}

    /**
     * Draw a Cylinder. Pass this into handle functions.
     */
    static CylinderCap() {}

    /**
     * Draw a cylinder handle. Pass this into handle functions.
     */
    static CylinderHandleCap() {}

    /**
     * Make a 3D disc that can be dragged with the mouse.
     */
    static Disc() {}

    /**
     * Draw a camera-facing dot. Pass this into handle functions.
     */
    static DotCap() {}

    /**
     * Draw a dot handle. Pass this into handle functions.
     */
    static DotHandleCap() {}

    /**
     * Draw anti-aliased convex polygon specified with point array.
     */
    static DrawAAConvexPolygon() {}

    /**
     * Draw anti-aliased line specified with point array and width.
     */
    static DrawAAPolyLine() {}

    /**
     * Draw textured bezier line through start and end points with the given tangents.
     */
    static DrawBezier() {}

    /**
     * Draws a camera inside a rectangle.
     */
    static DrawCamera() {}

    /**
     * Draw a dotted line from p1 to p2.
     */
    static DrawDottedLine() {}

    /**
     * Draw a list of dotted line segments.
     */
    static DrawDottedLines() {}

    /**
     * Draw a line from p1 to p2.
     */
    static DrawLine() {}

    /**
     * Draw a list of line segments.
     */
    static DrawLines() {}

    /**
     * Draw a line going through the list of all points.
     */
    static DrawPolyLine() {}

    /**
     * Draw a camera facing selection frame.
     */
    static DrawSelectionFrame() {}

    /**
     * Draw a circular sector (pie piece) in 3D space.
     */
    static DrawSolidArc() {}

    /**
     * Draw a solid flat disc in 3D space.
     */
    static DrawSolidDisc() {}

    /**
     * Draw a solid outlined rectangle in 3D space.
     */
    static DrawSolidRectangleWithOutline() {}

    /**
     * Draw a circular arc in 3D space.
     */
    static DrawWireArc() {}

    /**
     * Draw a wireframe box with center and size.
     */
    static DrawWireCube() {}

    /**
     * Draw the outline of a flat disc in 3D space.
     */
    static DrawWireDisc() {}

    /**
     * End a 2D GUI block and get back to the 3D handle GUI.
     */
    static EndGUI() {}

    /**
     * Make an unconstrained movement handle.
     */
    static FreeMoveHandle() {}

    /**
     * Make an unconstrained rotation handle.
     */
    static FreeRotateHandle() {}

    /**
     * Get the width and height of the main Game view.
     */
    static GetMainGameViewSize() {}

    /**
     * Make a text label positioned in 3D space.
     */
    static Label() {}

    /**
     * Retuns an array of points to representing the bezier curve. See Handles.DrawBezier.
     */
    static MakeBezierPoints() {}

    /**
     * Make a 3D Scene view position handle.
     */
    static PositionHandle() {}

    /**
     * Make a Scene view radius handle.
     */
    static RadiusHandle() {}

    /**
     * Draw a rectangle handle. Pass this into handle functions.
     */
    static RectangleHandleCap() {}

    /**
     * Make a Scene view rotation handle.
     */
    static RotationHandle() {}

    /**
     * Make a Scene view scale handle.
     */
    static ScaleHandle() {}

    /**
     * Make a directional scale slider.
     */
    static ScaleSlider() {}

    /**
     * Make a single-float draggable handle.
     */
    static ScaleValueHandle() {}

    /**
     * Draw a camera facing selection frame.
     */
    static SelectionFrame() {}

    /**
     * Set the current camera so all Handles and Gizmos are draw with its settings.
     */
    static SetCamera() {}

    /**
     * Make a 3D slider.
     */
    static Slider() {}

    /**
     * Slide a handle in a 2D plane.
     */
    static Slider2D() {}

    /**
     * Rounds the value val to the closest multiple of snap (snap can only be positive).
     */
    static SnapValue() {}

    /**
     * Draw a Sphere. Pass this into handle functions.
     */
    static SphereCap() {}

    /**
     * Draw a sphere handle. Pass this into handle functions.
     */
    static SphereHandleCap() {}


    /**
     * Setup viewport and stuff for a current camera.
     */
    get currentCamera() {}

    /**
     * Setup viewport and stuff for a current camera.
     */
    set currentCamera(value) {}


}