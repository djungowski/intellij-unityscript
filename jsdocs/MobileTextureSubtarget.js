class MobileTextureSubtarget {


    /**
     * Don&#039;t override texture compression.
     */
    get Generic() {}

    /**
     * Don&#039;t override texture compression.
     */
    set Generic(value) {}

    /**
     * S3 texture compression, nonspecific to DXT variant. Supported on devices running Nvidia Tegra2 platform, including Motorala Xoom, Motorola Atrix, Droid Bionic, and others.
     */
    get DXT() {}

    /**
     * S3 texture compression, nonspecific to DXT variant. Supported on devices running Nvidia Tegra2 platform, including Motorala Xoom, Motorola Atrix, Droid Bionic, and others.
     */
    set DXT(value) {}

    /**
     * PowerVR texture compression. Available in devices running PowerVR SGX530/540 GPU, such as Motorola DROID series; Samsung Galaxy S, Nexus S, and Galaxy Tab; and others.
     */
    get PVRTC() {}

    /**
     * PowerVR texture compression. Available in devices running PowerVR SGX530/540 GPU, such as Motorola DROID series; Samsung Galaxy S, Nexus S, and Galaxy Tab; and others.
     */
    set PVRTC(value) {}

    /**
     * ATI texture compression. Available on devices running Adreno GPU, including HTC Nexus One, Droid Incredible, EVO, and others.
     */
    get ATC() {}

    /**
     * ATI texture compression. Available on devices running Adreno GPU, including HTC Nexus One, Droid Incredible, EVO, and others.
     */
    set ATC(value) {}

    /**
     * ETC1 texture compression (or RGBA16 for textures with alpha), supported by all devices.
     */
    get ETC() {}

    /**
     * ETC1 texture compression (or RGBA16 for textures with alpha), supported by all devices.
     */
    set ETC(value) {}

    /**
     * ETC2 texture compression.
     */
    get ETC2() {}

    /**
     * ETC2 texture compression.
     */
    set ETC2(value) {}

    /**
     * ASTC texture compression.
     */
    get ASTC() {}

    /**
     * ASTC texture compression.
     */
    set ASTC(value) {}


}