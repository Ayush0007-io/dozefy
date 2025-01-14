import { motion } from "framer-motion";

export const ScrollAnimation = () => {
  return (
    <div className="scroll-animation-wrapper w-full min-h-screen py-20">
      <main className="w-full h-full flex justify-center items-center mt-[40vh] pb-[40vh]">
        <div className="scrollbar"></div>
        <div className="scroll-container">
          {[1, 2, 3, 4].map((index) => (
            <p key={index} className={`scroll-text scroll-text-${index}`}>
              In the enchanted world of frontend development, pixels and code guide your design journey. 
              Entranced by the dance of colors, shapes unfold on the digital canvas. 
              Every line of code is a spell, weaving functionality and aesthetics into an immersive digital tale.
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};