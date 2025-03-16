import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
    return (
      <>
      <div className="fixed bg-[#292929] top-0 right-0 w-full z-50 shadow-md">
        <Link href={'/'}>Users</Link>
        <Link href={'/create'}>Create</Link>

      </div>
      </>
    )
  }