"use client";
import {
  IconClock,
  IconCertificate,
  IconEdit,
  IconFileTypeSvg,
  IconShieldCheck,
  IconStars,
  IconPalette,
  IconTools,
  IconCurrencyRupee,
  IconRefresh,
  IconAlertCircle,
  IconEye,
  IconPuzzle,
  IconColorSwatch,
  IconTypography,
  IconPrinter,
  IconFileText,
  IconPhoto,
  IconRocket,
  IconUsersGroup,
  IconTargetArrow,
  IconQuestionMark,
  IconBrandWhatsapp,
  IconFileTypePdf,
  IconRulerMeasure,
  IconZoomCheck,
  IconLayersSubtract,
  IconRecycle,
  IconAlertTriangle,
  IconFileUpload,
  IconBrush,
  IconPaperclip,
  IconHome,
  IconBox,
  IconClipboardText,
  IconPencil,
  IconGift,
  IconTrendingUp,
  IconArchive,
  IconCode,
  IconGitBranch,
  IconAppWindow,
  IconDatabase,
  IconFileCode,
  IconServer,
  IconPhone,
  IconBrowser,
  IconCash,
  IconCloud,
  IconDevices,
  IconSearch,
  IconServicemark,
  IconShieldLock,
  IconShoppingCart,
  IconPackage,
  IconBrandAndroid,
  IconBrandApple,
  IconChartBar,
  IconDeviceDesktop,
  IconLayoutGrid,
  IconSettings,
  IconBuilding,
  IconGrid3x3,
  IconLockAccess,
  IconDeviceLaptop,
  IconCaretDown,
  IconMapDollar,
  IconTool,
  IconUserCheck,
  IconFileSmile,
  IconHeartRateMonitor,
} from "@tabler/icons-react";

// export const logo_designing_faqs = [
//   {
//     title: "How long does it take to design a logo?",
//     description: "Turnaround is usually 3–7 business days.",
//     ctaText: "Let’s Talk Time",
//     ctaLink: "https://wa.me/918200965524",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconClock className="mr-3 text-green-600" size={36} />
//           <p className="text-base font-medium">
//             esigning a logo isn’t about dropping a shape and slapping on some
//             text. It’s a ritual. A journey. An artful exploration of your
//             identity in pixels and curves.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             At DOTR, we don’t believe in dragging the process endlessly. But we
//             also don’t believe in rushing the magic. So we’ve crafted a sweet
//             spot — a creative rhythm that gets you inspired, polished concepts
//             within days, not weeks.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>
//               🚀 <strong>Initial Concepts:</strong> Expect your first visual
//               treats in 3 to 5 business days. Sharp, distinct, and full of soul.
//             </li>
//             <li>
//               🔄 <strong>Revisions:</strong> We usually roll out edits within 24
//               to 48 hours — because when you are excited, we’re excited.
//             </li>
//             <li>
//               ⚡ <strong>Express Option:</strong> Got a tight deadline? We offer
//               rush design services that still maintain quality and calm.
//             </li>
//             <li>
//               ⏳ <strong>Brand-Centric Timing:</strong> The more clarity you
//               give us upfront, the faster (and better) we create. Teamwork makes
//               speed work.
//             </li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           So if you’re wondering whether quality design can arrive fast — the
//           answer is yes. But not rushed. Not recycled. Just refined. Crafted in
//           sync with your brand’s heartbeat.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Let’s get your brand a look that does not just land fast — but lands
//           <em>right</em>.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Will my logo be 100% unique?",
//     description: "Yup, no templates. No stock. Just pure custom design.",
//     ctaText: "See Our Work",
//     ctaLink: "/portfolio",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconCertificate className="mr-3 text-indigo-600" size={36} />
//           <p className="text-base font-medium">
//             Your logo won’t just be designed; it’ll be born from your brand’s
//             soul. No templates, no shortcuts. Just pure, custom design.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             Our process is as authentic as your brand. We dive deep into your
//             essence, crafting something that truly stands out. Nothing recycled,
//             just custom, one-of-a-kind artistry tailored for you.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>✨ Custom-made designs, based on your brand&apos;s DNA</li>
//             <li>
//               🎨 No stock images, no prefab logos — every design is original
//             </li>
//             <li>
//               🧠 AI-enhanced, human-crafted creativity to make your brand shine
//             </li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           Every brand deserves a logo that feels like a personal fingerprint.
//           It’s not just a logo — it’s a legacy.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Ready to see what true uniqueness looks like? Let’s create that visual
//           fingerprint.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "What if I don’t like the first draft?",
//     description: "You get multiple revisions until it feels right.",
//     ctaText: "Request Revisions",
//     ctaLink: "https://wa.me/918200965524",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconEdit className="mr-3 text-pink-500" size={36} />
//           <p className="text-base font-medium">
//             Feedback is the heart of the design process. If the first draft
//             doesn’t feel right, don’t worry — we’re here to perfect it until
//             it’s a masterpiece.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             Your feedback is vital. We cherish it. It’s the guiding light that
//             helps us fine-tune the design until it aligns perfectly with your
//             vision. Whether it’s a minor tweak or a major overhaul, we’re all
//             in.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>🔄 Multiple revisions until we nail it</li>
//             <li>🛠️ Small tweaks or complete redesigns — whatever it takes</li>
//             <li>
//               💯 We won’t stop until you&apos;re 100% satisfied with the result
//             </li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           Perfection is a journey, not a destination. Let’s walk it together
//           until we find the one.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Ready to share your thoughts? Let’s get your logo right.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Do I get all necessary file formats?",
//     description: "Yes — we deliver a complete, professional package.",
//     ctaText: "See What’s Included",
//     ctaLink: "/sample-logo-pack.zip",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconFileTypeSvg className="mr-3 text-blue-500" size={36} />
//           <p className="text-base font-medium">
//             The last thing you need is a logo stuck in a single file format.
//             We’ll provide you with all the formats you need, so you’re ready to
//             rock, whether it’s for print or the web.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             We ensure that you have every tool in your creative arsenal to
//             showcase your new logo in any environment. From high-res to
//             scalable, we’ve got you covered.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>🔌 SVG for scalability and crispness</li>
//             <li>🌟 PNG for web-ready transparency</li>
//             <li>💻 JPG for preview-perfect files</li>
//             <li>📁 PDF & AI for fully editable source files</li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           With every file in hand, your logo will be ready for anything — from
//           business cards to billboards.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Let’s get you the perfect file bundle for your brand.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "What makes DOTR’s logo design process different?",
//     description: "It’s the blend of artistry, technology, and collaboration.",
//     ctaText: "Discover Our Process",
//     ctaLink: "/about-us",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconPuzzle className="mr-3 text-yellow-500" size={36} />
//           <p className="text-base font-medium">
//             At DOTR, design isn’t a mere transaction. It’s a partnership. A
//             journey where your brand’s essence intertwines with our artistic
//             vision. We don’t just design — we co-create.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             We take the time to understand your brand, your goals, and the story
//             you want to tell. From there, we build. Not just with pixels, but
//             with the rhythm of your brand’s identity.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>
//               🌱 Deep discovery phase — because your brand deserves to be
//               understood
//             </li>
//             <li>
//               🖌️ Handcrafted concepts that reflect your unique personality
//             </li>
//             <li>
//               💡 Cutting-edge tools mixed with artistic intuition for
//               exceptional results
//             </li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           It’s not about being fast. It’s about being meaningful. And we create
//           logos that carry your brand’s story in every curve and angle.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Ready to join hands and co-create something amazing? Let&apos;s start
//           now.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "Can I see examples of your previous logo designs?",
//     description: "Absolutely! We love showcasing our past work.",
//     ctaText: "View Our Portfolio",
//     ctaLink: "/portfolio",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconEye className="mr-3 text-purple-600" size={36} />
//           <p className="text-base font-medium">
//             Our portfolio is where our design stories live. From the bold and
//             adventurous to the sleek and professional, we’ve crafted logos that
//             speak volumes. Each design is a journey we’ve taken with our
//             clients.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             If you’re looking for inspiration or just want to see the caliber of
//             our work, you’re in the right place. Our portfolio is a curated
//             gallery of all the design magic we’ve created over the years.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>🎨 A diverse range of designs, from modern to timeless</li>
//             <li>📐 Logos that were crafted with precision and passion</li>
//             <li>
//               🌟 _designs that help brands stand out, with purpose and flair
//             </li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           Let our past designs speak for themselves. Every logo has a story.
//           Every design is a visual testament to our creativity.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Ready to see what magic we can create for you? Visit our portfolio.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "What if I already have a logo, but I need a refresh?",
//     description: "We love redesigning to bring your brand to life anew.",
//     ctaText: "Let’s Refresh Your Brand",
//     ctaLink: "https://wa.me/918200965524",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconRefresh className="mr-3 text-teal-500" size={36} />
//           <p className="text-base font-medium">
//             Logos are like living, breathing entities. Over time, they evolve.
//             If your current logo no longer matches the vision of your brand,
//             it&apos;s time for a fresh perspective — a new spin on your brand’s
//             identity.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             Whether it’s a small tweak or a major overhaul, we can breathe new
//             life into your existing logo. We’ll retain its essence, but give it
//             the modern edge it deserves.
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>
//               🔄 We refine, not replace — keeping what matters while improving
//               the look
//             </li>
//             <li>✨ A more polished version, ready for today’s market</li>
//             <li>🔎 More versatile, with new possibilities for your brand</li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           Logos, like brands, grow with time. Ready to give yours a fresh
//           chapter?
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Reach out, and let’s see how we can elevate your existing logo.
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: "How do I know if I need a logo redesign?",
//     description:
//       "If your logo feels outdated or disconnected from your brand, it might be time.",
//     ctaText: "Get a Free Consultation",
//     ctaLink: "https://wa.me/918200965524",
//     content: (
//       <div className="text-neutral-300">
//         <div className="flex items-center justify-start mb-3">
//           <IconAlertCircle className="mr-3 text-red-500" size={36} />
//           <p className="text-base font-medium">
//             Logos evolve with your brand. If yours no longer communicates who
//             you are or feels stuck in the past, it might be time for a change.
//             But how do you know if you need a redesign? Let&apos;s break it
//             down.
//           </p>
//         </div>

