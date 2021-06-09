import React from "react";
import ContentTitle from "./contentTitle";
import CraftsImage from "./craftsImage";

const Crafts = () => {
  let craftImage =
    "https://helpx.adobe.com/content/dam/help/en/creative-cloud/how-to/adobe-stock-sell-photos-videos-vector-online_1408x792.jpg";
  let craftName = "Craft name";
  return (
    <section className="w-full  flex flex-col items-center justify-center py-3">
      <ContentTitle title="sija crafts" />
      <div className="flex flex-col sm:flex-row">
        <CraftsImage image={craftImage} name={craftName} />
        <CraftsImage image={craftImage} name={craftName} />
        <CraftsImage image={craftImage} name={craftName} />
      </div>
    </section>
  );
};

export default Crafts;
