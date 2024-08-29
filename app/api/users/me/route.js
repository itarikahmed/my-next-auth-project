import { NextResponse } from "next/server";
import { userModel } from "@/lib/models/User.models";
import { ConnectDB } from "@/lib/config/dbConfig";
import { getDataFromToken } from "@/lib/helpers/getDataFromToken";

ConnectDB();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await userModel.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
