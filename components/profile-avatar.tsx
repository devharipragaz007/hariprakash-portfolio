import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

const getInitials = (name: string) => {
  const names = name.split(" ");
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`;
  }
  return names[0].substring(0, 2);
};

export function ProfileAvatar({
  className,
  size = 160,
  priority = false,
}: ProfileAvatarProps) {
  const initials = getInitials(siteConfig.name);

  return (
    <div
      className={cn(
        "relative inline-block rounded-full p-1 ring-2 ring-primary/20",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {siteConfig.profileImageSrc ? (
          <Image
            src={siteConfig.profileImageSrc}
            alt={`${siteConfig.name} - ${siteConfig.role}`}
            width={size}
            height={size}
            priority={priority}
            className="h-full w-full object-cover"
            style={{ objectPosition: "center -30%", backgroundColor: "lightgrey" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-4xl font-bold text-muted-foreground">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}
