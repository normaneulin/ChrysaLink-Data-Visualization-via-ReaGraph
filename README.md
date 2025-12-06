# ChrysaLink - Data Visualization via ReaGraph

Interactive data visualization for Lepidoptera-Plant host relationships using ReaGraph.

## 📋 About

This project visualizes the complex relationships between Lepidoptera (butterflies and moths) and their host plants. Built on top of [ReaGraph](https://github.com/reaviz/reagraph), it provides an interactive hierarchical exploration of taxonomic data.

## ✨ Features

- **Interactive Hierarchical Drill-Down**: Click on taxonomic divisions to explore families, genera, and species
- **Radial Layout**: Concentric rings representing different taxonomic levels (Division → Family → Genus → Species)
- **Independent Left-Right Navigation**: Explore Lepidoptera and Plant data independently
- **Strict Expansion Rules**: Only clicked nodes expand, maintaining clear visual hierarchy
- **WebGL Performance**: Built on ReaGraph's high-performance WebGL rendering

## 🎯 Built With

- [ReaGraph](https://reagraph.dev) - High-performance network graph visualization
- React + TypeScript
- Storybook for development


## 📦 Development

To run the project locally:

```bash
npm install
npm run storybook
```

The Storybook development server will start at http://localhost:6006

## 🎨 Demo

Navigate to the **Lepidoptera Host Plants** story to see the interactive visualization.

## 📝 License

This project is built on top of [ReaGraph](https://github.com/reaviz/reagraph), which is licensed under Apache 2.0.

## 🙏 Credits

- **ReaGraph**: Original graph visualization library by [reaviz](https://github.com/reaviz/reagraph)
- **Data**: Lepidoptera-Plant host relationship data
