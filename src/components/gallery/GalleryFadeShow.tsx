import GalleryFadeShowCard from "./GalleryFadeShowCard";
import { Devops_GALLERY, Eyespy_GALLERY, Frontend_GALLERY, ProjectWing_GALLERY } from "./data";
// import two from "./gallery/numbers/two.svg";
const GalleryFadeShow = () => {
  return (
    <div className="mx-auto grid max-w-[1920px] grid-cols-1 p-[5vw] pt-[80px] md:grid-cols-2 lg:grid-cols-4 ">
      <GalleryFadeShowCard
        imgArray={ProjectWing_GALLERY}
        title="Project Wing"
        num={1}
        timer={5000}
      />
      <GalleryFadeShowCard
        imgArray={Frontend_GALLERY}
        title="Frontend With Benefits"
        num={2}
        timer={10000}
      />
      <GalleryFadeShowCard imgArray={Devops_GALLERY} title="DevOps" num={3} timer={8000} />
      <GalleryFadeShowCard imgArray={Eyespy_GALLERY} title="Eye S.py Squid" num={4} timer={11000} />
    </div>
  );
};

export default GalleryFadeShow;
