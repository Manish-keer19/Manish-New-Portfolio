import m1 from "../assets/m1.jpg"


const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build real-time, responsive, and modern applications with a focus on clean design and smooth user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a full-stack developer, I specialize in MERN Stack, Spring Boot, and React Native, crafting scalable, high-performance solutions that seamlessly connect front-end creativity with back-end power.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass p-1 ">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-neon-blue/20 flex items-center justify-center overflow-hidden">
                  {/* Replace with your image */}
                  <img
                    // src="https://res.cloudinary.com/manish19/image/upload/v1749885126/IMG_20250525_221411_sptfql.jpg" // Update this path
                    src={m1}

                    alt="Manish Keer"
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;