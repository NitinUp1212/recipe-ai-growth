
import { useState } from "react";
import { Laptop, Wrench, Shield, Clock, Star, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const LaptopServices = () => {
  const [activeTab, setActiveTab] = useState("repair");

  const laptopsForSale = [
    {
      id: 1,
      brand: "Dell Inspiron 15",
      model: "3520",
      price: "₹35,000",
      originalPrice: "₹45,000",
      specs: ["Intel i5 11th Gen", "8GB RAM", "512GB SSD", "15.6\" Display"],
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      condition: "Excellent",
      warranty: "6 Months"
    },
    {
      id: 2,
      brand: "HP Pavilion",
      model: "15-eg",
      price: "₹42,000",
      originalPrice: "₹55,000",
      specs: ["Intel i7 11th Gen", "16GB RAM", "1TB SSD", "15.6\" FHD"],
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      condition: "Like New",
      warranty: "1 Year"
    },
    {
      id: 3,
      brand: "Lenovo ThinkPad",
      model: "E14",
      price: "₹38,000",
      originalPrice: "₹50,000",
      specs: ["AMD Ryzen 5", "8GB RAM", "256GB SSD", "14\" Display"],
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
      condition: "Good",
      warranty: "6 Months"
    }
  ];

  const repairServices = [
    {
      service: "Screen Replacement",
      price: "₹3,000 - ₹8,000",
      time: "2-3 Hours",
      description: "LCD/LED screen replacement with original quality parts"
    },
    {
      service: "Keyboard Repair",
      price: "₹1,500 - ₹3,000",
      time: "1-2 Hours",
      description: "Individual key or complete keyboard replacement"
    },
    {
      service: "Battery Replacement",
      price: "₹2,000 - ₹5,000",
      time: "30 Minutes",
      description: "Original battery replacement with warranty"
    },
    {
      service: "Motherboard Repair",
      price: "₹5,000 - ₹15,000",
      time: "1-3 Days",
      description: "Component level motherboard repair and replacement"
    },
    {
      service: "Data Recovery",
      price: "₹2,000 - ₹10,000",
      time: "1-5 Days",
      description: "Professional data recovery from damaged drives"
    },
    {
      service: "Software Installation",
      price: "₹500 - ₹2,000",
      time: "1-2 Hours",
      description: "OS installation, software setup, and optimization"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Laptop Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional laptop repair services and quality laptop sales with warranty
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("repair")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "repair"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Repair Services
            </button>
            <button
              onClick={() => setActiveTab("sales")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "sales"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Laptop Sales
            </button>
          </div>
        </div>

        {/* Repair Services Tab */}
        {activeTab === "repair" && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {repairServices.map((service, index) => (
                <div key={index} className="recipe-card">
                  <div className="flex items-center mb-4">
                    <Wrench className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-bold">{service.service}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{service.time}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button className="w-full">Get Quote</Button>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Repair Services?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Shield className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Warranty</h3>
                  <p className="text-sm text-gray-600">90 days warranty on all repairs</p>
                </div>
                <div className="text-center">
                  <Clock className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Quick Service</h3>
                  <p className="text-sm text-gray-600">Most repairs completed same day</p>
                </div>
                <div className="text-center">
                  <Star className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Expert Technicians</h3>
                  <p className="text-sm text-gray-600">Certified and experienced professionals</p>
                </div>
                <div className="text-center">
                  <Laptop className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">All Brands</h3>
                  <p className="text-sm text-gray-600">We repair all laptop brands</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sales Tab */}
        {activeTab === "sales" && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {laptopsForSale.map((laptop) => (
                <div key={laptop.id} className="recipe-card">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={laptop.image} 
                      alt={laptop.brand} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                      {laptop.condition}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1">
                      {laptop.warranty} Warranty
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{laptop.brand}</h3>
                  <p className="text-gray-600 mb-3">{laptop.model}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">{laptop.price}</span>
                      <span className="text-lg text-gray-500 line-through">{laptop.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Specifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {laptop.specs.map((spec, index) => (
                        <li key={index}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mb-2">Contact for Details</Button>
                  <Button variant="outline" className="w-full">View Full Specs</Button>
                </div>
              ))}
            </div>

            {/* Purchase Benefits */}
            <div className="bg-gradient-to-r from-primary/5 to-neon/5 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Purchase Benefits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Warranty Included</h3>
                  <p className="text-sm text-gray-600">6 months to 1 year warranty on all laptops</p>
                </div>
                <div className="text-center">
                  <Star className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Quality Assured</h3>
                  <p className="text-sm text-gray-600">Thoroughly tested before sale</p>
                </div>
                <div className="text-center">
                  <Wrench className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-bold mb-2">Free Setup</h3>
                  <p className="text-sm text-gray-600">Free software installation and setup</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Help? Contact Us</h2>
            <p className="text-gray-300">Our experts are ready to assist you with any laptop service needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <Phone className="text-neon mr-4" size={24} />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p className="text-gray-300">+91 8791363283, 7055481738</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-neon mr-4" size={24} />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p className="text-gray-300">officialunknownhat@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://wa.me/918791363283" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopServices;
