import React from 'react';

const AboutUs = () => {
    return (
        <div className="my-container h-[100vh]">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg my-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Welcome to Tasty HUT
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Tasty HUT is a food order website that connects food lovers with the best restaurants in town.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                How do I place an order on Tasty HUT?
                </p>
                <p className="text-gray-700">
                Placing an order on Tasty HUT is simple. Browse through our menu, select the items you want, and place your order. You can pay online or opt for cash on delivery, whichever is more convenient for you.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                What payment options are available on Tasty HUT?
                </p>
                <p className="text-gray-700">
                We accept online payments via debit/credit cards, net banking, and mobile wallet apps. You can also opt for cash on delivery.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                How long does it take for my order to arrive?
                </p>
                <p className="text-gray-700">
                The delivery time varies depending on your location and the restaurant's distance from your address. However, we strive to deliver every order within 30-45 minutes.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                Can I track my order in real-time?
                </p>
                <p className="text-gray-700">
                Yes, we offer real-time tracking so you can keep an eye on your order until it reaches your doorstep.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                What if I have a problem with my order?
                </p>
                <p className="text-gray-700">
                We take customer satisfaction very seriously. If you face any issues with your order, please reach out to our 24/7 customer support team, and we will do everything we can to help you.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                How can I become a partner restaurant with Tasty HUT?
                </p>
                <p className="text-gray-700">
                If you are interested in partnering with us, please fill out the form on our website, and our team will get in touch with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;