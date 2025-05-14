
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AnimatedShape from "./AnimatedShape";

const AnimeVectors = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const animeStyles = {
    container: "relative overflow-hidden rounded-xl shadow-2xl",
    title: "text-3xl md:text-4xl font-bold mb-4 text-white text-center relative z-10",
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }
    }
  };
  
  return (
    <section className="py-16 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Anime-Inspired Marketing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harness the power of anime aesthetics in your digital marketing strategy
          </p>
        </div>
        
        <div ref={ref}>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Titan-inspired Vector */}
            <motion.div variants={itemVariants} className={animeStyles.container}>
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-6 h-full">
                <AspectRatio ratio={16 / 10} className="relative">
                  <h3 className={animeStyles.title}>Titan Strategy</h3>
                  <p className="text-gray-200 text-center mb-4 relative z-10">Dominate your market with unstoppable force</p>
                  
                  <AnimatedShape 
                    type="square"
                    color="bg-blue-500/20"
                    size="w-32 h-32"
                    positionClass="top-5 left-10"
                  />
                  <AnimatedShape 
                    type="circle"
                    color="bg-red-500/30"
                    size="w-20 h-20"
                    positionClass="bottom-10 right-10"
                    delay={1.2}
                  />
                  
                  <motion.div
                    className="absolute bottom-2 left-0 right-0 mx-auto w-24 h-32 bg-gray-800/70 rounded-t-full"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="absolute bottom-16 left-0 right-0 mx-auto w-20 h-12 bg-gray-700 rounded-t-full">
                      <div className="absolute top-4 left-4 right-4 mx-auto h-2 bg-red-600"></div>
                    </div>
                  </motion.div>
                </AspectRatio>
              </div>
            </motion.div>
            
            {/* Love Story Vector */}
            <motion.div variants={itemVariants} className={animeStyles.container}>
              <div className="bg-gradient-to-br from-pink-900 to-purple-900 p-6 h-full">
                <AspectRatio ratio={16 / 10} className="relative">
                  <h3 className={animeStyles.title}>Brand Romance</h3>
                  <p className="text-gray-200 text-center mb-4 relative z-10">Create lasting connections with your audience</p>
                  
                  <AnimatedShape 
                    type="circle"
                    color="bg-pink-500/30"
                    size="w-16 h-16"
                    positionClass="top-10 left-10"
                    delay={0.5}
                  />
                  <AnimatedShape 
                    type="circle"
                    color="bg-purple-500/30"
                    size="w-16 h-16"
                    positionClass="top-10 right-10"
                    delay={1}
                  />
                  
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 mx-auto"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <motion.div 
                      className="w-20 h-16 mx-auto bg-pink-600/70 rounded-t-full"
                      animate={{
                        x: [-10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div 
                      className="w-20 h-16 mx-auto bg-purple-600/70 rounded-t-full -mt-8 ml-16"
                      animate={{
                        x: [10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                </AspectRatio>
              </div>
            </motion.div>
            
            {/* Battle Strategy Vector */}
            <motion.div variants={itemVariants} className={animeStyles.container}>
              <div className="bg-gradient-to-br from-orange-900 to-red-900 p-6 h-full">
                <AspectRatio ratio={16 / 10} className="relative">
                  <h3 className={animeStyles.title}>Battle Strategy</h3>
                  <p className="text-gray-200 text-center mb-4 relative z-10">Outperform competitors with tactical precision</p>
                  
                  <AnimatedShape 
                    type="triangle"
                    color="bg-orange-500/30"
                    size="w-24 h-24"
                    positionClass="top-5 right-10"
                    delay={0.8}
                  />
                  <AnimatedShape 
                    type="square"
                    color="bg-red-500/30"
                    size="w-16 h-16"
                    positionClass="bottom-10 left-10"
                    delay={1.5}
                  />
                  
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 w-full flex justify-around"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <motion.div 
                      className="w-10 h-24 bg-orange-600/70 rounded-t-md"
                      animate={{
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div 
                      className="w-10 h-24 bg-red-600/70 rounded-t-md"
                      animate={{
                        rotate: [5, -5, 5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                </AspectRatio>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Large hero effect animation */}
          <motion.div 
            className="mt-16 relative overflow-hidden rounded-xl shadow-2xl"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 md:p-16">
              <div className="relative z-10 text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Unleash Your Brand's Story</h3>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Combine the emotional impact of anime storytelling with strategic marketing to create unforgettable campaigns
                </p>
                <motion.button 
                  className="btn-neon text-lg px-8 py-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Now
                </motion.button>
              </div>
              
              {/* Hero VFX effects */}
              <div className="absolute inset-0 z-0">
                <AnimatedShape 
                  type="circle"
                  color="bg-blue-500/20"
                  size="w-96 h-96"
                  positionClass="-top-20 -left-20"
                  duration={12}
                />
                <AnimatedShape 
                  type="circle"
                  color="bg-purple-500/20"
                  size="w-80 h-80"
                  positionClass="bottom-0 -right-20"
                  delay={2}
                  duration={10}
                />
                <AnimatedShape 
                  type="triangle"
                  color="bg-neon/10"
                  size="w-64 h-64"
                  positionClass="bottom-20 left-1/4"
                  delay={1}
                  duration={8}
                />
                
                {/* Animated lines */}
                <motion.div 
                  className="absolute top-1/3 left-0 h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent w-full"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/3 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 2.5,
                  }}
                />
                
                {/* Animated particles */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-1 h-1 rounded-full bg-neon/80"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimeVectors;
