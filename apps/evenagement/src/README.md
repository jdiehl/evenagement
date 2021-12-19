# Source Files

This folder contains all source files.

## Structure

### Components

Components style the UI with tailwind classes and do not depend on firebase in any way.
They can use the model interface but not firestore documents or references.
All components in this folder must have a Storybook file (placed in the `stories/` subfolder)

### Content

Content components are called by pages inside a layout.
They follow strict naming rules:
* Use `Overview` for list pages
* Use `View` for detail pages
* Use `NewEdit` for form pages
* Use `Static` for static pages

### Context

Context stores React Context objects

### Fragments

Fragment components can access firebase directly but do not style the UI (do not use tailwind classes).

### Layouts

Layout components do not style the UI and they also do not access firebase directly.
They are used only for layout.

### Lib

Lib contains any helper modules.

### Model

Model contains all model definitions (firestore).

### Pages

Pages contains all NextJS page components.
They always render one layout and one contentn component.
They do not execute any custom logic besides querying page parameters.

### Styles

Styles contains any style customizations in CSS.
