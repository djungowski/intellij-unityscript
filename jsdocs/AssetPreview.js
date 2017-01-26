class AssetPreview {

    /**
     * Returns a preview texture for an asset.
     */
    static GetAssetPreview() {}

    /**
     * Returns the thumbnail for an object (like the ones you see in the project view).
     */
    static GetMiniThumbnail() {}

    /**
     * Returns the thumbnail for the type.
     */
    static GetMiniTypeThumbnail() {}

    /**
     * Loading previews is asynchronous so it is useful to know if a specific asset preview is in the process of being loaded so client code e.g can repaint while waiting for the loading to finish.
     */
    static IsLoadingAssetPreview() {}

    /**
     * Loading previews is asynchronous so it is useful to know if any requested previews are in the process of being loaded so client code e.g can repaint while waiting.
     */
    static IsLoadingAssetPreviews() {}

    /**
     * Set the asset preview cache to a size that can hold all visible previews on the screen at once.
     */
    static SetPreviewTextureCacheSize() {}



}