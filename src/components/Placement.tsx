"use client";
import { useState, useMemo, useEffect } from "react";
import { placements } from "@/db/studentData";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const packageRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "< ₹4 LPA", min: 0, max: 4 },
  { label: "₹4-6 LPA", min: 4, max: 6 },
  { label: "₹6-8 LPA", min: 6, max: 8 },
  { label: "> ₹8 LPA", min: 8, max: Infinity },
];

const initialFilters = {
  month: "all",
  company: "all",
  packageRange: "all",
  role: "all",
  bond: "all",
  hasInternship: "all",
};

const GRADUATION_DATE = new Date("2025-06-05T00:00:00");
const VISITOR_KEY = "website_visitors";

export default function Placement() {
  const [filters, setFilters] = useState(initialFilters);
  const [visibleCount, setVisibleCount] = useState(6);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Update visitor count
    const currentCount = parseInt(localStorage.getItem(VISITOR_KEY) || "0");
    const newCount = currentCount + 1;
    localStorage.setItem(VISITOR_KEY, newCount.toString());
    setVisitorCount(newCount);

    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = GRADUATION_DATE.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const resetFilters = () => {
    setFilters(initialFilters);
    setVisibleCount(6);
  };

  // Get unique values for filter options
  const companies = useMemo(
    () => ["all", ...new Set(placements.map((p) => p.company))],
    []
  );
  const roles = useMemo(
    () => ["all", ...new Set(placements.map((p) => p.role))],
    []
  );
  const bondYears = useMemo(
    () => ["all", ...new Set(placements.map((p) => p.bond.toString()))],
    []
  );

  // Filter placements based on selected filters
  const filteredPlacements = useMemo(() => {
    return placements.filter((placement) => {
      if (filters.month !== "all" && placement.month !== filters.month)
        return false;
      if (filters.company !== "all" && placement.company !== filters.company)
        return false;
      if (filters.role !== "all" && placement.role !== filters.role)
        return false;
      if (filters.bond !== "all" && placement.bond.toString() !== filters.bond)
        return false;
      if (filters.hasInternship !== "all") {
        if (
          filters.hasInternship === "yes" &&
          !placement.internship.hasInternship
        )
          return false;
        if (
          filters.hasInternship === "no" &&
          placement.internship.hasInternship
        )
          return false;
      }
      if (filters.packageRange !== "all") {
        const range = packageRanges[parseInt(filters.packageRange)];
        if (placement.package < range.min || placement.package >= range.max)
          return false;
      }
      return true;
    });
  }, [filters]);

  const visiblePlacements = filteredPlacements.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPlacements.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, filteredPlacements.length));
  };

  return (
    <div
      id="placement-section"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Angry Red Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-red-500/30 rounded-full blur-2xl animate-float-delayed"></div>

        {/* Warning Signs */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-red-600/20 animate-float-alt">
          ⚠️
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl text-red-600/20 animate-float">
          ⚠️
        </div>

        {/* Pulsing Circles */}
        <div className="absolute top-1/2 left-20 w-24 h-24 border-2 border-red-500/30 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-20 w-20 h-20 border-2 border-orange-500/30 rounded-full animate-pulse-glow delay-300"></div>

        {/* Lightning Bolts */}
        <div className="absolute top-1/3 right-1/3 text-5xl text-yellow-500/30 animate-float-fast">
          ⚡
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-yellow-500/30 animate-float-delayed">
          ⚡
        </div>

        {/* Morphing Shapes */}
        <div className="absolute top-1/4 right-40 w-32 h-32 bg-gradient-to-br from-red-400/10 to-orange-500/20 animate-shape-morph"></div>
        <div className="absolute bottom-1/4 left-40 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-red-500/20 animate-shape-morph delay-1000"></div>

        {/* Rotating Elements */}
        <div className="absolute top-1/3 left-1/2 w-24 h-24 border-t-2 border-r-2 border-red-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/2 right-1/3 w-32 h-32 border-b-2 border-l-2 border-orange-500/30 rounded-full animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Angry Theme */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                Shamefully Low Packages
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full transform scale-x-0 animate-expand"></div>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="text-red-600 font-semibold">Exposing</span> the
            reality of placement packages that are far below industry standards
          </p>
        </div>

        {/* Enhanced Filters Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Filter Results
              </h2>
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Month
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.month}
                  onChange={(e) =>
                    setFilters({ ...filters, month: e.target.value })
                  }
                >
                  <option value="all">All Months</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.company}
                  onChange={(e) =>
                    setFilters({ ...filters, company: e.target.value })
                  }
                >
                  <option value="all">All Companies</option>
                  {companies
                    .filter((c) => c !== "all")
                    .map((company) => (
                      <option key={company} value={company}>
                        {company}
                      </option>
                    ))}
                </select>
              </div>

              {/* Package Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Range
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.packageRange}
                  onChange={(e) =>
                    setFilters({ ...filters, packageRange: e.target.value })
                  }
                >
                  {packageRanges.map((range, index) => (
                    <option
                      key={range.label}
                      value={index === 0 ? "all" : index.toString()}
                    >
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Role Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.role}
                  onChange={(e) =>
                    setFilters({ ...filters, role: e.target.value })
                  }
                >
                  <option value="all">All Roles</option>
                  {roles
                    .filter((r) => r !== "all")
                    .map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                </select>
              </div>

              {/* Bond Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bond Duration
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.bond}
                  onChange={(e) =>
                    setFilters({ ...filters, bond: e.target.value })
                  }
                >
                  <option value="all">All Bond Durations</option>
                  {bondYears
                    .filter((b) => b !== "all")
                    .map((bond) => (
                      <option key={bond} value={bond}>
                        {bond} Years
                      </option>
                    ))}
                </select>
              </div>

              {/* Internship Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Internship
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={filters.hasInternship}
                  onChange={(e) =>
                    setFilters({ ...filters, hasInternship: e.target.value })
                  }
                >
                  <option value="all">All</option>
                  <option value="yes">With Internship</option>
                  <option value="no">Without Internship</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePlacements.map((placement) => (
            <div
              key={placement.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold">
                    ₹{placement.package}L
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {placement.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span>{placement.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{placement.role}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {placement.month} {placement.year}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Bond: {placement.bond} Years</span>
                    </div>
                  </div>

                  {placement.internship.hasInternship && (
                    <div className="bg-red-50 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-red-900">
                        Internship Details
                      </h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium text-red-800">
                          {placement.internship.duration} months
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Stipend:</span>
                        <span className="font-medium text-red-800">
                          ₹{placement.internship.stipend.toLocaleString()}/month
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Load More
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Enhanced No Results Message */}
        {filteredPlacements.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50"></div>
            <div className="relative z-10">
              <svg
                className="mx-auto h-12 w-12 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No placements found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
