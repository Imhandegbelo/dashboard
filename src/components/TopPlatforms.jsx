import Progress from "./Progress";

export default function TopPlatforms({ platforms }) {
  return (
    <div className="flex flex-col gap-5">
      {platforms.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full">
          <h3 className="text-lg font-semibold">{platform.name}</h3>
          <Progress value={platform.size} color={platform.color} />
          <div className="flex justify-between text-[#525252]">
            <p className="text-lg">{platform.price}</p>
            <p className="text-lg">+{platform.growth}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
