import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "rsvps.json");

type Rsvp = {
  id: string;
  name: string;
  email: string;
  phone: string;
  attendance: string;
  guests: number;
  message: string;
  createdAt: string;
};

async function readRsvps(): Promise<Rsvp[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Rsvp[];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const attendance = String(body.attendance || "").trim();

    if (!name || !attendance) {
      return NextResponse.json(
        { error: "Nombre y asistencia son obligatorios" },
        { status: 400 },
      );
    }

    const entry: Rsvp = {
      id: crypto.randomUUID(),
      name,
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      attendance,
      guests: Math.min(10, Math.max(1, Number(body.guests) || 1)),
      message: String(body.message || "").trim(),
      createdAt: new Date().toISOString(),
    };

    await mkdir(DATA_DIR, { recursive: true });
    const existing = await readRsvps();
    existing.push(entry);
    await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");

    return NextResponse.json({ ok: true, id: entry.id });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar la confirmación" },
      { status: 500 },
    );
  }
}
