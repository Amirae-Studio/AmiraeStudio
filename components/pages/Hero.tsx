import { ImageStreamHero } from "@/components/ImageStreamHero";

const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev";
 
const IMAGES = [
  {
    src: `https://i.pinimg.com/736x/b8/af/d9/b8afd9b71b067ba100b119cd628025ea.jpg`,
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
  },
  {
    src: `https://i.pinimg.com/1200x/9a/e7/79/9ae779ad6818843035c32ab7480c30fe.jpg`,
    alt: "Soft multi-tone gradient wash",
  },
  {
    src: `https://i.pinimg.com/1200x/bd/e6/08/bde6085863eda02591b9b5f8669df654.jpg`,
    alt: "Double-exposure portrait blended with a city skyline at dusk",
  },
  {
    src: `https://i.pinimg.com/736x/49/b0/4f/49b04fbcb087e75526e7af49a6e2cc67.jpg`,
    alt: "Crimson aura gradient",
  },
  {
    src: `https://i.pinimg.com/736x/95/26/35/952635e0f4e0e6f41e906121a7535679.jpg`,
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
  },
  {
    src: `https://i.pinimg.com/736x/2c/da/aa/2cdaaa748501d1813b45886a914252a3.jpg`,
    alt: "Flowing hue gradient",
  },
  {
    src: `https://i.pinimg.com/1200x/24/83/56/248356587498bd9b160b2ea853a76656.jpg`,
    alt: "Figure holding a racket that dissolves into a swirling colourful cloud",
  },
  {
    src: `https://i.pinimg.com/736x/aa/35/dc/aa35dc5c74cc911e8c16ab983b01e659.jpg`,
    alt: "Moon-toned gradient",
  },
  {
    src: `https://i.pinimg.com/736x/63/06/42/6306428cf7a9553d28bcacb389be4d9f.jpg`,
    alt: "Hand gesture with a colourful cutout of a bird flying through the fingers",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-03.png`,
    alt: "Layered hero gradient",
  },
  {
    src: `${CDN}/gradients/hue-flow/hue-flow-02.png`,
    alt: "Second flowing hue gradient",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-05.png`,
    alt: "Deep moon-toned gradient",
  },
];

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function HeroSection() {
  return (
    <ImageStreamHero
      images={IMAGES}
      className="h-screen w-full bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-32 text-center">
        <div className="px-16">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Amiraé Studio
            <br />
           Creativity at Its Peak
          </h1>
        </div>
        <p className="max-w-xl px-6 text-muted-foreground">
          Amiraé Studio is a 3D design house turning imagination into intricate, physical detail - from miniature cityscapes to hyper-real product art. We design, sculpt, and print worlds you can hold in your hands.
        </p>
      </div>
    </ImageStreamHero>
  );
}
