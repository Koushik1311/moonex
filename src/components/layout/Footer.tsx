import { NAVIGATION } from "@/constants/navigation";
import { SOCIAL_CONTACT } from "@/constants/social-contact";

export default function Footer() {
  return (
    <footer className="container">
      <div className="flex flex-col lg:flex-row items-center justify-between py-20">
        <div className="flex flex-col items-center lg:items-start">
          <img src="/fcawfrfwq 2.png" alt="Logo Icon" className="h-40 w-auto" />
        </div>

        <ul className="flex flex-col lg:flex-row items-center gap-16 text-white text-lg font-extrabold">
          {NAVIGATION.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-12 mb-[87px]">
          <h5 className="text-4xl font-extrabold text-center text-white">
            Contact <span className="text-[#E4B40D]">Us</span>
          </h5>
          <ul className="flex items-center gap-14">
            {SOCIAL_CONTACT.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <item.icon className="w-8 h-8 text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
