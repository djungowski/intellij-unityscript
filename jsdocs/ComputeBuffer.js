class ComputeBuffer {

    /**
     * Copy counter value of append/consume buffer into another buffer.
     */
    static CopyCount() {}


    /**
     * Number of elements in the buffer (Read Only).
     */
    get count() {}

    /**
     * Number of elements in the buffer (Read Only).
     */
    set count(value) {}

    /**
     * Size of one element in the buffer (Read Only).
     */
    get stride() {}

    /**
     * Size of one element in the buffer (Read Only).
     */
    set stride(value) {}


    /**
     * Read data values from the buffer into an array.
     */
    GetData() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the buffer.
     */
    GetNativeBufferPtr() {}

    /**
     * Release a Compute Buffer.
     */
    Release() {}

    /**
     * Sets counter value of append/consume buffer.
     */
    SetCounterValue() {}

    /**
     * Set the buffer with values from an array.
     */
    SetData() {}

}