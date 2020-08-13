import React from "react"
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://linkedin.com/in/melissaastbury/",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/melissaastbury",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/MelissaAstbury",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
