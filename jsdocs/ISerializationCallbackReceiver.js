class ISerializationCallbackReceiver {



    /**
     * Implement this method to receive a callback after Unity deserializes your object.
     */
    OnAfterDeserialize() {}

    /**
     * Implement this method to receive a callback before Unity serializes your object.
     */
    OnBeforeSerialize() {}

}