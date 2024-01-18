# Advanced Computer Graphics Project
### Final Project Assignment of Advanced Computer Graphics Course, Autumn Term 2023

## Introduction
This project, a 3D Bedroom, features interactive lighting effects and frontend page design. It represents a culmination of advanced techniques in computer graphics, combining multiple technologies to create a realistic and engaging environment.

## Technical Overview

### Frontend and HTML Embedding
- Implemented using TypeScript, ensuring strong typing and scalable code structure.
- Nested HTML elements are dynamically generated, providing a seamless integration between the 3D graphics and web interface.

### Graphics and Rendering
- **Three.js Framework**: Utilized for efficient graphics rendering, handling complex 3D models with ease.
- **Shader Programming**: Lighting effects are achieved using shaders written in GLSL, offering precise control over visual aspects.

### Modeling and Texturing
- **Blender**: Used for modeling and baking texture maps. This approach allows for high-quality visuals with optimized performance.
- **Lighting and Shadow**: Instead of dynamic lighting or ray tracing, we use pre-rendered baking textures. This technique involves setting light sources and occlusion in Blender, followed by UV unwrapping to obtain material mappings under various lighting conditions.
- In Three.js, these baked textures enhance performance and visual fidelity.

### Integration and Shader Customization
- Models are imported into the scene, where each component loads its mesh and texture.
- Material creation for model sub-components, adding them to the scene for a cohesive look.
- Vertex and fragment shaders adjust brightness and color based on parameters passed from TypeScript files.

## Installation Guide
To deploy this project, Node.js environment with pnpm is required. Run the following commands in the project directory:
```shell
pnpm install
pnpm run dev
```

## Team Members and Responsibilities
- **Xue Zhihan (5123FG23)**: 
- Project setup, coding, debugging, texture and material adjustments.
- **Liu Yanqing (5123FG45)**: 
- Model adjustments, modeling, texture baking, frontend development.
- **Song Xiaodong ()**: 
- Debugging, testing, frontend design, material collection, presentation preparation.
