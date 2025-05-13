import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  Search,
  MapPin,
  Clock,
  Filter,
  Plus,
  AlertCircle,
  Check,
} from "lucide-react";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("lost");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {currentUser?.name}</p>
        </div>

        <div className="flex space-x-2">
          <button className="btn btn-outline flex items-center gap-1">
            <Filter size={16} />
            Filter
          </button>
          <button className="btn btn-primary flex items-center gap-1">
            <Plus size={16} />
            Report Item
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search for items..."
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("lost")}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "lost"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <AlertCircle size={16} />
              Lost Items
            </div>
          </button>
          <button
            onClick={() => setActiveTab("found")}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "found"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <Check size={16} />
              Found Items
            </div>
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "my"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            My Reports
          </button>
        </nav>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items
          .filter((item) => item.type === activeTab || activeTab === "my")
          .map((item, index) => (
            <div
              key={index}
              className="card slide-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-gray-200 h-48 mb-4 rounded-md flex items-center justify-center relative">
                <MapPin className="h-8 w-8 text-gray-400" />
                {item.type === "lost" && (
                  <span className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Lost
                  </span>
                )}
                {item.type === "found" && (
                  <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Found
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <MapPin size={14} className="mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Clock size={14} className="mr-1" />
                  {item.date}
                </div>
                <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-700 font-medium hover:text-blue-900 text-sm">
                    View Details
                  </button>
                  {item.type === "lost" && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      5 Matches
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Placeholder when no items */}
      {items.filter((item) => item.type === activeTab || activeTab === "my")
        .length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            {activeTab === "lost"
              ? "You haven't reported any lost items yet."
              : activeTab === "found"
              ? "No found items have been reported yet."
              : "You haven't made any reports yet."}
          </p>
          <button className="btn btn-primary">Report an Item</button>
        </div>
      )}
    </div>
  );
};

// Mock data for dashboard items
const items = [
  {
    type: "lost",
    name: "Apple MacBook Pro",
    location: "Main Library, 2nd Floor",
    date: "May 8, 2025 • 2:30 PM",
    description:
      'Silver MacBook Pro 13" with stickers on the cover. Last seen in the study area.',
  },
  {
    type: "found",
    name: "Student ID Card",
    location: "Robotics Lab, Room 302",
    date: "May 8, 2025 • 11:45 AM",
    description: "Found a student ID card belonging to Omok lok",
  },
  {
    type: "lost",
    name: "Black Backpack",
    location: "Cafeteria",
    date: "May 8, 2025 • 12:15 PM",
    description:
      "Black North Face backpack with red keychain. Contains textbooks and a calculator.",
  },
  {
    type: "found",
    name: "Water Bottle",
    location: "Ratnagarva Hall",
    date: "May 8, 2025 • 5:30 PM",
    description: "Blue Hydro Flask water bottle with university logo sticker.",
  },
  {
    type: "lost",
    name: "Casio Scientific Calculator",
    location: "Math Department, Room 105",
    date: "May 9, 2025 • 10:00 AM",
    description: "Black FX-991ES calculator with faded keys. Left on the desk after class."
  },
  {
    type: "found",
    name: "Bluetooth Earbuds",
    location: "Gym Locker Room",
    date: "May 9, 2025 • 3:45 PM",
    description: "White wireless earbuds in a charging case. Found near the bench area."
  },
  {
    type: "lost",
    name: "Laptop Charger",
    location: "Computer Lab A, Room 204",
    date: "May 10, 2025 • 9:30 AM",
    description: "60W MacBook charger. Plug was left near workstation #12."
  },
  {
    type: "found",
    name: "Notebook",
    location: "Lecture Hall 3",
    date: "May 10, 2025 • 1:10 PM",
    description: "Blue spiral notebook labeled 'Physics Notes' on the cover."
  },
  {
    type: "lost",
    name: "Samsung Galaxy Phone",
    location: "Campus Shuttle Bus",
    date: "May 10, 2025 • 6:00 PM",
    description: "Black Samsung phone with a cracked screen and leather case."
  },
  {
    type: "found",
    name: "Wrist Watch",
    location: "Cricket Ground",
    date: "May 11, 2025 • 8:00 AM",
    description: "Silver analog wristwatch found on the bench near the scoreboard."
  },
  {
    type: "lost",
    name: "USB Flash Drive",
    location: "IT Building Lobby",
    date: "May 11, 2025 • 11:20 AM",
    description: "Black 32GB Sandisk flash drive with a red cap, contains project files."
  },
  {
    type: "found",
    name: "Bike Helmet",
    location: "Cycle Stand B",
    date: "May 11, 2025 • 7:50 AM",
    description: "Red and black helmet left hanging on a locked bike."
  }
];

export default Dashboard;
