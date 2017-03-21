class StatusQueryOptions {


    /**
     * Force a refresh of the version control system status of the file. This is slow but accurate.See Also: AssetDatabase.IsOpenForEdit, AssetDatabase.IsMetaFileOpenForEdit.
     */
    get ForceUpdate() {}

    /**
     * Force a refresh of the version control system status of the file. This is slow but accurate.See Also: AssetDatabase.IsOpenForEdit, AssetDatabase.IsMetaFileOpenForEdit.
     */
    set ForceUpdate(value) {}

    /**
     * Use the last known version control system status of the file. This is faster on average but less accurate than forcing an update, as it will cache the status of the file for a period of time.See Also: AssetDatabase.IsOpenForEdit, AssetDatabase.IsMetaFileOpenForEdit.
     */
    get UseCachedIfPossible() {}

    /**
     * Use the last known version control system status of the file. This is faster on average but less accurate than forcing an update, as it will cache the status of the file for a period of time.See Also: AssetDatabase.IsOpenForEdit, AssetDatabase.IsMetaFileOpenForEdit.
     */
    set UseCachedIfPossible(value) {}


}