//         <div className="ml-10">
//           <p className="mt-3 text-sm">
//             Here are some signs it might be time to give your logo a refresh:
//           </p>

//           <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
//             <li>⚡ It&apos;s hard to read or understand — clarity is key</li>
//             <li>🔄 It doesn’t reflect your current brand values</li>
//             <li>📱 It doesn’t scale well for modern platforms</li>
//             <li>💭 It feels outdated, like it’s stuck in a previous era</li>
//           </ul>
//         </div>

//         <p className="mt-7 text-sm italic">
//           A logo should reflect the spirit of your brand — and if yours no
//           longer feels like a fit, it’s time for a change.
//         </p>

//         <p className="mt-2 mb-5 text-sm italic">
//           Let’s talk about your brand and see if it’s time for a logo refresh.
//         </p>
//       </div>
//     ),
//   },
// ];

export const brand_designing_faqs = [
  {
    title: "How long does it take to design a brand identity?",
    description:
      "Expect your brand identity to take 7–14 business days, depending on complexity.",
    ctaText: "Let’s Talk Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-green-600" size={36} />
          <p className="text-base font-medium">
            _Crafting a brand identity is not about just slapping together some
            colors and fonts. It’s a journey of understanding, connection, and
            personality._ We delve deep into your brand&apos;s spirit to create
            something that stands tall in the marketplace.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            At DOTR, we believe in precision and patience. We take the time to
            understand your brand, your goals, and what sets you apart. We
            don&apos;t rush the process, but we do work efficiently to bring you
            a polished brand identity in a reasonable timeframe.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⏳ <strong>Discovery Phase:</strong> We spend the first 2–4 days
              fully understanding your brand&apos;s essence.
            </li>
            <li>
              🎨 <strong>Design Development:</strong> Expect initial concepts in
              5–7 business days — a visual interpretation of your brand.
            </li>
            <li>
              🔄 <strong>Revisions:</strong> Edits typically take 24–48 hours,
              based on your feedback and vision.
            </li>
            <li>
              🚀 <strong>Final Touch:</strong> Final delivery with all essential
              brand assets, in up to 14 business days.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Building a brand identity is about creating a visual language that
          resonates, speaks to your audience, and stands the test of time. We
          don’t cut corners, and we don&apos;t rush the artistry.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to create a brand that’s more than just a logo? Let’s make your
          vision come to life.
        </p>
      </div>
    ),
  },
  {
    title: "Is my brand identity design fully unique?",
    description:
      "Absolutely! Your brand identity is a custom creation, designed just for you.",
    ctaText: "See Our Work",
    ctaLink: "/portfolio",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconCertificate className="mr-3 text-indigo-600" size={36} />
          <p className="text-base font-medium">
            _Your brand is as unique as your fingerprint._ We’ll ensure that
            your brand identity stands out and represents your core values.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We don’t believe in cookie-cutter solutions. Every brand we work
            with receives a custom, tailored experience. From the logo to the
            color palette, typography, and overall aesthetic, everything is
            crafted to reflect your brand’s unique personality.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🎨 Custom logos, colors, and fonts created specifically for your
              brand.
            </li>
            <li>
              🚫 No stock images, no templates — every element is made just for
              you.
            </li>
            <li>
              🖌️ Collaborative, creative process that ensures your identity
              stands out.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          We don’t create just another brand identity — we create a lasting
          impression that speaks your brand’s language.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s design something truly yours. Ready to stand out?
        </p>
      </div>
    ),
  },
  {
    title: "What if I don’t like the initial brand concepts?",
    description: "We offer unlimited revisions to perfect your brand identity.",
    ctaText: "Request Revisions",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _Your satisfaction is our top priority._ If the initial concepts
            don’t hit the mark, we’ll work with you to refine them until we’ve
            captured your brand’s soul.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We believe that the process of feedback is where the magic happens.
            Your input helps us get closer to the design that speaks directly to
            your audience. Whether it’s a minor tweak or a complete overhaul,
            we’re committed to delivering results that align with your vision.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔄 Unlimited revisions — we won’t stop until it’s just right.
            </li>
            <li>
              🎯 Focused design iterations that evolve with your feedback.
            </li>
            <li>
              💪 We&apos;re here to ensure that your brand identity is exactly
              as you envision it.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Perfection is an evolving process. We’ll keep refining until your
          brand feels perfectly in tune with your goals.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s get your brand identity right. Reach out to start refining.
        </p>
      </div>
    ),
  },
  {
    title: "Do I get all the necessary files for my brand identity?",
    description: "Yes, you’ll receive all formats needed for any application.",
    ctaText: "Check Out What’s Included",
    ctaLink: "/sample-branding-package.zip",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconFileTypeSvg className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _From business cards to billboards,_ we ensure you have everything
            you need to showcase your new brand identity.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Our brand identity package includes all necessary files to make sure
            you’re ready to go — whether for digital, print, or other marketing
            materials.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>📄 High-quality PNG & JPG files for web use.</li>
            <li>🔲 Scalable SVG files for print and large applications.</li>
            <li>📁 Editable source files (AI, PDF) for flexibility.</li>
            <li>🖌️ Brand style guide, including color palette and fonts.</li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your brand will be fully equipped for any scenario, from digital to
          print, and everywhere in between.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to grab your complete brand identity? Let’s get started!
        </p>
      </div>
    ),
  },
  {
    title: "What makes DOTR’s brand design process different?",
    description:
      "It’s a blend of creative artistry, thoughtful strategy, and modern tools.",
    ctaText: "Learn More About Our Process",
    ctaLink: "/about-us",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconPuzzle className="mr-3 text-yellow-500" size={36} />
          <p className="text-base font-medium">
            _Brand designing isn’t just about pretty logos and colors._ It’s
            about creating a lasting emotional connection with your audience. At
            DOTR, we don’t just design — we co-create, blending creativity and
            strategy.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Our process isn’t about churning out designs. It’s about deeply
            understanding your brand and crafting a visual language that speaks
            to your audience. Through research, design exploration, and
            feedback, we create identities that stand the test of time.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔍 Strategic foundation: We start with understanding your brand’s
              core.
            </li>
            <li>
              🎨 Creative exploration: We iterate and refine until it feels just
              right.
            </li>
            <li>
              📈 Impact-driven: Your brand identity isn’t just beautiful; it’s
              effective.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          We don’t just create designs; we craft identities that elevate your
          business to new heights.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to craft a brand that’s bold, unforgettable, and truly yours?
        </p>
      </div>
    ),
  },
];

export const print_designing_faqs = [
  {
    title: "How long does it take to complete a print design project?",
    description:
      "Typically, it takes 5–10 business days depending on complexity.",
    ctaText: "Let’s Talk Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-green-600" size={36} />
          <p className="text-base font-medium">
            _Every print design project is a carefully crafted masterpiece._
            While the time required may vary, we focus on delivering
            high-quality work that meets your vision.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            From brochures to business cards, each print design has its own
            unique set of requirements. Our dedicated design team will ensure
            that your project is delivered within a reasonable timeframe without
            compromising quality.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⏳ <strong>Initial Concepts:</strong> Expect initial designs
              within 3–5 business days.
            </li>
            <li>
              🎨 <strong>Design Development:</strong> A round of revisions and
              updates usually takes 2–3 days.
            </li>
            <li>
              🚀 <strong>Final Delivery:</strong> We aim for final design
              approval and delivery within 7–10 business days.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          While our turnaround time is efficient, we prioritize perfection in
          every detail — because your brand deserves nothing less.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to get your print materials looking top-notch? Let’s talk about
          it.
        </p>
      </div>
    ),
  },
  {
    title: "Will my print design be unique to my brand?",
    description:
      "Yes, each design is custom-tailored to fit your brand’s identity.",
    ctaText: "Explore Our Designs",
    ctaLink: "/portfolio",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconCertificate className="mr-3 text-indigo-600" size={36} />
          <p className="text-base font-medium">
            _Print design isn’t just about putting things on paper._ It’s about
            creating an impression that speaks for your brand, standing out in
            every hand it touches.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Each print project is designed to uniquely represent your business.
            Whether it&apos;s a sleek brochure or an eye-catching flyer, we
            create designs that reflect your brand’s soul.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>🖌️ Custom designs created from scratch — no templates.</li>
            <li>
              💡 A unique approach that considers your target audience and brand
              message.
            </li>
            <li>
              📚 Cohesive brand aesthetics maintained across all print
              materials.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          We believe that great design should be unforgettable, and it begins
          with something entirely unique to you.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to see what we can create together? Let’s make it happen!
        </p>
      </div>
    ),
  },
  {
    title: "What if I need revisions or changes to the design?",
    description:
      "We offer unlimited revisions until you are completely satisfied with the design.",
    ctaText: "Request a Revision",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _Your satisfaction is at the heart of what we do._ If something
            doesn’t feel quite right, we’ll refine the design until it perfectly
            aligns with your vision.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Your feedback is crucial. If the initial design needs some tweaking,
            don’t worry. We offer unlimited revisions until the design feels
            right for you. We’re here to ensure that your printed materials look
            and feel exactly how you imagined.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔄 Unlimited revisions for refining the design until it’s perfect.
            </li>
            <li>
              🎯 Focused design tweaks based on your feedback to achieve the
              right vibe.
            </li>
            <li>💬 We’re here to listen and deliver a design you’ll love!</li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Great design evolves with your vision — and we’re committed to
          bringing that vision to life.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Need a tweak? Let’s fine-tune your print design.
        </p>
      </div>
    ),
  },
  {
    title: "What types of print materials can you design?",
    description:
      "We design a wide variety of print materials — from business cards to banners and beyond.",
    ctaText: "See Print Examples",
    ctaLink: "/portfolio",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconPrinter className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _From the small details to the big statements,_ we have experience
            designing print materials of all shapes and sizes.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We work with you to design a wide range of print materials, each
            tailored to your needs. Whether you’re looking for business cards,
            brochures, flyers, posters, or packaging, we’ve got you covered.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>💼 Business cards that make a lasting first impression.</li>
            <li>📚 Brochures & flyers to tell your brand story.</li>
            <li>
              📏 Large format prints such as banners and posters for impactful
              marketing.
            </li>
            <li>
              📦 Product packaging that reflects your brand’s quality and design
              language.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Whatever your print needs are, we ensure each design is consistent,
          polished, and visually impactful.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to take your brand to print? Let’s make something amazing
          together.
        </p>
      </div>
    ),
  },
  {
    title: "Will I receive the print-ready files for my designs?",
    description:
      "Yes, you will receive all the print-ready files you need, including all formats.",
    ctaText: "Get the Full Package",
    ctaLink: "/sample-print-files.zip",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconFileTypeSvg className="mr-3 text-yellow-500" size={36} />
          <p className="text-base font-medium">
            _When it’s time to print, we’ve got you covered._ You’ll receive
            high-resolution files that are optimized for print and ready for
            production.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Once your design is finalized, we’ll provide you with the necessary
            print-ready files. These will be high-quality files tailored for
            professional printing, ensuring that your materials look perfect on
            paper.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>📄 High-res PDFs, JPEGs, and PNGs for print-ready formats.</li>
            <li>
              🔲 Scalable vector files (SVG, EPS) for large-format prints.
            </li>
            <li>📈 Editable files (AI, PSD) for future tweaks or reprints.</li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          We make sure your files are fully optimized for whatever print
          materials you need, saving you time and ensuring flawless results.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to get your prints ready for the world? Let’s start today!
        </p>
      </div>
    ),
  },
];

