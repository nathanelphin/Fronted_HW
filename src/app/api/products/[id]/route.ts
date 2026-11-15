import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log("===> Product ID:", id);

    const response = await fetch(
      `${process.env.DUMMY_BASE_URL}/products/${id}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to retrieve product" },
        { status: response.status }
      );
    }

    const product = await response.json();

    console.log("===> Product:", product);

    return NextResponse.json(product);

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}