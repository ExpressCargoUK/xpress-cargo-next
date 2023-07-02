import { FaBox, FaCalendarAlt } from "react-icons/fa"
import { GiCargoCrate } from "react-icons/gi"
import { ImAirplane } from "react-icons/im"
import { MdBookmarks, MdLocationPin } from "react-icons/md"
import { RiShipLine, RiTimerFill } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"
import { TfiBag } from "react-icons/tfi"

export const footerCountry = [
  {
    title: "Country's",
    submenu: [
      {
        name: "United States",
        url: "https://www.usa.gov/",
      },
      {
        name: "India",
        url: "https://www.india.gov.in/",
      },
      {
        name: "China",
        url: "http://www.gov.cn/",
      },
      {
        name: "United Kingdom",
        url: "https://www.gov.uk/",
      },
      {
        name: "Canada",
        url: "https://www.canada.ca/",
      },
    ],
  },
  {
    title: "Country's",
    submenu: [
      {
        name: "Australia",
        url: "https://www.australia.gov.au/",
      },
      {
        name: "Kuwait",
        url: "",
      },
      {
        name: "Egypt",
        url: "",
      },
      {
        name: "Morocco",
        url: "",
      },
      {
        name: "Qatar",
        url: "",
      },
    ],
  },
  {
    title: "Country's",
    submenu: [
      {
        name: "Jordan",
        url: "",
      },
      {
        name: "Pakistan",
        url: "",
      },
      {
        name: "UAE",
        url: "",
      },
      {
        name: "Bahrain",
        url: "",
      },
      {
        name: "Tunisia",
        url: "",
      },
    ],
  },
  {
    title: "Country's",
    submenu: [
      {
        name: "Sudan",
        url: "",
      },
      {
        name: "Oman",
        url: "",
      },
      {
        name: "Algeria",
        url: "",
      },
      {
        name: "Saudi Arabia",
        url: "",
      },
      {
        name: "Bangladesh",
        url: "",
      },
    ],
  },
]

export const footerData = [
  {
    title: "Quick Links",
    submenu: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
    ],
  },
  {
    title: "services",
    submenu: [
      {
        title: "Air Freight",
        url: "/services/air-freight",
      },
      {
        title: "Sea Freight",
        url: "/services/sea-freight",
      },

      {
        title: "Road",
        url: "/services/road-freight-service",
      },
      {
        title: "Shop and Ship",
        url: "/services/shop-and-ship",
      },
      {
        title: "International Removals",
        url: "/services/international-removals",
      },
      {
        title: "Parcel",
        url: "/services/parcel",
      },
      {
        title: "Excess Baggage",
        url: "/services/excess-baggage",
      },
      {
        title: "Custom Clearance",
        url: "/services/custom-clearance",
      },
    ],
  },
]

export const navMenuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Air Freight",
        url: "/services/air-freight",
      },
      {
        title: "Sea Freight",
        url: "/services/sea-freight",
      },
      {
        title: "Road",
        url: "/services/road-freight-service",
      },
      {
        title: "Shop and Ship",
        url: "/services/shop-and-ship",
      },
      {
        title: "International Removals",
        url: "/services/international-removals",
      },
      {
        title: "Parcel",
        url: "/services/parcel",
      },
      {
        title: "Excess Baggage",
        url: "/services/excess-baggage",
      },
      {
        title: "Custom Clearance",
        url: "/services/custom-clearance",
      },
    ],
  },
  {
    title: "Tracking & Help",
    url: "/help-tracking",
    submenu: [
      {
        title: "AWB Tracking",
        url: "/help-tracking#awb-tracking",
      },
      {
        title: "Commodity Code Finder",
        url: "/help-tracking#commodity-code-finder",
      },
      {
        title: "Eori Number",
        url: "/help-tracking#eori-number",
      },
      {
        title: "Customs and Security Information",
        url: "/help-tracking/customs-and-security-information",
      },
      {
        title: "How to package your Items",
        url: "/help-tracking/how-to-package-your-Items",
      },
      {
        title: "Weight and dimensions guidance",
        url: "/help-tracking/weight-and-dimensions-guidance",
      },
      {
        title: "Quotation Form",
        url: "/help-tracking/quotation-form",
      },
      {
        title: "Add Booking",
        url: "/help-tracking/add-booking",
      },
      {
        title: "Frequently Asked Questions",
        url: "/frequently-asked-questions",
      },
    ],
  },

  {
    title: "About Us",
    url: "/about-us",
  },

  {
    title: "Contact Us",
    url: "/contact-us",
  },
]

