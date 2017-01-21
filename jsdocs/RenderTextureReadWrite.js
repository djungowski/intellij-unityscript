class RenderTextureReadWrite {


    /**
     * Default color space conversion based on project settings.
     */
    get Default() {}

    /**
     * Default color space conversion based on project settings.
     */
    set Default(value) {}

    /**
     * Render texture contains linear (non-color) data; don&#039;t perform color conversions on it.
     */
    get Linear() {}

    /**
     * Render texture contains linear (non-color) data; don&#039;t perform color conversions on it.
     */
    set Linear(value) {}

    /**
     * Render texture contains sRGB (color) data, perform Linear&lt;-&gt;sRGB conversions on it.
     */
    get sRGB() {}

    /**
     * Render texture contains sRGB (color) data, perform Linear&lt;-&gt;sRGB conversions on it.
     */
    set sRGB(value) {}


}