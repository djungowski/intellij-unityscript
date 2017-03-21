class Matrix4x4 {
    /**
     * Returns the identity matrix (Read Only).
     */
    static get identity() {}

    /**
     * Returns the identity matrix (Read Only).
     */
    static set identity(value) {}

    /**
     * Returns a matrix with all elements set to zero (Read Only).
     */
    static get zero() {}

    /**
     * Returns a matrix with all elements set to zero (Read Only).
     */
    static set zero(value) {}


    /**
     * Creates an orthogonal projection matrix.
     */
    static Ortho() {}

    /**
     * Creates a perspective projection matrix.
     */
    static Perspective() {}

    /**
     * Creates a scaling matrix.
     */
    static Scale() {}

    /**
     * Creates a translation, rotation and scaling matrix.
     */
    static TRS() {}


    /**
     * The determinant of the matrix.
     */
    get determinant() {}

    /**
     * The determinant of the matrix.
     */
    set determinant(value) {}

    /**
     * The inverse of this matrix (Read Only).
     */
    get inverse() {}

    /**
     * The inverse of this matrix (Read Only).
     */
    set inverse(value) {}

    /**
     * Is this the identity matrix?
     */
    get isIdentity() {}

    /**
     * Is this the identity matrix?
     */
    set isIdentity(value) {}

    /**
     * Access element at [row, column].
     */
    get this[int,int]() {}

    /**
     * Access element at [row, column].
     */
    set this[int,int](value) {}

    /**
     * Returns the transpose of this matrix (Read Only).
     */
    get transpose() {}

    /**
     * Returns the transpose of this matrix (Read Only).
     */
    set transpose(value) {}


    /**
     * Get a column of the matrix.
     */
    GetColumn() {}

    /**
     * Returns a row of the matrix.
     */
    GetRow() {}

    /**
     * Transforms a position by this matrix (generic).
     */
    MultiplyPoint() {}

    /**
     * Transforms a position by this matrix (fast).
     */
    MultiplyPoint3x4() {}

    /**
     * Transforms a direction by this matrix.
     */
    MultiplyVector() {}

    /**
     * Sets a column of the matrix.
     */
    SetColumn() {}

    /**
     * Sets a row of the matrix.
     */
    SetRow() {}

    /**
     * Sets this matrix to a translation, rotation and scaling matrix.
     */
    SetTRS() {}

    /**
     * Returns a nicely formatted string for this matrix.
     */
    ToString() {}

}