export const services = [
  {
    title: "Road Freight",
    icon: <TbTruckDelivery />,
    description:
      "In the UK, nearly 80% of all freight is moved by road. We know all the challenges and solutions this type of freight transport entails. Let us be the freight forwarder company to tackle this task.",
    serviceType: "Road Freight",
    link: "/services/road-freight-service",
  },
  {
    title: "Air Freight",
    icon: <ImAirplane />,
    description:
      "If you need cargo moved fast – air freight is the way to go. But before your freight can take off, there are many little details to worry about. Leave that concern to your Express Cargo forwarder.",
    serviceType: "Air Freight",
    link: "/services/air-freight",
  },
  {
    title: "Sea Freight",
    icon: <RiShipLine />,
    description:
      "For extra-large international shipments, sea freight is often the best choice. The logistics and sea freight can be overwhelming when used with a strong network of shipping partners. We will happily do everything for you – from planning to execution.",
    serviceType: "Sea Freight",
    link: "/services/sea-freight",
  },
  {
    title: "Excess Baggage",
    icon: <TfiBag />,
    description:
      "Are you an international student in the UK or someone going home for holiday? Looking for the best option to ship your belongings back home? Our air freight and door-to-door courier services could save you time and money. Forget about high airline charges",
    serviceType: "Excess Baggage",
    link: "/services/excess-baggage",
  },
  {
    title: "Parcel",
    icon: <TfiBag />,
    description:
      "We understand that, even though your shipment is time sensitive, price is still important, which is why we have negotiated advantageous terms for our customers with leading courier companies.",
    serviceType: "Parcel",
    link: "/services/parcel",
  },
]

export const recentNews = [
  {
    title: "The Most Common International Shipping Mistakes You Should Avoid",
    description:
      "Besides the quality of your products, you also need to provide smooth shipping. Otherwise, you risk incurring unneces",
    imgurl:
      "/assets/images/maksym-kaharlytskyi-kDVaFjoQf4M-unsplash-2-390x200.jpg",
  },
  {
    title: "How E-Commerce Is Changing the Freight Forwarding Industry",
    description:
      "It’s incredibly time-saving because customers no longer need to visit brick-and-mortar stores to buy goods. It has al",
    imgurl: "/assets/images/kurt-cotoaga-MP6FMO8khn4-unsplash-390x200.jpg",
  },
  {
    title: "What to Consider While Shipping Hazardous and Dangerous Goods?",
    description:
      "There are special considerations involving their transport, including stringent declaration and customs requirements",
    imgurl: "/assets/images/tyler-casey-CkZF0-etxU8-unsplash-390x200.jpg",
  },
]

