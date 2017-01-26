class AndroidJNI {

    /**
     * Allocates a new Java object without invoking any of the constructors for the object.
     */
    static AllocObject() {}

    /**
     * Attaches the current thread to a Java (Dalvik) VM.
     */
    static AttachCurrentThread() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallBooleanMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallByteMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallCharMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallDoubleMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallFloatMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallIntMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallLongMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallObjectMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallShortMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticBooleanMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticByteMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticCharMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticDoubleMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticFloatMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticIntMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticLongMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticObjectMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticShortMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticStringMethod() {}

    /**
     * Invokes a static method on a Java object, according to the specified methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStaticVoidMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallStringMethod() {}

    /**
     * Calls an instance (nonstatic) Java method defined by methodID, optionally passing an array of arguments (args) to the method.
     */
    static CallVoidMethod() {}

    /**
     * Deletes the global reference pointed to by obj.
     */
    static DeleteGlobalRef() {}

    /**
     * Deletes the local reference pointed to by obj.
     */
    static DeleteLocalRef() {}

    /**
     * Detaches the current thread from a Java (Dalvik) VM.
     */
    static DetachCurrentThread() {}

    /**
     * Ensures that at least a given number of local references can be created in the current thread.
     */
    static EnsureLocalCapacity() {}

    /**
     * Clears any exception that is currently being thrown.
     */
    static ExceptionClear() {}

    /**
     * Prints an exception and a backtrace of the stack to the logcat
     */
    static ExceptionDescribe() {}

    /**
     * Determines if an exception is being thrown.
     */
    static ExceptionOccurred() {}

    /**
     * Raises a fatal error and does not expect the VM to recover. This function does not return.
     */
    static FatalError() {}

    /**
     * This function loads a locally-defined class.
     */
    static FindClass() {}

    /**
     * Convert a Java array of boolean to a managed array of System.Boolean.
     */
    static FromBooleanArray() {}

    /**
     * Convert a Java array of byte to a managed array of System.Byte.
     */
    static FromByteArray() {}

    /**
     * Convert a Java array of char to a managed array of System.Char.
     */
    static FromCharArray() {}

    /**
     * Convert a Java array of double to a managed array of System.Double.
     */
    static FromDoubleArray() {}

    /**
     * Convert a Java array of float to a managed array of System.Single.
     */
    static FromFloatArray() {}

    /**
     * Convert a Java array of int to a managed array of System.Int32.
     */
    static FromIntArray() {}

    /**
     * Convert a Java array of long to a managed array of System.Int64.
     */
    static FromLongArray() {}

    /**
     * Convert a Java array of java.lang.Object to a managed array of System.IntPtr, representing Java objects.
     */
    static FromObjectArray() {}

    /**
     * Converts a java.lang.reflect.Field to a field ID.
     */
    static FromReflectedField() {}

    /**
     * Converts a java.lang.reflect.Method or java.lang.reflect.Constructor object to a method ID.
     */
    static FromReflectedMethod() {}

    /**
     * Convert a Java array of short to a managed array of System.Int16.
     */
    static FromShortArray() {}

    /**
     * Returns the number of elements in the array.
     */
    static GetArrayLength() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetBooleanArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetBooleanField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetByteArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetByteField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetCharArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetCharField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetDoubleArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetDoubleField() {}

    /**
     * Returns the field ID for an instance (nonstatic) field of a class.
     */
    static GetFieldID() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetFloatArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetFloatField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetIntArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetIntField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetLongArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetLongField() {}

    /**
     * Returns the method ID for an instance (nonstatic) method of a class or interface.
     */
    static GetMethodID() {}

    /**
     * Returns an element of an Object array.
     */
    static GetObjectArrayElement() {}

    /**
     * Returns the class of an object.
     */
    static GetObjectClass() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetObjectField() {}

    /**
     * Returns the value of one element of a primitive array.
     */
    static GetShortArrayElement() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetShortField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticBooleanField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticByteField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticCharField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticDoubleField() {}

    /**
     * Returns the field ID for a static field of a class.
     */
    static GetStaticFieldID() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticFloatField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticIntField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticLongField() {}

    /**
     * Returns the method ID for a static method of a class.
     */
    static GetStaticMethodID() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticObjectField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticShortField() {}

    /**
     * This function returns the value of a static field of an object.
     */
    static GetStaticStringField() {}

    /**
     * This function returns the value of an instance (nonstatic) field of an object.
     */
    static GetStringField() {}

    /**
     * Returns a managed string object representing the string in modified UTF-8 encoding.
     */
    static GetStringUTFChars() {}

    /**
     * Returns the length in bytes of the modified UTF-8 representation of a string.
     */
    static GetStringUTFLength() {}

    /**
     * If clazz represents any class other than the class Object, then this function returns the object that represents the superclass of the class specified by clazz.
     */
    static GetSuperclass() {}

    /**
     * Returns the version of the native method interface.
     */
    static GetVersion() {}

    /**
     * Determines whether an object of clazz1 can be safely cast to clazz2.
     */
    static IsAssignableFrom() {}

    /**
     * Tests whether an object is an instance of a class.
     */
    static IsInstanceOf() {}

    /**
     * Tests whether two references refer to the same Java object.
     */
    static IsSameObject() {}

    /**
     * Construct a new primitive array object.
     */
    static NewBooleanArray() {}

    /**
     * Construct a new primitive array object.
     */
    static NewByteArray() {}

    /**
     * Construct a new primitive array object.
     */
    static NewCharArray() {}

    /**
     * Construct a new primitive array object.
     */
    static NewDoubleArray() {}

    /**
     * Construct a new primitive array object.
     */
    static NewFloatArray() {}

    /**
     * Creates a new global reference to the object referred to by the obj argument.
     */
    static NewGlobalRef() {}

    /**
     * Construct a new primitive array object.
     */
    static NewIntArray() {}

    /**
     * Creates a new local reference that refers to the same object as obj.
     */
    static NewLocalRef() {}

    /**
     * Construct a new primitive array object.
     */
    static NewLongArray() {}

    /**
     * Constructs a new Java object. The method ID indicates which constructor method to invoke. This ID must be obtained by calling GetMethodID() with &lt;init&gt; as the method name and void (V) as the return type.
     */
    static NewObject() {}

    /**
     * Constructs a new array holding objects in class clazz. All elements are initially set to obj.
     */
    static NewObjectArray() {}

    /**
     * Construct a new primitive array object.
     */
    static NewShortArray() {}

    /**
     * Constructs a new java.lang.String object from an array of characters in modified UTF-8 encoding.
     */
    static NewStringUTF() {}

    /**
     * Pops off the current local reference frame, frees all the local references, and returns a local reference in the previous local reference frame for the given result object.
     */
    static PopLocalFrame() {}

    /**
     * Creates a new local reference frame, in which at least a given number of local references can be created.
     */
    static PushLocalFrame() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetBooleanArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetBooleanField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetByteArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetByteField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetCharArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetCharField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetDoubleArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetDoubleField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetFloatArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetFloatField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetIntArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetIntField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetLongArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetLongField() {}

    /**
     * Sets an element of an Object array.
     */
    static SetObjectArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetObjectField() {}

    /**
     * Sets the value of one element in a primitive array.
     */
    static SetShortArrayElement() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetShortField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticBooleanField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticByteField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticCharField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticDoubleField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticFloatField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticIntField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticLongField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticObjectField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticShortField() {}

    /**
     * This function ets the value of a static field of an object.
     */
    static SetStaticStringField() {}

    /**
     * This function sets the value of an instance (nonstatic) field of an object.
     */
    static SetStringField() {}

    /**
     * Causes a java.lang.Throwable object to be thrown.
     */
    static Throw() {}

    /**
     * Constructs an exception object from the specified class with the message specified by message and causes that exception to be thrown.
     */
    static ThrowNew() {}

    /**
     * Convert a managed array of System.Boolean to a Java array of boolean.
     */
    static ToBooleanArray() {}

    /**
     * Convert a managed array of System.Byte to a Java array of byte.
     */
    static ToByteArray() {}

    /**
     * Convert a managed array of System.Char to a Java array of char.
     */
    static ToCharArray() {}

    /**
     * Convert a managed array of System.Double to a Java array of double.
     */
    static ToDoubleArray() {}

    /**
     * Convert a managed array of System.Single to a Java array of float.
     */
    static ToFloatArray() {}

    /**
     * Convert a managed array of System.Int32 to a Java array of int.
     */
    static ToIntArray() {}

    /**
     * Convert a managed array of System.Int64 to a Java array of long.
     */
    static ToLongArray() {}

    /**
     * Convert a managed array of System.IntPtr, representing Java objects, to a Java array of java.lang.Object.
     */
    static ToObjectArray() {}

    /**
     * Converts a field ID derived from cls to a java.lang.reflect.Field object.
     */
    static ToReflectedField() {}

    /**
     * Converts a method ID derived from clazz to a java.lang.reflect.Method or java.lang.reflect.Constructor object.
     */
    static ToReflectedMethod() {}

    /**
     * Convert a managed array of System.Int16 to a Java array of short.
     */
    static ToShortArray() {}



}