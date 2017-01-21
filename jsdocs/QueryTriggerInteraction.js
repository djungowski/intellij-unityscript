class QueryTriggerInteraction {


    /**
     * Queries use the global Physics.queriesHitTriggers setting.
     */
    get UseGlobal() {}

    /**
     * Queries use the global Physics.queriesHitTriggers setting.
     */
    set UseGlobal(value) {}

    /**
     * Queries never report Trigger hits.
     */
    get Ignore() {}

    /**
     * Queries never report Trigger hits.
     */
    set Ignore(value) {}

    /**
     * Queries always report Trigger hits.
     */
    get Collide() {}

    /**
     * Queries always report Trigger hits.
     */
    set Collide(value) {}


}