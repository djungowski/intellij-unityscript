class AndroidPreferredInstallLocation {


    /**
     * Let the OS decide, app doesn&#039;t have any preferences.
     */
    get Auto() {}

    /**
     * Let the OS decide, app doesn&#039;t have any preferences.
     */
    set Auto(value) {}

    /**
     * Prefer external, if possible. Install to internal otherwise.
     */
    get PreferExternal() {}

    /**
     * Prefer external, if possible. Install to internal otherwise.
     */
    set PreferExternal(value) {}

    /**
     * Force installation into internal memory. Needed for things like Live Wallpapers.
     */
    get ForceInternal() {}

    /**
     * Force installation into internal memory. Needed for things like Live Wallpapers.
     */
    set ForceInternal(value) {}


}