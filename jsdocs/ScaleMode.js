class ScaleMode {


    /**
     * Stretches the texture to fill the complete rectangle passed in to GUI.DrawTexture.
     */
    get StretchToFill() {}

    /**
     * Stretches the texture to fill the complete rectangle passed in to GUI.DrawTexture.
     */
    set StretchToFill(value) {}

    /**
     * Scales the texture, maintaining aspect ratio, so it completely covers the position rectangle passed to GUI.DrawTexture. If the texture is being draw to a rectangle with a different aspect ratio than the original, the image is cropped.
     */
    get ScaleAndCrop() {}

    /**
     * Scales the texture, maintaining aspect ratio, so it completely covers the position rectangle passed to GUI.DrawTexture. If the texture is being draw to a rectangle with a different aspect ratio than the original, the image is cropped.
     */
    set ScaleAndCrop(value) {}

    /**
     * Scales the texture, maintaining aspect ratio, so it completely fits withing the position rectangle passed to GUI.DrawTexture.
     */
    get ScaleToFit() {}

    /**
     * Scales the texture, maintaining aspect ratio, so it completely fits withing the position rectangle passed to GUI.DrawTexture.
     */
    set ScaleToFit(value) {}


}