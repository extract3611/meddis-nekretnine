import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "reactstrap";
import Img from "../../utils/BackgroundImageRatio";
import { useTranslation } from "next-i18next";

const Breadcrumb = ({ right }) => {
  const {t}=useTranslation("common");

  const router = useRouter();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(router.pathname.split("/"));
  }, [router.pathname]);
  return (
    <section className="breadcrumb-section p-0 ">
      <Img src="/assets/images/baner.webp" className="bg-img img-fluid" alt="" />
      <Container>
        <div className={`breadcrumb-content ${right ? "breadcrumb-right" : ""}`}>
          <div>
            <h2>{path && t(path[path.length - 1].replaceAll("-", " "))}</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                {path?.map((data, i) => (
                  <Fragment key={i}>
                    {data && (
                      <li className="breadcrumb-item">
                        <a>{t(data.replaceAll("-", " "))}</a>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
