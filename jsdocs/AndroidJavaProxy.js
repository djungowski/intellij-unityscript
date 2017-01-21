class AndroidJavaProxy {


    /**
     * Java interface implemented by the proxy.
     */
    get javaInterface() {}

    /**
     * Java interface implemented by the proxy.
     */
    set javaInterface(value) {}


    /**
     * Called by the java vm whenever a method is invoked on the java proxy interface. You can override this to run special code on method invokation, or you can leave the implementation as is, and leave the default behavior which is to look for c# methods matching the signature of the java method.
     */
    Invoke() {}

}