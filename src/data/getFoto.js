import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "rakha112",
  },
});
const A1 = cld.image("portfolio-baru/A_1");
const A2 = cld.image("portfolio-baru/A_2");
const A3 = cld.image("portfolio-baru/A_3");
const Uyu1 = cld.image("portfolio-baru/Uyu_1");
const Uyu2 = cld.image("portfolio-baru/Uyu_2");
const Uyu3 = cld.image("portfolio-baru/Uyu_3");
const Sewiwi1 = cld.image("portfolio-baru/Sewiwi_1");
const Sewiwi2 = cld.image("portfolio-baru/Sewiwi_2");
const Sewiwi3 = cld.image("portfolio-baru/Sewiwi_3");
const Koce1 = cld.image("portfolio-baru/Koce_1");
const Koce2 = cld.image("portfolio-baru/Koce_2");
const Koce3 = cld.image("portfolio-baru/Koce_3");
const Makandulu1 = cld.image("portfolio-baru/MakanDulu_1");
const Makandulu2 = cld.image("portfolio-baru/MakanDulu_2");
const Makandulu3 = cld.image("portfolio-baru/MakanDulu_3");
const Midelima1 = cld.image("portfolio-baru/Mi_Delima_1");
const Midelima2 = cld.image("portfolio-baru/Mi_Delima_2");
const Midelima3 = cld.image("portfolio-baru/Mi_Delima_3");
const Miago1 = cld.image("portfolio-baru/Miago_1");
const Miago2 = cld.image("portfolio-baru/Miago_2");
const Miago3 = cld.image("portfolio-baru/Miago_3");
const Kopi1 = cld.image("portfolio-baru/Kopi_1");
const Kopi2 = cld.image("portfolio-baru/Kopi_2");
const Kopi3 = cld.image("portfolio-baru/Kopi_3");

const CloudinaryFoto = {
  A: [A1, A2, A3],
  Uyu: [Uyu1, Uyu2, Uyu3],
  Sewiwi: [Sewiwi1, Sewiwi2, Sewiwi3],
  Koce: [Koce1, Koce2, Koce3],
  Makandulu: [Makandulu1, Makandulu2, Makandulu3],
  Midelima: [Midelima1, Midelima2, Midelima3],
  Miago: [Miago1, Miago2, Miago3],
  Kopi: [Kopi1, Kopi2, Kopi3],
};
export default CloudinaryFoto;
