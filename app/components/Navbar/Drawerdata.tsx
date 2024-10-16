import React from "react";
import Link from "next/link";

// Define the type for navigation items
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

// Define the navigation items array
const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "Games", href: "#games", current: false },
  { name: "Features", href: "#features", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
  { name: "Privacy", href: "/privacy", current: false },
];

// Utility function to join class names conditionally
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Drawerdata = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "text-yellow-400"
              : "text-white hover:text-yellow-400",
            "text-3xl"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
      <Link
        href="/game/index.html"
        className="bg-yellow-400 text-white rounded-full px-6 py-2 text-3xl font-semibold hover:bg-yellow-500"
      >
        Play Now
      </Link>
    </div>
  );
};

export default Drawerdata;
