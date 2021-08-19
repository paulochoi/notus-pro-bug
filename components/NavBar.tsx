import React from "react"

// @notus-pro/react
import {NavbarLinks} from "@notus-pro/react"

const props = {
  color: "dark",
  type: "fixed",
  logoImage:
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/logo.png",
  logoText: "Creative Tim",
  logoLink: { to: "/" },
  socials: [
    {
      icon: "facebook",
      text: "Share on Facebook",
      link: "https://www.facebook.com/CreativeTim",
    },
    {
      icon: "instagram",
      text: "Follow on Instagram",
      link: "https://www.instagram.com/creativetimofficial/",
    },
    {
      icon: "twitter",
      text: "Tweet on Twitter",
      link: "https://twitter.com/CreativeTim",
    },
    {
      icon: "github",
      text: "Star on Github",
      link: "https://github.com/creativetimofficial",
    },
  ],
  leftLinks: [
    { href: "#pablo", children: "Elements" },
    { href: "#pablo", children: "Sections" },
    {
      dropdown: true,
      text: "Demo Pages",
      items: [
        { disabled: true, children: "Group 1" },
        { href: "#pablo", children: "Demo Page 1" },
        { href: "#pablo", children: "Demo Page 2" },
        { disabled: true, children: "Group 2" },
        { href: "#pablo", children: "Demo Page 3" },
        { href: "#pablo", children: "Demo Page 4" },
        { disabled: true, children: "Group 3" },
        { href: "#pablo", children: "Demo Page 5" },
        { href: "#pablo", children: "Demo Page 6" },
        { disabled: true, children: "Group 4" },
        { href: "#pablo", children: "Demo Page 7" },
        { href: "#pablo", children: "Demo Page 8" },
      ],
    },
  ],
}

export default function Example() {
  return (
    <>
      <NavbarLinks {...props} />
    </>
  )
}
