class Mesh {

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}


    /**
     * The bind poses. The bind pose at each index refers to the bone with the same index.
     */
    get bindposes() {}

    /**
     * The bind poses. The bind pose at each index refers to the bone with the same index.
     */
    set bindposes(value) {}

    /**
     * Returns BlendShape count on this mesh.
     */
    get blendShapeCount() {}

    /**
     * Returns BlendShape count on this mesh.
     */
    set blendShapeCount(value) {}

    /**
     * The bone weights of each vertex.
     */
    get boneWeights() {}

    /**
     * The bone weights of each vertex.
     */
    set boneWeights(value) {}

    /**
     * The bounding volume of the mesh.
     */
    get bounds() {}

    /**
     * The bounding volume of the mesh.
     */
    set bounds(value) {}

    /**
     * Vertex colors of the Mesh.
     */
    get colors() {}

    /**
     * Vertex colors of the Mesh.
     */
    set colors(value) {}

    /**
     * Vertex colors of the Mesh.
     */
    get colors32() {}

    /**
     * Vertex colors of the Mesh.
     */
    set colors32(value) {}

    /**
     * Returns state of the Read/Write Enabled checkbox when model was imported.
     */
    get isReadable() {}

    /**
     * Returns state of the Read/Write Enabled checkbox when model was imported.
     */
    set isReadable(value) {}

    /**
     * The normals of the Mesh.
     */
    get normals() {}

    /**
     * The normals of the Mesh.
     */
    set normals(value) {}

    /**
     * The number of sub-Meshes. Every Material has a separate triangle list.
     */
    get subMeshCount() {}

    /**
     * The number of sub-Meshes. Every Material has a separate triangle list.
     */
    set subMeshCount(value) {}

    /**
     * The tangents of the Mesh.
     */
    get tangents() {}

    /**
     * The tangents of the Mesh.
     */
    set tangents(value) {}

    /**
     * An array containing all triangles in the Mesh.
     */
    get triangles() {}

    /**
     * An array containing all triangles in the Mesh.
     */
    set triangles(value) {}

    /**
     * The base texture coordinates of the Mesh.
     */
    get uv() {}

    /**
     * The base texture coordinates of the Mesh.
     */
    set uv(value) {}

    /**
     * The second texture coordinate set of the mesh, if present.
     */
    get uv2() {}

    /**
     * The second texture coordinate set of the mesh, if present.
     */
    set uv2(value) {}

    /**
     * The third texture coordinate set of the mesh, if present.
     */
    get uv3() {}

    /**
     * The third texture coordinate set of the mesh, if present.
     */
    set uv3(value) {}

    /**
     * The fourth texture coordinate set of the mesh, if present.
     */
    get uv4() {}

    /**
     * The fourth texture coordinate set of the mesh, if present.
     */
    set uv4(value) {}

    /**
     * Get the number of vertex buffers present in the Mesh. (Read Only)
     */
    get vertexBufferCount() {}

    /**
     * Get the number of vertex buffers present in the Mesh. (Read Only)
     */
    set vertexBufferCount(value) {}

    /**
     * Returns the number of vertices in the Mesh (Read Only).
     */
    get vertexCount() {}

    /**
     * Returns the number of vertices in the Mesh (Read Only).
     */
    set vertexCount(value) {}

    /**
     * Returns a copy of the vertex positions or assigns a new vertex positions array.
     */
    get vertices() {}

    /**
     * Returns a copy of the vertex positions or assigns a new vertex positions array.
     */
    set vertices(value) {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    get hideFlags() {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    set hideFlags(value) {}

    /**
     * The name of the object.
     */
    get name() {}

    /**
     * The name of the object.
     */
    set name(value) {}


    /**
     * Adds a new blend shape frame.
     */
    AddBlendShapeFrame() {}

    /**
     * Clears all vertex data and all triangle indices.
     */
    Clear() {}

    /**
     * Clears all blend shapes from Mesh.
     */
    ClearBlendShapes() {}

    /**
     * Combines several Meshes into this Mesh.
     */
    CombineMeshes() {}

    /**
     * Gets the bind poses for this instance.
     */
    GetBindposes() {}

    /**
     * Returns the frame count for a blend shape.
     */
    GetBlendShapeFrameCount() {}

    /**
     * Retreives deltaVertices, deltaNormals and deltaTangents of a blend shape frame.
     */
    GetBlendShapeFrameVertices() {}

    /**
     * Returns the weight of a blend shape frame.
     */
    GetBlendShapeFrameWeight() {}

    /**
     * Returns index of BlendShape by given name.
     */
    GetBlendShapeIndex() {}

    /**
     * Returns name of BlendShape by given index.
     */
    GetBlendShapeName() {}

    /**
     * Gets the bone weights for this instance.
     */
    GetBoneWeights() {}

    /**
     * Gets the vertex colors for this instance.
     */
    GetColors() {}

    /**
     * Gets the index count of the given submesh.
     */
    GetIndexCount() {}

    /**
     * Gets the starting index location within the Mesh&#039;s index buffer, for the given submesh.
     */
    GetIndexStart() {}

    /**
     * Gets the index buffer for the specified sub mesh on this instance.
     */
    GetIndices() {}

    /**
     * Retrieves a native (underlying graphics API) pointer to the index buffer.
     */
    GetNativeIndexBufferPtr() {}

    /**
     * Retrieves a native (underlying graphics API) pointer to the vertex buffer.
     */
    GetNativeVertexBufferPtr() {}

    /**
     * Gets the vertex normals for this instance.
     */
    GetNormals() {}

    /**
     * Gets the tangents for this instance.
     */
    GetTangents() {}

    /**
     * Gets the topology of a sub-Mesh.
     */
    GetTopology() {}

    /**
     * Gets the triangle list for the specified sub mesh on this instance.
     */
    GetTriangles() {}

    /**
     * Get the UVs for a given chanel.
     */
    GetUVs() {}

    /**
     * Gets the vertex positions for this instance.
     */
    GetVertices() {}

    /**
     * Optimize mesh for frequent updates.
     */
    MarkDynamic() {}

    /**
     * Recalculate the bounding volume of the Mesh from the vertices.
     */
    RecalculateBounds() {}

    /**
     * Recalculates the normals of the Mesh from the triangles and vertices.
     */
    RecalculateNormals() {}

    /**
     * Vertex colors of the Mesh.
     */
    SetColors() {}

    /**
     * Sets the index buffer for the sub-Mesh.
     */
    SetIndices() {}

    /**
     * Set the normals of the Mesh.
     */
    SetNormals() {}

    /**
     * Set the tangents of the Mesh.
     */
    SetTangents() {}

    /**
     * Sets the triangle list for the sub-Mesh.
     */
    SetTriangles() {}

    /**
     * Set the UVs for a given chanel.
     */
    SetUVs() {}

    /**
     * Assigns a new vertex positions array.
     */
    SetVertices() {}

    /**
     * Upload previously done Mesh modifications to the graphics API.
     */
    UploadMeshData() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}