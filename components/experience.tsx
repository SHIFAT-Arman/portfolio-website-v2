"use client";

import { UserStarIcon } from "lucide-react";
const exps = [
  {
    name: "IEEE AIUB Student Branch",
    description:
      "From 2023 I have been a member of IEEE AIUB Student Branch and also the web development team. I have been webmaster of IEEE BECITHCON-2024, IEEE ICCIT 2024 from IEEE Bangladesh Section.",
    icon: UserStarIcon,
  },
];

export default function Experience() {
  return (
    <>
      <div className="bg-gray-900 py-10">
        <main className="relative isolate">
          {/* Background */}
          <div
            className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          {/* exps section */}
          <div className="mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <span className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                Experiences
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                During my bachelors I have been involved in various activities
                and have learned a lot of things.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {exps.map((exp) => (
                <div key={exp.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <exp.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-200"
                      aria-hidden="true"
                    />
                    {exp.name}
                  </dt>{" "}
                  <dd className="inline">{exp.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </main>
      </div>
    </>
  );
}
