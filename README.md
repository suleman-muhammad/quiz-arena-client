# QuizArena Client ⚔️

[![Quiz Arena Client CI](https://github.com/suleman-muhammad/quiz-arena-client/actions/workflows/ci.yml/badge.svg)](https://github.com/suleman-muhammad/quiz-arena-client/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The modern, cyber-themed frontend client for **QuizArena** — a real-time multiplayer battle royale quiz platform. Built with React 19, Vite, and Tailwind CSS v4, communicating with the [QuizArena Spring Boot Backend](https://github.com/suleman-muhammad/quiz-arena) over WebSockets (STOMP/SockJS).

---

## ⚡ Features

- **🎮 Real-Time Battle Arena**: Low-latency multiplayer quiz gameplay with synchronized question timers and live answer feedback.
- **🔌 WebSocket Live Sync**: Persistent two-way communication via SockJS & STOMP protocol for instant player joins, answers, and game states.
- **🤖 CyberAvatar Generation**: Unique, deterministic SVG avatars procedurally generated from player nicknames with dynamic color palettes and accessories.
- **💬 In-Lobby & In-Room Chat**: Real-time communication with automated auto-scrolling chat feeds.
- **🏆 Live Podium & Leaderboards**: Animated rankings featuring quadratic speed-bonus scoring and streak multipliers.
- **🛠️ Tournament Creator**: Comprehensive quiz builder with custom categories, time limits, key concepts, and arena trivia tips.
- **🌙 Cyber Dark Theme**: Sleek, immersive UI styled with Tailwind CSS v4 featuring micro-interactions and animated status indicators.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Real-Time WebSockets** | [STOMP.js](https://github.com/stomp-js/stompjs) & [SockJS Client](https://github.com/sockjs/sockjs-client) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Linting & Code Quality** | [ESLint 10](https://eslint.org/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- [npm](https://www.npmjs.com/) (version 10 or higher)
- Running instance of the [QuizArena Backend](https://github.com/suleman-muhammad/quiz-arena)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/suleman-muhammad/quiz-arena-client.git
   cd quiz-arena-client
   ```

2. **Install dependencies**:
   ```bash
   npm ci
   ```

3. **Configure Environment Variables**:
   Copy the example environment configuration:
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your backend server URLs:
   ```env
   VITE_API_BASE_URL=http://localhost:8080
   VITE_WS_BASE_URL=http://localhost:8080/ws
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production deployment. |
| `npm run preview` | Locally serves the production build from `dist/` to verify bundling. |
| `npm run lint` | Runs ESLint across all `.js`, `.jsx` source files to verify code standards. |

---

## 🌐 Environment Variables

| Variable | Description | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Base URL of the QuizArena Spring Boot REST API | `http://localhost:8080` |
| `VITE_WS_BASE_URL` | WebSocket handshake endpoint for STOMP / SockJS | `http://localhost:8080/ws` |

---

## 📂 Project Structure

```text
quiz-arena-client/
├── .github/workflows/       # GitHub Actions CI pipelines
├── public/                  # Static assets (favicons, logos, icons)
├── src/
│   ├── assets/              # App images and SVGs
│   ├── components/          # Reusable UI components (Navbar, QuizCard, CyberAvatar)
│   ├── config/              # API and WebSocket client configurations
│   ├── pages/               # Route views (Home, Explore, CreateQuiz, JoinGame, Lobby, Room)
│   ├── App.jsx              # Main application router
│   ├── index.css            # Tailwind CSS styling and custom theme rules
│   └── main.jsx             # React DOM root entrypoint
├── .env.example             # Template for required environment variables
├── package.json             # Project dependencies and script declarations
└── vite.config.js           # Vite build pipeline and plugin configurations
```

---

## 🔗 Related Repositories

- **Backend Service**: [QuizArena Server (Spring Boot / WebSocket)](https://github.com/suleman-muhammad/quiz-arena)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

