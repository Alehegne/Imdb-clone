import React from "react";

export default function About() {
  return (
    <section className="max-w-6xl sm:mx-14 sm:py-4 sm:px-3  px-1 py-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center parent [&>p]:text-xl [&>p]:text-justify [&>p]:p-4 [&>p]:m-4 [&>p]:max-w-2xl [&>p]:text-gray-700 [&>p]:font-semibold">
        <h1 className="text-amber-600 text-3xl font-bold p-4 mb-2">About Us</h1>
        <p>
          Welcome to [Your IMDb Clone Name], your ultimate destination for
          discovering, exploring, and celebrating movies, TV shows, and
          celebrities from around the globe!
        </p>
        <p>
          At [Your IMDb Clone Name], we aim to provide movie enthusiasts, TV
          series binge-watchers, and fans of cinema with an easy-to-use platform
          for accessing information about the entertainment world. Whether
          you’re searching for cast details, reading user reviews, or tracking
          trending shows, our site has you covered.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center parent [&_li]:text-xl [&_li]:text-justify [&_li]:p-4 [&_li]:m-4 [&_li]:max-w-2xl [&_li]:text-gray-700 [&_li]:font-semibold">
        <h1 className="text-amber-600 text-3xl font-bold p-4 m-4">
          What We Offer:
        </h1>
        <ul>
          <li>
            Comprehensive Database: Explore a vast library of movies, TV series,
            and celebrity profiles, complete with essential details, ratings,
            and user reviews.
          </li>
          <li>
            Ratings and Reviews: Share your opinions on movies and shows or see
            what others have to say.
          </li>
          <li>
            Personal Watchlist: Create and manage your own watchlist to keep
            track of what you want to see next.
          </li>
          <li>
            Trending Content: Stay updated on the latest box office hits,
            trending TV shows, and award-winning performances.
          </li>
          <li>
            Search and Filter Tools: Find exactly what you’re looking for with
            powerful search and filtering options.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center parent [&>p]:text-xl [&>p]:text-justify [&>p]:p-4 [&>p]:m-4 [&>p]:max-w-2xl [&>p]:text-gray-700 [&>p]:font-semibold">
        <h1 className="text-amber-600 text-3xl font-bold p-4 m-4">
          Why We Built This:
        </h1>
        <p>
          Our mission is to bring the joy of cinema and storytelling to
          everyone. Movies and TV shows are more than just entertainment—they
          are a way to connect, reflect, and immerse ourselves in new worlds.
          With [Your IMDb Clone Name], we aim to create a platform that
          celebrates this universal love for entertainment.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center parent [&>p]:text-xl [&>p]:text-justify [&>p]:p-4 [&>p]:m-4 [&>p]:max-w-2xl [&>p]:text-gray-700 [&>p]:font-semibold">
        <h1 className="text-amber-600 text-3xl font-bold p-4 m-4">
          Acknowledgments:
        </h1>
        <p>
          This project is inspired by IMDb and built as a part of a learning and
          development initiative. We want to thank all the contributors and
          users who make this platform better every day.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center parent [&>p]:text-xl [&>p]:text-justify [&>p]:p-4 [&>p]:m-4 [&>p]:max-w-2xl [&>p]:text-gray-700 [&>p]:font-semibold">
        <h1 className="text-amber-600 text-3xl font-bold p-4 m-4">
          Get Involved:
        </h1>
        <p>
          We're always looking for passionate movie lovers, developers, and
          contributors to help us grow and improve. If you’re interested in
          collaborating with us, please reach out!
        </p>
      </div>
    </section>
  );
}
