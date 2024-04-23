"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

export function BreadcrumbsDefault() {
  return (
    <BreadcrumbsDefault>
      <Link>Home</Link>
      <Link>Shop</Link>
      <Link>Phone</Link>
    </BreadcrumbsDefault>
  );
}
