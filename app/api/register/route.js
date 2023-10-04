import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from 'bcryptjs';



export async function POST(req) {
    try {
        const {name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10)

        await connectMongoDB();
        await User.create({name, email, password:hashedPassword})

        return NextResponse.json({ message: 'Benutzer registriert.'}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Fehler beim Registrieren des Benutzers"}, {status: 500})
    }
}