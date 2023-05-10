import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto bg-gray-800 py-16 text-base-content">
        <div className="container mx-auto footer p-10">
          <div>
            <span className="footer-title text-white">Home</span>
            <a className="link link-hover text-white">Pricing</a>
            <a className="link link-hover text-white">FAQs</a>
            <a className="link link-hover text-white">About</a>
          </div>
          <div>
            <span className="footer-title text-white">Foods</span>
            <a className="link link-hover text-white">BURGERS</a>
            <a className="link link-hover text-white">PIZZAS</a>
            <a className="link link-hover text-white">TOASTS</a>
          </div>
          <div>
            <span className="footer-title text-white">FAQ</span>
            <a className="link link-hover text-white">Support</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Terms of Service</a>
          </div>
          <div>
            <span className="footer-title text-white">
              Subscribe to our newsletter
            </span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  We accept online payments via debit/credit cards, net banking,
                  and mobile wallet apps. You can also opt for cash on delivery.
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered rounded w-full pr-16"
                />
                <button className="btn btn-primary bg-warning text-black absolute top-0 right-0 rounded-l-none hover:bg-gray-500 hover:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