export const marketing_collateral_designing_faqs = [
  {
    title: "What is marketing collateral design?",
    description:
      "Marketing collateral design refers to creating print and digital materials that support your marketing efforts.",
    ctaText: "Learn More",
    ctaLink: "/designing/marketing-collateral",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconFileText className="mr-3 text-blue-600" size={36} />
          <p className="text-base font-medium">
            _Marketing collateral is more than just brochures and flyers._
            It&apos;s the visual language that tells the story of your brand and
            supports your marketing goals.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Marketing collateral can include anything from brochures and flyers
            to posters and digital assets. It&apos;s all about creating
            materials that engage your audience, communicate your brand message,
            and help drive conversions.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📑 <strong>Print Collateral:</strong> Brochures, flyers, posters,
              and business cards.
            </li>
            <li>
              💻 <strong>Digital Collateral:</strong> Social media banners,
              email templates, and online ads.
            </li>
            <li>
              🎯 <strong>Purposeful Design:</strong> Each piece is crafted to
              amplify your marketing strategy.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Marketing collateral isn’t just decoration — it’s your brand’s voice,
          seen and felt across all touchpoints.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Want to create impactful marketing materials? Let’s talk!
        </p>
      </div>
    ),
  },
  {
    title: "How long does it take to design marketing collateral?",
    description:
      "The timeline varies based on the complexity of the project, but typically ranges from 5 to 15 business days.",
    ctaText: "Discuss Your Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-green-600" size={36} />
          <p className="text-base font-medium">
            _Great marketing collateral takes time._ From initial concepts to
            final designs, every step matters.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The design process is carefully planned to ensure every piece aligns
            with your brand’s voice and goals. While timelines can vary, we
            prioritize delivering on time without sacrificing quality.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⏳ <strong>Initial Concepts:</strong> Expect the first draft in
              3–5 business days.
            </li>
            <li>
              🖌️ <strong>Design Revisions:</strong> After receiving feedback, we
              refine the design within 2–3 days.
            </li>
            <li>
              🚀 <strong>Final Delivery:</strong> Complete collateral in 5–15
              business days, depending on the project size and complexity.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Time is of the essence, but perfection isn’t rushed — your brand’s
          message deserves to be delivered right.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Curious about how long your project will take? We’d love to discuss
          your timeline.
        </p>
      </div>
    ),
  },
  {
    title: "Can I request revisions to my marketing collateral designs?",
    description:
      "Absolutely! We offer unlimited revisions to ensure the designs meet your expectations perfectly.",
    ctaText: "Request a Revision",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _We believe in collaboration._ Your feedback is vital to ensure the
            final design is exactly what you want.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Your feedback is a key part of the creative process. After the
            initial designs are presented, we work with you to make adjustments
            that bring the vision to life, making sure every detail is aligned
            with your brand.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>🔄 Unlimited revisions to perfect every design.</li>
            <li>
              🎯 We’ll work closely with you to ensure that the final collateral
              reflects your brand and goals.
            </li>
            <li>
              💬 Responsive communication to make the revision process as smooth
              as possible.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Collaboration leads to magic — and we’re here to make your collateral
          shine.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s refine your designs until they’re just right. Reach out today!
        </p>
      </div>
    ),
  },
  {
    title: "What kind of marketing collateral can you design?",
    description:
      "We design both print and digital marketing collateral, including brochures, banners, social media ads, and more.",
    ctaText: "View Our Work",
    ctaLink: "/portfolio",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClipboardText className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Marketing collateral is the lifeblood of your marketing efforts._
            From print to digital, we craft designs that elevate your campaigns.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Whether you&apos;re looking for physical promotional materials or
            digital assets to boost your online presence, we’ve got it covered.
            Our designs are versatile and built to match your marketing
            strategy.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📚 <strong>Print Collateral:</strong> Brochures, flyers, posters,
              business cards, and catalogs.
            </li>
            <li>
              💻 <strong>Digital Collateral:</strong> Social media graphics,
              email templates, banner ads, and website assets.
            </li>
            <li>
              📊 <strong>Sales Collateral:</strong> Product sheets, pitch decks,
              and presentations that engage and convert.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Whatever your needs, we ensure your collateral supports your goals and
          captures attention.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to create stunning collateral that drives results? Let’s do it!
        </p>
      </div>
    ),
  },
  {
    title: "Will I receive the source files for my designs?",
    description:
      "Yes, we provide you with the source files for your marketing collateral designs, including editable formats.",
    ctaText: "Get the Full Package",
    ctaLink: "/sample-collateral-files.zip",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconFileText className="mr-3 text-purple-500" size={36} />
          <p className="text-base font-medium">
            _Your designs, your ownership._ Once the collateral is finalized,
            you’ll receive all the necessary source files.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We believe in giving you full control over your marketing
            collateral. Once the design is approved, we’ll provide all the
            source files, including AI, PSD, and any other format you need.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📂 Source files in AI, PSD, and other industry-standard formats.
            </li>
            <li>🔄 Editable files for future updates or reprints.</li>
            <li>🎯 High-resolution print-ready PDFs for immediate use.</li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Full access to your design files ensures you’re always in control of
          your marketing materials.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Want to get started with the perfect marketing collateral? Let’s
          connect!
        </p>
      </div>
    ),
  },
];

