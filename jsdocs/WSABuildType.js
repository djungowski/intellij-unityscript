class WSABuildType {


    /**
     * Debug configuation.
No optimizations, profiler code enabled.
     */
    get Debug() {}

    /**
     * Debug configuation.
No optimizations, profiler code enabled.
     */
    set Debug(value) {}

    /**
     * Release configuration.
Optimization enabled, profiler code enabled.
     */
    get Release() {}

    /**
     * Release configuration.
Optimization enabled, profiler code enabled.
     */
    set Release(value) {}

    /**
     * Master configuation.
Optimizations enabled, profiler code disabled. This configuration is used when submitting the application to Windows Store.
     */
    get Master() {}

    /**
     * Master configuation.
Optimizations enabled, profiler code disabled. This configuration is used when submitting the application to Windows Store.
     */
    set Master(value) {}


}