import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { getCurrentLocale } from "./locale-utils";
import { useTranslation } from "react-i18next";
import i18n from "../../src/i18n";
import "./LanguageButton.css";

type ImageProps = {
  src: string;
  alt?: string;
};

type Language = {
  url: string;
  title: string;
  short: string;
  icon?: ImageProps;
};

type Props = {
  languages: Language[];
};

export type LanguagesButtonProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LanguagesButton = (props: LanguagesButtonProps) => {
  const { languages } = {
    ...LanguagesButtonDefaults,
    ...props,
  } as Props;

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // Define your supported locales and default locale
  const supportedLocales = ["sl", "hu", "de"];
  const defaultLocale = "sl";

  // Determine the current locale from the pathname if needed
  // (In this case, you may not be using the locale in the URL anymore.)
  const currentLocale = getCurrentLocale(
    pathname,
    supportedLocales,
    defaultLocale
  );

  const defaultLanguage =
    languages.find((lang) => lang.short === currentLocale) || languages[0];
  const [selectedLanguage, setSelectedLanguage] = useState<Language | undefined>(
    defaultLanguage
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to the dropdown for detecting outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    // Change language using i18next; URL stays the same
    i18n.changeLanguage(language.short);
  };

  // Listen for language changes from i18next so the correct flag is displayed
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const newLanguage = languages.find((lang) => lang.short === lng);
      if (newLanguage && newLanguage.short !== selectedLanguage?.short) {
        setSelectedLanguage(newLanguage);
      }
    };
    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [languages, selectedLanguage]);

  // Detect clicks outside the dropdown to close it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <motion.div
      initial={{ x: 100, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ type: "ease", stiffness: 50, duration: 0.3, delay: 0.5 }}
      className="language-button"
    >
      <div className="relative-flex" ref={dropdownRef}>
        {/* Display the currently selected language */}
        <div
          className="flag-wrapper neue-bold"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {selectedLanguage?.icon && (
            <img
              src={selectedLanguage.icon.src}
              alt={selectedLanguage.icon.alt}
              className="w-[24px] h-[24px] margin-left-animation flag size24"
            />
          )}
          <p className="ml-1 neue-bold uppercase-1">
            {selectedLanguage?.short}
          </p>
        </div>

        {/* Dropdown menu with animation */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.nav
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mobile-menuu"
            >
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="mobilemenu-flex"
                  onClick={() => handleLanguageChange(language)}
                >
                  {language.icon && (
                    <img
                      src={language.icon.src}
                      alt={language.icon.alt}
                      className="flag"
                    />
                  )}
                  <span className="text-black neue-bold uppercase lang">
                    {language.short}
                  </span>
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const LanguagesButtonDefaults: LanguagesButtonProps = {
  languages: [
    {
      url: "#",
      title: "Slovenian",
      short: "sl",
      icon: {
        src: "../assets/images/my-images/Slovenia.svg",
        alt: "Slovenian flag",
      },
    },
    {
      url: "#",
      title: "Hungarian",
      short: "hu",
      icon: {
        src: "../assets/images/my-images/hungary.svg",
        alt: "Hungarian flag",
      },
    },
    {
      url: "#",
      title: "German",
      short: "de",
      icon: {
        src: "../assets/images/my-images/German.svg",
        alt: "German flag",
      },
    },
  ],
};

export default LanguagesButton;
