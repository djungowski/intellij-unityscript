class AndroidJNIHelper {
    /**
     * Set debug to true to log calls through the AndroidJNIHelper.
     */
    static get debug() {}

    /**
     * Set debug to true to log calls through the AndroidJNIHelper.
     */
    static set debug(value) {}


    /**
     * Creates a managed array from a Java array.
     */
    static ConvertFromJNIArray() {}

    /**
     * Creates a Java array from a managed array.
     */
    static ConvertToJNIArray() {}

    /**
     * Creates a java proxy object which connects to the supplied proxy implementation.
     */
    static CreateJavaProxy() {}

    /**
     * Creates a UnityJavaRunnable object (implements java.lang.Runnable).
     */
    static CreateJavaRunnable() {}

    /**
     * Creates the parameter array to be used as argument list when invoking Java code through CallMethod() in AndroidJNI.
     */
    static CreateJNIArgArray() {}

    /**
     * Deletes any local jni references previously allocated by CreateJNIArgArray().
     */
    static DeleteJNIArgArray() {}

    /**
     * Scans a particular Java class for a constructor method matching a signature.
     */
    static GetConstructorID() {}

    /**
     * Scans a particular Java class for a field matching a name and a signature.
     */
    static GetFieldID() {}

    /**
     * Scans a particular Java class for a method matching a name and a signature.
     */
    static GetMethodID() {}

    /**
     * Creates the JNI signature string for particular object type.
     */
    static GetSignature() {}



}