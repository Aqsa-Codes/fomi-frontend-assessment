import { NextResponse } from "next/server";

export async function POST(request) {
  const { prompt, aspectRatio, imageCount } = await request.json();

  const count = Number(imageCount);

if (!prompt?.trim() || !Number.isInteger(count) || count < 1 || count > 8) {
  return NextResponse.json(
    { success: false, message: "Invalid generation request" },
    { status: 400 }
  );
}

  const originalImages = [
    "https://images.unsplash.com/flagged/photo-1573488879132-f405037826d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1614622539136-fd8e06f32f31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1529946179074-87642f6204d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1594636257702-126f52089ecf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  ];

  const images = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    prompt,
    aspectRatio,
    imageUrl: originalImages[index % 4],
  }));

  return NextResponse.json({
    success: true,
    images: images.slice(0, count),
  });
}