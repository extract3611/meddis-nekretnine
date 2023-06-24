import React, { Fragment } from "react";
import { useTranslation } from "next-i18next";

const PropertyLabel = ({ labelStatus, labelType }) => {
  const {t}=useTranslation("common");

  return (
    <>
      
          <Fragment>
            {labelStatus == t("Prodaja") ?   (
              <div>
                <span className='label label-shadow'>{t(labelStatus)}</span>
                <span className='label label-solid'>{t(labelType)}</span>

              </div>


            ) : 
            labelStatus === t("Izdavanje") ? (
              <div>
              <span className='label label-dark'>{t(labelStatus)}</span>
                <span className='label label-solid'>{t(labelType)}</span>
              </div>
                           
            ) :null}
          </Fragment>
        
    </>
  );
};

export default PropertyLabel;
