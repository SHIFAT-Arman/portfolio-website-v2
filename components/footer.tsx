import { TwitterOriginal, GithubOriginal } from "devicons-react";

const navigation = {
  social: [
    {
      name: "X",
      href: "#",
      icon: TwitterOriginal,
    },
    {
      name: "GitHub",
      href: "https://github.com/SHIFAT-Arman",
      icon: GithubOriginal,
    },
  ],
};

export default function SocialLinks() {
  return (
    <footer className="bg-gray-100" id="footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 sm:pb-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="" aria-hidden="true" size={30} />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2025 made by Shifat Arman.
        </p>
      </div>
    </footer>
  );
}