export const web_designing_faqs = [
  {
    title: "What is web designing?",
    description:
      "Web designing is the process of creating the layout, structure, and visual aesthetics of a website, ensuring a seamless and engaging user experience.",
    ctaText: "Learn More",
    ctaLink: "/designing/web",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconDeviceDesktop className="mr-3 text-teal-500" size={36} />
          <p className="text-base font-medium">
            _Web design is more than just making things look pretty._ It’s about
            creating an experience that’s intuitive, functional, and visually
            compelling.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            A website is often the first interaction users have with your brand.
            Web design brings together visuals, navigation, and content in a way
            that makes your message resonate with visitors.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🖥️ <strong>Responsive Design:</strong> Websites that look great on
              any device, from desktops to mobile phones.
            </li>
            <li>
              🎨 <strong>Visual Appeal:</strong> Aesthetically pleasing designs
              that reflect your brand&apos;s identity.
            </li>
            <li>
              🔧 <strong>User-Friendly Navigation:</strong> Simple and intuitive
              layouts that guide users through your site effortlessly.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Web design isn’t just about creating something that looks good — it’s
          about creating an experience that users love and return to.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to turn your website into a masterpiece? Let’s make it happen!
        </p>
      </div>
    ),
  },
  {
    title: "How long does it take to design a website?",
    description:
      "The time required depends on the complexity and scale of the project, but typically it takes 2–6 weeks to complete a website design.",
    ctaText: "Discuss Your Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-yellow-600" size={36} />
          <p className="text-base font-medium">
            _Good things take time._ A great website design is a journey that
            requires careful thought, creativity, and collaboration.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            From initial brainstorming to the final launch, the process of
            designing a website involves numerous stages: discovery,
            wireframing, design, testing, and revisions. The timeline varies
            depending on your needs.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📅 <strong>Discovery & Research:</strong> 3–5 days to understand
              your goals and gather requirements.
            </li>
            <li>
              🎨 <strong>Design & Prototyping:</strong> 7–15 days to create the
              design mockups and prototypes.
            </li>
            <li>
              🔄 <strong>Revisions & Final Design:</strong> 5–10 days for final
              adjustments and tweaks based on feedback.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Patience is key. A carefully designed website will pay dividends in
          the user experience it creates.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Curious about how long your website will take? Let’s talk through your
          project.
        </p>
      </div>
    ),
  },
  {
    title: "Can I request revisions to my website design?",
    description:
      "Yes! We offer unlimited revisions until you’re completely satisfied with the design.",
    ctaText: "Request a Revision",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _Your vision, refined._ We’ll work together to make sure your
            website design is exactly what you want.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Once we present the initial design, your feedback is essential. We
            offer unlimited revisions until the design meets your vision,
            ensuring the final website truly represents your brand.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔄 <strong>Unlimited Revisions:</strong> We refine the design as
              many times as necessary to align with your needs.
            </li>
            <li>
              💬 <strong>Close Collaboration:</strong> We value your input, and
              we’re here to collaborate and adjust until it feels just right.
            </li>
            <li>
              🎯 <strong>Final Design:</strong> The website design will be
              polished and ready to deliver after your approval.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your website design should feel like a perfect fit — let’s refine it
          until it’s exactly what you envision.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s start the design journey today and make it yours!
        </p>
      </div>
    ),
  },
  {
    title: "What’s included in your web design services?",
    description:
      "Our web design service includes everything from concept to final design, including responsive layouts, design elements, and interactive components.",
    ctaText: "Explore Our Services",
    ctaLink: "/designing/web",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconLayersSubtract className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Web design is the foundation of your online presence._ From
            wireframes to interactive features, we provide a comprehensive
            approach.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Our web design services encompass all aspects of building a website,
            from initial brainstorming to the final polished product. We focus
            on functionality, user experience, and aesthetic appeal to create a
            powerful online presence.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🖥️ <strong>Responsive Layouts:</strong> Your site will look great
              on any device — phone, tablet, or desktop.
            </li>
            <li>
              🎨 <strong>Custom Design:</strong> Unique, brand-consistent visual
              design that speaks to your audience.
            </li>
            <li>
              ⚙️ <strong>Interactive Elements:</strong> Engaging animations,
              scroll effects, and user interactions to enhance UX.
            </li>
            <li>
              💼 <strong>Content Integration:</strong> Seamless integration of
              your content, from text to images to multimedia.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          We take care of everything — so you can focus on what matters: growing
          your business.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Want a website that wows? Let’s make your vision come to life!
        </p>
      </div>
    ),
  },
  {
    title: "Do you offer SEO services with web design?",
    description:
      "Yes! Our web design services are optimized with basic SEO principles to ensure your website is search engine friendly from the start.",
    ctaText: "Learn About SEO",
    ctaLink: "/seo-services",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconSearch className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Designing a website isn’t enough._ It needs to be discoverable by
            your audience, and SEO is key.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            SEO (Search Engine Optimization) ensures your website is easily
            found by search engines like Google. While advanced SEO is a
            separate service, we implement foundational SEO techniques to give
            your site the best start.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔑 <strong>Keyword Optimization:</strong> We ensure your website
              uses relevant keywords to boost visibility.
            </li>
            <li>
              🏷️ <strong>Meta Tags:</strong> Proper title tags, meta
              descriptions, and alt texts for images.
            </li>
            <li>
              💻 <strong>Mobile Optimization:</strong> With a mobile-first
              approach, your site ranks better on mobile devices.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A well-designed website is only effective if it’s easy to find. We’ll
          lay the groundwork for great SEO performance.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Interested in expanding your reach? Let’s optimize your site for
          search engines!
        </p>
      </div>
    ),
  },
];

export const mobile_app_designing_faqs = [
  {
    title: "What is mobile app designing?",
    description:
      "Mobile app designing is the process of creating the user interface (UI) and user experience (UX) for mobile applications, ensuring they are intuitive, visually appealing, and responsive.",
    ctaText: "Learn More",
    ctaLink: "/designing/mobile-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconPhone className="mr-3 text-teal-500" size={36} />
          <p className="text-base font-medium">
            _Your app, designed to delight._ Mobile app design is about creating
            an experience that fits perfectly in the palm of your users’ hands.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Mobile app design is all about creating a seamless experience that
            keeps users engaged and satisfied. From intuitive navigation to
            visually pleasing interfaces, we create apps that users love to use.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📱 <strong>Responsive Design:</strong> Perfectly adapted layouts
              that ensure an optimal experience on any mobile device.
            </li>
            <li>
              🎨 <strong>Visual Appeal:</strong> Stunning designs that bring
              your brand’s personality to life on screen.
            </li>
            <li>
              🧠 <strong>Intuitive User Experience:</strong> Easy navigation and
              quick access to features, making your app a joy to use.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A beautifully designed mobile app is more than just pretty pixels —
          it’s a connection between you and your users.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to create an app that stands out? Let’s turn your ideas into a
          mobile masterpiece.
        </p>
      </div>
    ),
  },
  {
    title: "How long does it take to design a mobile app?",
    description:
      "The timeline depends on the complexity of the app, but typically it takes 4–8 weeks for the design process, from initial concept to final design.",
    ctaText: "Discuss Your Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-yellow-600" size={36} />
          <p className="text-base font-medium">
            _Good design takes time._ We believe in carefully crafting every
            detail to ensure the best possible user experience.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Designing a mobile app involves multiple stages: research,
            wireframing, prototyping, and final design. The timeline can vary
            depending on the complexity of the app and your feedback.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔍 <strong>Discovery & Research:</strong> 3–5 days to understand
              your app’s goals and gather the necessary requirements.
            </li>
            <li>
              📐 <strong>Wireframing & Prototyping:</strong> 7–14 days to design
              initial wireframes and interactive prototypes.
            </li>
            <li>
              🎨 <strong>Design & Refinement:</strong> 7–10 days for final
              design adjustments and feedback incorporation.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          While the process may take time, the result will be a mobile app that
          stands out with a seamless, captivating design.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Curious about your app’s timeline? Let’s chat and plan the perfect
          schedule for you.
        </p>
      </div>
    ),
  },
  {
    title: "Can I request changes to the design during the process?",
    description:
      "Yes! We provide revisions and adjustments to the design throughout the process, ensuring it matches your vision.",
    ctaText: "Request a Revision",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _Design is a process._ We value your input and will work with you to
            ensure the app is exactly how you envision it.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We believe in collaboration. After each design stage, we welcome
            your feedback and will adjust the design to meet your requirements.
            Whether it’s a minor tweak or a larger shift, we’re here to make it
            perfect.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔄 <strong>Multiple Revisions:</strong> We offer as many revisions
              as necessary to get it right.
            </li>
            <li>
              💬 <strong>Open Communication:</strong> Your feedback is key to
              the process — we ensure you’re always in the loop.
            </li>
            <li>
              ✅ <strong>Final Approval:</strong> You’ll give the final
              thumbs-up before we proceed to development.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your app’s design should feel just right. Let’s work together to make
          it a reality.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s refine your app until it’s exactly what you’ve dreamed of.
        </p>
      </div>
    ),
  },
  {
    title: "What’s included in your mobile app design services?",
    description:
      "Our mobile app design services include UI/UX design, user flow mapping, wireframing, prototyping, and full visual design, ensuring an engaging and functional app experience.",
    ctaText: "Explore Our Mobile App Design Services",
    ctaLink: "/designing/mobile-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconLayersSubtract className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Designing an app is a journey._ We handle everything from the first
            idea to the final polish.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Our mobile app design service ensures that your app isn’t just
            functional — it’s delightful. From mapping out the user journey to
            creating pixel-perfect interfaces, we focus on every detail to
            deliver a top-tier design.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📱 <strong>UI/UX Design:</strong> Beautiful user interfaces and
              intuitive user experiences.
            </li>
            <li>
              🔄 <strong>Wireframing & Prototyping:</strong> Low-fidelity
              wireframes followed by interactive prototypes to visualize the
              flow.
            </li>
            <li>
              🎨 <strong>High-Quality Visuals:</strong> Polished, on-brand
              designs that grab attention and enhance user experience.
            </li>
            <li>
              ⚙️ <strong>User Flow Mapping:</strong> Strategic design that
              guides users from start to finish smoothly.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          With our mobile app design service, your app will not only look good
          but work like a charm, offering an experience users will love.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to design your next big app? Let’s create something amazing
          together!
        </p>
      </div>
    ),
  },
  {
    title: "Do you design both Android and iOS apps?",
    description:
      "Yes! We design apps for both Android and iOS, ensuring a consistent and seamless experience across platforms.",
    ctaText: "Learn More",
    ctaLink: "/designing/mobile-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconDevices className="mr-3 text-blue-600" size={36} />
          <p className="text-base font-medium">
            _Your app, everywhere._ Whether you need Android, iOS, or both, we
            create designs that shine on all platforms.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We understand the importance of cross-platform consistency. Whether
            designing for Android or iOS, we ensure that your app provides the
            same seamless experience, with design elements tailored to each
            platform’s guidelines.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📱 <strong>Android & iOS Design:</strong> Custom designs for both
              Android and iOS with platform-specific optimizations.
            </li>
            <li>
              🔄 <strong>Cross-Platform Consistency:</strong> Ensuring a smooth,
              unified experience across devices and platforms.
            </li>
            <li>
              ⚡ <strong>Speed and Performance:</strong> Designs that prioritize
              speed without sacrificing style or function.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Reach users on all devices with a design that adapts beautifully to
          every platform.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to take your app everywhere? Let’s create a seamless experience
          across Android and iOS.
        </p>
      </div>
    ),
  },
];

