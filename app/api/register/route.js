import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {name, email, password } = await req.json();

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Passwort: ', password);

        return NextResponse.json({ message: 'Benutzer registriert.'}, {status: 201});
    } catch (error) {
        return NextResponse.json({"Fehler beim Registrieren des Benutzers"}, {status: 500})
    }
}