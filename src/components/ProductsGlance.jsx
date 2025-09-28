import React, { useState } from "react";
import { Zap } from "lucide-react";


const Integrations = () => {
  // Unified card style with emojis for all categories
  const data = {
    Features: [
      { name: "Work Order Management", logo: "🛠️" },
      { name: "Asset Management", logo: "📦" },
      { name: "Parts & Inventory", logo: "📦" },
      { name: "Preventive Maintenance", logo: "🧰" },
      { name: "Safety & Compliance", logo: "🛡️" },
      { name: "Integrations", logo: "☁️" },
      { name: "Analytics & Reporting", logo: "📊" },
    ],
    Solutions: [
      { name: "Maintenance", logo: "⚙️" },
      { name: "Operations", logo: "🛠️" },
      { name: "Reliability", logo: "📈" },
    ],
    Industries: [
      { name: "Manufacturing & Plants", logo: "🏭" },
      { name: "Facility Management", logo: "🏢" },
      { name: "Energy & Utilities", logo: "⚡" },
      { name: "Food & Beverage Manufacturing", logo: "🍔" },
      { name: "Healthcare", logo: "🏥" },
      { name: "Fleet Management", logo: "🚛" },
      { name: "Property Management", logo: "🏠" },
      { name: "Farming & Agriculture", logo: "🌾" },
      { name: "Schools & Higher Education", logo: "🎓" },
      { name: "Government & Public Works", logo: "🏛️" },
      { name: "Churches & Non-Profits", logo: "⛪" },
      { name: "Restaurants", logo: "🍽️" },
      { name: "Gym & Fitness", logo: "💪" },
      { name: "Hospitality", logo: "🏨" },
    ],
    Products: [
      { name: "CMMS Software", logo: "💻" },
      { name: "Enterprise Asset Management", logo: "🏢" },
      { name: "EMS", logo: "⚙️" },
    ],
    Integrations: [
      { name: "Salesforce", logo: "☁️" },
      { name: "ServiceNow", logo: "🔧" },
      { name: "Microsoft 365", logo: "💼" },
      { name: "Slack", logo: "💬" },
      { name: "Jira", logo: "🎯" },
      { name: "AWS", logo: "☁️" },
      { name: "Azure", logo: "🌩️" },
      { name: "Google Cloud", logo: "🌥️" },
      { name: "Okta", logo: "🔐" },
      { name: "Tableau", logo: "📊" },
      { name: "SAP", logo: "💾" },
      { name: "Oracle", logo: "🏛️" },
      { name: "Zoom", logo: "📹" },
      { name: "DocuSign", logo: "📝" },
      { name: "Stripe", logo: "💳" },
      { name: "HubSpot", logo: "🎪" },
    ],
  };

  const categories = Object.keys(data);
  const [selectedCategory, setSelectedCategory] = useState("Features");


  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <h1 className="mb-5 text-4xl font-bold leading-tight text-[#5D1F73] sm:text-[42px] lg:text-[40px] xl:text-5xl">
            Explore Our Ecosystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-0.5">
            Discover all features, solutions, industries, products, and integrations in one place.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-left gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category
                  ? "bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Display - same card style for all tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
          {data[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer border border-[#F7F8A8] hover:border-[#5D1F73]"
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {item.logo}
                </div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
