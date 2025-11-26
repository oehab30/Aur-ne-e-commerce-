import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";

const Tap = ({ pageName }) => {
  return (
    <Breadcrumb className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md shadow-sm">
      <BreadcrumbList className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">

        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="hover:text-[var(--main)] dark:hover:text-[var(--main)]">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Shop */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/shop" className="hover:text-[var(--main)] dark:hover:text-[var(--main)]">
              Shop
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Dynamic Page Name */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[var(--main)] font-semibold capitalize">
            {pageName || "Category"}
          </BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Tap;
