import Progress from "./Progress";

export default function TopPlatforms({ platforms, isDark }) {
  return (
    <div className={`flex flex-col gap-5 ${isDark? "bg-slate-700": ""}`}>
      {platforms.map((platform) => (
        <div key={platform.name} className={`flex flex-col gap-2 ${isDark? "":""} w-full`}>
          <h3 className="text-lg font-semibold">{platform.name}</h3>
          <Progress value={platform.size} color={platform.color} />
          <div
            className={`flex justify-between ${
              isDark ? "" : "text-[#525252]"
            }`}
          >
            <p className="text-lg">{platform.price}</p>
            <p className="text-lg">+{platform.growth}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
