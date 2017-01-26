class Caching {
    /**
     * Controls compression of cache data. Enabled by default.
     */
    static get compressionEnabled() {}

    /**
     * Controls compression of cache data. Enabled by default.
     */
    static set compressionEnabled(value) {}

    /**
     * Is Caching enabled?
     */
    static get enabled() {}

    /**
     * Is Caching enabled?
     */
    static set enabled(value) {}

    /**
     * The number of seconds that an AssetBundle may remain unused in the cache before it is automatically deleted.
     */
    static get expirationDelay() {}

    /**
     * The number of seconds that an AssetBundle may remain unused in the cache before it is automatically deleted.
     */
    static set expirationDelay(value) {}

    /**
     * The total number of bytes that can potentially be allocated for caching.
     */
    static get maximumAvailableDiskSpace() {}

    /**
     * The total number of bytes that can potentially be allocated for caching.
     */
    static set maximumAvailableDiskSpace(value) {}

    /**
     * Is caching ready?
     */
    static get ready() {}

    /**
     * Is caching ready?
     */
    static set ready(value) {}

    /**
     * The number of currently unused bytes in the cache.
     */
    static get spaceFree() {}

    /**
     * The number of currently unused bytes in the cache.
     */
    static set spaceFree(value) {}

    /**
     * Used disk space in bytes.
     */
    static get spaceOccupied() {}

    /**
     * Used disk space in bytes.
     */
    static set spaceOccupied(value) {}


    /**
     * This is a WebPlayer-only function.
     */
    static Authorize() {}

    /**
     * Delete all AssetBundle and Procedural Material content that has been cached by the current application.
     */
    static CleanCache() {}

    /**
     * Checks if an AssetBundle is cached.
     */
    static IsVersionCached() {}

    /**
     * Bumps the timestamp of a cached file to be the current time.
     */
    static MarkAsUsed() {}



}