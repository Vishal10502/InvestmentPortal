"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Investment Management",
    href: "/docs/InvestmentManagement",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Guided Portfolio Solution",
    href: "/docs/GuidedPortfolio",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Guided Income Solution",
    href: "/docs/GuidedIncome",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "RIA Services",
    href: "/docs/RIAServices",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Innovative Investment Solutions",
    href: "/docs/InnovativeInvestment",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Diversified, All-In-One Portfolios",
    href: "/docs/DiversifiedPortfolio",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const listitems: { title: string; href: string; description: string }[] = [
  {
    title: "Independent Advisors",
    href: "/docs/IndependentAdvisors",
    description:
      "IBD-registered representatives who work with IncedoInvest gain access to a spectrum of innovative technologies, services.",
  },
  {
    title: "Advisor Teams",
    href: "/docs/AdvisorTeams",
    description:
      "Advisor teams that work with IncedoInvest gain a network of professionals dedicated towards creating growth.",
  },
  {
    title: "Investment Advisors",
    href: "/docs/InvestmentAdvisors",
    description:
      "RIAs can fill in the gaps with IncedoInvest Insitutional's business consulting services.",
  },
  {
    title: "Properietary firms/Businesses",
    href: "/docs/Properietaryfirms",
    description:
      "IBD-registered representatives who work with IncedoInvest gain access to a spectrum of innovative technologies, services.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="grid">
      <NavigationMenu className="w-full top-2 absolute left-20 top-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:scale-125 transition duration-500 cursor-pointer">
              IncedoInvest
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        <img src="https://cdn.dribbble.com/userupload/6884687/file/original-b4e0e2da90ff1c45702e9fc52e3796ad.jpg?resize=400x0"></img>
                        IncedoInvest
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        You can have all your investment solutions, at
                        IncedoInvest so Lets Start..
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Portfolio">
                  Your Customized portfolio, with recommendation system.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="CryptoCurrency (New*)"
                >
                  Invest in the future of NFTs and Crypto via IncedoInvest.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Terms & Conditions"
                >
                  IncedoInvest respect your privacy and rights, Read T&C
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:scale-125 transition duration-500 cursor-pointer">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:scale-125 transition duration-500 cursor-pointer">
              Who We Serve
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {listitems.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/investorrelation" legacyBehavior passHref>
              <div className="hover:scale-125 transition duration-500 cursor-pointer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Investor Relations
                </NavigationMenuLink>
              </div>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/incedoinvest" legacyBehavior passHref>
              <div className="hover:scale-125 transition duration-500 cursor-pointer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About IncedoInvest
                </NavigationMenuLink>
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Avatar className="absolute right-5 top-5 hover:scale-125 transition duration-500 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
