import { CSSProperties } from "react";

export default function Header() {
  return (
    <>
      {/* header-area-start */}
      <header className="header sticky-active">
        <div className="primary-header">
          <div className="primary-header-inner">
            <div className="header-logo d-lg-block">
              <a href="index.html">
                <img
                  className="logo-dark"
                  src="assets/img/logo/logo-2.png"
                  alt="Logo"
                />
                <img
                  className="logo-light"
                  src="assets/img/logo/logo-3.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="header-right-wrap">
              <div className="header-menu-wrap">
                <div className="mobile-menu-items">
                  <ul>
                    <li className="menu-item-has-children active">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Web Design</a>
                        </li>
                        <li>
                          <a href="index-2.html">Creative Studio</a>
                        </li>
                        <li>
                          <a href="index-3.html">Web Development</a>
                        </li>
                        <li>
                          <a href="index-4.html">Modern Agency</a>
                        </li>
                        <li>
                          <a href="index-5.html">It Solution</a>
                        </li>
                        <li>
                          <a href="index-6.html">Digital Agency</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                        <li>
                          <a href="project.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="project-details.html">Portfolio Details</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="error.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="service.html">Services</a>
                      <ul>
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="shop.html">Shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog-grid.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-grid-2.html">Blog list</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.header-menu-wrap */}
              <div className="header-right">
                <div className="sidebar-icon">
                  <button className="sidebar-trigger open">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.300781 0H5.30078V5H0.300781V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.300781 9H5.30078V14H0.300781V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.300781 18H5.30078V23H0.300781V18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 0H14.3008V5H9.30078V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 9H14.3008V14H9.30078V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 18H14.3008V23H9.30078V18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 0H23.3008V5H18.3008V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 9H23.3008V14H18.3008V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 18H23.3008V23H18.3008V18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* /.header-right */}
            </div>
          </div>
          {/* /.primary-header-inner */}
        </div>
      </header>
      {/* /.Main Header */}
      <div id="popup-search-box">
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" action="#" method="get" role="search">
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
            />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
        </div>
      </div>
      {/* /#popup-search-box */}
      <div className="mobile-side-menu">
        <div className="side-menu-content">
          <div className="side-menu-head">
            <a href="index.html">
              <img src="assets/img/logo/logo-2.png" alt="logo" />
            </a>
            <button className="mobile-side-menu-close">
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <div className="side-menu-wrap"></div>
          <ul className="side-menu-list">
            <li>
              <i className="fa-light fa-location-dot"></i>Address :{" "}
              <span>Amsterdam, 109-74</span>
            </li>
            <li>
              <i className="fa-light fa-phone"></i>Phone :{" "}
              <a href="tel:+01569896654">+01 569 896 654</a>
            </li>
            <li>
              <i className="fa-light fa-envelope"></i>Email :{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* /.mobile-side-menu */}
      <div className="mobile-side-menu-overlay"></div>
      <div id="preloader">
        <div className="loading" data-loading-text="Runok"></div>
      </div>
      {/* ./ preloader */}
      <div id="sidebar-area" className="sidebar-area">
        <button className="sidebar-trigger close">
          <svg
            className="sidebar-close"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="16px"
            height="12.7px"
            viewBox="0 0 16 12.7"
            style={
              {
                enableBackground: " new 0 0 16 12.7",
              } as CSSProperties
            }
            xmlSpace="preserve"
          >
            <g>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)"
                width="16"
                height="2"
              ></rect>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)"
                width="16"
                height="2"
              ></rect>
            </g>
          </svg>
        </button>
        <div className="side-menu-content">
          <div className="side-menu-logo">
            <a className="dark-img" href="index.html">
              <img src="assets/img/logo/logo-2.png" alt="logo" />
            </a>
            <a className="light-img" href="index.html">
              <img src="assets/img/logo/logo-3.png" alt="logo" />
            </a>
          </div>
          <div className="side-menu-wrap"></div>
          <div className="side-menu-about">
            <div className="side-menu-header">
              <h3>About Us</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <a href="contact.html" className="rr-primary-btn">
              Contact Us
            </a>
          </div>
          <div className="side-menu-contact">
            <div className="side-menu-header">
              <h3>Contact Us</h3>
            </div>
            <ul className="side-menu-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <p>Valentin, Street Road 24, New York, </p>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+000123456789">+000 123 (456) 789</a>
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i>
                <a href="mailto:runokcontact@gmail.com">
                  runokcontact@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <ul className="side-menu-social">
            <li className="facebook">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="instagram">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="twitter">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="g-plus">
              <a href="#">
                <i className="fab fa-fab fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*/.sidebar-area*/}
    </>
  );
}
