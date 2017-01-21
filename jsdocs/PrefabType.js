class PrefabType {


    /**
     * The object is not a prefab nor an instance of a prefab.
     */
    get None() {}

    /**
     * The object is not a prefab nor an instance of a prefab.
     */
    set None(value) {}

    /**
     * The object is a user created prefab asset.
     */
    get Prefab() {}

    /**
     * The object is a user created prefab asset.
     */
    set Prefab(value) {}

    /**
     * The object is an imported 3D model asset.
     */
    get ModelPrefab() {}

    /**
     * The object is an imported 3D model asset.
     */
    set ModelPrefab(value) {}

    /**
     * The object is an instance of a user created prefab.
     */
    get PrefabInstance() {}

    /**
     * The object is an instance of a user created prefab.
     */
    set PrefabInstance(value) {}

    /**
     * The object is an instance of an imported 3D model.
     */
    get ModelPrefabInstance() {}

    /**
     * The object is an instance of an imported 3D model.
     */
    set ModelPrefabInstance(value) {}

    /**
     * The object was an instance of a prefab, but the original prefab could not be found.
     */
    get MissingPrefabInstance() {}

    /**
     * The object was an instance of a prefab, but the original prefab could not be found.
     */
    set MissingPrefabInstance(value) {}

    /**
     * The object is an instance of a user created prefab, but the connection is broken.
     */
    get DisconnectedPrefabInstance() {}

    /**
     * The object is an instance of a user created prefab, but the connection is broken.
     */
    set DisconnectedPrefabInstance(value) {}

    /**
     * The object is an instance of an imported 3D model, but the connection is broken.
     */
    get DisconnectedModelPrefabInstance() {}

    /**
     * The object is an instance of an imported 3D model, but the connection is broken.
     */
    set DisconnectedModelPrefabInstance(value) {}


}