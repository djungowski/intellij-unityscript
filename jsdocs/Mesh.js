class Mesh {

    /**
     * Adds a new blend shape frame.
     */
    static AddBlendShapeFrame() {}

    /**
     * Clears all vertex data and all triangle indices.
     */
    static Clear() {}

    /**
     * Clears all blend shapes from Mesh.
     */
    static ClearBlendShapes() {}

    /**
     * Combines several Meshes into this Mesh.
     */
    static CombineMeshes() {}

    /**
     * Returns the frame count for a blend shape.
     */
    static GetBlendShapeFrameCount() {}

    /**
     * Retreives deltaVertices, deltaNormals and deltaTangents of a blend shape frame.
     */
    static GetBlendShapeFrameVertices() {}

    /**
     * Returns the weight of a blend shape frame.
     */
    static GetBlendShapeFrameWeight() {}

    /**
     * Returns index of BlendShape by given name.
     */
    static GetBlendShapeIndex() {}

    /**
     * Returns name of BlendShape by given index.
     */
    static GetBlendShapeName() {}

    /**
     * Returns the index buffer for the sub-Mesh.
     */
    static GetIndices() {}

    /**
     * Retrieves a native (underlying graphics API) pointer to the index buffer.
     */
    static GetNativeIndexBufferPtr() {}

    /**
     * Retrieves a native (underlying graphics API) pointer to the vertex buffer.
     */
    static GetNativeVertexBufferPtr() {}

    /**
     * Gets the topology of a sub-Mesh.
     */
    static GetTopology() {}

    /**
     * Returns the triangle list for the sub-Mesh.
     */
    static GetTriangles() {}

    /**
     * Get the UVs for a given chanel.
     */
    static GetUVs() {}

    /**
     * Optimize mesh for frequent updates.
     */
    static MarkDynamic() {}

    /**
     * Recalculate the bounding volume of the Mesh from the vertices.
     */
    static RecalculateBounds() {}

    /**
     * Recalculates the normals of the Mesh from the triangles and vertices.
     */
    static RecalculateNormals() {}

    /**
     * Vertex colors of the Mesh.
     */
    static SetColors() {}

    /**
     * Sets the index buffer for the sub-Mesh.
     */
    static SetIndices() {}

    /**
     * Set the normals of the Mesh.
     */
    static SetNormals() {}

    /**
     * Set the tangents of the Mesh.
     */
    static SetTangents() {}

    /**
     * Sets the triangle list for the sub-Mesh.
     */
    static SetTriangles() {}

    /**
     * Set the UVs for a given chanel.
     */
    static SetUVs() {}

    /**
     * Assigns a new vertex positions array.
     */
    static SetVertices() {}

    /**
     * Upload previously done Mesh modifications to the graphics API.
     */
    static UploadMeshData() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


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
     * Returns the index buffer for the sub-Mesh.
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
     * Gets the topology of a sub-Mesh.
     */
    GetTopology() {}

    /**
     * Returns the triangle list for the sub-Mesh.
     */
    GetTriangles() {}

    /**
     * Get the UVs for a given chanel.
     */
    GetUVs() {}

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