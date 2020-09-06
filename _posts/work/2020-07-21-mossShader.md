---
layout: projectPage
title:  "Moss Shader"
date:   2020-07-25 11:11:48 -0700
month: 
year: 2020
categories: work
thumbnailPath: "mossShader/thumb.png"
description: Valve
heroImgPath: "mossShader/hero.png"
heroDescription: During my internship at Valve, I wanted to learn more about shaders in HL Alyx and wrote a procedural moss shader that can get added to any model. This shader was made for personal learning only, and is not used in-game.
madeWithDescription: "Using: HLSL, C++"
---
# About the Shader

This procedural moss shader is meant to be used for Alyx modding purposes and can be put on any object to add moss. The moss is added based on the normals of the object. There is a slider for how much moss coverage the artist wants on the rock.

I used the geometry shader to add moss particles alongside the normal of the rock, and also experimented with layered moss used in Ryse in the fragment shader.

![img1](../../../../assets/images/projects/mossShader/moss1.png)

Scene was made using Valve's Hammer editor in Source2. For the moss shader, the only thing I was responsible for was writing the shader to generate the moss, the moss textures, and shading on the moss. My shader uses Valve's shaders for lighting computation and standard shading on the rock material. All other assets including the rocks, trees, etc. are all made by Valve for Half-Life: Alyx.

![img1](../../../../assets/images/projects/mossShader/moss2.png)



[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[itch-link]: https://faliona6.itch.io/polychicken
[github-link]:https://github.com/faliona6/boba-is-you
[youtube-link]:https://www.youtube.com/watch?v=a0aZystn5YE&feature=youtu.be
[github-download-link]: https://github.com/faliona6/boba-is-you-jar
