"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { toast } from "react-hot-toast";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) return;

        setLoading(true);
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
toast.success("Registro exitoso. Ve a la página de inicio de sesión");
                setLoading(false);
                setFormData((prev) => ({ ...prev, email: "", password: "" }));
                return;
            }

            throw new Error(data.message);
        } catch (err) {
            console.log("[REGISTERING_USER_CLIENT]:", err);
toast.error(err.message || "Ocurrió un error durante el registro");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
<section className="mt-[10vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-lg md:max-w-md mx-auto md:h-auto md:max-h-login px-8 py-10 rounded-3xl border border-gray-700 text-white transition-all duration-300 hover:shadow-blue-500/20">
<div className="text-center mb-8">
    <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">Pulse Chat</h1>
    <p className="text-gray-400 text-sm mt-1">Crea tu cuenta</p>
</div>
<div className="bg-blue-100 border border-blue-300 text-blue-800 p-3 rounded-md mb-5 text-sm">
    Crea una cuenta para comenzar a chatear. Usa un correo válido y una contraseña segura.
</div>

                <form
                    onSubmit={handleSubmit}
                    className="self-stretch flex flex-col items-start mb-8"
                >
                    <div className="grid gap-2 self-stretch">
                        <div className="grid gap-1 ">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                className="bg-transparent text-white"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={loading}
                                name="email"
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                className="bg-transparent text-white"
                                id="password"
                                placeholder="password"
                                type="password"
                                name="password"
                                disabled={loading}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }))
                                }
                            />
                        </div>
<Button
    disabled={loading}
    variant="default"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-6 rounded-lg transition-all duration-200"
>
{loading ? "Creando cuenta..." : "Registrarse"}
</Button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
