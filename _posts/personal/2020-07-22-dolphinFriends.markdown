---
layout: projectPage
title:  "Dolphin Friends"
date:   2021-05-25 11:11:48 -0700
month: Jan
year: 2020
categories: personal
thumbnailPath: "dolphinFriends/thumb-actual.png"
description: Intro to Graphics Final Project
heroImgPath: "dolphinFriends/hero2.png"
heroDescription: Dolphin Friends was made for CPE 471, Intro to Graphics. It was my first time delving into shaders and learning how the graphics pipeline works, and I really enjoyed it! We essentially created our own simple game engine from scratch.
madeWithDescription: "Using: C++, OpenGL"
---
# About
## View the code on my [github][github-link], demo on [YouTube][youtube-link].

Dolphin Friends is a low-poly dolphin “hide-and-seek” game made using C++ and OpenGL for CPE 471, Intro Graphics. The goal of the game is to find all of the dolphins in the least amount of time, and the dolphins follow you after you find them. Every time you collect a dolphin, they follow you, with collision detections on each other and the islands. Look underwater to find fish boids swimming around and other underwater fun!


![img1](../../../../assets/images/projects/dolphinFriends/test-hero.gif)

Writing these shaders were a lot of fun, and it was my first time learning about and writing vert and frag shaders in glsl. I used Blinn-Phong shading texture mapping for the dolphins (they have white bellies), skybox, and GUI.

![img1](../../../../assets/images/projects/dolphinFriends/terrain.png)

For the water shader, I basically distorted all of the vertices of a flat plane in the vertex shader using sin and cos functions. However, I got to the problem where I had to update the normals after the vertices moved, so every vertex needed to know about the location of the other 2 vertices in the triangle. I passed in the positions of all vertices in the triangle into the vertex shader to do the calculations and went for a crystal water vibe.

The anemone picks two random colors and blends between them, and the coral blends between blue and purple. The seaweed actually uses the same shader as the water.

![img1](../../../../assets/images/projects/dolphinFriends/hero.PNG)

I basically organized my data similar to a very simple version of Unity GameObjects, where everything was a GameObject with a mesh, rigidbody, and transform.
The RigidBody kept track of the velocity, acceleration, friction, and does the physics updating. Rigidbodies also kept track of the bounds of each item for collisions, but I ended up just using sphere colliders for collision calculations.

Boids consist of red fish, seahorses, and my favorite fish, porygon. Velocity of each boid is based on the cohesion, alignment, and separation vectors. They have basic collision detection so that they don’t go out of the map and don’t go into the islands. The dolphins work very similar to the boids, except they only follow the player instead of each other.


![img1](../../../../assets/images/projects/dolphinFriends/boids.gif)


[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[itch-link]: https://faliona6.itch.io/polychicken
[github-link]:https://github.com/faliona6/GraphicsFinalProj/tree/master/p5
[youtube-link]:https://www.youtube.com/watch?v=a0aZystn5YE&feature=youtu.be

