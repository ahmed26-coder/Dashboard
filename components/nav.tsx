"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function Nav() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mx-auto flex justify-center my-4 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <Link target="_black" href="https://portfolio-ahmad-developer.vercel.app/en">
        <Button className="w-full sm:w-auto">Portfolio</Button>
      </Link>
    </div>
  );
}
