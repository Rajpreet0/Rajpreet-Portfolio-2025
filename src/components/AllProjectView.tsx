import Image from "next/image";
import Link from "next/link";

interface AllProjectViewProps {
    category: string | null;
    imageSrc: string | null;
    projectPublished: number | null;
    slug: string | null;
    title: string | null;
}

const AllProjectView: React.FC<AllProjectViewProps> = ({
    category, imageSrc, projectPublished, slug, title
}) => {

      const formatCategory = (category: string | null) => {
        switch (category) {
          case "developementAndDesign":
              return "Development & Design";
          case "development":
              return "Development";
          case "design":
              return "Design"
          default:
              return category ?? "";
        }
      }

  return (
        <Link
            href={`/projects/${slug}`}
            className="w-full max-w-xl rounded-2xl overflow-hidden hover:scale-105  transition-all duration-300 flex flex-col "
        >
            {/* Larger, rounded image */}
            <div className="relative w-full aspect-[3/2]">
                <Image
                    src={imageSrc ?? "/placeholder.png"}
                    alt={title ?? "Project Image"}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            <div className="w-full p-4 flex flex-col">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <div className="flex items-center justify-between text-sm text-neutral-400 mt-2">
                    <p className="text-base capitalize">{formatCategory(category)}</p>
                    <div className="px-3 py-1 bg-[#31373d] rounded-full">
                        <p className="text-base">{projectPublished}</p>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default AllProjectView