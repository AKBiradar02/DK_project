import WorkC from "../components/Work_C";
import WorkI from "../components/Work_I";
import WorkM from "../components/Work_M";

export const servicePages = {
  construction: {
    title: "Construction",
    description:
      "Our construction services deliver exceptional quality and precision, ensuring your vision comes to life seamlessly. From foundational work to finishing touches, we handle every aspect with professionalism and care, creating sturdy, beautiful spaces that stand the test of time.",
    heroImage: "/images/constructionHero.jpg",
    heroAlt: "Modern building construction site",
    WorkComponent: WorkC,
  },
  interior: {
    title: "Interior Designing",
    description:
      "Transform your spaces with our expert interior design services. We blend creativity and functionality, tailoring each design to your unique style and needs. Whether modern, classic, or eclectic, our designs elevate your living or working environments to new heights of elegance and comfort.",
    heroImage: "/images/int_hero.png",
    heroAlt: "Modern styled interior space",
    WorkComponent: WorkI,
  },
  material: {
    title: "Materials",
    description:
      "Our selection of premium materials guarantees durability and aesthetic appeal. We source the finest products, ensuring each element of your space is crafted with excellence. From flooring to fixtures, our materials enhance the overall beauty and longevity of your interiors.",
    heroImage: "/images/mat_hero.png",
    heroAlt: "Sample board of interior materials",
    WorkComponent: WorkM,
  },
};
