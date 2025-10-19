import m1 from "../assets/m1.jpg"
import manish from "../assets/manish.png"


const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
    <p className="text-lg text-muted-foreground leading-relaxed">
  I build modern, scalable, and real-time web and mobile applications with a focus on clean architecture, responsive design, and seamless user experiences.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  As a full-stack developer skilled in the MERN Stack, Spring Boot, and React Native, I create high-performance solutions that connect elegant front-end interfaces with powerful back-end systems. I also develop Android apps that deliver smooth, native-like experiences. Whether freelancing or contributing to a development team, I’m passionate about building reliable, production-ready software that adds real value.
</p>


          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass p-1 ">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-neon-blue/20 flex items-center justify-center overflow-hidden">
                  {/* Replace with your image */}
                  <img
                    // src="https://res.cloudinary.com/manish19/image/upload/v1749885126/IMG_20250525_221411_sptfql.jpg" // Update this path
                    // src={m1}
                    src={manish}

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