export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/dewfwefwef 2.png"
        alt="Logo Icon"
        className="h-[73px] w-auto"
        loading="eager"
        decoding="async"
        onLoad={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        style={{ opacity: 0, transition: "opacity 0.3s" }}
      />
      <img
        src="/fcawfrfwq 1.png"
        alt="Logo Text"
        className="h-7 w-auto"
        loading="eager"
        decoding="async"
        onLoad={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        style={{ opacity: 0, transition: "opacity 0.3s" }}
      />
    </div>
  );
}