export const faqs = [
  {
    title: "A Freight Forwarder Company Saves You Time",
    description:
      "<ul><li><p>When you’re trying to get a business off the ground or make it thrive, time is the most valuable commodity.</p></li><li><p>Instead of wasting it, let us ensure that shipments are on time and the goods are in excellent condition. Figuring out which modes of transport are optimal and choosing a reliable shipping company is incredibly time-consuming.</p></li><li><p>Plus, you still might not get it right. Then there’s laying out all the necessary documentation.</p></li><li><p>As a freight forwarder company, we can take over all the tedious shipping tasks and let you focus on other business areas.</p></li><li><p>Furthermore, every competent freight forwarder understands how time-sensitive shipping can be.</p></li><li><p>There are times where the freight needs to reach the destination at a specific time. Not a moment before or after.</p></li><li><p>This type of efficiency and precision in logistics planning is something we can deliver as a freight forwarder company.</p></li></ul>",
  },
  {
    title: "A Freight Forwarder Company Saves You Energy",
    description:
      "<ul><li><p>You might already have excellent ideas on how to optimise the shipping of goods. Many of our clients know what is best for their business.</p></li><li><p>However, as a business owner, you have to negotiate with vendors and prepare essential documentation. This can take a lot of effort that could have been used for more creative purposes.</p></li><li><p>You can preserve your energy by choosing a reliable freight forwarder company and let us take on all the tedious tasks.</p></li><li><p>Think of all the areas of running a business that requires focus and effort.</p></li><li><p>You have to manage employees, payroll, and marketing strategy. Why not leave the export and import in the capable hands of a freight forwarder?</p></li></ul>",
  },
  {
    title: "A Freight Forwarder Company Saves You Money",
    description:
      "<ul><li><p>Partnering with a freight forwarder is indeed a cost-effective solution. Granted, it might not seem that way at first as you need to allocate a budget for the services, which may seem expensive.</p></li><li><p>As a trustworthy partner in your business, we offer a whole range of services that save money in ways you might not anticipate.</p></li><li><p>Express Cargo cooperates with an entire network of partners that range from shipping companies to insurance agencies.</p></li><li><p>We are in a unique position to negotiate the best prices for our clients. That’s the side of our business that we’re especially proud of.</p></li><li><p>We’re experts at cargo consolidation, which can be a game-changer for small- to medium-sized businesses.</p></li><li><p>Do you need help streamlining the entire shipping process?</p></li><li><p>Let your freight forwarder manage all the moving parts such as rerouting, documentation, customs, and everything else that might give you a headache. Helping you move your cargo is where we shine.</p></li></ul>",
  },
]

export const offers = [
  {
    title: "Secure Door-to-Door Delivery",
  },
  {
    title: "UK and international delivery",
  },
  {
    title: "A wide range of FREE envelopes and boxes in store",
  },
  {
    title: "Simple pricing from $7.95",
  },
  {
    title: "Send your parcels to more than 220 countries and worldwide",
  },
  {
    title: "Track your parcel every step of the way online",
  },
  {
    title: "Parcel signed for delivery",
  },
]

export const airFreightServices = [
  {
    icon: <FaCalendarAlt />,
    title: "Several departures per week.",
  },
  {
    icon: <MdLocationPin />,
    title: "We can arrange collection from anywhere.",
  },
  {
    icon: <FaBox />,
    title: "Alternatively, you can deliver to us.",
  },
]

export const airFreightInformation = [
  {
    title: "Airport-to-airport Air Freight Services",
    descriptions:
      "<p>Our air freight services operate from airport to airport. You can either drop the goods at our drop-off depots yourself, or we can arrange to collect from you at an additional cost.</p><p>Once the goods have been shipped to the destination airport, the consignee is responsible for collecting the goods and paying any local handling and clearance charges.</p>",
  },
  {
    title: "Consolidation Services",
    descriptions:
      "<p>This greatly reduces the freight costs as the space os pre-booked in advance. It is longer than your standard express service, but it will be cost effective if you are not in a hurry.</p>",
  },
  {
    title: "Back to Back Services",
    descriptions:
      "<p>Tour freight is booked directly with the Airline and allocated its own Master Air Waybill. This service is very fast and reliable.</p>",
  },
  {
    title: "Door-to-Door Services",
    descriptions:
      "<p>We provide a domestic and international courier service. We mainly provide door to door for such things as documents, sample shipments. This is an express services. Please use our parcel delivery service on our website to book directly</p>",
  },
]

export const seaFreightServices = [
  {
    icon: <RiTimerFill />,
    title:
      "We provide the fastest and most frequent sea freight service worldwide from the UK",
  },
  {
    icon: <MdBookmarks />,
    title:
      "A complete sea freight service to meet your needs - no shipment is too large or too small.",
  },
  {
    icon: <RiShipLine />,
    title:
      "Weekly sailings with a transit time of approximately average 21 days.",
  },
]

