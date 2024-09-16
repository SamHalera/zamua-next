import Link from "next/link";

import React from "react";

const ContentCta = ({ component }: { component: TCta }) => {
  return (
    <Link
      href={component.path}
      className="bg-primary text-black hover:bg-primary/90 h-10 px-8 py-4 font-bold"
    >
      {component.label}
    </Link>
  );
};

export default ContentCta;
