import { MAIN_PATHNAME } from "@/constants/path";
import ExtendedLink from "./ExtendedLink";
import Button from "./shared/Button";

export default function SideBar() {
  return (
    <aside className="table-cell w-[180px] align-top max-w-[180px]">
      <nav>
        <ul className="flex flex-col">
          <li className="w-[180px] block h-12">
            <ExtendedLink href={MAIN_PATHNAME}>
              <Button className="text-redpoint-400 font-semibold text-2xl">
                공연
              </Button>
            </ExtendedLink>
          </li>
          <li>배틀</li>
          <li>전시회</li>
        </ul>
      </nav>
    </aside>
  );
}
