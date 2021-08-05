import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import bg1 from "../bg1.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
               name,
               bio,
               "authorImage": image.asset->url
          }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={bg1} alt="color" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className=" rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-blue-600 mb-4">
              Hey There. I'm{" "}
              <span className="text-red-600">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-green text-2xl">
              <BlockContent
                blocks={author.bio}
                projectId="h3vp87c3"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
