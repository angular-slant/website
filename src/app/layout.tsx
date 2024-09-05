import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AngularSlant | Empowering Business Online",
  description:
    "AngularSlant is a digital agency that helps businesses grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script async src="/assets/js/vendor/jquary-3.6.0.min.js"></script>
        <script async src="/assets/js/vendor/bootstrap-bundle.js"></script>
        <script async src="/assets/js/vendor/imagesloaded-pkgd.js"></script>
        <script async src="/assets/js/vendor/waypoints.min.js"></script>
        <script async src="/assets/js/vendor/venobox.min.js"></script>
        <script async src="/assets/js/vendor/odometer.min.js"></script>
        <script async src="/assets/js/vendor/meanmenu.js"></script>
        <script async src="/assets/js/vendor/jquery.isotope.js"></script>
        <script async src="/assets/js/vendor/wow.min.js"></script>
        <script async src="/assets/js/vendor/swiper.min.js"></script>
        <script async src="/assets/js/vendor/split-type.min.js"></script>
        <script async src="/assets/js/vendor/gsap.min.js"></script>
        <script async src="/assets/js/vendor/scroll-trigger.min.js"></script>
        <script async src="/assets/js/vendor/scroll-smoother.js"></script>
        <script async src="/assets/js/vendor/jquery.carouselTicker.js"></script>
        <script async src="/assets/js/vendor/nice-select.js"></script>
        <script async src="/assets/js/ajax-form.js"></script>
        <script async src="/assets/js/contact.js"></script>
        <script async src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
