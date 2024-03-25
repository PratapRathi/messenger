import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        const body =  await request.json();
        const {name, image} = body;

        if(!currentUser?.id) return new NextResponse("Unauthorized", {status:4001});

        const updatedUser = await prisma.user.update({
            where: {id: currentUser.id},
            data: {name, image}
        })

        return NextResponse.json(updatedUser);

    } catch (error) {
        console.log('ERROR_SETTING_UPDATE_PROFILE', error);
        return new NextResponse("Internal Error", {status:500})
    }
}