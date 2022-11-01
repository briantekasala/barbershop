import React, { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import GalleryImage from "./GalleryImages";

function Gallery() {
  const [onClick, setOnClick] = useState<boolean>(true);
  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Gallery" />
        <div className="galleryLayout">
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>
          <div className="galleryItem">
            <GalleryImage />
          </div>

          <div className="galleryItem">
            <GalleryImage />
          </div>
        </div>
        <Footer />
      </OnClickContext.Provider>
    </div>
  );
}

export default Gallery;