export const dashboard_app_designing_faqs = [
  {
    title: "What is dashboard app designing?",
    description:
      "Dashboard app designing involves creating intuitive, functional interfaces for data visualization and management tools, ensuring users can easily navigate and interpret complex information.",
    ctaText: "Learn More",
    ctaLink: "/designing/dashboard-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconGrid3x3 className="mr-3 text-purple-500" size={36} />
          <p className="text-base font-medium">
            _Transforming complexity into clarity._ Dashboard design is about
            making information accessible and engaging.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Dashboard app designing focuses on creating a user-friendly
            interface for displaying and interacting with data. Whether for
            analytics, project management, or any other use case, we ensure the
            information is visually clear and easy to understand.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📊 <strong>Data Visualization:</strong> Crafting clean, engaging
              charts and graphs to turn data into actionable insights.
            </li>
            <li>
              🔧 <strong>Interactive Elements:</strong> Adding interactive
              features like filters and sliders to enhance user engagement.
            </li>
            <li>
              ⚙️ <strong>Customization:</strong> Tailoring dashboards to meet
              the specific needs and preferences of your users.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A dashboard isn’t just a collection of data points — it’s a powerful
          tool designed to empower users to make informed decisions at a glance.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s design a dashboard that makes sense of your data and helps users
          navigate effortlessly through it.
        </p>
      </div>
    ),
  },
  {
    title: "How long does it take to design a dashboard app?",
    description:
      "The design timeline varies depending on the complexity of the dashboard, but it typically takes 3–6 weeks to create a fully functional, visually appealing design.",
    ctaText: "Discuss Your Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-yellow-600" size={36} />
          <p className="text-base font-medium">
            _Design takes time, but it&apos;s worth the wait._ We balance speed
            with attention to detail, ensuring the best results.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Designing a dashboard involves several phases: understanding the
            data, wireframing, creating interactive prototypes, and refining the
            visual design. Each step takes time, but the result is a dashboard
            that’s both beautiful and functional.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔍 <strong>Discovery & Planning:</strong> 3–5 days for
              understanding the data flow and user needs.
            </li>
            <li>
              📐 <strong>Wireframing & Prototyping:</strong> 7–10 days for
              sketching and creating interactive prototypes.
            </li>
            <li>
              🎨 <strong>Design & Refinement:</strong> 7–12 days for finalizing
              the UI and refining visual elements.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Although each project is unique, we ensure the design process is
          smooth, and the end result exceeds expectations.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss how we can design a dashboard that meets your timeline
          and needs perfectly.
        </p>
      </div>
    ),
  },
  {
    title: "Can I request changes to the dashboard design during the process?",
    description:
      "Yes! We provide revision cycles throughout the design process, ensuring that your dashboard meets your expectations at every stage.",
    ctaText: "Request a Revision",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconEdit className="mr-3 text-pink-500" size={36} />
          <p className="text-base font-medium">
            _Design is a collaboration._ We want your dashboard to be perfect,
            and that means including your feedback every step of the way.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We offer multiple revisions during the design process. After every
            major step, you’ll have the chance to review and suggest changes,
            ensuring the final design is exactly what you want.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔄 <strong>Feedback Loops:</strong> We work in stages, allowing
              you to review and adjust the design along the way.
            </li>
            <li>
              💬 <strong>Interactive Communication:</strong> Our team will keep
              you updated, and your feedback will guide the process.
            </li>
            <li>
              ✅ <strong>Final Approval:</strong> You’ll have the final say
              before we move into development, ensuring everything is on point.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your dashboard should reflect your exact needs. Let’s work together to
          get it just right.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Don’t hesitate to let us know how we can tweak the design to make it
          perfect for you.
        </p>
      </div>
    ),
  },
  {
    title: "What’s included in your dashboard app design services?",
    description:
      "Our dashboard app design services include UI/UX design, wireframing, data visualization, interactive elements, and custom graphics, ensuring a seamless and engaging experience for users.",
    ctaText: "Explore Our Dashboard Design Services",
    ctaLink: "/designing/dashboard-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconLayersSubtract className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Designing a dashboard is an art._ We create functional, beautiful
            designs that help users interact with data effortlessly.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Our dashboard design services cover every detail, from the big
            picture to the smallest elements. We ensure the dashboard is
            visually engaging and easy to navigate while allowing users to
            quickly analyze and understand data.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📊 <strong>UI/UX Design:</strong> Creating a user-friendly
              interface with an intuitive experience.
            </li>
            <li>
              🔄 <strong>Data Visualization:</strong> Designing graphs, charts,
              and other visual representations of data.
            </li>
            <li>
              ⚙️ <strong>Interactive Features:</strong> Incorporating filters,
              buttons, and interactive elements to enhance the user experience.
            </li>
            <li>
              🎨 <strong>Custom Graphics:</strong> Tailoring the design with
              graphics and icons that suit your brand’s identity.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          With our dashboard design services, your users will enjoy seamless
          access to valuable data, all packaged in an aesthetically pleasing and
          functional interface.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to build a dashboard that users will love? Let’s get started!
        </p>
      </div>
    ),
  },
  {
    title: "Do you design custom dashboards for specific industries?",
    description:
      "Yes! We specialize in designing custom dashboards for a wide range of industries, from business analytics to healthcare, eCommerce, and more.",
    ctaText: "Explore Our Industry Solutions",
    ctaLink: "/designing/dashboard-app",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconBuilding className="mr-3 text-blue-600" size={36} />
          <p className="text-base font-medium">
            _Tailored for your industry._ Whether you need a dashboard for
            eCommerce, healthcare, or business analytics, we create designs that
            fit your sector perfectly.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            We understand that each industry has unique needs, and we tailor
            each dashboard design to meet those specific requirements. Whether
            it&apos;s a business analytics dashboard or a healthcare management
            tool, we create solutions that make data accessible and actionable.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              📊 <strong>eCommerce Dashboards:</strong> Custom designs for
              tracking sales, inventory, and customer data.
            </li>
            <li>
              🏥 <strong>Healthcare Dashboards:</strong> Tailored designs for
              managing patient data, appointments, and analytics.
            </li>
            <li>
              📈 <strong>Business Analytics Dashboards:</strong> Visualizing key
              metrics and performance indicators for decision-making.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Every industry has its own set of challenges and goals — we’ll design
          a dashboard that meets your exact needs and helps your team succeed.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s craft a dashboard that is perfectly tailored to your industry’s
          needs.
        </p>
      </div>
    ),
  },
];

export const ecommerce_development_faqs = [
  {
    title: "What is ecommerce development?",
    description:
      "Ecommerce development is the process of building and maintaining online stores that enable businesses to sell products or services over the internet.",
    ctaText: "Learn More",
    ctaLink: "/development/ecommerce",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconCaretDown className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Building the future of retail._ Ecommerce development turns your
            business vision into a digital marketplace.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Ecommerce development is all about creating a seamless,
            user-friendly online store. From product catalog management to
            secure payment gateways, it’s about building a platform where
            customers can easily browse, shop, and checkout. It’s more than just
            coding; it’s about crafting a satisfying customer journey.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🛍️ <strong>Product Management:</strong> Organize and manage your
              product listings with ease.
            </li>
            <li>
              💳 <strong>Payment Integration:</strong> Implement secure,
              reliable payment gateways.
            </li>
            <li>
              📱 <strong>Mobile Responsiveness:</strong> Ensure your store is
              fully optimized for mobile users.
            </li>
            <li>
              🚚 <strong>Shipping & Fulfillment:</strong> Streamline your order
              processing and delivery system.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your online store is your digital storefront. Let’s create one that
          feels welcoming, seamless, and irresistible to your customers.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to sell online? Let&apos;s make your ecommerce platform as
          smooth as your product experience.
        </p>
      </div>
    ),
  },
  {
    title: "How long does it take to develop an ecommerce website?",
    description:
      "The timeline for ecommerce website development depends on the complexity of your store, but it typically takes between 4-8 weeks to launch a fully functional site.",
    ctaText: "Discuss Your Project",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-yellow-600" size={36} />
          <p className="text-base font-medium">
            _Every second counts._ But quality development doesn’t rush — it
            ensures your store is built for long-term success.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The development time for an ecommerce website varies based on the
            features and complexity you need. A basic store may be completed in
            as little as 4 weeks, while a more feature-rich platform (with
            custom features like complex product catalogs, advanced payment
            integration, etc.) may take closer to 8 weeks.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔧 <strong>Basic Setup:</strong> 4–5 weeks for a simple ecommerce
              store with essential features.
            </li>
            <li>
              🛠️ <strong>Advanced Features:</strong> 6–8 weeks for
              customizations, integrations, and additional functionality.
            </li>
            <li>
              📈 <strong>Ongoing Maintenance:</strong> Ongoing support and
              updates to ensure your store stays fresh and functional.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          While we value efficiency, we never sacrifice quality or
          functionality. Let’s build a store that will thrive for years to come.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Reach out, and we’ll tailor a timeline that suits your project’s needs
          and goals.
        </p>
      </div>
    ),
  },
  {
    title: "What ecommerce platforms do you work with?",
    description:
      "We specialize in developing on popular ecommerce platforms like Shopify, WooCommerce, and custom-built solutions tailored to your specific needs.",
    ctaText: "Explore Platforms",
    ctaLink: "/development/ecommerce",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconDeviceLaptop className="mr-3 text-purple-500" size={36} />
          <p className="text-base font-medium">
            _Tailored to your needs._ We choose the best platform for your
            ecommerce goals, ensuring your store scales effortlessly.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Depending on your budget, functionality, and growth potential, we
            work with a variety of platforms. Shopify and WooCommerce are ideal
            for entrepreneurs looking for quick and reliable solutions. If you
            need something highly custom, we can build a fully tailored
            ecommerce platform from the ground up.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🛒 <strong>Shopify:</strong> A powerful, scalable platform ideal
              for a quick launch and easy management.
            </li>
            <li>
              🔧 <strong>WooCommerce:</strong> A flexible plugin for WordPress,
              great for customized solutions on a familiar platform.
            </li>
            <li>
              🌐 <strong>Custom Solutions:</strong> For businesses that need a
              truly unique and specialized ecommerce experience.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Whether you want a fast launch or a highly customized solution, we’ve
          got the right tools to help you succeed.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s find the perfect ecommerce platform for your needs and start
          building your store.
        </p>
      </div>
    ),
  },
  {
    title: "How can I ensure my ecommerce website is secure?",
    description:
      "We implement advanced security protocols such as SSL encryption, secure payment gateways, and regular security updates to ensure your ecommerce site remains safe from threats.",
    ctaText: "Secure Your Store",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconLockAccess className="mr-3 text-red-500" size={36} />
          <p className="text-base font-medium">
            _Security first._ Your customers’ trust depends on the safety of
            their personal information, and we take that seriously.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Security is paramount in ecommerce. We use SSL encryption to secure
            all data transactions, implement firewalls and anti-malware
            measures, and keep payment gateways PCI DSS-compliant. Additionally,
            we provide ongoing maintenance to keep your site updated with the
            latest security patches.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔒 <strong>SSL Encryption:</strong> Protects all sensitive
              customer data during transactions.
            </li>
            <li>
              💳 <strong>Secure Payment Gateways:</strong> Safe and trusted
              payment solutions like Stripe, PayPal, and more.
            </li>
            <li>
              🛡️ <strong>Regular Updates:</strong> Continuous monitoring and
              security updates to ensure your store remains safe from
              vulnerabilities.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Trust is earned, and security is the foundation of that trust. We’ll
          ensure your ecommerce platform is rock-solid.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to build a secure ecommerce store? Let’s protect your customers
          and your business together.
        </p>
      </div>
    ),
  },
  {
    title: "How do you optimize ecommerce sites for SEO?",
    description:
      "We employ best practices in SEO to ensure your ecommerce site ranks high in search engines, including optimized product descriptions, meta tags, URL structure, and technical SEO strategies.",
    ctaText: "Boost Your SEO",
    ctaLink: "/development/ecommerce",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconSearch className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _Be found online._ SEO is the bridge between your ecommerce store
            and customers searching for what you sell.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            A beautiful website is only half the battle; visibility is key. Our
            SEO strategy for ecommerce sites includes keyword research,
            optimizing product pages, implementing structured data, and ensuring
            mobile optimization. These steps help your site rank better on
            search engines and drive traffic to your store.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔑 <strong>Keyword Research:</strong> Identifying the best
              keywords to target for your product listings.
            </li>
            <li>
              🛒 <strong>On-Page Optimization:</strong> Ensuring your product
              pages are optimized for both search engines and users.
            </li>
            <li>
              📈 <strong>Technical SEO:</strong> Ensuring fast load times,
              mobile-friendliness, and proper indexing of your site by search
              engines.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          SEO isn’t just about ranking — it’s about being found by the right
          customers. We’ll make sure your store shows up when it counts.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s optimize your store so it gets the visibility it deserves.
        </p>
      </div>
    ),
  },
];

