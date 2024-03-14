import bcryptjs from "bcryptjs"
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        if (!email || !password || !name) {
            return new NextResponse("Missing Info", { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        })
        return NextResponse.json(user);
        
    } catch (error) {
        console.log("Registration Error", error)
        return new NextResponse("Internal Server Error", {status: 500});
    }
}