import React from 'react';

const Hero_uiux = () => {

    return (
        <section className="bg-gray-100 py-20 h-full">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Welcome to My Profile
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                        I am a passionate developer with a love for creating amazing web experiences.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            View My Work
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}  

export default Hero_uiux;