export const full_stack_development_faqs = [
  {
    title: "What is full-stack development?",
    description:
      "Full-stack development refers to building both the front-end and back-end of a web application, creating a seamless experience for users and developers alike.",
    ctaText: "Learn More",
    ctaLink: "/development/fullstack",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconCode className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _Building the web, one layer at a time._ Full-stack development is
            about mastering every part of the process, from what users see to
            what happens behind the scenes.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Full-stack development combines front-end (what users interact with)
            and back-end (server-side logic and databases) technologies. It’s
            the art of crafting every part of the website or web app, from the
            visuals to the code that powers it all. A full-stack developer is
            like an architect and an engineer in one.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔧 <strong>Front-End Development:</strong> Creating the visual and
              interactive aspects of a web application.
            </li>
            <li>
              ⚙️ <strong>Back-End Development:</strong> Building the server-side
              structure, databases, and APIs.
            </li>
            <li>
              🔗 <strong>Full Integration:</strong> Ensuring a seamless
              connection between the front-end and back-end for a smooth user
              experience.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Full-stack development brings the full vision of your application to
          life. It’s about creating a complete, integrated experience for users,
          no matter what device they’re on.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to build something truly remarkable? We’ll guide you through
          every step of the development journey.
        </p>
      </div>
    ),
  },
  {
    title: "Why should I hire a full-stack developer?",
    description:
      "A full-stack developer has expertise in both front-end and back-end technologies, streamlining the development process and reducing the need for multiple specialists.",
    ctaText: "Get Started",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconUserCheck className="mr-3 text-yellow-500" size={36} />
          <p className="text-base font-medium">
            _One person, all the skills._ A full-stack developer brings
            versatility and efficiency to your project, handling everything from
            front-end to back-end.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Hiring a full-stack developer means getting a comprehensive
            solution. With expertise in both front-end and back-end
            technologies, they can build a well-integrated, end-to-end solution,
            saving time and resources. Plus, full-stack developers are excellent
            at problem-solving across the entire development process.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💼 <strong>Efficiency:</strong> One developer can handle both
              client-side and server-side tasks, reducing complexity.
            </li>
            <li>
              ⚡ <strong>Faster Development:</strong> A full-stack developer can
              streamline the process by handling everything from start to
              finish.
            </li>
            <li>
              🔍 <strong>Holistic Understanding:</strong> With expertise across
              the stack, they can spot potential issues and ensure smooth
              integration of all parts.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Hiring a full-stack developer means having a single point of contact
          for your entire project — no gaps in communication, no silos.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to streamline your development? Let’s create a full-stack
          solution that meets your needs.
        </p>
      </div>
    ),
  },
  {
    title: "What technologies are used in full-stack development?",
    description:
      "Full-stack development typically involves technologies like JavaScript, Node.js, React, Angular, and databases like MongoDB or MySQL.",
    ctaText: "Explore Technologies",
    ctaLink: "/development/fullstack",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconTool className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Building with the best tools._ Full-stack development leverages the
            latest technologies to build modern, scalable applications.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The technologies used in full-stack development are vast and varied,
            depending on your project’s needs. On the front-end, we use
            JavaScript libraries like React or frameworks like Angular. On the
            back-end, Node.js or Express.js are common choices, paired with
            databases like MongoDB (NoSQL) or MySQL (SQL) for data storage.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💻 <strong>Front-End:</strong> React, Angular, Vue.js – crafting
              interactive, responsive UIs.
            </li>
            <li>
              ⚙️ <strong>Back-End:</strong> Node.js, Express.js, Python/Django –
              powering the server and API functionality.
            </li>
            <li>
              📊 <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL –
              securely storing and managing your data.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          With the right technologies, we can build scalable, robust web
          applications that perform seamlessly and look stunning.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let&apos;s pick the best tech stack for your project and bring your
          ideas to life.
        </p>
      </div>
    ),
  },
  {
    title: "How long does full-stack development take?",
    description:
      "The timeline for full-stack development depends on the complexity of your project, but typically it takes 6–12 weeks for a fully functional web application.",
    ctaText: "Plan Your Project",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Patience is key._ A quality full-stack application takes time, but
            the result is a seamless, fully integrated solution.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Full-stack development timelines vary depending on the complexity of
            your features and design. A simple application may take 6–8 weeks to
            complete, while more intricate apps with advanced functionality
            could take 10–12 weeks or more. We’ll work with you to define a
            timeline that fits your project goals.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🚀 <strong>Simple Applications:</strong> 6–8 weeks for a basic app
              with essential features.
            </li>
            <li>
              🔧 <strong>Complex Applications:</strong> 10–12 weeks for apps
              with custom features, APIs, and advanced integrations.
            </li>
            <li>
              ⚙️ <strong>Iterative Development:</strong> We work in stages,
              constantly refining and improving the application as we go.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A full-stack application is an investment in your digital future. The
          time spent now will pay off in performance, scalability, and user
          experience.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss your timeline and bring your full-stack vision to life.
        </p>
      </div>
    ),
  },
  {
    title: "How much does full-stack development cost?",
    description:
      "The cost of full-stack development depends on the complexity and scope of your project, but typically it ranges from $5,000 to $50,000 or more.",
    ctaText: "Get a Quote",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconMapDollar className="mr-3 text-teal-500" size={36} />
          <p className="text-base font-medium">
            _Investing in quality._ The cost reflects the complexity of your
            project and the technologies used, but it’s an investment that will
            pay dividends.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The cost of full-stack development can vary greatly depending on the
            scope of the project, the technology stack, and the number of
            features required. Simple applications may start around $5,000,
            while more complex systems with advanced features, integrations, and
            customizations can go well beyond $50,000.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💡 <strong>Basic Application:</strong> $5,000–$10,000 for a simple
              app with essential features.
            </li>
            <li>
              🔨 <strong>Intermediate Application:</strong> $10,000–$25,000 for
              apps with custom features and integrations.
            </li>
            <li>
              🌍 <strong>Advanced Application:</strong> $25,000–$50,000+ for
              large-scale, complex applications with extensive functionality.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A higher cost means more robust features, a higher-quality experience,
          and a solution that grows with your business.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s talk about your budget, and we’ll craft a solution that fits
          your goals and resources.
        </p>
      </div>
    ),
  },
];

