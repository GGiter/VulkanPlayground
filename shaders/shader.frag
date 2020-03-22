#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) in vec3 fragColor;

layout(location = 1) in vec2 coord;

layout(location = 0) out vec4 outColor;


float MaxIterations = 100;

void main()
{
    float   real  = coord.x;
    float   imag  = coord.y;
    float   Creal = real;  
    float   Cimag = imag;  

    float r2 = 0.0;

    for (float iter = 0.0; iter < MaxIterations && r2 < 4.0; ++iter)
    {
        float tempreal = real;

        real = (tempreal * tempreal) - (imag * imag) + Creal;
        imag = 2.0 * tempreal * imag + Cimag;
        r2   = (real * real) + (imag * imag);
    }

    vec3 color;

    if (r2 < 4.0)
        color = vec3(0.0f, 0.0f, 0.0f);
    else
        color = vec3(1.0f, 1.0f, 1.0f);

    outColor = vec4(color, 1.0);
}
