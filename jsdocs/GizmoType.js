class GizmoType {


    /**
     * The gizmo can be picked in the editor.
     */
    get Pickable() {}

    /**
     * The gizmo can be picked in the editor.
     */
    set Pickable(value) {}

    /**
     * Draw the gizmo if it is not selected and also no parent/ancestor is selected.
     */
    get NotInSelectionHierarchy() {}

    /**
     * Draw the gizmo if it is not selected and also no parent/ancestor is selected.
     */
    set NotInSelectionHierarchy(value) {}

    /**
     * Draw the gizmo if it is not selected.
     */
    get NonSelected() {}

    /**
     * Draw the gizmo if it is not selected.
     */
    set NonSelected(value) {}

    /**
     * Draw the gizmo if it is selected.
     */
    get Selected() {}

    /**
     * Draw the gizmo if it is selected.
     */
    set Selected(value) {}

    /**
     * Draw the gizmo if it is active (shown in the inspector).
     */
    get Active() {}

    /**
     * Draw the gizmo if it is active (shown in the inspector).
     */
    set Active(value) {}

    /**
     * Draw the gizmo if it is selected or it is a child/descendent of the selected.
     */
    get InSelectionHierarchy() {}

    /**
     * Draw the gizmo if it is selected or it is a child/descendent of the selected.
     */
    set InSelectionHierarchy(value) {}


}