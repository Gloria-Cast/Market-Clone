import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import ImageKit from "imagekit"

export async function GET() {
    const session = await getServerSession(authOptions)
    if(!session) {
        return Response.json(false)
    }

    const ikImage = new ImageKit({
        urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC as string,
        privateKey: process.env.IMAGEKIT_PRIVATE as string
    })

    return Response.json(ikImage.getAuthenticationParameters())

}