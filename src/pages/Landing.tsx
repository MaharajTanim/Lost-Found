import { Link } from "react-router-dom";
import { MapPin, Search, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/3rLxrKnF/maxresdefault.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Lost Something on Campus?</h1>
            <p className="text-xl mb-8 text-blue-100">
              The easiest way to find your lost items or report found ones at
              our university campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="btn btn-secondary flex items-center justify-center gap-2"
              >
                <Search size={20} />
                View Items
              </Link>
              <Link
                to="/register"
                className="btn btn-outline bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white flex items-center justify-center gap-2"
              >
                Report Found Item
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-blue-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card slide-in text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Search Lost Items</h3>
              <p className="text-gray-600">
                Browse our database of found items to see if yours has been
                turned in.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="card slide-in text-center"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Report Found Items</h3>
              <p className="text-gray-600">
                Found something? Submit details and location to help someone
                find their lost item.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="card slide-in text-center"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Connected</h3>
              <p className="text-gray-600">
                We'll notify you when items matching your description are found.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Recently Found Items</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These items were recently turned in to our lost and found center.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentItems.map((item, index) => (
              <div
                key={index}
                className="card slide-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gray-200 h-48 mb-4 rounded-md flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <Link
                  to="/login"
                  className="text-blue-700 font-medium flex items-center hover:text-blue-900 mt-4"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/login" className="btn btn-primary">
              View All Items
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Start Finding Your Lost Items Today
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join our university community and make lost items a thing of the
            past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn bg-white text-amber-600 hover:bg-gray-100"
            >
              Create an Account
            </Link>
            <Link
              to="/login"
              className="btn bg-amber-600 text-white hover:bg-amber-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock data for recently found items
const recentItems = [
  {
    name: "Blue Water Bottle",
    location: "Science Building",
    date: "Today",
  },
  {
    name: "Student ID Card",
    location: "Library",
    date: "Yesterday",
  },
  {
    name: "Black Backpack",
    location: "Student Union",
    date: "2 days ago",
  },
];

export default Landing;
