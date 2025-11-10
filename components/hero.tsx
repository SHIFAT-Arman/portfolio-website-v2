"use client";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-900">
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

          {/* Header section */}
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Hey there!",
                    1000,
                    "myself",
                    1000,
                    " Shifat Arman",
                    1000,
                  ]}
                  speed={40}
                  style={{ fontSize: "1em" }}
                  repeat={0}
                  preRenderFirstString={true}
                />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 italic">
                keywords: Machine-Learning, Deep-Learning, Natural Language
                Processing (NLP), Artificial Intelligence, Web Development,
                Cybersecurity
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    currently a student at AIUB, studying Computer Science and
                    Engineering. I am also a self-taught web developer and a
                    tech enthusiast. I intend to shape my career in the field of
                    Data Science. I have been working with machine learning
                    algorithms, deep learning and Artificial Intelligence for a
                    while now. I am also trying out the CTF competitions which
                    is a competitive platform for cybersecurity enthuaists.
                  </p>
                  <p className="mt-8">
                    In web-developing I have been working with the front-end
                    side frameworks like ReactJS, NextJS, TailwindCSS,
                    Bootstrap, Material-UI, etc. and for the back-end side I am
                    stil exploring.
                  </p>
                </div>
                <div>
                  <p>
                    In the machine learning field I have been working with the
                    Kaggle datasets and also with the real-world datasets. I
                    have been working with the machine learning algorithms like
                    Linear Regression, Logistic Regression, Decision Trees,
                    Random Forest, KNN, SVM, K-Means, Hierarchical Clustering,
                    PCA, etc. I prefer to use the Python programming language
                    for data visualizations.
                  </p>
                  <p className="mt-8">
                    In the deep learning field I have been working with
                    different types of activation algorithms such as Sigmoid,
                    ReLU, Leaky ReLU, Tanh, etc. I have been working with the
                    deep learning algorithms like CNN, RNN, LSTM, GRU, etc. I
                    have also been working with the NLP algorithms like
                    Word2Vec, GloVe, BERT, etc.
                  </p>
                </div>
              </div>
              {/* logo */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
