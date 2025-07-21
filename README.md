# FilmFiesta: Discover Movies Effortlessly 🎬

FilmFiesta is a sleek and modern movie discovery web application built with React and Vite. It leverages the The Movie Database (TMDB) API to provide users with access to a vast library of movies. The application features real-time search, displays trending movies, and utilizes Appwrite for backend services to track popular searches.

![Hero Image](./public/hero-img.png)

## 🚀 Live Demo

[Check out the live version here!](https://filmfestaaa.netlify.app/)

## ✨ Features

- **Real-time Movie Search:** Instantly search for any movie from the TMDB database.
- **Debounced Search:** API calls are optimized by waiting for the user to finish typing, reducing unnecessary requests.
- **Trending Movies:** A dedicated section showcases the most searched-for movies, giving users a glimpse into what's popular.
- **Detailed Movie Information:** Each movie card displays the title, poster, rating, release year, and original language.
- **Loading & Error States:** The UI provides clear feedback to the user during API requests or if an error occurs.
- **Clean UI:** A modern and responsive user interface styled with Tailwind CSS.

## 🛠️ Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Database:**
  - [Appwrite](https://appwrite.io/) for tracking trending searches.
- **APIs:**
  - [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) for movie data.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) (or pnpm/yarn)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/swayamyadav05/FilmFiesta.git
    cd FilmFiesta
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

To run this project, you will need to add the following environment variables to a `.env` file in the `FilmFiesta` directory:

```
# The Movie Database (TMDB) API Configuration
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=your_tmdb_api_key

# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Appwrite Setup

To enable the "Trending Movies" feature, you need to set up a database and collection in your Appwrite project with the following attributes:

1.  **Create a Database:** Give it any name you prefer and use its ID for `VITE_APPWRITE_DATABASE_ID`.
2.  **Create a Collection:** Use its ID for `VITE_APPWRITE_COLLECTION_ID`.
3.  **Define Attributes:**
    - `searchTerm` (Type: `String`, Size: `1000`, **Required**)
    - `count` (Type: `Integer`, Default: `1`)
    - `movie_id` (Type: `Integer`, **Required**)
    - `poster_url` (Type: `String`, Size: `255`, **Required**)

### Running the Application

Once the dependencies are installed and the environment variables are set, you can run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the source code.
- `npm run preview`: Serves the production build locally.