export const seaFreightInformation = [
  {
    title: "General Dry Container Services",
    descriptions:
      "<p>We provide 20FT and 40FT Standard and High Cube Container boxes for various applications either personal or commercial shipments.</p>",
  },
  {
    title: "Refrigerated Container Services",
    descriptions:
      "<p>These are specialized containers for sending specific cargo that requires temperature control. For example for sending meat, chocolate, medicines. We provide 20FT and 40FT containers.</p>",
  },
  {
    title: "Roll On/Roll Off RoRo Services",
    descriptions:
      "<p>If you need an automobile to be sent by sea then RO/Ro service is the best fot you. THese are ships specially designed to transport any car types, trucks, vans and heavy machinery such as crawlers, bulldozer and so on.</p>",
  },
  {
    title: "Container Warehousing Services",
    descriptions:
      "<p>If you are buying goods and would like later to send by container then look no further. We have a great waterhouse facility that enables you to rent a space the size of a standard container 20FT. This space will give you and indication how much you can fill in a standard container. We can also arrange a 40FT container space if required. Contact our staff for further details.</p>",
  },
]

export const serviceFaqs = [
  {
    title: "Learn why people turn to us",
    description:
      "<ul><li><p>We welcome your challenges</p></li><li><p>We provide solutions for the challenges</p></li><li><p>We are committed to you and your cargo</p></li><li><p>We have Pan-European resource access</p></li><li><p>We offer dedicated fleet options throughout Europe</p></li><li><p>We guarantee timely delivery and a dedicated Europe-wide service</p></li></ul>",
  },
  {
    title:
      "We offer comprehensive services and deliver competitive performance",
    description:
      "<ul><li><p>Consolidated invoicing options and claims management</p></li><li><p>Professional, proactive employees who prioritise your transport needs</p></li><li><p>Dedicated fleet services for groupage and part-load throughout key European locations</p></li><li><p>Our services are in line with the Green Freight Europe initiative</p></li><li><p>Temperature-controlled trucks, small vans, tilt trailers – we have all the equipment to match your transport needs</p></li></ul>",
  },
  {
    title:
      "Talk to us; tell us all about your concerns and issues. We don’t base our recommendations selling our services – we focus on your satisfaction.",
    description:
      "<ul><li><p>In accordance with the Green Freight Europe initiative, we focus on reducing empty kilometres and unnecessary fuel consumption.</p></li><li><p>We specialise in presenting you with a solution, no matter whether your capacity requirements have increased, are experiencing production surges, or are looking to enter new markets.</p></li><li><p>We boast one of the largest European carrier networks and our multi-lingual partners provide services in more than 25 languages.</p></li></ul>",
  },
]

export const roadFreightBenefits = [
  {
    title: "Getting the right haulage",
    description:
      "<p>We know how important every step of the journey is. With this is mind we carefully choose the right haulage network for each and every shipment.</p>",
  },
  {
    title: "We only use hand picked, proven hauliers",
    description:
      "<p>Express Cargo have strong established partnerships with a variety of hand picked UK hauliers who we work with on a daily basis.</p>",
  },
  {
    title: "Any size or type of Cargo, throughout the UK & Europe",
    description:
      "<p>Fully tracked domestic distribution services for parcels, pallets and part loads extend to all corners of the United Kingdom.</p>",
  },
]

export const roadFreightOtherServices = [
  {
    title: "Sea",
    icon: <RiShipLine />,
    description:
      "For extra-large international shipments, sea freight is often the best choice. The logistics and sea freight can be overwhelming when used with a strong network of shipping partners. We will happily do everything for you – from planning to execution.",
    serviceType: "Sea",
  },
  {
    title: "Air",
    icon: <ImAirplane />,
    description:
      "If you need cargo moved fast – air freight is the way to go. But before your freight can take off, there are many little details to worry about. Leave that concern to your Express Cargo forwarder.",
    serviceType: "Air",
  },
  {
    title: "Project Cargo",
    icon: <GiCargoCrate />,
    description:
      "Heavy-duty, high-value, and bulky cargo requires a specialised type of transportation called project cargo. If your business requires international shipping of such items, your freight forwarder must know all the ins and outs of this complex service. Our onboard team is ready to organise and track every step of this process.",
    serviceType: "Cargo",
  },
  {
    title: "Supply Chain",
    description:
      "A global supply chain is a well-oiled machine, but only because experts such as ours are busy making it work. If you need a freight forwarder company that can ensure your products reach the consumer, the Express Cargo team has your back.",
    serviceType: "Supply Chain",
  },
]

