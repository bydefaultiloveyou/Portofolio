import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/bydefaultiloveyou/repos")
      .then((Response) => Response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className=" p-5">
      <p className=" text-3xl font-bold"> 😎 Projects</p>
      <p className="mt-2 opacity-60">
        ini adalah projects projects yang pernah saya kerjakan
      </p>
      <main className="w-full flex flex-col mt-8">
        {projects.map((items, i) => {
          return (
            <Link
              key={i}
              href="/"
              className=" my-2 rounded-md relative w-full bg-gray-50"
            >
              <figure className="p-1 relative">
                <Image
                  alt="ok"
                  src={`https://opengraph.githubassets.com/594d667b8b8e9a3d74d6a840aec44a4da317db0f826e1fccfe331c890d4fe3c5/${items.owner.login}/${items.name}`}
                  width={334}
                  className="w-full rounded-md"
                  height={300}
                ></Image>
                <figcaption className=" mt-2 w-full">
                  <div className=" w-full flex px-2 justify-between">
                    <p className=" text-xl font-semibold">{items.name}</p>
                    <p className=" flex items-center bg-gray-200 px-1 rounded-md font-bold">
                      <AiFillStar className=" text-lg text-yellow-400" /> &nbsp;
                      {items.stargazers_count >= 10
                        ? items.stargazers_count
                        : "0" + items.stargazers_count}
                    </p>
                  </div>
                  <p className="px-2 py-1 mt-1 opacity-60">
                    {items.description ? items.description : "no description"}
                  </p>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </main>
    </section>
  );
};

export default Projects;
