
import { useState } from "react";
import { Home, MapPin, Bed, Bath, Square, Phone, Mail, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyDealing = () => {
  const [propertyType, setPropertyType] = useState("all");

  const properties = [
    {
      id: 1,
      title: "Modern 3BHK Apartment",
      type: "sale",
      category: "apartment",
      price: "₹85,00,000",
      location: "Sector 62, Noida",
      bedrooms: 3,
      bathrooms: 2,
      area: "1450 sq ft",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      features: ["Parking", "Lift", "Security", "Garden"]
    },
    {
      id: 2,
      title: "Luxury Villa with Garden",
      type: "sale",
      category: "villa",
      price: "₹2,50,00,000",
      location: "Golf Course Road, Gurugram",
      bedrooms: 4,
      bathrooms: 3,
      area: "3200 sq ft",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      features: ["Swimming Pool", "Garden", "Parking", "Security"]
    },
    {
      id: 3,
      title: "Commercial Office Space",
      type: "rent",
      category: "commercial",
      price: "₹45,000/month",
      location: "Connaught Place, Delhi",
      bedrooms: 0,
      bathrooms: 2,
      area: "800 sq ft",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      features: ["AC", "Parking", "Lift", "Reception"]
    },
    {
      id: 4,
      title: "2BHK Ready to Move",
      type: "rent",
      category: "apartment",
      price: "₹25,000/month",
      location: "Laxmi Nagar, Delhi",
      bedrooms: 2,
      bathrooms: 1,
      area: "950 sq ft",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      features: ["Furnished", "Parking", "Balcony", "Kitchen"]
    },
    {
      id: 5,
      title: "Independent House",
      type: "sale",
      category: "house",
      price: "₹1,20,00,000",
      location: "Model Town, Delhi",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800 sq ft",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      features: ["Terrace", "Garden", "Parking", "Independent"]
    },
    {
      id: 6,
      title: "Studio Apartment",
      type: "rent",
      category: "apartment",
      price: "₹15,000/month",
      location: "Karol Bagh, Delhi",
      bedrooms: 1,
      bathrooms: 1,
      area: "450 sq ft",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      features: ["Furnished", "AC", "Internet", "Kitchen"]
    }
  ];

  const filteredProperties = propertyType === "all" 
    ? properties 
    : properties.filter(property => property.type === propertyType);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Dealing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find your dream property or sell your existing one with our expert real estate services
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setPropertyType("all")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                propertyType === "all"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setPropertyType("sale")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                propertyType === "sale"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setPropertyType("rent")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                propertyType === "rent"
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProperties.map((property) => (
            <div key={property.id} className="recipe-card group">
              <div className="mb-4 overflow-hidden rounded-lg relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs rounded-full px-3 py-1 font-medium ${
                    property.type === "sale" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    For {property.type === "sale" ? "Sale" : "Rent"}
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">{property.price}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                {property.bedrooms > 0 && (
                  <div className="bg-gray-50 p-2 rounded">
                    <Bed size={16} className="mx-auto mb-1 text-gray-600" />
                    <span className="text-sm font-medium">{property.bedrooms} Bed</span>
                  </div>
                )}
                <div className="bg-gray-50 p-2 rounded">
                  <Bath size={16} className="mx-auto mb-1 text-gray-600" />
                  <span className="text-sm font-medium">{property.bathrooms} Bath</span>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <Square size={16} className="mx-auto mb-1 text-gray-600" />
                  <span className="text-sm font-medium">{property.area}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full">Contact for Details</Button>
                <Button variant="outline" className="w-full">Schedule Visit</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Services Offered */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Property Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Home className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Property Sales</h3>
              <p className="text-sm text-gray-600">Buy and sell residential & commercial properties</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Rental Services</h3>
              <p className="text-sm text-gray-600">Find perfect rental properties for your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Filter className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Property Valuation</h3>
              <p className="text-sm text-gray-600">Get accurate market value of your property</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Expert advice on property investment</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Property?</h2>
            <p className="text-gray-300">Contact our property experts for personalized assistance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center">
              <Phone className="text-neon mr-4" size={24} />
              <div>
                <h3 className="font-bold">Call Our Experts</h3>
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
          
          <div className="text-center">
            <a 
              href="https://wa.me/918791363283" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Chat About Properties
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDealing;
