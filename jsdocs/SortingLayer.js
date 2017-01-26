class SortingLayer {
    /**
     * Returns all the layers defined in this project.
     */
    static get layers() {}

    /**
     * Returns all the layers defined in this project.
     */
    static set layers(value) {}


    /**
     * Returns the final sorting layer value. To determine the sorting order between the various sorting layers, use this method to retrieve the final sorting value and use CompareTo to determine the order.
     */
    static GetLayerValueFromID() {}

    /**
     * Returns the final sorting layer value. See Also: GetLayerValueFromID.
     */
    static GetLayerValueFromName() {}

    /**
     * Returns the unique id of the layer. Will return &quot;&lt;unknown layer&gt;&quot; if an invalid id is given.
     */
    static IDToName() {}

    /**
     * Returns true if the id provided is a valid layer id.
     */
    static IsValid() {}

    /**
     * Returns the id given the name. Will return 0 if an invalid name was given.
     */
    static NameToID() {}


    /**
     * This is the unique id assigned to the layer. It is not an ordered running value and it should not be used to compare with other layers to determine the sorting order.
     */
    get id() {}

    /**
     * This is the unique id assigned to the layer. It is not an ordered running value and it should not be used to compare with other layers to determine the sorting order.
     */
    set id(value) {}

    /**
     * Returns the name of the layer as defined in the TagManager.
     */
    get name() {}

    /**
     * Returns the name of the layer as defined in the TagManager.
     */
    set name(value) {}

    /**
     * This is the relative value that indicates the sort order of this layer relative to the other layers.
     */
    get value() {}

    /**
     * This is the relative value that indicates the sort order of this layer relative to the other layers.
     */
    set value(value) {}


}