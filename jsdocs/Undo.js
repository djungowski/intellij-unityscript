class Undo {
    /**
     * Callback that is triggered after an undo or redo was executed.
     */
    static get undoRedoPerformed() {}

    /**
     * Callback that is triggered after an undo or redo was executed.
     */
    static set undoRedoPerformed(value) {}

    /**
     * Invoked before the Undo system performs a flush.
     */
    static get willFlushUndoRecord() {}

    /**
     * Invoked before the Undo system performs a flush.
     */
    static set willFlushUndoRecord(value) {}


    /**
     * Adds a component to the game object and registers an undo operation for this action.
     */
    static AddComponent() {}

    /**
     * Removes all Undo operation for the identifier object registered using Undo.RegisterCompleteObjectUndo from the undo stack.
     */
    static ClearUndo() {}

    /**
     * Collapses all undo operation up to group index together into one step.
     */
    static CollapseUndoOperations() {}

    /**
     * Destroys the object and records an undo operation so that it can be recreated.
     */
    static DestroyObjectImmediate() {}

    /**
     * Ensure objects recorded using RecordObject or ::ref:RecordObjects are registered as an undoable action. In most cases there is no reason to invoke FlushUndoRecordObjects since it&#039;s automatically done right after mouse-up and certain other events that conventionally marks the end of an action.
     */
    static FlushUndoRecordObjects() {}

    /**
     * Unity automatically groups undo operations by the current group index.
     */
    static GetCurrentGroup() {}

    /**
     * Get the name that will be shown in the UI for the current undo group.
     */
    static GetCurrentGroupName() {}

    /**
     * Unity automatically groups undo operations by the current group index.
     */
    static IncrementCurrentGroup() {}

    /**
     * Move a GameObject from its current scene to a new scene.
It is required that the GameObject is at the root of its current scene.
     */
    static MoveGameObjectToScene() {}

    /**
     * Perform an Redo operation.
     */
    static PerformRedo() {}

    /**
     * Perform an Undo operation.
     */
    static PerformUndo() {}

    /**
     * Records any changes done on the object after the RecordObject function.
     */
    static RecordObject() {}

    /**
     * Records multiple undoable objects in a single call. This is the same as calling Undo.RecordObject multiple times.
     */
    static RecordObjects() {}

    /**
     * Stores a copy of the object states on the undo stack.
     */
    static RegisterCompleteObjectUndo() {}

    /**
     * Register an undo operations for a newly created object.
     */
    static RegisterCreatedObjectUndo() {}

    /**
     * Copy the states of a hierarchy of objects onto the undo stack.
     */
    static RegisterFullObjectHierarchyUndo() {}

    /**
     * Performs all undo operations up to the group index without storing a redo operation in the process.
     */
    static RevertAllDownToGroup() {}

    /**
     * Performs the last undo operation but does not record a redo operation.
     */
    static RevertAllInCurrentGroup() {}

    /**
     * Set the name of the current undo group.
     */
    static SetCurrentGroupName() {}

    /**
     * Sets the parent of transform to the new parent and records an undo operation.
     */
    static SetTransformParent() {}



}