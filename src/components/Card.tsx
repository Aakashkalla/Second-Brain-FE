import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title : string,
    link : string,
    type : "twitter" | "youtube",
    tag : string
}

function getYouTubeEmbedUrl(url: string): string {
  try {
    // Handle full YouTube links
    if (url.includes("youtube.com/watch")) {
      const videoId = new URL(url).searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }
    // Handle shortened youtu.be links
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch (err) {
    console.error("Invalid YouTube URL:", url);
  }
  return "";
}

export function Card({title, link, type, tag} : CardProps){
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 border  max-w-72">
            {/* Top Border of Card Start */}
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="text-gray-600">
                    <ShareIcon/>
                    </div>
                    {title}
                </div>

                <div className="flex gap-2 items-center">
                    <div className="text-gray-400">
                        <a href={link} target="_blank">
                            <ShareIcon/>
                        </a>
                    </div>
                    <div className="text-gray-400">
                        <ShareIcon/>    
                    </div>
                </div>
            </div>
            {/* Top Border of Card End */}
            
            <div className="pt-4">
                {type ==='twitter' && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
                
                {type === "youtube" && (
                <iframe
                    className="w-full aspect-video rounded-md"
                    src={getYouTubeEmbedUrl(link)}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                )}
                {tag}
            </div>
        </div>
        </div>
    
}