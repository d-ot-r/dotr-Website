import { Why_DOTR } from "../- ReUseable/Why_DOTR";

export const why_choose_dotr = [
  {
    category: "home",
    id: 1,
    title: "📢 Transparent Communication",
    description:
      "We believe that clear and open communication is the foundation of every successful project. At DOTR, we keep you informed at every stage, providing regular progress updates, feedback sessions, and quick issue resolution. Whether it’s design approvals, development milestones, or last-minute changes, we ensure you’re never left in the dark. Our collaborative approach builds trust and strengthens our partnership.",
    bgColor: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    category: "home",
    id: 2,
    title: "⏳ Timely Delivery",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    bgColor: "bg-pink-900",
    animationSpeed: 3,
  },
  {
    category: "home",
    id: 3,
    title: "📞 24/7 Support and Assistance",
    description:
      "Technology never stops, and neither do we. Our support team is available around the clock to assist with queries, technical issues, and urgent updates. We provide unwavering support, ensuring peace of mind beyond the initial project completion.",
    bgColor: "bg-sky-600",
    animationSpeed: 3,
  },
  {
    category: "home",
    id: 4,
    title: "🔄 Flexibility & Scalability",
    description:
      "Your business evolves, and so should your digital presence. We understand that projects can change—whether due to shifting priorities, new market trends, or updated business goals. That’s why we offer a flexible and scalable approach, adapting to modifications in project scope while maintaining efficiency and quality. Need new features? A design revamp? Future-proofing for growth? We’re always ready to scale up and refine your solutions accordingly.",
    bgColor: "bg-red-600",
    animationSpeed: 3,
  },
  {
    category: "home",
    id: 5,
    title: "🎨 User Experience and Design Excellence",
    description:
      "We focus on intuitive, engaging, and accessible digital experiences that captivate visitors and drive conversions. Through in-depth UX research, smooth animations, and modern design principles, we craft highly functional websites with stunning aesthetics.",
    bgColor: "bg-green-600",
    animationSpeed: 3,
  },
  {
    category: "home",
    id: 6,
    title: "📈 SEO and Growth-Driven Approach",
    description:
      "At DOTR, we don’t just build websites and designs—we build digital assets that drive real growth. Our solutions are carefully crafted with a data-driven, user-centric approach, ensuring that your website is optimized for performance, user experience, and conversions. From SEO best practices to fast-loading pages and intuitive designs, we create platforms that not only attract visitors but turn them into loyal customers.",
    bgColor: "bg-yellow-600",
    animationSpeed: 3,
  },
];

export const DOTR_For_All = () => (
  <Why_DOTR
    department="home"
    heading="Your Business"
    category="home"
    useLocalData={true}
  />
);
