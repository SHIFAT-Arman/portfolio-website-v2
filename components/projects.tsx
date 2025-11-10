"use client";

import {
  GraduationCap,
  UserCheck,
  TableCellsSplit,
  Building,
} from "lucide-react";
import { cn } from "../lib/utils";

export const actions = [
  {
    title: "Deep Learning-ANN Classification",
    desc: "",
    href: "https://dl-ann-classification-zireael.streamlit.app/",
    icon: TableCellsSplit,
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    title: "Welfare-system management app",
    href: "#",
    desc: "",
    icon: UserCheck,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Next JS Website",
    href: "https://ieeeaiubsb.com/",
    desc: "",
    icon: GraduationCap,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Transaction system database model",
    desc: "",
    href: "#",
    icon: UserCheck,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Corporate Task Management System",
    desc: "This app was developed by Windows Forms (.Net Framework) in C# and mySQL Database.",
    href: "https://github.com/SHIFAT-Arman/CorporateTaskManagementSystem_V2",
    icon: Building,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];

export default function Project() {
  return (
    <div className="bg-gray-900 py-12" id="pr">
      <main className="relative isolate mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white pb-8">
            Projects
          </h2>
        </div>

        <div className="divide-y shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {actions.map((action, actionIdx) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                className={cn(
                  actionIdx === 0
                    ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                    : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1
                    ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                    : "",
                  "group relative bg-white/10 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-500",
                )}
              >
                <div>
                  <span
                    className={cn(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-3 ring-4 ring-white",
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-base font-semibold leading-6 text-white">
                    <a
                      href={action.href}
                      className="focus:outline-none"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{action.desc}</p>
                </div>

                <span
                  className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
