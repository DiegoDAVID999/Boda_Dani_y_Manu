"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { wedding } from "@/lib/wedding";

type Status = "idle" | "loading" | "success" | "error";

export function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attendance, setAttendance] = useState("");
  const [guests, setGuests] = useState("1");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      attendance,
      guests: Number(guests || 1),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !attendance) {
      setStatus("error");
      setErrorMsg("Por favor completa tu nombre y confirma si asistes.");
      return;
    }

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
      setAttendance("");
      setGuests("1");
    } catch {
      setStatus("error");
      setErrorMsg("Algo salió mal. Intenta de nuevo en un momento.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg text-center">
        <p className="font-script text-5xl text-champagne sm:text-6xl">
          ¡Gracias!
        </p>
        <p className="mt-4 font-display text-xl text-ivory/90">
          Recibimos tu confirmación. {wedding.groom} y {wedding.bride} están
          felices de celebrar contigo.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 border-champagne/40 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
          onClick={() => setStatus("idle")}
        >
          Enviar otra respuesta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-lg space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-ivory/85">
          Nombre completo
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Tu nombre"
          className="border-moss bg-dusk/80 text-ivory placeholder:text-ivory/40"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-ivory/85">
            Correo
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="opcional"
            className="border-moss bg-dusk/80 text-ivory placeholder:text-ivory/40"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-ivory/85">
            Teléfono / WhatsApp
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="opcional"
            className="border-moss bg-dusk/80 text-ivory placeholder:text-ivory/40"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-ivory/85">¿Nos acompañas?</Label>
          <Select
            value={attendance || null}
            onValueChange={(value) => setAttendance(value ?? "")}
          >
            <SelectTrigger className="w-full border-moss bg-dusk/80 text-ivory">
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí, ahí estaré</SelectItem>
              <SelectItem value="no">No podré asistir</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-ivory/85">Número de personas</Label>
          <Select
            value={guests}
            onValueChange={(value) => setGuests(value ?? "1")}
          >
            <SelectTrigger className="w-full border-moss bg-dusk/80 text-ivory">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-ivory/85">
          Mensaje para los novios
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Un deseo, un recuerdo, unas palabras…"
          className="border-moss bg-dusk/80 text-ivory placeholder:text-ivory/40"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-champagne" role="alert">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-champagne text-night hover:bg-[#d4b88a]"
      >
        {status === "loading" ? "Enviando…" : "Confirmar asistencia"}
      </Button>

      <p className="text-center text-xs uppercase tracking-[0.18em] text-ivory/45">
        {wedding.rsvpDeadline}
      </p>
    </form>
  );
}
