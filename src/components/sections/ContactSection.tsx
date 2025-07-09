import { texts } from "../../config/texts";
import LottieAnimation from "../LottieAnimation";
import contactAnimation from "../../assets/animations/contact.json";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen min-h-screen overflow-x-hidden items-center justify-center flex"
      style={{ background: "linear-gradient(#720455, #4f0349 55%, #490079)" }}
    >
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full pl-4 md:pl-12 md:pr-0 lg:pl-16 lg:pr-10 xl:pl-20 2xl:pl-24">
        {/* Left Side - Contact Text */}
        <div className="flex flex-col justify-center w-full md:w-1/2 h-full text-white space-y-6">
          <div className="space-y-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{
                textShadow:
                  "0px 0px 15px #fb83db, 0px 0px 30px rgba(251, 131, 219, 0.5)",
              }}
            >
              {texts.contact.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-purple-200 font-medium">
              {texts.contact.subtitle}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              {texts.contact.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center space-x-3">
              <span className="text-purple-300 font-medium">Email:</span>
              <span className="text-white">{texts.contact.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-300 font-medium">Phone:</span>
              <span className="text-white">{texts.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-300 font-medium">Location:</span>
              <span className="text-white">{texts.contact.location}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full">
          <div className="w-full max-w-md h-96">
            <LottieAnimation
              animationData={contactAnimation}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };
