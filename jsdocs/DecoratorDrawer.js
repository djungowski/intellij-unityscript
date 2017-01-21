class DecoratorDrawer {


    /**
     * The PropertyAttribute for the decorator. (Read Only)
     */
    get attribute() {}

    /**
     * The PropertyAttribute for the decorator. (Read Only)
     */
    set attribute(value) {}


    /**
     * Override this method to specify how tall the GUI for this decorator is in pixels.
     */
    GetHeight() {}

    /**
     * Override this method to make your own GUI for the decorator.
See DecoratorDrawer for an example of how to use this.
     */
    OnGUI() {}

}