import { NAVIGATION } from "@/constants/navigation";

export default function Navigation() {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-10 text-white text-lg font-extrabold">
      {NAVIGATION.map((item) => (
        <li key={item.label}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
