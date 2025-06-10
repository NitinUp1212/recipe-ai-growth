
import { HardDrive, Monitor, Keyboard, Mouse, Headphones, Cpu, MemoryStick, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const SystemAccessories = () => {
  const categories = [
    {
      title: "Storage Devices",
      icon: <HardDrive size={40} />,
      items: [
        { name: "SSD 256GB", price: "₹3,500", description: "High-speed solid state drive" },
        { name: "HDD 1TB", price: "₹4,200", description: "Reliable mechanical hard drive" },
        { name: "External HDD 2TB", price: "₹6,800", description: "Portable external storage" }
      ]
    },
    {
      title: "Memory & RAM",
      icon: <MemoryStick size={40} />,
      items: [
        { name: "8GB DDR4 RAM", price: "₹2,800", description: "High performance memory module" },
        { name: "16GB DDR4 RAM", price: "₹5,200", description: "Professional grade memory" },
        { name: "32GB DDR4 RAM", price: "₹9,800", description: "High-end workstation memory" }
      ]
    },
    {
      title: "Monitors & Displays",
      icon: <Monitor size={40} />,
      items: [
        { name: "24\" LED Monitor", price: "₹12,500", description: "Full HD 1080p display" },
        { name: "27\" 4K Monitor", price: "₹28,000", description: "Ultra HD professional display" },
        { name: "32\" Curved Monitor", price: "₹35,000", description: "Immersive curved gaming display" }
      ]
    },
    {
      title: "Input Devices",
      icon: <Keyboard size={40} />,
      items: [
        { name: "Mechanical Keyboard", price: "₹4,500", description: "RGB backlit gaming keyboard" },
        { name: "Gaming Mouse", price: "₹2,200", description: "High precision gaming mouse" },
        { name: "Wireless Combo", price: "₹1,800", description: "Wireless keyboard and mouse set" }
      ]
    },
    {
      title: "Audio Devices",
      icon: <Headphones size={40} />,
      items: [
        { name: "Gaming Headset", price: "₹3,200", description: "7.1 surround sound headset" },
        { name: "Studio Speakers", price: "₹8,500", description: "Professional studio monitors" },
        { name: "USB Microphone", price: "₹4,800", description: "Professional recording microphone" }
      ]
    },
    {
      title: "Processors & Components",
      icon: <Cpu size={40} />,
      items: [
        { name: "Intel i5 12th Gen", price: "₹18,500", description: "High performance processor" },
        { name: "AMD Ryzen 7", price: "₹22,000", description: "Multi-core performance processor" },
        { name: "Graphics Card GTX 1660", price: "₹25,000", description: "Gaming graphics card" }
      ]
    }
  ];

  const services = [
    {
      title: "Custom PC Building",
      description: "Build your dream PC with our expert consultation and assembly service",
      price: "₹2,000 - ₹5,000",
      features: ["Component Selection", "Assembly", "Testing", "Warranty"]
    },
    {
      title: "Upgrade Services",
      description: "Upgrade your existing system with latest components for better performance",
      price: "₹1,000 - ₹3,000",
      features: ["RAM Upgrade", "Storage Upgrade", "Graphics Card", "Processor"]
    },
    {
      title: "Bulk Orders",
      description: "Special pricing for bulk orders and corporate purchases",
      price: "Contact for Quote",
      features: ["Volume Discounts", "Installation", "Support", "Warranty"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">System Accessories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Complete range of computer accessories and system components for all your needs
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="recipe-card">
              <div className="text-primary mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-primary/20 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4">View All Products</Button>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="recipe-card">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full">Get Quote</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Accessories?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <HardDrive className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">Original and certified components only</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Cpu className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Expert Advice</h3>
              <p className="text-sm text-gray-600">Professional consultation for your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <MemoryStick className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-600">Best prices in the market guaranteed</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Printer className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Installation Support</h3>
              <p className="text-sm text-gray-600">Free installation and setup service</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-primary to-neon text-black rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="mb-4">Contact us for custom PC builds, bulk orders, and special requirements</p>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://wa.me/918791363283" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Chat for Custom Build
              </a>
              <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
                Request Bulk Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAccessories;