export const pricing = [
  {
    title: "MIDDLE EAST",
    per30kg: "£165",
    currency: "£",
    perKg: "1.95",
  },
  {
    title: "AFRICA",
    per30kg: "£175",
    currency: "£",
    perKg: "2.75",
  },
  {
    title: "ASIA",
    per30kg: "£155",
    currency: "£",
    perKg: "2.10",
  },
]

export const retailers = [
  "/assets/images/apple.png",
  "/assets/images/ebay.png",
  "/assets/images/amazon.png",
  "/assets/images/harrods.png",
  "/assets/images/selfridges.png",
  "/assets/images/debenhams.png",
  "/assets/images/john-lewis.png",
  "/assets/images/house-of-fraser.png",
  "/assets/images/harvey-nichols.png",
]

export const parcelPackageData = [
  {
    title: "What happens if my parcel or cargo is held by customs?",
    description:
      "<ul><li><p>Your items may be held by customs if they are subject to customs duties and taxes, or if they are prohibited or restricted.</p></li><li><p>Import duties and taxes—including administrative fees—may be payable by the receiver depending on the commodity and value of the goods. In some (but not all) countries, personal effects are exempt from these charges.</p></li><li><p>Failure by the receiver to pay customs charges will result in the return or destruction of the shipment. Any charges applied as a result of this will be billed to Customer</p></li><li><p>What are my responsibilities as a shipper?</p></li><li><p>As the shipper, you must:</p></li><li><p><b>Ensure that you send no prohibited or restricted items:</b></p></li><li><p>For example, some governments restrict certain foodstuffs from entering their country. Please view our list of dangerous and hazardous items that are universally prohibited.</p></li><li><p><b>Ensure that you have all of the necessary documentation:</b></p></li><li><p>All international shipments require a Packing List, also known as a Customs Invoice, which details the contents of your consignment. We will generate one of these for you, or if you are a business you can use your own. See our Packing List guide. (Until 31st December 2020, a Packing List / Customs Invoice is not required for shipments between the UK and the EU.)</p></li><li><p>Certain countries may require additional documentation depending on what you are sending..</p></li></ul>",
  },
]

export const parcelPackageData2 = [
  {
    title: "Where can I find information about customs?",
    description:
      "<ul><li><p>Rules and regulations can vary widely, which means it is not always feasible for us to provide comprehensive and up-to-date customs information.</p></li><li><p>For full customs information, you can usually refer to a country's government website, or contact them directly.</p></li></ul>",
  },
  {
    title: "Economic Operator Registration and Identification (EORI)",
    description:
      "<ul><li><p>The EORI Number is a way of improving security and speeding up customs clearance for goods entering and leaving the UK and the European Union.</p></li><li><p>All UK companies that ship goods internationally should have an EORI number. Businesses need to make sure they have registered a UK-specific EORI number starting with the letters GB (or XI for Northern Ireland). You can <a href='https://www.gov.uk/eori' target='_blank'>register online</a>.</p></li><li><p>The EORI number for most UK companies takes the following format: GB (or XI), followed by your nine digit VAT number, and ending with a three digit 000 suffix. For example: GB123456789000.</p></li><li><p>The EORI number for most UK companies takes the following format: GB (or XI), followed by your nine digit VAT number, and ending with a three digit 000 suffix. For example: GB123456789000.</p></li><li><p><a href='https://www.tax.service.gov.uk/check-eori-number' target='_blank'>Launch EORI Number Validator</a></p></li><li><p>You will need a separate EU EORI number for any import or export declarations made within EU countries. For the EU number, you can make your application to whichever member state you deal with first. Check to see if your EU EORI number is valid by entering it into the <a href='http://ec.europa.eu/taxation_customs/dds2/eos/eori_validation.jsp?Lang=en' target='_blank'>EORI Number Validator</a>.</p></li></ul>",
  },
  {
    title: "Commodity Codes",
    description:
      "<ul><li><p>Commodity codes are used to inform customs of the precise contents of your shipment, alongside descriptions of individual items. E.g. 4202321000 and '50 x plastic mobile phone cases'.</p></li><li><p>From 1st January 2021, they will be required for all shipments to and from the UK. Previously they were not needed when shipping to and from EU countries, but this is set to change. Please see our Brexit page for more information.</p></li><li><p>While commodity codes are generally only required for commercial shipments, we advise that you should always provide descriptions of goods to ensure a smooth delivery.</p></li><li><p>You can use our Commodity Code Finder to search for commodity codes. We advise doing this ahead of your booking as it can take some time.</p></li></ul>",
  },
]

