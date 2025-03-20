import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
    return (
      <>
      <nav className="fixed top-0 right-0 w-full z-50 shadow-md bg-teal-500">
        <Link href={'/'}>Users</Link>
        <Link href={'/create'}>Create</Link>

      </nav>
      </>
    )
  }