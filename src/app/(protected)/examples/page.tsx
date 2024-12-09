import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Examples() {
  return (
    <>
      <div className="flex gap-4">
        <Button asChild>
          <Link href={"/examples/charts"}>
            Charts
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/examples/datatable"}>
            Datatable
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/examples/calendar"}>
            Calendar
          </Link>
        </Button>
      </div>
    </>
  );
}
