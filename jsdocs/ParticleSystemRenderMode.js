class ParticleSystemRenderMode {


    /**
     * Render particles as billboards facing the active camera. (Default)
     */
    get Billboard() {}

    /**
     * Render particles as billboards facing the active camera. (Default)
     */
    set Billboard(value) {}

    /**
     * Stretch particles in the direction of motion.
     */
    get Stretch() {}

    /**
     * Stretch particles in the direction of motion.
     */
    set Stretch(value) {}

    /**
     * Render particles as billboards always facing up along the y-Axis.
     */
    get HorizontalBillboard() {}

    /**
     * Render particles as billboards always facing up along the y-Axis.
     */
    set HorizontalBillboard(value) {}

    /**
     * Render particles as billboards always facing the player, but not pitching along the x-Axis.
     */
    get VerticalBillboard() {}

    /**
     * Render particles as billboards always facing the player, but not pitching along the x-Axis.
     */
    set VerticalBillboard(value) {}

    /**
     * Render particles as meshes.
     */
    get Mesh() {}

    /**
     * Render particles as meshes.
     */
    set Mesh(value) {}

    /**
     * Do not render particles.
     */
    get None() {}

    /**
     * Do not render particles.
     */
    set None(value) {}


}