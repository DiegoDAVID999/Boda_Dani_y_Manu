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

type Status = "idle" | "loading" | "success" | "error";

export function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attendance, setAttendance] = useState<string>("");
  const [guests, setGuests] = useState<string>("1");
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

      if (!res.ok) {
        throw new Error("No se pudo guardar la confirmación");
      }

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
        <p className="font-display text-4xl text-cream sm:text-5xl">¡Gracias!</p>
        <p className="mt-4 font-serif text-lg text-cream/90">
          Recibimos tu confirmación. Nos hace muy felices compartir este día
          contigo.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8 border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
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
        <Label htmlFor="name" className="text-cream/90">
          Nombre completo
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Tu nombre"
          className="border-cream/30 bg-cream/10 text-cream placeholder:text-cream/45"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-cream/90">
            Correo
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="opcional"
            className="border-cream/30 bg-cream/10 text-cream placeholder:text-cream/45"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-cream/90">
            Teléfono
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="opcional"
            className="border-cream/30 bg-cream/10 text-cream placeholder:text-cream/45"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-cream/90">¿Nos acompañas?</Label>
          <Select
            value={attendance || null}
            onValueChange={(value) => setAttendance(value ?? "")}
          >
            <SelectTrigger className="w-full border-cream/30 bg-cream/10 text-cream">
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí, ahí estaré</SelectItem>
              <SelectItem value="no">No podré asistir</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-cream/90">Número de personas</Label>
          <Select value={guests} onValueChange={(value) => setGuests(value ?? "1")}>
            <SelectTrigger className="w-full border-cream/30 bg-cream/10 text-cream">
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
        <Label htmlFor="message" className="text-cream/90">
          Mensaje para los novios
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Un deseo, un recuerdo, unas palabras…"
          className="border-cream/30 bg-cream/10 text-cream placeholder:text-cream/45"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-ember" role="alert">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-cream text-ink hover:bg-white"
      >
        {status === "loading" ? "Enviando…" : "Confirmar asistencia"}
      </Button>

      <p className="text-center text-xs uppercase tracking-[0.15em] text-cream/60">
        Confirmar hasta el 31 de julio
      </p>
    </form>
  );
}
