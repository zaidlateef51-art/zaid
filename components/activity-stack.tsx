"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
    id: number;
    title: string;
    meta: string;
    image?: string;
    content: React.ReactNode;
};

let interval: any;

export function ActivityStack({
    items,
    offset = 14,
    scaleFactor = 0.045,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) {
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        interval = setInterval(() => {
            setCards((prev) => {
                const copy = [...prev];
                copy.unshift(copy.pop()!);
                return copy;
            });
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[720px]">
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    className="absolute inset-x-0 rounded-2xl overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                    animate={{
                        top: index * -offset,
                        zIndex: cards.length - index,
                        scale: 1 - index * scaleFactor,
                    }}

                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    {/* BACKDROP BLUR LAYER (THIS DOES THE ACTUAL BLUR) */}
                    <div className="absolute inset-0 backdrop-blur-xl" />

                    {/* DARK GLASS TINT */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* BORDER + DEPTH */}
                    <div className="absolute inset-0 rounded-2xl border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.7)]" />

                    {/* CONTENT */}
                    <div className="relative flex gap-5 p-6">
                        {card.image && (
                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}

                        <div className="flex-1">
                            <div className="text-sm text-white/85 leading-relaxed">
                                {card.content}
                            </div>

                            <div className="mt-4">
                                <p className="text-xs font-medium text-white">
                                    {card.title}
                                </p>
                                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/45">
                                    {card.meta}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            ))}
        </div>
    );
}
