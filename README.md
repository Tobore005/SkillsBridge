# SkillsBridge Dashboard

A responsive dashboard interface built with **Next.js** and **TypeScript**, based on a provided Figma design.  
This project demonstrates component-based architecture, reusable UI elements, and functional filtering of demo module data.

---

## 🚀 Live Demo
[https://skills-bridge-rho.vercel.app/](https://skills-bridge-rho.vercel.app/)

---

## 🛠 Tech Stack
- **Next.js** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **Lucide React** (Icons)  

---

## ✨ Features
- Fully **responsive dashboard layout**  
- **Reusable components**: `StatCard`, `ModuleItem`, `ProjectCard`, etc.  
- **Functional module search**  
- **Status-based filtering**  
- Demo module data implementation  
- Clean and maintainable component structure  
- Styled with **Tailwind CSS**  

---

## 📁 Project Structure

```text
src/
  app/            → Next.js app router structure
  components/     → Reusable UI components
  types/          → TypeScript interfaces
⚙️ Getting Started

1. Clone the repository:

git clone https://github.com/Tobore005/SkillsBridge.git

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

4. Open in your browser:

http://localhost:3000
🧠 Design Decisions

Centralized state management at the dashboard level to handle filtering logic efficiently.

Component separation to promote reusability and maintainability.

Demo data is used to simulate real module content as required in the task instructions
