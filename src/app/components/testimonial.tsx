import Image from "next/image";

type TestimonialProps = {
    name: string;
    review: string;
    imageUrl: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, review, imageUrl }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
                src={imageUrl}
                alt={`${name}'s picture`}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mx-auto object-cover"
            />
            <h3 className="text-lg text-secondary font-semibold text-center mt-4">{name}</h3>
            <p className="text-gray-600 text-center mt-2">{review}</p>
        </div>
    );
};

export default Testimonial;