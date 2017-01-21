class AndroidJavaObject {



    /**
     * Calls a Java method on an object (non-static).
     */
    Call() {}

    /**
     * Call a static Java method on a class.
     */
    CallStatic() {}

    /**
     * IDisposable callback.
     */
    Dispose() {}

    /**
     * Get the value of a field in an object (non-static).
     */
    Get() {}

    /**
     * Retrieves the raw jclass pointer to the Java class.Note: Using raw JNI functions requires advanced knowledge of the Android Java Native Interface (JNI). Please take note.
     */
    GetRawClass() {}

    /**
     * Retrieves the raw jobject pointer to the Java object.Note: Using raw JNI functions requires advanced knowledge of the Android Java Native Interface (JNI). Please take note.
     */
    GetRawObject() {}

    /**
     * Get the value of a static field in an object type.
     */
    GetStatic() {}

    /**
     * Set the value of a field in an object (non-static).
     */
    Set() {}

    /**
     * Set the value of a static field in an object type.
     */
    SetStatic() {}

}