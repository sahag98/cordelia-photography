// components/MobileNav.js
import { motion } from "framer-motion";
import { X } from "lucide-react";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
  },
  {
    id: 1,
    navTitle: "About",
  },
  {
    id: 2,
    navTitle: "Portfolio",
  },
  {
    id: 3,
    navTitle: "Investment",
  },
  {
    id: 4,
    navTitle: "Get In Touch",
  },
];

const MobileNav = ({ mobileNavOpen, setMobileNavOpen }: any) => {
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"}>
      <motion.div
        variants={mobileMenuVariant}
        className="fixed top-0 left-0 h-screen gap-10 px-2 py-5 z-40 w-full flex flex-col items-center bg-background"
      >
        <motion.button
          className="ml-auto"
          variants={fadeInVariant}
          onClick={() => setMobileNavOpen(false)}
        >
          <X className="w-8 h-8 md:hidden text-primary" />
        </motion.button>
        <motion.ul className="flex flex-col gap-10" variants={ulVariant}>
          {MOBILE_NAV_ITEMS.map((navItem) => (
            <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
              <motion.div
                className="text-xl font-semibold text-foreground text-center"
                variants={liVariant}
              >
                {navItem.navTitle}
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div variants={fadeInVariant} className="contact">
          <h5>Phone number here</h5>
          <h5>email here</h5>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNav;
