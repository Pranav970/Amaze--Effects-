# 📱 iPhone 16 Pro Landing Page Clone ✨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?logo=greensock)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)

![iPhone 16 Pro Clone Demo](https://raw.githubusercontent.com/[YOUR_USERNAME]/[YOUR_REPO_NAME]/main/public/demo/iphone16-pro-demo.gif) 
<!-- ☝️ **IMPORTANT:** Replace this with an actual GIF or high-quality screenshot of your project! -->
<!-- You can create a `public/demo/iphone16-pro-demo.gif` in your project. -->

## 🌟 Overview

Welcome to the iPhone 16 Pro Landing Page Clone! This project is a detailed frontend replica of the Apple iPhone 16 Pro product page, focusing on recreating its stunning visuals, smooth animations, and interactive elements. It's built using a modern tech stack to showcase advanced frontend development techniques.

The primary goal of this project is to:
*   📚 Deepen understanding of complex UI/UX patterns seen on high-end commercial websites.
*   🎨 Practice advanced CSS styling with Tailwind CSS.
*   🎬 Implement sophisticated scroll-triggered animations and micro-interactions using GSAP.
*   🏗️ Build a performant, server-rendered application with Next.js (App Router).
*   💪 Demonstrate skills in creating responsive and visually appealing web experiences.

## ✨ Key Features

*   **Pixel-Perfect Design (Attempted):** Strives to closely match the aesthetics of the original Apple iPhone 16 Pro page.
*   **Smooth Scroll Animations:** Utilizes GSAP (GreenSock Animation Platform) and ScrollTrigger for captivating animations as you scroll.
*   **Hero Section:** Eye-catching introductory section.
*   **Interactive Product Showcases:**
    *   "Highlights" section with video and camera UI overlay.
    *   "Take a closer look" with color/size pickers (placeholder for 3D model integration).
    *   "Titanium" section showcasing material design.
*   **Feature Spotlights:** Dedicated sections for Apple Intelligence, Camera Control, Pro Video, Audio Mix, etc.
*   **Video Integration:** Seamlessly embeds and controls video elements for feature demonstrations.
*   **Responsive Design:** Adapts beautifully to various screen sizes, from mobile to desktop.
*   **Modern UI Components:** Custom-built components for navigation, section headings, buttons, and more.
*   **Optimized Assets:** Leverages Next.js image optimization and sensible video loading strategies.

## 🛠️ Tech Stack

This project is built with the following technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router) - For server-side rendering, routing, and optimized performance.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   **Animations:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - For high-performance, complex animations and ScrollTrigger integration.
*   **Linting & Formatting:** ESLint & Prettier (typically included with `create-next-app`).

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.x or later recommended)
*   [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install)

### ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [YOUR_REPO_NAME]
    ```
3.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
4.  **Prepare Assets:**
    *   This project relies heavily on video and image assets. Ensure you have placed your assets in the `public/videos/` and `public/images/` directories as specified in the code.
    *   The code uses placeholder paths; you'll need to provide your own high-quality assets for the full experience.
    *   For the "Take a closer look" section, a 3D model (`.glb` or `.gltf`) can be integrated. A placeholder is currently used.

### ධ Running the Development Server

Once dependencies are installed, you can run the development server:

Using npm:
```bash
npm run dev
