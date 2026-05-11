import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const personalBio = `
Outside of geodesy and geomatics, I am someone who finds joy in staying curious and present. 
Growing up in Indonesia, I have always been drawn to the outdoors — whether it is hiking across 
Jawa's volcanic landscapes, exploring coastlines, or simply taking long walks around Bandung's 
hillside neighborhoods.

I am passionate about photography and traveling, which give me a creative outlet 
away from the precision of technical work.

I believe that the best engineers are also well-rounded people: curious about the world beyond 
their field, empathetic to the communities their work impacts, and always willing to learn something new.
`.trim();

const hobbies = [
  {
    src: "/images/hobbies/hobby1.jpg",
    caption: "Hiking Adventure",
  },
  {
    src: "/images/hobbies/hobby2.jpg",
    caption: "Photography",
  },
  {
    src: "/images/hobbies/hobby3.jpg",
    caption: "null",
  },
  {
    src: "/images/hobbies/hobby4.jpg",
    caption: "Sports",
  },
  {
    src: "/images/hobbies/hobby5.jpg",
    caption: "Reading",
  },
  {
    src: "/images/hobbies/hobby6.jpg",
    caption: "Traveling",
  },
];

export default function PersonalLife() {
  return (
    <section
      id="personal"
      className="bg-sky-900 text-white relative overflow-hidden py-20"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #38bdf8, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0ea5e9, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimateOnScroll>
          <h2 className="section-title mb-12 !text-white">
            Personal Life
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col gap-6">
              {/* Bio */}
              <div>
                <p className="text-white leading-relaxed text-base whitespace-pre-line">
                  {personalBio}
                </p>
              </div>

              {/* Two portrait photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hobbies/hobby7.jpg"
                    alt="Personal Photo 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hobbies/hobby8.jpg"
                    alt="Personal Photo 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT SIDE HOBBIES */}
          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={hobby.src}
                    alt={hobby.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(7, 89, 133, 0.9))",
                    }}
                  >
                    <span className="text-sm text-white font-medium">
                      {hobby.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}