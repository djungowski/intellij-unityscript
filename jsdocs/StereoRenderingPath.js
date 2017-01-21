class StereoRenderingPath {


    /**
     * The scene graph is traversed twice, rendering one eye at a time. This is the slowest path and should only be used for reference.
     */
    get MultiPass() {}

    /**
     * The scene graph is traversed twice, rendering one eye at a time. This is the slowest path and should only be used for reference.
     */
    set MultiPass(value) {}

    /**
     * The scene graph is traversed only once and two draw calls will be issued for each render node. The main render target has to be a double wide render target. This is considerable faster than MultiPass mode.
     */
    get SinglePass() {}

    /**
     * The scene graph is traversed only once and two draw calls will be issued for each render node. The main render target has to be a double wide render target. This is considerable faster than MultiPass mode.
     */
    set SinglePass(value) {}

    /**
     * The scene graph is traversed only once and there will be only one draw call issued for each render node. The main render target has to be an array render target. This is an optimization of the StereoRenderingPath.SinglePass mode. Special hardware support is required for this to run.
     */
    get Instancing() {}

    /**
     * The scene graph is traversed only once and there will be only one draw call issued for each render node. The main render target has to be an array render target. This is an optimization of the StereoRenderingPath.SinglePass mode. Special hardware support is required for this to run.
     */
    set Instancing(value) {}


}