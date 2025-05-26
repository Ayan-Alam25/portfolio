"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Experience() {
  return (
    <section className="py-12  md:py-20 mt-14 md:mt-20 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            My hands-on experience in real-world projects and collaborations
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-gray-200 to-transparent" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-0 md:pr-16 mb-12 md:mb-16"
          >
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 flex w-full md:w-auto justify-start md:justify-center">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full border border-gray-200 bg-white shadow-sm ml-4 md:ml-0">
                April 2025
              </span>
            </div>

            {/* Content Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    L
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    LAMARR
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Frontend Developer Intern | Remote
                  </p>
                </div>
                <a
                  href="#"
                  className="ml-auto flex items-center gap-1 text-primary hover:underline mt-2 md:mt-0"
                  aria-label="View project"
                >
                  View project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Contributed to 3 projects, resolving 10+ high-priority
                    issues and actively participating in daily stand-ups to
                    share updates and demo features.
                  </p>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Improved navigation bar UX by implementing active state
                    highlighting and sticky headers, enhancing user engagement
                    and navigation flow.
                  </p>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Enhanced the 'Add Client' form with required field
                    indicators and country-specific mobile number validation,
                    reducing input errors by 30%.
                  </p>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Developed scalable middleware for authentication and route
                    protection, improving app security and workflow reliability.
                  </p>
                </li>
              </ul>

              {/* Tags */}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "UX Design",
                  "Form Validation",
                  "Authentication",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs md:text-sm rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-20"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
              Want to see more of my professional journey?
            </h3>
            <a
              href="https://drive.google.com/file/d/13jHLD6oK_AGi0kuS66ZY4oGQb52oPDHD/view"
              className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
            >
              View Full Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
