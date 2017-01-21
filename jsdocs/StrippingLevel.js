class StrippingLevel {


    /**
     * Managed code stripping is disabled.
     */
    get Disabled() {}

    /**
     * Managed code stripping is disabled.
     */
    set Disabled(value) {}

    /**
     * Unused parts of managed code are stripped away.
     */
    get StripAssemblies() {}

    /**
     * Unused parts of managed code are stripped away.
     */
    set StripAssemblies(value) {}

    /**
     * Managed method bodies are stripped away. AOT platforms only.
     */
    get StripByteCode() {}

    /**
     * Managed method bodies are stripped away. AOT platforms only.
     */
    set StripByteCode(value) {}

    /**
     * Lightweight mscorlib version will be used at expense of limited compatibility.
     */
    get UseMicroMSCorlib() {}

    /**
     * Lightweight mscorlib version will be used at expense of limited compatibility.
     */
    set UseMicroMSCorlib(value) {}


}