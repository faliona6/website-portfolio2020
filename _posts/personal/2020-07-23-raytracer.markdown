---
layout: projectPage
title:  "C++ Raytracer"
date:   2021-05-25 11:11:48 -0700
month: Sep
year: 2020
categories: personal
thumbnailPath: "raytracer/thumb2.png"
description: CSC 473 Project
heroImgPath: "raytracer/output.png"
heroDescription: For CSC 473, Advanced Rendering Techniques, I built a raytracer from scratch using C++. In order to learn about how raytracing worked, we built one using C++ instead of using the GPU. But in the end of the course we got to do a couple projects using Optix, a real-time raytracing engine.
madeWithDescription: "Using: C++"
---
# About the Project
## You can view the code for the raytracer on my [github][github-link].

The raytracer I built supported several features-- rendering primitive shapes, 3d models, reflection, refraction, transformations, texturing, and emmissive materials. Below are some of the example outputs for my raytracer throughout the course.


![img1](../../../../assets/images/projects/raytracer/bunny1.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/textures.jpg){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/reflective.jpg){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/P3_sword.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/bug.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/skaterboi.png){: .img-smaller}

We used .ppm files as input to place the shapes and models in our 3D scene. I also created a C# script in Unity to create a ppm file based on shapes in the Unity 3D scene for easy placement, and I was able to create some fun renders with it.

# Final Project - Volumes

For my final project, I wanted to create participating media using my renderer. This inclues fog, clouds, smoke, etc. I learned about how light gets scattered within the material, and also implimented a ray marching technique to calculate the density at every point. I added parameters such as densityMultiplier, lightAbsorption, lightColor, and Perlin Noise seed in order to create different variations of clouds.

![img1](../../../../assets/images/projects/raytracer/cloud.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/cloudFluffy.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/cloudPurple.png){: .img-smaller}
![img1](../../../../assets/images/projects/raytracer/cloudSmoke.png){: .img-smaller}








[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[itch-link]: https://faliona6.itch.io/polychicken
[github-link]:https://github.com/faliona6
