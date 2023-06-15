import fs from 'fs';
import { join } from 'path';


export const serviceData = [
   {
    id:"mobile",
    image: "/assets/png/mobile-app-big.png",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "We are pushing the boundaries of what’s possible on mobile by creating transformative mobile experiences that solve business challenges for clients ranging from large enterprises to innovative startups and creative entrepreneurs. With in-depth knowledge of native iOS, Android and cross-platform application development, we make sure that your idea is transformed into a beautifully designed, user-friendly and engaging mobile solution of superior quality.",
    sub: {
      title: "MOBILE APP DEVELOPMENT SERVICES",
      description:
        "We are pushing the boundaries of what’s possible on mobile by creating transformative mobile experiences that solve business challenges for clients ranging from large enterprises to innovative startups and creative entrepreneurs. With in-depth knowledge of native iOS, Android and cross-platform application development, we make sure that your idea is transformed into a beautifully designed, user-friendly and engaging mobile solution of superior quality.",
    },
    services: [
      {
        image: "/assets/png/license-maintenance.png",
        title: "Business-Oriented Enterprise Mobile Apps",
        description:
          "We have built Enterprise apps for the likes of Google, Microsoft, and other industry heavyweights over the years. Our deep experience sets us apart to deliver ‘from idea to product’ by developing robust applications that link your niche product with your customers.",
      },
      {
        image: "/assets/png/license-maintenance-draft.png",
        title: "Mobile App Maintenance & Support",
        description:
          "We are here whenever you need us to be a second set of eyes on your existing product and/or infrastructure as upgraded service or even to seamlessly transition development support post-launch.",
      },
      {
        image: "/assets/png/icon-park-outline-app.png",
        title: "Business-Oriented Mobile Integrated Apps",
        description:
          "We offer secure, scalable mobile app development integrated with corporate systems. We partner to give you a fresh approach with the latest market trends and framing monetization strategies.",
      },
    ],
  },
  {
    id: " uiux",
    image:"/assets/png/ui-ux.png",
    title: "UI/UX - INTERACTIVE & VISUAL DESIGN",
    description:
      "We use latest UI/UX configuration to construct interactive mobile and website designs interfaces for your business. UI/UX designers are responsible for attractive and engaging visual designs on a website or app to ensure better user engagement. Acksession prides itself on being a trusted UX/UI leader. Our undying mission is to create an intuitive and easy navigation system for the website or app, resulting in higher customer touchpoints, fewer clicks to close, and ultimately profitability.",
    sub: {
      title: "USER-FRIENDLY WEB DESIGN AND UI UX SERVICES",
      description:
        "Deliver an intuitive design to create a modern user-experience with key interaction points in your system.",
    },
    services: [
      {
        image: "/assets/png/design-pencil.png",
        title: "Design & Development",
        description:
          "Our motive is to create design and experience that resonate with your project, goals and expectations. Our UI/UX designers will be by your side right from the conceptualization to testing and support as well as directing some of the key developers design decisions.",
      },
      {
        image: "/assets/png/chart-arrows-vertical.png",
        title: "Experience Design",
        description:
          "To attract more visitors to your portal, you need immersive designs, excellent visuals and engaging features. Our designers are well-versed in delivering the projects that get maximum user attention.",
      },
    ],
  },
   {
    id:"customerexperience",
    image: "/assets/png/seo-big.png",
    title: "CUSTOMER EXPERIENCE",
    description:
      "If you are looking to embrace a customer-first mindset or need a hard look of a customer-centric strategy you’ve already adopted? Acksession can be your strategic partner in taking a look or building out the necessary interactive tools to reimagine what the front office experience looks like.",
    adviceText: "Need an advice? Talk to our experts",
    sub: {
      title: "ECOMMERCE",
      description:
        "In today’s hyperconnected shopping environment, your product must balance complexity and simplicity. We drive both with the goal of driving profitable growth of your product.",
    },
    services: [

      {
        image:"/assets/png/application-icon.png",
        title: "Customer Service Applications",
        description:
        "We are here whenever you need us to give a second life to your existing infrastructure as upgraded service or even to provide breathing after your site goes live for maintenance.",
    },
    {
          image:"/assets/png/application-mobile-icon.png",
          title: "Digital Marketing Transformation",
          description:
          "Scaling your business is an art requiring a robust strategy that leverages operational excellence, digital tools as well as complex integrations. Have an idea? Let us help you imagine what it could look like.",
        },
        {
          image:"/assets/png/unified-experience.png",
        title: "Unified Experiences",
        description:
          "Acksession helps align your product/brand ethos with the client experience in the digital layer.",
      },
    ],
  },
   {
    id:"erp",
    image: "/assets/png/erp-big.png",
    title: "ERP (ENTERPRISE RESOURCE PLANNING)",
    description:
      "Our team has significant experience and domain knowledge in the ERP space (Enterprise Resource Planning). If you’re looking to integrate multiple API layers into one back-end solution or manage multiple workflows, financial flows, and manufacturing processes – we can assist.",
    sub: {
      title: "PROCESS AUTOMATION",
      description:
        "Eliminate manual operations and push efficiency by streamlining day-to-day tasks within the company. Your company’s overall efficiency will skyrocket.",
    },
    services: [
      {
        image:"/assets/png/streamline-data-in-cloud.png",
        title: "Streamline Data in the Cloud",
        description:
        "Aggregate all your data in one place so you can keep it consistent and up-to-date.",
    },
    {
          image:"/assets/png/cloud-provider-strategy.png",
        title: "Cloud Provider Strategy",
        description:
          "Acksession will help you select the right cloud storage providers and implement a strategy that is tailored to fit your specific needs.",
      },
    ],
  },
 {
  id:"ai",
    image: "/assets/png/ai-big.png",
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "AI is driving uncharted business value in today’s world economy. Technologies like machine learning and automation are all part of the AI landscape, evolving along their own path. Acksession adds a powerful layer of data, analytics, and automation to deliver a robust solution to improve your existing service or optimize your operation.",
    sub: {
      title: "OPTIMIZE EFFICIENCY",
      description:
        "AI eliminates friction and improves analytics and resource utilization across your organization, resulting in reduced costs.",
    },
    services: [
      {
        image:"/assets/png/apps.png",
        title: "Intelligent Services",
        description:
          "Uncover gaps and opportunities in your business to help introduce new products, services, and channels with speed and quality that wasn’t possible before.",
      },
      {
        image:"/assets/png/multiline-chart.png",
        title: "Quicker Decisions",
        description:
          "The augmentation of machines to human intelligence with analytics and pattern prediction helps improve the quality and effectiveness of key decision making within your company.",
      },
    ],
  },
   {
    id:"ecommerce",
    image: "/assets/png/e-commerce-icon-big.png",
    title: "E-COMMERCE",
    description:
      "The COVID-19 pandemic pushed commerce into a world of hyper connected omni-channel experiences where the customer is empowered to drive the shopping journey from wherever they may be. If you’re not re-imagining what this new world could look like or simply need help getting there – we offer our team of experts to assess what you currently have and fill-in or envelope with a complete overhaul of your existing systems.",
    sub: {
      title: "MOBILE APP SHOPPING",
      description:
        "The core of any successful product is an empowered customer – mobile apps are at the heart of this strategy. Let us help you build that experience.",
    },
    services: [
      {
        image:"/assets/png/click-to-fold.png",
        title: "Interactive eCommerce",
        description:
        "Reduce the clicks to check out and optimize meaningful touchpoints. This is a marriage of robust development and superior UI/UX design that keeps the customer digital cart experience in mind.",
    },
    {
        image:"/assets/png/shopping.png",
        title: "Complex APIs",
        description:
        "Need to connect to that virtual inventory system, marketing automation platform, or even payment gateway? Acksession can take over after assessing the third-party’s API docs.",
    },
    {
          image:"/assets/png/credit.png",
        title: "Payment Gateways",
        description:
          "Having a seamless payment experience is core to every eCommerce strategy. No matter who you are working with to accept payments – we can help you get connected.",
      },
    ],
  },
   {
    id:"datascience",
    image: "/assets/png/erp-big.png",
    title: "DATA SCIENCE & BI (BUSINESS INTELLIGENCE)",
    description:
      "Data when applied in a meaningful way always tells a story. The most successful products/platforms and teams are the ones who can extract meaningful data insights and communicate it to the key stakeholders across all layers of the organization. Acksession has deep experience in building BI tools that can spark the digital transformation you’re looking for.",
    sub: {
      title: "BUSINESS INTELLIGENCE PLATFORM",
      description:
        "We can help comb through those Database Tables and tag key data points that you want to display in a robust BI platform. Once identified, let us build you an interactive and usable tool that can open areas of opportunity for your product.",
    },
    services: [
      {
        image: "/assets/png/stats-report.png",
        title: "Advanced Reporting",
        description:
          "A good report highlights areas needing attention. Let us partner with the business stakeholders to identify the information they care about and build them out in custom reports.",
      },
      {
        image: "/assets/png/chart-line-data.png",
        title: "Dashboards & Visualizations",
        description:
          "Building an effective dashboard means it needs to be digestible to the user in seconds. This is the heart of any good BI strategy, and Acksession can be your partner in realizing this goal.",
      },
    ],
  },
   {
    id:"digitalmarketing",
    image: "/assets/png/digital-marketing-icon-big.png",
    title: "DIGITAL MARKETING",
    description:
      "We are pushing the boundaries of what’s possible on mobile by creating transformative mobile experiences that solve business challenges for clients ranging from large enterprises to innovative startups and creative entrepreneurs. With in-depth knowledge of native iOS, Android and cross-platform application development, we make sure that your idea is transformed into a beautifully designed, user-friendly and engaging mobile solution of superior quality.",
    sub: {
      title: "CRM",
      description:
        "Central to any good marketing strategy is a CRM that houses the relationship with your biggest asset – your customers. Have a CRM already or want us to help design and develop one? Acksession can help.",
    },
    services: [
      {
        image:"/assets/png/circles.png",
        title: "Social Media Integrations",
        description:
        "Social Media has evolved into one of the most powerful tools to market your product. Need to integrate Social SSO or something else? Let's talk.",
    },
    {
        image:"/assets/png/calendar.png",
        title: "Search Engine Marketing",
        description:
        "Optimize your website and app to be found. Acksession nests this type of logic in all of our builds to make sure your customers can find you.",
    },
    {
          image:"/assets/png/design-pencil.png",
        title: "Engaging Graphics",
        description:
          "Our UI/UX designers are the best in the business and can assist you with custom illustrations or digital art that captures attention.",
      },
    ],
  },
];


export const POST = async (req) => {
  const newServices = await req.json();

  const filePath = join(process.cwd(), 'app/api/services/services.json');
  // const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  // console.log(serviceData)

  // const updatedData = [...existingData, ...serviceData];

  fs.writeFileSync(filePath, JSON.stringify(serviceData));

  return new Response(JSON.stringify(serviceData));
};