export const frontend_development_faqs = [
  {
    title: "What is frontend development?",
    description:
      "Frontend development is all about creating the user interface of a web application — what users see and interact with.",
    ctaText: "Learn More",
    ctaLink: "/development/frontend",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconHeartRateMonitor className="mr-3 text-indigo-500" size={36} />
          <p className="text-base font-medium">
            _Bringing design to life._ Frontend development is about creating
            engaging, interactive user interfaces that captivate users from the
            first click.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Frontend development involves the design and functionality that
            users interact with directly in their browser. It’s a balance of
            creativity and technical know-how, using technologies like HTML,
            CSS, and JavaScript to make websites responsive, beautiful, and easy
            to navigate.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🎨 <strong>Design Implementation:</strong> Translating visual
              designs into functional, interactive websites.
            </li>
            <li>
              🔍 <strong>Responsive Layouts:</strong> Ensuring your website
              looks great on any device — from desktop to mobile.
            </li>
            <li>
              ⚡ <strong>Interactive Elements:</strong> Making buttons, forms,
              and menus work seamlessly with JavaScript.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Frontend development is where the magic happens — it’s about creating
          an experience that feels as good as it looks.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s turn your design concepts into a stunning digital reality. Ready
          to make it happen?
        </p>
      </div>
    ),
  },
  {
    title: "Why is frontend development important?",
    description:
      "Frontend development is the face of your web application. A great frontend ensures that users have a seamless, pleasant experience on your site.",
    ctaText: "Get Started",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconFileSmile className="mr-3 text-yellow-500" size={36} />
          <p className="text-base font-medium">
            _First impressions matter._ Your frontend is the first thing users
            see, so it must be visually appealing and functional.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            A well-designed frontend is key to retaining users and providing a
            positive experience. From the moment a user lands on your site, they
            should be able to navigate easily, find what they need, and enjoy a
            smooth, engaging interface. This leads to higher engagement, better
            retention, and overall satisfaction.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🌟 <strong>First Impressions Matter:</strong> A good frontend
              keeps users on your site longer and encourages them to return.
            </li>
            <li>
              🎯 <strong>User Experience:</strong> Great design = happy users.
              Easy navigation and intuitive design are critical.
            </li>
            <li>
              ⚡ <strong>Performance:</strong> Fast load times and interactive
              features create a seamless experience for users.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A great frontend ensures that your website feels as good as it looks —
          creating lasting user satisfaction and engagement.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let&apos;s design a frontend that stands out, both in form and
          function.
        </p>
      </div>
    ),
  },
  {
    title: "What technologies are used in frontend development?",
    description:
      "Frontend development utilizes a combination of HTML, CSS, JavaScript, and modern frameworks like React, Angular, or Vue.js.",
    ctaText: "Explore Technologies",
    ctaLink: "/development/frontend",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconTool className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Tools of the trade._ The frontend is built using the latest
            technologies and frameworks to ensure performance and scalability.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Frontend development uses a variety of technologies that work
            together to create responsive, interactive web pages. The core
            technologies include HTML, CSS, and JavaScript. On top of that,
            modern JavaScript libraries and frameworks like React, Angular, and
            Vue.js are used to create dynamic, reusable components that drive
            user interaction.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔧 <strong>HTML:</strong> The structure of your web pages.
            </li>
            <li>
              🎨 <strong>CSS:</strong> The styling that makes your pages look
              great.
            </li>
            <li>
              ⚙️ <strong>JavaScript:</strong> Adds interactivity and
              functionality to your pages.
            </li>
            <li>
              💻 <strong>React, Angular, Vue.js:</strong> Modern frameworks and
              libraries for building dynamic, fast, and scalable user
              interfaces.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          With the right tools, we can create a frontend that’s visually
          stunning, highly functional, and performs beautifully across devices.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let&apos;s choose the perfect tech stack to create your perfect
          frontend experience.
        </p>
      </div>
    ),
  },
  {
    title: "What makes a good frontend developer?",
    description:
      "A good frontend developer is someone who not only knows how to code but also understands design principles and user experience.",
    ctaText: "Meet Our Developers",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconUserCheck className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _It’s about balance._ A great frontend developer blends technical
            skills with an eye for design and a passion for user experience.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            A good frontend developer should be well-versed in HTML, CSS, and
            JavaScript, but it’s their understanding of design and user
            interaction that sets them apart. They need to build websites that
            are not only functional but also intuitive and enjoyable to use. A
            great developer thinks about the user at every step of the way.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💡 <strong>Technical Skill:</strong> Mastery of frontend
              technologies and tools like HTML, CSS, JavaScript, and frameworks.
            </li>
            <li>
              🎨 <strong>Design Understanding:</strong> An eye for design
              principles and a good sense of layout and aesthetics.
            </li>
            <li>
              🔍 <strong>Problem-Solving:</strong> Ability to identify and solve
              issues that may affect user experience or performance.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A great frontend developer is more than just a coder — they are a
          creator of engaging user experiences.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to meet the team? Let’s talk about how our developers can turn
          your vision into a seamless experience.
        </p>
      </div>
    ),
  },
  {
    title: "How long does frontend development take?",
    description:
      "The timeline for frontend development depends on the complexity of your project, but typically it can range from a few weeks to a few months.",
    ctaText: "Plan Your Project",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Patience leads to perfection._ A polished, responsive frontend
            takes time, but it’s worth every second.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Frontend development time can vary based on the complexity of the
            design and features. A simple landing page might take just a few
            weeks, while a more complex web application with dynamic content,
            animations, and advanced user interfaces can take 2-3 months or
            longer.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⚡ <strong>Simple Projects:</strong> 2–4 weeks for basic websites
              or landing pages.
            </li>
            <li>
              🔧 <strong>Medium Complexity:</strong> 4–8 weeks for websites with
              interactive elements and custom layouts.
            </li>
            <li>
              💻 <strong>Advanced Projects:</strong> 8–12 weeks for web apps
              with complex functionality and integrations.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          The timeline might vary, but rest assured that every detail is crafted
          with care to deliver the best user experience.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss your project, and we’ll set a realistic timeline that
          fits your needs.
        </p>
      </div>
    ),
  },
];

export const backend_development_faqs = [
  {
    title: "What is backend development?",
    description:
      "Backend development focuses on the server-side of a web application — everything that happens behind the scenes.",
    ctaText: "Learn More",
    ctaLink: "/development/backend",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconServer className="mr-3 text-indigo-500" size={36} />
          <p className="text-base font-medium">
            _The engine behind the magic._ Backend development is the invisible
            force that powers the web applications we use every day.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Backend development involves creating the server-side logic,
            databases, and application programming interfaces (APIs) that
            support the frontend. It’s the engine that processes requests,
            stores data, and sends the necessary information to the client’s
            browser. It’s all about efficiency, speed, and functionality.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⚙️ <strong>Server-Side Logic:</strong> Writing code that manages
              how data is processed and served to users.
            </li>
            <li>
              🔒 <strong>Database Management:</strong> Storing, retrieving, and
              managing data effectively to ensure the smooth running of
              applications.
            </li>
            <li>
              🔗 <strong>APIs:</strong> Creating application programming
              interfaces to allow the frontend and backend to communicate with
              each other seamlessly.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          While frontend steals the spotlight, it’s the backend that ensures
          everything runs smoothly beneath the surface.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to power up your application? Let’s dive into the backend magic
          together.
        </p>
      </div>
    ),
  },
  {
    title: "Why is backend development important?",
    description:
      "Without a solid backend, even the most beautifully designed frontend will crumble. The backend ensures your app functions properly.",
    ctaText: "Get Started",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconShieldLock className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _It’s the backbone._ A strong backend is what supports and ensures
            the smooth functionality of your entire application.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Backend development is the foundation of your web application. It
            ensures that the server is secure, the database is well-organized,
            and the application performs as expected. Without a reliable
            backend, all the work done on the frontend would be wasted. It’s
            responsible for making sure everything is running smoothly behind
            the scenes.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🔐 <strong>Security:</strong> Protecting user data and ensuring
              safe transactions between the server and client.
            </li>
            <li>
              ⚡ <strong>Performance:</strong> Ensuring the backend performs
              efficiently, even under heavy traffic.
            </li>
            <li>
              🧩 <strong>Integration:</strong> Enabling the integration of
              external services, databases, and APIs for a seamless user
              experience.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Without a strong backend, your web application wouldn’t stand a
          chance. It&apos;s where reliability, security, and performance come
          together.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to lay the foundation of your next big idea? Let’s start
          building.
        </p>
      </div>
    ),
  },
  {
    title: "What technologies are used in backend development?",
    description:
      "Backend development relies on a variety of technologies including server-side languages, databases, and frameworks to create a seamless experience.",
    ctaText: "Explore Backend Tech",
    ctaLink: "/development/backend",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconTools className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Building the engine._ Backend development uses a range of
            technologies to ensure performance, scalability, and security.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The backend relies on several programming languages, frameworks, and
            tools to handle the complexity of server-side logic, database
            management, and security. Languages like Node.js, Python, and Ruby
            on Rails are often used, while databases like MySQL, MongoDB, and
            PostgreSQL store and manage your application’s data. Frameworks such
            as Express.js and Django make development faster and easier.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💻 <strong>Programming Languages:</strong> Node.js, Python, Ruby,
              Java, and more for server-side logic.
            </li>
            <li>
              📚 <strong>Frameworks:</strong> Express.js, Django, Ruby on Rails
              to simplify development.
            </li>
            <li>
              📊 <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB for data
              storage and management.
            </li>
            <li>
              🔌 <strong>API Development:</strong> RESTful APIs, GraphQL for
              communication between frontend and backend.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          The right technology stack ensures that your backend runs smoothly,
          efficiently, and securely — no matter how complex your application is.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss the best tech stack for your project — tailored to your
          needs and goals.
        </p>
      </div>
    ),
  },
  {
    title: "What makes a good backend developer?",
    description:
      "A great backend developer is not just a coder, but someone who understands system architecture, data flow, and performance optimization.",
    ctaText: "Meet Our Experts",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconUserCheck className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _Mastering complexity._ A good backend developer balances technical
            skill with an understanding of system design and user experience.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            A good backend developer needs to be skilled in server-side
            programming languages, database management, and API design. But
            beyond the technical skills, they must have a deep understanding of
            system architecture and data flow to ensure the backend works
            efficiently and scales as your application grows. They’re also
            responsible for performance optimization and security measures to
            protect user data and maintain application integrity.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⚙️ <strong>Problem-Solving:</strong> Tackling complex issues with
              effective solutions and optimizations.
            </li>
            <li>
              🔐 <strong>Security:</strong> Implementing robust security
              measures to safeguard data and prevent breaches.
            </li>
            <li>
              ⚡ <strong>Scalability:</strong> Designing systems that can grow
              and handle increasing loads without compromising performance.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          A great backend developer is the unseen architect of your app’s
          success, making sure everything runs smoothly behind the scenes.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to build a backend that scales as your business grows? Let’s get
          started.
        </p>
      </div>
    ),
  },
  {
    title: "How long does backend development take?",
    description:
      "The timeline for backend development depends on your project’s complexity, ranging from weeks for simple systems to months for more intricate applications.",
    ctaText: "Plan Your Project",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Good things take time._ A reliable, efficient backend system
            doesn’t happen overnight — but it’s worth the wait.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The time needed for backend development depends on the scope and
            complexity of your project. A simple database-driven website or API
            might take a few weeks, whereas a complex, data-heavy application
            could take several months. The key is to ensure that the backend is
            scalable, secure, and efficient.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              ⚡ <strong>Simple Projects:</strong> 2–4 weeks for basic
              server-side logic and database setup.
            </li>
            <li>
              🔧 <strong>Medium Complexity:</strong> 4–8 weeks for more complex
              systems with integrations and advanced features.
            </li>
            <li>
              💻 <strong>Advanced Projects:</strong> 8–12 weeks or more for
              large-scale applications with multiple systems and complex logic.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Building a solid backend takes time and effort, but it’s what ensures
          the long-term success and scalability of your application.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s set a timeline that ensures everything is perfect. Ready to
          discuss your project?
        </p>
      </div>
    ),
  },
];

