import { Building2, Code2, Users } from "lucide-react";

type LanguageCode = "vn" | "en";

export const getExperiences = (language: LanguageCode) => [
  {
    id: 1,
    company: "Freelance Software Developer",
    position:
      language === "vn" ? "Full Stack Developer" : "Full Stack Developer",
    duration: "09/2025 - Present",
    location: "Ho Chi Minh City, Vietnam",
    description:
      language === "vn"
        ? [
            "Thiết kế và phát triển hệ thống quản lý vận tải cho HTX Vận tải 9, bao gồm các module quản lý nhân sự, quản lý phương tiện, dòng tiền và lịch trình xe.",
            "Xây dựng website thương mại và hệ thống quản lý nội dung (CMS) cho Conte Interior, tối ưu hóa SEO và trải nghiệm người dùng.",
            "Triển khai và quản trị hạ tầng VPS Ubuntu, sử dụng Nginx để vận hành đa nền tảng web ổn định.",
            "Trực tiếp tư vấn giải pháp kỹ thuật, phân tích nghiệp vụ và quản lý tiến độ dự án với khách hàng doanh nghiệp.",
          ]
        : [
            "Designed and developed a management system for Transport Cooperative 9, including HR, vehicle, financial tracking, and vehicle scheduling modules.",
            "Built a commercial website and CMS for Conte Interior, optimizing for SEO and high-end user experience.",
            "Deployed and managed Ubuntu VPS infrastructure using Nginx for stable multi-platform web operations.",
            "Consulted on technical solutions, performed business analysis, and managed project timelines directly with corporate clients.",
          ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Ant Design",
      "MySQL",
      "Nginx",
    ],
    achievements:
      language === "vn"
        ? [
            "Số hóa thành công quy trình quản lý thủ công cho doanh nghiệp vận tải.",
            "Triển khai hệ thống CI/CD giúp rút ngắn thời gian cập nhật sản phẩm.",
          ]
        : [
            "Successfully digitized manual management processes for a logistics enterprise.",
            "Implemented CI/CD pipelines to streamline product updates.",
          ],
    icon: Users,
    color: "bg-gradient-to-r from-purple-500 to-pink-600",
  },
  {
    id: 2,
    company: "Trustify Technology",
    position:
      language === "vn"
        ? "Frontend Developer Intern"
        : "Frontend Developer Intern",
    duration: "06/2025 - 09/2025",
    location: "Ho Chi Minh City, Vietnam",
    description:
      language === "vn"
        ? [
            "Phát triển dự án 'Aurore E-commerce' - nền tảng thương mại điện tử hiện đại sử dụng Next.js 15 App Router và React 19.",
            "Thiết kế và tối ưu luồng trải nghiệm người dùng: Listing, Cart, Checkout và Authentication.",
            "Xây dựng lớp dữ liệu GraphQL-first với Apollo Client, tích hợp mượt mà với WooCommerce/WordPress backend.",
            "Thiết lập môi trường phát triển Docker cho WordPress backend và triển khai CI/CD tự động.",
            "Đảm bảo chất lượng code thông qua Unit Test với Vitest và mocking API bằng MSW.",
          ]
        : [
            "Developed 'Aurore E-commerce' - a modern e-commerce platform using Next.js 15 App Router and React 19.",
            "Designed and optimized user experience flows: Product Listing, Cart, Checkout, and Authentication.",
            "Built a GraphQL-first data layer with Apollo Client, seamlessly integrated with WooCommerce/WordPress backend.",
            "Setup Dockerized development environments for WordPress and implemented automated CI/CD pipelines.",
            "Ensured code quality through Unit Testing with Vitest and API mocking using MSW.",
          ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Apollo GraphQL",
      "WooCommerce",
      "Docker",
      "Vitest",
      "TailwindCSS",
    ],
    achievements:
      language === "vn"
        ? [
            "Xây dựng thành công hệ thống E-commerce hoàn chỉnh từ frontend đến môi trường deploy.",
            "Áp dụng thành công kiến trúc testable với Vitest & MSW.",
            "Tối ưu hóa hiệu năng render và quản lý state phức tạp trong giỏ hàng/thanh toán.",
          ]
        : [
            "Successfully built a complete E-commerce system from frontend to deployment environment.",
            "Implemented a testable architecture using Vitest & MSW.",
            "Optimized rendering performance and managed complex state for cart and checkout flows.",
          ],
    icon: Code2,
    color: "bg-gradient-to-r from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    company: language === "vn" ? "Đại học Sài Gòn" : "Saigon University",
    position:
      language === "vn"
        ? "Sinh viên Công nghệ thông tin"
        : "Information Technology Student",
    duration: "2021 - 2025",
    location: "Ho Chi Minh City, Vietnam",
    description:
      language === "vn"
        ? [
            "Theo học chuyên ngành Công nghệ thông tin",
            "Tham gia các dự án thực hành và nghiên cứu",
            "Học các môn cơ bản: Lập trình, Cơ sở dữ liệu, Mạng máy tính",
            "Tham gia các hoạt động ngoại khóa và câu lạc bộ công nghệ",
          ]
        : [
            "Study Information Technology major",
            "Participate in practical projects and research",
            "Study core subjects: Programming, Database, Computer Networks",
            "Participate in extracurricular activities and technology clubs",
          ],
    technologies: ["Java", "C++", "SQL", "HTML/CSS", "JavaScript"],
    achievements:
      language === "vn"
        ? ["GPA khá", "Tham gia nhiều dự án thực hành"]
        : ["Good GPA", "Participated in many practical projects"],
    icon: Building2,
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
];
