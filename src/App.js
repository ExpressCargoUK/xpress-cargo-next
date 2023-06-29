import * as React from "react";
import { Route, Routes } from "react-router-dom";
import FCWhatsapp from "./common/FCWhatsapp";
import ScrollToTop from "./common/scrollToTop";
import Layout from "./Layout";
import AddBookingPage from "./pages/AddBooking";
import CustomsSecurityInformation from "./pages/CustomsSecurityInformation";
import FreightServices from "./pages/FreightServices";
import HelpAndTracking from "./pages/HelpAndTracking";
import InternationalRemovalsPage from "./pages/InternationalRemovals";

import Loading from "./pages/Loading";
import OceanFreightPage from "./pages/OceanFreight";
import ParcelPage from "./pages/ParcelPage";
import Services from "./pages/Services";
import Shop from "./pages/Shop";

const Home = React.lazy(() =>
  import("./pages/Home" /* webpackChunkName: "Home"*/)
);

const AboutUs = React.lazy(() =>
  import("./pages/AboutUs" /* webpackChunkName: "AboutUs"*/)
);

const ContactUs = React.lazy(() =>
  import("./pages/Contact" /* webpackChunkName: "Contact"*/)
);

const ExpressBaggage = React.lazy(() =>
  import("./pages/ExpressBaggage" /* webpackChunkName: "ExpressBaggage"*/)
);

const CustomClearance = React.lazy(() =>
  import("./pages/CustomClearance" /* webpackChunkName: "CustomClearance"*/)
);

// const SeaFreight = React.lazy(() =>
//   import("./pages/SeaFreight" /* webpackChunkName: "SeaFreight"*/)
// );

// const AirFreight = React.lazy(() =>
//   import("./pages/AirFreight" /* webpackChunkName: "AirFreight"*/)
// );
const RoadFreightService = React.lazy(() =>
  import(
    "./pages/RoadFreightService" /* webpackChunkName: "RoadFreightService"*/
  )
);
const QuotationForm = React.lazy(() =>
  import("./pages/QuotationForm" /* webpackChunkName: "QuotationForm"*/)
);

const AirFreightService = React.lazy(() =>
  import("./pages/AirFreightService" /* webpackChunkName: "AirFreight"*/)
);

const PackageYourItems = React.lazy(() =>
  import("./pages/PackageYourItems" /* webpackChunkName: "AirFreight"*/)
);

const WeightAndDimension = React.lazy(() =>
  import("./pages/WeightAndDimension" /* webpackChunkName: "AirFreight"*/)
);

const FrequentAskedQuestion = React.lazy(() =>
  import("./pages/FrequentAskedQuestion" /* webpackChunkName: "AirFreight"*/)
);

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/parcel" element={<ParcelPage />} />
          <Route
            path="/services/road-freight-service"
            element={<RoadFreightService />}
          />
          <Route path="/services/sea-freight" element={<OceanFreightPage />} />
          <Route path="/services/excess-baggage" element={<ExpressBaggage />} />
          <Route
            path="/services/custom-clearance"
            element={<CustomClearance />}
          />
          <Route path="/services/air-freight" element={<AirFreightService />} />
          <Route path="/freight-services" element={<FreightServices />} />
          <Route path="/services/shop-and-Ship" element={<Shop />} />
          <Route
            path="/services/international-removals"
            element={<InternationalRemovalsPage />}
          />
          <Route
            path="/help-tracking/quotation-form"
            element={<QuotationForm />}
          />
          <Route
            path="/help-tracking/add-booking"
            element={<AddBookingPage />}
          />
          <Route
            path="/help-tracking"
            element={
              <React.Suspense fallback={<Loading />}>
                <HelpAndTracking />
              </React.Suspense>
            }
          />
          <Route
            path="/help-tracking/how-to-package-your-Items"
            element={
              <React.Suspense fallback={<Loading />}>
                <PackageYourItems />
              </React.Suspense>
            }
          />
          <Route
            path="/help-tracking/weight-and-dimensions-guidance"
            element={
              <React.Suspense fallback={<Loading />}>
                <WeightAndDimension />
              </React.Suspense>
            }
          />

          <Route
            path="/help-tracking/customs-and-security-information"
            element={
              <React.Suspense fallback={<Loading />}>
                <CustomsSecurityInformation />
              </React.Suspense>
            }
          />

          <Route
            path="/frequent-asked-question"
            element={
              <React.Suspense fallback={<Loading />}>
                <FrequentAskedQuestion />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </React.Suspense>
  );
}

export default App;
