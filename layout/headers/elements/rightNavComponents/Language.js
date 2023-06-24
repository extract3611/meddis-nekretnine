import { Link } from "next-translate-routes";
import { useRouter } from "next/router";
import React from "react";
import { Globe } from "react-feather";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";
import { useTranslation } from "next-i18next";

const Language = ({ value }) => {
  const { t } = useTranslation("common");
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const router = useRouter();
  const { pathname, query } = router;

  return (
    <li ref={ref} className={`dropdown language ${isComponentVisible && "active"}`}>
      <a>
        <Globe
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.option.map((language, i) => (
          <li key={i}>
            <Link locale={language.lang} href={{ pathname, query }}>
              {t(language.language)}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
