class JointDrive {


    /**
     * Amount of force applied to push the object toward the defined direction.
     */
    get maximumForce() {}

    /**
     * Amount of force applied to push the object toward the defined direction.
     */
    set maximumForce(value) {}

    /**
     * Resistance strength against the Position Spring. Only used if mode includes Position.
     */
    get positionDamper() {}

    /**
     * Resistance strength against the Position Spring. Only used if mode includes Position.
     */
    set positionDamper(value) {}

    /**
     * Strength of a rubber-band pull toward the defined direction. Only used if mode includes Position.
     */
    get positionSpring() {}

    /**
     * Strength of a rubber-band pull toward the defined direction. Only used if mode includes Position.
     */
    set positionSpring(value) {}


}