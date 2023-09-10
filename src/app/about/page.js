"use client";
import React from 'react';

const About = () => {
  return (
    <>
      <div className="bg-gray-100">
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="md:order-2 animate__animated animate__fadeInRight">
      <image src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="m-2" width={500} height={2000} alt="Flowbite Logo" />
      </div>
      <div className="md:order-1 animate__animated animate__fadeInLeft">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-gray-600 mb-6">Welcome to that&apos;s my collage, where education transforms into a journey of exploration, creativity, and growth...</p>
        <p className="text-gray-600 mb-6">Our college&apos;s is more than just a place of learning, it&apos;s a vibrant community of students, educators, and innovators...</p>
        <p className="text-gray-600 mb-6">Experience the intersection of tradition and modernity as we equip our students with cutting-edge skills and a global perspective...</p>
        <p className="text-gray-600 mb-6">Join us in fostering a collaborative environment where dreams are nurtured, talents are honed, and possibilities are endless...</p>
        <a href="#" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Learn More</a>
      </div>
    </div>
  </div>
</section>
</div>
    </>
  );
};

export default About;
