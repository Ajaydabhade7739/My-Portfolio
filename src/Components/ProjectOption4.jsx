import React from 'react';
import certificate from '../assets/JAVA-Certificate.pdf'; // Adjust the path based on your folder structure

const ProjectOption4 = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border">
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-8 border-b bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-t-xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Certificate</h1>
          <p className="text-sm sm:text-base mt-2">This certificate showcases my expertise in Java programming.</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="relative border rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={certificate}
              title="Certificate"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-0"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-100 text-center border-t rounded-b-xl">
          <p className="text-gray-700 text-sm sm:text-base">
            Download or view this certificate in detail <br />
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-semibold"
            >
              Download Certificate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOption4;
