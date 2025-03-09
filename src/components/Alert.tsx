"use client";
import { useState, useEffect } from "react";

const GRADUATION_DATE = new Date("2025-06-05T00:00:00");
const VISITOR_KEY = "alert_visitors";
const GOOGLE_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSf3naZeKzP-4_mt1T-Bj-kq-_eVrGBOmxzFGxE3CNw4ACoJpA/viewform"; // Replace with actual Google Form link

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);
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

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-red-500/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 text-4xl text-red-600/20 animate-float-alt">
          ⚠️
        </div>
        <div className="absolute bottom-0 right-1/3 text-4xl text-orange-600/20 animate-float">
          🔥
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Visitor Counter */}
            <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm animate-pulse-slow hover:bg-white/20 transition-colors">
              <div className="text-2xl animate-shake-warning">👥</div>
              <div>
                <div className="font-bold text-xl">
                  {visitorCount.toLocaleString()}+
                </div>
                <div className="text-sm opacity-90">Students Taking Action</div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative bg-white/10 rounded-xl p-4 backdrop-blur-sm group hover:bg-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl animate-glass-shimmer"></div>
              <div className="relative flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-2xl font-bold animate-urgent-pulse">
                      {timeLeft.days}
                    </div>
                    <div className="text-xs opacity-90">days</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs opacity-90">hrs</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs opacity-90">min</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-2xl font-bold animate-pulse">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-xs opacity-90">sec</div>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 text-2xl animate-spin-slow">
                  ⏰
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-center space-x-4">
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-xl text-red-600 bg-white hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-urgent-pulse"
              >
                Take Action Now!
                <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="mt-6 text-center text-sm font-medium bg-white/10 rounded-xl p-4 backdrop-blur-sm animate-fade-in hover:bg-white/20 transition-colors">
            <span className="font-bold text-xl">
              🎓 Your Future Is At Risk!
            </span>
            <p className="mt-2">
              Join{" "}
              <span className="font-bold text-yellow-200">
                {visitorCount.toLocaleString()}+ students
              </span>{" "}
              fighting for better placement opportunities. Time is running out -
              every voice matters in this battle for your future!
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1.5 bg-white/20 w-full rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-200 to-yellow-400 animate-progress-flash"
            style={{
              width: `${(timeLeft.days / 365) * 100}%`,
              transition: "width 1s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
