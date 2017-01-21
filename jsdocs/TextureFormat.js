class TextureFormat {


    /**
     * Alpha-only texture format.
     */
    get Alpha8() {}

    /**
     * Alpha-only texture format.
     */
    set Alpha8(value) {}

    /**
     * A 16 bits/pixel texture format. Texture stores color with an alpha channel.
     */
    get ARGB4444() {}

    /**
     * A 16 bits/pixel texture format. Texture stores color with an alpha channel.
     */
    set ARGB4444(value) {}

    /**
     * Color texture format, 8-bits per channel.
     */
    get RGB24() {}

    /**
     * Color texture format, 8-bits per channel.
     */
    set RGB24(value) {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    get RGBA32() {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    set RGBA32(value) {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    get ARGB32() {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    set ARGB32(value) {}

    /**
     * A 16 bit color texture format.
     */
    get RGB565() {}

    /**
     * A 16 bit color texture format.
     */
    set RGB565(value) {}

    /**
     * A 16 bit color texture format that only has a red channel.
     */
    get R16() {}

    /**
     * A 16 bit color texture format that only has a red channel.
     */
    set R16(value) {}

    /**
     * Compressed color texture format.
     */
    get DXT1() {}

    /**
     * Compressed color texture format.
     */
    set DXT1(value) {}

    /**
     * Compressed color with alpha channel texture format.
     */
    get DXT5() {}

    /**
     * Compressed color with alpha channel texture format.
     */
    set DXT5(value) {}

    /**
     * Color and alpha  texture format, 4 bit per channel.
     */
    get RGBA4444() {}

    /**
     * Color and alpha  texture format, 4 bit per channel.
     */
    set RGBA4444(value) {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    get BGRA32() {}

    /**
     * Color with alpha texture format, 8-bits per channel.
     */
    set BGRA32(value) {}

    /**
     * Scalar (R)  texture format, 16 bit floating point.
     */
    get RHalf() {}

    /**
     * Scalar (R)  texture format, 16 bit floating point.
     */
    set RHalf(value) {}

    /**
     * Two color (RG)  texture format, 16 bit floating point per channel.
     */
    get RGHalf() {}

    /**
     * Two color (RG)  texture format, 16 bit floating point per channel.
     */
    set RGHalf(value) {}

    /**
     * RGB color and alpha texture format, 16 bit floating point per channel.
     */
    get RGBAHalf() {}

    /**
     * RGB color and alpha texture format, 16 bit floating point per channel.
     */
    set RGBAHalf(value) {}

    /**
     * Scalar (R) texture format, 32 bit floating point.
     */
    get RFloat() {}

    /**
     * Scalar (R) texture format, 32 bit floating point.
     */
    set RFloat(value) {}

    /**
     * Two color (RG)  texture format, 32 bit floating point per channel.
     */
    get RGFloat() {}

    /**
     * Two color (RG)  texture format, 32 bit floating point per channel.
     */
    set RGFloat(value) {}

    /**
     * RGB color and alpha texture format,  32-bit floats per channel.
     */
    get RGBAFloat() {}

    /**
     * RGB color and alpha texture format,  32-bit floats per channel.
     */
    set RGBAFloat(value) {}

    /**
     * A format that uses the YUV color space and is often used for video encoding or playback.
     */
    get YUY2() {}

    /**
     * A format that uses the YUV color space and is often used for video encoding or playback.
     */
    set YUY2(value) {}

    /**
     * Compressed one channel (R) texture format.
     */
    get BC4() {}

    /**
     * Compressed one channel (R) texture format.
     */
    set BC4(value) {}

    /**
     * Compressed two-channel (RG) texture format.
     */
    get BC5() {}

    /**
     * Compressed two-channel (RG) texture format.
     */
    set BC5(value) {}

    /**
     * HDR compressed color texture format.
     */
    get BC6H() {}

    /**
     * HDR compressed color texture format.
     */
    set BC6H(value) {}

    /**
     * High quality compressed color texture format.
     */
    get BC7() {}

    /**
     * High quality compressed color texture format.
     */
    set BC7(value) {}

    /**
     * Compressed color texture format with Crunch compression for small storage sizes.
     */
    get DXT1Crunched() {}

    /**
     * Compressed color texture format with Crunch compression for small storage sizes.
     */
    set DXT1Crunched(value) {}

    /**
     * Compressed color with alpha channel texture format with Crunch compression for small storage sizes.
     */
    get DXT5Crunched() {}

    /**
     * Compressed color with alpha channel texture format with Crunch compression for small storage sizes.
     */
    set DXT5Crunched(value) {}

    /**
     * PowerVR (iOS) 2 bits/pixel compressed color texture format.
     */
    get PVRTC_RGB2() {}

    /**
     * PowerVR (iOS) 2 bits/pixel compressed color texture format.
     */
    set PVRTC_RGB2(value) {}

    /**
     * PowerVR (iOS) 2 bits/pixel compressed with alpha channel texture format.
     */
    get PVRTC_RGBA2() {}

    /**
     * PowerVR (iOS) 2 bits/pixel compressed with alpha channel texture format.
     */
    set PVRTC_RGBA2(value) {}

    /**
     * PowerVR (iOS) 4 bits/pixel compressed color texture format.
     */
    get PVRTC_RGB4() {}

    /**
     * PowerVR (iOS) 4 bits/pixel compressed color texture format.
     */
    set PVRTC_RGB4(value) {}

    /**
     * PowerVR (iOS) 4 bits/pixel compressed with alpha channel texture format.
     */
    get PVRTC_RGBA4() {}

    /**
     * PowerVR (iOS) 4 bits/pixel compressed with alpha channel texture format.
     */
    set PVRTC_RGBA4(value) {}

    /**
     * ETC (GLES2.0) 4 bits/pixel compressed RGB texture format.
     */
    get ETC_RGB4() {}

    /**
     * ETC (GLES2.0) 4 bits/pixel compressed RGB texture format.
     */
    set ETC_RGB4(value) {}

    /**
     * ATC (ATITC) 4 bits/pixel compressed RGB texture format.
     */
    get ATC_RGB4() {}

    /**
     * ATC (ATITC) 4 bits/pixel compressed RGB texture format.
     */
    set ATC_RGB4(value) {}

    /**
     * ATC (ATITC) 8 bits/pixel compressed RGB texture format.
     */
    get ATC_RGBA8() {}

    /**
     * ATC (ATITC) 8 bits/pixel compressed RGB texture format.
     */
    set ATC_RGBA8(value) {}

    /**
     * ETC2 / EAC (GL ES 3.0) 4 bits/pixel compressed unsigned single-channel texture format.
     */
    get EAC_R() {}

    /**
     * ETC2 / EAC (GL ES 3.0) 4 bits/pixel compressed unsigned single-channel texture format.
     */
    set EAC_R(value) {}

    /**
     * ETC2 / EAC (GL ES 3.0) 4 bits/pixel compressed signed single-channel texture format.
     */
    get EAC_R_SIGNED() {}

    /**
     * ETC2 / EAC (GL ES 3.0) 4 bits/pixel compressed signed single-channel texture format.
     */
    set EAC_R_SIGNED(value) {}

    /**
     * ETC2 / EAC (GL ES 3.0) 8 bits/pixel compressed unsigned dual-channel (RG) texture format.
     */
    get EAC_RG() {}

    /**
     * ETC2 / EAC (GL ES 3.0) 8 bits/pixel compressed unsigned dual-channel (RG) texture format.
     */
    set EAC_RG(value) {}

    /**
     * ETC2 / EAC (GL ES 3.0) 8 bits/pixel compressed signed dual-channel (RG) texture format.
     */
    get EAC_RG_SIGNED() {}

    /**
     * ETC2 / EAC (GL ES 3.0) 8 bits/pixel compressed signed dual-channel (RG) texture format.
     */
    set EAC_RG_SIGNED(value) {}

    /**
     * ETC2 (GL ES 3.0) 4 bits/pixel compressed RGB texture format.
     */
    get ETC2_RGB() {}

    /**
     * ETC2 (GL ES 3.0) 4 bits/pixel compressed RGB texture format.
     */
    set ETC2_RGB(value) {}

    /**
     * ETC2 (GL ES 3.0) 4 bits/pixel RGB+1-bit alpha texture format.
     */
    get ETC2_RGBA1() {}

    /**
     * ETC2 (GL ES 3.0) 4 bits/pixel RGB+1-bit alpha texture format.
     */
    set ETC2_RGBA1(value) {}

    /**
     * ETC2 (GL ES 3.0) 8 bits/pixel compressed RGBA texture format.
     */
    get ETC2_RGBA8() {}

    /**
     * ETC2 (GL ES 3.0) 8 bits/pixel compressed RGBA texture format.
     */
    set ETC2_RGBA8(value) {}

    /**
     * ASTC (4x4 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_4x4() {}

    /**
     * ASTC (4x4 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_4x4(value) {}

    /**
     * ASTC (5x5 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_5x5() {}

    /**
     * ASTC (5x5 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_5x5(value) {}

    /**
     * ASTC (6x6 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_6x6() {}

    /**
     * ASTC (6x6 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_6x6(value) {}

    /**
     * ASTC (8x8 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_8x8() {}

    /**
     * ASTC (8x8 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_8x8(value) {}

    /**
     * ASTC (10x10 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_10x10() {}

    /**
     * ASTC (10x10 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_10x10(value) {}

    /**
     * ASTC (12x12 pixel block in 128 bits) compressed RGB texture format.
     */
    get ASTC_RGB_12x12() {}

    /**
     * ASTC (12x12 pixel block in 128 bits) compressed RGB texture format.
     */
    set ASTC_RGB_12x12(value) {}

    /**
     * ASTC (4x4 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_4x4() {}

    /**
     * ASTC (4x4 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_4x4(value) {}

    /**
     * ASTC (5x5 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_5x5() {}

    /**
     * ASTC (5x5 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_5x5(value) {}

    /**
     * ASTC (6x6 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_6x6() {}

    /**
     * ASTC (6x6 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_6x6(value) {}

    /**
     * ASTC (8x8 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_8x8() {}

    /**
     * ASTC (8x8 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_8x8(value) {}

    /**
     * ASTC (10x10 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_10x10() {}

    /**
     * ASTC (10x10 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_10x10(value) {}

    /**
     * ASTC (12x12 pixel block in 128 bits) compressed RGBA texture format.
     */
    get ASTC_RGBA_12x12() {}

    /**
     * ASTC (12x12 pixel block in 128 bits) compressed RGBA texture format.
     */
    set ASTC_RGBA_12x12(value) {}

    /**
     * ETC 4 bits/pixel compressed RGB texture format.
     */
    get ETC_RGB4_3DS() {}

    /**
     * ETC 4 bits/pixel compressed RGB texture format.
     */
    set ETC_RGB4_3DS(value) {}

    /**
     * ETC 4 bits/pixel RGB + 4 bits/pixel Alpha compressed texture format.
     */
    get ETC_RGBA8_3DS() {}

    /**
     * ETC 4 bits/pixel RGB + 4 bits/pixel Alpha compressed texture format.
     */
    set ETC_RGBA8_3DS(value) {}


}