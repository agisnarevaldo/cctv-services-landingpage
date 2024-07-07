"use client";

import React, { useState } from "react";
import Testimonial from "@/app/components/testimonial";
import Pagination from "@/app/components/pagination";

const testimonials = [
    {
        name: "John Doe",
        review: "Layanan CCTV yang luar biasa, sangat profesional dan responsif.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jhon",
    },
    {
        name: "Jane Smith",
        review: "Produk berkualitas tinggi dengan harga terjangkau.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jane",
    },
    {
        name: "John Doe",
        review: "Layanan CCTV yang luar biasa, sangat profesional dan responsif.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jhon",
    },
    {
        name: "Jane Smith",
        review: "Produk berkualitas tinggi dengan harga terjangkau.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jane",
    },
    {
        name: "John Doe",
        review: "Layanan CCTV yang luar biasa, sangat profesional dan responsif.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jhon",
    },
    {
        name: "Jane Smith",
        review: "Produk berkualitas tinggi dengan harga terjangkau.",
        imageUrl: "https://api.dicebear.com/9.x/initials/svg?seed=Jane",
    },
];

const testimonialsPerPage = 4;

const TestimonialSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Get current testimonials
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="py-8">
            <h2 className="text-2xl font-medium text-center mb-6">Testimonials</h2>
            <div className="grid grid-cols-1 mb-2 md:grid-cols-2 lg:grid-cols-4 px-12 lg:px-24 gap-4">
                {currentTestimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
            <Pagination
                totalProducts={testimonials.length}
                productsPerPage={testimonialsPerPage}
                currentPage={currentPage}
                paginate={paginate}
            />
        </section>
    );
};

export default TestimonialSection;