export const WeightAndDimension = [
  {
    title: "Weighing and measuring your parcel",
    description:
      "<ul><li><p>Weigh your parcel once it is packaged and sealed. If possible, use digital scales for accuracy.</p></li><li><p>You'll also need to measure the length, width and height of your box.</p></li><li><img src='/assets/images/parcel-weighting.gif' alt='Parcel weighing' /></li><li><p>For irregularly shaped objects, measure to the furthest point on each side.</p></li><li><img src='/assets/images/parcel-weighting2.gif' alt='Parcel weighing 2' /></li><li><p>It's important that your parcel is weighed and measured as accurately as possible. Couriers will weigh and measure your parcel after collection. If your parcel is heavier or larger than stated, you will be billed for related costs.</p></li><li><p>Record your measurements</p></li><li><p><b>It's always a good idea</b> to take a few photos of your sealed parcels, next to a tape measure and on the weighing scales. These may help in the rare event that the courier disputes your stated measurements.</p></li><li><p>Importing personal effects to the UK</p></li><li><p>Shippers are required to make <a href='https://www.gov.uk/government/publications/application-for-transfer-of-residence-tor-relief-tor01' target='_blank'>an application</a> to HMRC prior to importing household goods and personal effects to the UK as a Transfer of Residence (ToR), in order to claim VAT and duty relief for importing personal belongings.</p></li><li><p>The shipper must complete and sign the application form and provide any supporting documentation.</p></li><li><p>The application must be made prior to shipping any consignments to the UK. If the applicant is successful in obtaining Transfer of Residence relief, the applicant will then be awarded unique declaration information in the form of an authorisation number, which can be included on the customs invoice (packing list).</p></li></ul>",
  },
  {
    title: "Export preference",
    description:
      "<ul><li><p>Exporters may be entitled to claim a preferential tariff on the import of certain goods. Please see <a href='https://www.gov.uk/guidance/importing-and-exporting-using-international-trade-preferences#eligibility-for-export-preferences' target='_blank'>the HMRC website</a> for more information.</p></li></ul>",
  },
  {
    title: "Export licenses for controlled goods",
    description:
      "<ul><li><p>For some controlled goods, an export license is required. This depends on the nature of the goods, the destination, and the end use - for example, military items or items that could be used for military purposes are likely to be controlled (if they aren't prohibited by carriers anyway).</p></li><li><p>The license requirement may also depend on whether the origin of your shipment is Great Britain or Northern Ireland.</p></li><li><p>You can apply for different types of license using <a href='https://www.spire.trade.gov.uk' target='_blank'>SPIRE</a>, the UK government's licensing system.</p></li><li><p>Licenses such as OGELs (general export licenses) are reusable licenses for exporters who regularly send certain types of item. Others, such as OIELs or SIELS (individual export licenses), are valid for fixed periods to named destinations.</p></li><li><p>Please refer to <a href='https://www.gov.uk/government/publications/spire-online-export-licensing-guidance/using-spire-to-get-an-export-licence' target='_blank'>GOV.UK</a> for more information, including a full list of license types.</p></li><li><p>Additional Information</p></li><li><p>HMRC: <a href='https://www.gov.uk/topic/business-tax/import-export' target='_blank'>Guide to importing and exporting</a></p></li></ul>",
  },
]

