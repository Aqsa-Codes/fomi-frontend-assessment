import { NextResponse } from "next/server";

export async function POST(request) {
  const { prompt, aspectRatio, videoCount } = await request.json();

  const count = Number(videoCount);

if (!prompt?.trim() || !Number.isInteger(count) || count < 1 || count > 4) {
  return NextResponse.json(
    { success: false, message: "Invalid generation request" },
    { status: 400 }
  );
}

  const originalVideos = [
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

  const videos = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    prompt,
    aspectRatio,
    duration: "10 seconds",
    videoUrl: originalVideos[index],
  }));

  return NextResponse.json({
    success: true,
    videos: videos.slice(0, count),
  });
}