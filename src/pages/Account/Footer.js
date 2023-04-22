import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
  faYoutubeSquare,
  faInstagram,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className=" mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <FontAwesomeIcon icon={name} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
          {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "VastFx eBook",
  description:
    "Lern to trade, trade to earn.",
  socials: [
    {
      color: "blue",
      name:faFacebookF,
      path: "https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=",
    },
    {
      color: "light-blue",
      name: faTwitter,
      path: "https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=",
    },
    {
      color: "purple",
      name: faInstagram,
      path: "https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=",
    },
    {
      color: "green",
      name:faWhatsapp,
      path: "https://wa.me/message/Q62AHV6GATVVC1",
    },
    {
      color: "red",
      name:faYoutubeSquare,
      path: "https://youtube.com/@Themoneyconscious",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "" },
        { name: "Blog", path: "" },
        {
          name: "Events",
          path: "#",
        },
        {
          name: "Free Books",
          path: "#",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "Vast team",
          path: "#",
        },
        {
          name: "Contribute",
          path: "#",
        },
        {
          name: "Vast events",
          path: "https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=",
        },
        {
          name: "Contact Us",
          path: "#",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} VastFx 
      
      {" "}
      <a
        href="#"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
     
     
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};


export default Footer;