export const FrequentAskedQuestionData = [
  {
    heading: "Air Freight Booking",
    questionAndAns: [
      {
        title:
          "Q. I want to make a booking for an air shipment, what do I need to do?",
        description:
          "A. Please use our quotation form and fill the necessary details, once we receive your information we will provide you with a competitive quote.",
      },
      {
        title: "Q. What am I not allowed to send for air freight shipments?",
        description:
          "A. There are many restricted items you cannot send, such as batteries, flammables, perfumes, aerosols failure to declare these could result in penalty charge. Please view our dangerous goods section for further information.",
      },
      {
        title:
          "Q. I cannot bring my shipment to your warehouse can you collect my cargo?",
        description:
          "A. We can collect your shipment at an additional cost. Prices vary from area to area.",
      },
      {
        title: "Q. Do you provide wrapping and boxes?",
        description:
          "A. We can provide wrapping and boxes, but please note there is an additional charge for these materials. To find out more please call our office on <a href='tel:01618820666'>0161 88 20666</a>.",
      },
      {
        title:
          "Q. How long does it usually take for a shipment to arrive after collection from the UK to destination?",
        description:
          "A. If the collection point is out of Manchester, then it usually takes 2 days to arrive to our warehouse. After arrival we book on the same day and deliver. Air freight takes usually 4-7 days to arrive at international destinations. Europe takes 1-3 days.",
      },
      {
        title:
          "Q. How do I collect my shipment when it arrives at destination?",
        description:
          "A. When you book your shipment a Master Airway Bill is produced. If you want the original you can pick up from our office, but it is not essential to have an original. For your convenience we scan the original and send by email, so you can print to collect your goods.",
      },
      {
        title:
          "Q. If I am unable to collect the shipment can a member of family or a friend collect the shipment for me?",
        description:
          "A. Yes. You can have a member of family or friend as the consignee on your airway bill.",
      },
      {
        title:
          "Q. Is there a custom clearance charge when my shipment arrives at the airport?",
        description:
          "A. yes there is. Every country has its different customs rates and regulations, please contact your.",
      },
    ],
  },
  {
    heading: "Sea Freight Booking",
    questionAndAns: [
      {
        title: "Q. What is a 20FT and a 40FT Container?",
        description:
          "A. A 20FT container is 6 meters in length and is the standard container for shipping by sea. The 40FT is twice the size at 12M in length and is usually used for commercial shipments or personal effects.",
      },
      {
        title: "Q. I want to book a container what do I do?",
        description:
          "A. please fill our sea freight contact form with all the required information and one of our team will contact you shortly.",
      },
      {
        title: "Q. After I make a booking what happens next?",
        description:
          "A. After your booking is confirmed we will inform you by phone or email. Depending on your shipment you should prepare the site for the truck that has the container on the loading site. Please be advised that all containers are on the truck and they are not put on the ground. On the point of arrival of the truck on the site you have 3 hours to load the container. After that there is a penalty for the truck over staying, which customer is liable to pay.",
      },
      {
        title: "Q. I have loaded the container what happens next?",
        description:
          "A. Once you load your container please email Express Cargo with the container and seal number with clear instructions on who will be the shipper and the consignee. These details must include the full address and telephone details and email. Once we receive that we will provide you with a draft bill of lading, which is the legal document for your shipment that will be used to clear container to destination. Please be advised that any changes after printing will incur extra charges. Please view our Bill of Approval guide lines. Once you approve the bill of lading you can have telex release, which is a paperless bill of lading that is printed for you to take.",
      },
      {
        title: "Q. When I send a container is the custom clearance included?",
        description:
          "A. We only provide port to port service and please see our customs clearance guide page for more details.",
      },
    ],
  },
  {
    heading: "Parcel Booking",
    questionAndAns: [
      {
        title: "Q. How do I get a parcel delivery quote?",
        description:
          "A. You can get a free, no-obligation quote by contacting us. Simply fill the necessary details of what you’re sending  from and to which country, along with the weight and dimensions of your parcel.",
      },
      {
        title: "Q. Do I need weight and dimensions to get a quote?",
        description:
          "A. To obtain an accurate quote, we require both the weight and dimensions of each item of your consignment. <br/> For information on how to accurately weigh and measure your parcels, please see our weighing and measuring guide.",
      },
      {
        title:
          "Q. Why is it necessary to specify if I'm sending a document or a parcel?",
        description:
          "A. There are extra services for documents only, which are usually cheaper than their non-document counterparts. Also, documents do not require customs invoices (also known as packing lists) for shipments to countries outside of the EU.",
      },
      {
        title: "Q. Do I need to provide weight and dimensions for documents?",
        description:
          "A. Yes, you will need to provide weight and dimensions for documents. Please refer to our weighing and measuring FAQ.",
      },
    ],
  },
  {
    heading: "Customs duties and taxes",
    questionAndAns: [
      {
        title: "Q. What is a Customs Invoice?",
        description:
          "A. A Customs Invoice is used to assist with customs clearance. It is also referred to as a packing list, pro forma invoice or commercial invoice. A Customs Invoice should detail your consignment as accurately as possible to avoid any clearance delays. It is a mandatory requirement for shipping goods outside of the EU. From 1st January 2021, all shipments between the UK and the EU will require a customs invoice / packing list. Please refer to our Customs Information.",
      },
      {
        title: "Q. Do I need a Customs Invoice when sending to EU countries?",
        description:
          "A.  From 1st January 2021, all shipments between the UK and the EU will require a customs invoice / packing list.",
      },
      {
        title: "Q. Will I need to pay customs duties and taxes?",
        description:
          'A. For deliveries outside of the EU, the recipient may be required to pay customs duties, taxes or fees. We are generally not involved in this process (with some exceptions—please see specific service info), and as such customs fees will not be included in your quote. The carrier will be in touch with the recipient directly and the relevant Customs office will retain your items until the fees are paid. Sometimes the carrier will pay duties and taxes on behalf of the receiver and recover the costs on delivery (sometimes referred to as "cash on delivery"). When this happens, the invoice to the receiver will be from the carrier, not customs. You will need to check the customs regulations for your destination country to see if you are likely to have to pay customs charges, which may depend on the nature or size of your consignment.',
      },
    ],
  },
  {
    heading: "Shipping labels",
    questionAndAns: [
      {
        title: "Q. What labels and documentation will I need?",
        description:
          "A. The documentation required varies from service to service. For door-to-door courier services, we will generate your documentation for you when you make your booking. After you have made your booking, we will email you instructions regarding the documents required. <br/> For air and sea freight services, we will manually generate your documentation and email it to you.",
      },
      {
        title: "Q. My labels have not been emailed to me – what do I do?",
        description:
          "A. Your documents should be generated and emailed to you within an hour of booking. If you have not received your documents please contact us.",
      },
      {
        title: "Q. Can the driver provide me with a label?",
        description:
          "A. While the drivers may carry manual shipping labels, we must insist that our pre-printed labels are used in order to avoid billing complications.",
      },
    ],
  },
  {
    heading: "Dangerous, hazardous and restricted items",
    video: true,
    questionAndAns: [
      {
        title: "Q. Are there any country-specific restrictions?",
        description:
          "A. Each destination country will have its own set of regulations and requirements that you will need to be aware of before attempting to send your goods there.",
      },
      {
        title:
          "Q. Why can't I send perfume by air cargo, when I can take it on the aeroplane?",
        description:
          "A. Perfume is considered a dangerous and hazardous item because it is flammable due to its alcohol content. In the high pressure of an aeroplane’s cargo hold (as opposed to the aircraft cabin where the passengers sit), this is very unsafe. <br />The decision not to allow the international shipment of perfume is one made by Civil Aviation Authorities and enforced by all carriers.",
      },
      {
        title: "Q. can I send mobile phones?",
        description:
          "A. There are restrictions on sending devices that use lithium ion batteries. However, you can usually send mobile phones if the battery is transported inside the device. Restrictions may vary depending on carrier and destination country. We advise that you contact us before proceeding with your booking.",
      },
    ],
  },
  {
    heading: "Packaging, weighing and measuring",
    questionAndAns: [
      {
        title: "Q. What is volumetric weight, and how do I measure it?",
        description:
          'A. "Volumetric weight" refers to the amount of space that a package occupies. It’s usually relevant when an item is of a large size but weighs relatively little. Your shipment will be charged based on either actual weight or volumetric weight depending on which is largest.',
      },
      {
        title: "Q. What if my consignment is fragile / must be kept upright?",
        description:
          'A. All carriers handle parcels with the same standardised level of care. Parcels may be stacked and are processed through automated sortation centres using conveyors and chutes. As such, FRAGILE or orientation ("this way up") labels may be ignored. You will need to package your items securely - as a general rule, your parcel should be able to withstand a drop from waist height onto a solid floor.',
      },
    ],
  },
]