export const custom_website_development_faqs = [
  {
    title: "What is custom website development?",
    description:
      "Custom website development means creating a unique website from scratch tailored specifically to meet your business needs and goals.",
    ctaText: "Discover Custom Solutions",
    ctaLink: "/development/custom",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconCode className="mr-3 text-indigo-500" size={36} />
          <p className="text-base font-medium">
            _Tailored to you._ A custom website is a work of art — built from
            the ground up to suit your specific needs, preferences, and vision.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Custom website development involves creating a website from scratch,
            without using pre-made templates. Every aspect of the website, from
            design to functionality, is developed specifically to align with
            your business requirements. It ensures that your site stands out and
            provides a unique, seamless user experience.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🎨 <strong>Tailored Design:</strong> A design crafted to reflect
              your brand&apos;s identity and message.
            </li>
            <li>
              ⚙️ <strong>Custom Functionality:</strong> Creating features and
              integrations that suit your business operations and goals.
            </li>
            <li>
              🔒 <strong>Scalability:</strong> Built with future growth in mind,
              allowing for easy updates and expansion as your business grows.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Custom websites are not just visually pleasing — they are built to
          deliver the perfect user experience and achieve your business
          objectives.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Ready to create a website that truly represents your brand and vision?
          Let&apos;s start building something unique.
        </p>
      </div>
    ),
  },
  {
    title: "Why should I choose custom website development over templates?",
    description:
      "Custom websites offer flexibility, scalability, and a unique user experience that templates just can&apos;t match.",
    ctaText: "Learn More",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconTools className="mr-3 text-green-500" size={36} />
          <p className="text-base font-medium">
            _One size doesn’t fit all._ A custom website provides you with a
            personalized solution that’s designed specifically for your
            business.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            While templates offer convenience and speed, they are limited in
            terms of design flexibility and functionality. Custom websites, on
            the other hand, are tailored exactly to your needs and can evolve as
            your business does. They provide a unique user experience, integrate
            seamlessly with your other systems, and reflect your brand’s
            personality in a way that templates just can’t.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🚀 <strong>Uniqueness:</strong> A custom design that’s as unique
              as your business, with no restrictions.
            </li>
            <li>
              ⚡ <strong>Flexibility:</strong> The ability to add features and
              functions that are tailored specifically for your operations.
            </li>
            <li>
              💼 <strong>Scalability:</strong> Custom websites grow with you,
              adapting to changes and allowing for future enhancements.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Don’t settle for a one-size-fits-all solution. Your business deserves
          a website that’s as unique and adaptable as you are.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss how a custom website can elevate your business and help
          you achieve your goals.
        </p>
      </div>
    ),
  },
  {
    title: "How long does custom website development take?",
    description:
      "The timeline for custom website development depends on the complexity and features required for your project, but on average, it takes several weeks to a few months.",
    ctaText: "Plan Your Timeline",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconClock className="mr-3 text-orange-500" size={36} />
          <p className="text-base font-medium">
            _Patience brings perfection._ A custom website is a carefully
            crafted piece, and like all masterpieces, it takes time to create.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The timeline for developing a custom website depends on a variety of
            factors such as the complexity of the design, the number of features
            required, and the scale of the project. On average, custom websites
            take anywhere from 6 to 12 weeks to complete, with larger projects
            requiring even more time. The process includes design, development,
            testing, and optimization phases to ensure the final product is
            perfect.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              🕰️ <strong>Basic Websites:</strong> 4–6 weeks for simple, smaller
              websites with a basic structure.
            </li>
            <li>
              ⚙️ <strong>Medium Complexity:</strong> 6–8 weeks for more complex
              websites with advanced functionality.
            </li>
            <li>
              🚀 <strong>Advanced Projects:</strong> 10–12 weeks or more for
              large-scale, feature-rich custom websites.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          While the process takes time, we ensure that every detail is perfect,
          leaving you with a website that exceeds expectations.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s create a timeline that works for you, with every milestone
          planned for success.
        </p>
      </div>
    ),
  },
  {
    title: "What technologies are used in custom website development?",
    description:
      "Custom website development utilizes a variety of technologies such as HTML, CSS, JavaScript, frameworks, and content management systems (CMS) to create the perfect site.",
    ctaText: "Explore Our Tech Stack",
    ctaLink: "/development/custom",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconDeviceLaptop className="mr-3 text-blue-500" size={36} />
          <p className="text-base font-medium">
            _Crafting with code._ A custom website requires the best tools and
            technologies to bring your vision to life.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            Custom website development relies on a broad range of technologies
            to ensure a smooth and responsive user experience. HTML, CSS, and
            JavaScript form the foundation of any modern website, while
            frameworks such as React, Angular, and Vue.js allow for dynamic,
            interactive components. We also integrate CMSs like WordPress or
            custom-built solutions for easy content management, and databases
            such as MySQL or MongoDB for data storage.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💻 <strong>Frontend Technologies:</strong> React, Vue.js, Angular
              for dynamic, user-focused interfaces.
            </li>
            <li>
              🔧 <strong>Backend Technologies:</strong> Node.js, PHP, Python,
              and Ruby for server-side functionality.
            </li>
            <li>
              🗃️ <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB to store
              and manage your site’s data.
            </li>
            <li>
              📄 <strong>Content Management Systems:</strong> WordPress, Joomla,
              or custom CMS solutions to manage your content easily.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          The technology stack we use ensures that your website is fast, secure,
          and ready to scale with your business.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s explore the best technologies for your custom website and tailor
          them to your needs.
        </p>
      </div>
    ),
  },
  {
    title: "How much does custom website development cost?",
    description:
      "The cost of custom website development varies based on the features, complexity, and design requirements, but it&apos;s an investment in your business&apos;s future.",
    ctaText: "Get a Custom Quote",
    ctaLink: "https://wa.me/918200965524",
    content: (
      <div className="text-neutral-300">
        <div className="flex items-center justify-start mb-3">
          <IconMapDollar className="mr-3 text-yellow-500" size={36} />
          <p className="text-base font-medium">
            _Invest in quality._ While custom website development is an
            investment, it provides long-term value and growth for your
            business.
          </p>
        </div>

        <div className="ml-10">
          <p className="mt-3 text-sm">
            The cost of a custom website depends on a variety of factors,
            including design complexity, functionality, features, and the level
            of customization required. A basic custom website might start around
            $2,000, while more advanced sites with intricate features,
            integrations, and complex designs can range from $5,000 to $10,000
            or more. Think of it as an investment that will pay off by
            attracting customers and growing your business.
          </p>

          <ul className="list-disc pl-10 mt-4 space-y-2 text-sm text-white">
            <li>
              💡 <strong>Simple Websites:</strong> Starting at $2,000 for basic
              design and functionality.
            </li>
            <li>
              ⚙️ <strong>Advanced Projects:</strong> Starting at $5,000 for
              custom functionality and advanced features.
            </li>
            <li>
              🚀 <strong>Large-Scale Solutions:</strong> $10,000 or more for
              fully customized, feature-rich websites.
            </li>
          </ul>
        </div>

        <p className="mt-7 text-sm italic">
          Your website is a cornerstone of your business. Investing in a custom
          solution ensures it stands out and works perfectly for you.
        </p>

        <p className="mt-2 mb-5 text-sm italic">
          Let’s discuss your budget and goals to create a website that’s worth
          every penny.
        </p>
      </div>
    ),
  },
];
