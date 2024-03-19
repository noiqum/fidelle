import HomeIcon from "@/components/HomeIcon/HomeIcon";
import { describe } from "node:test";
import { render } from "@testing-library/react";

describe("HomeIcon", () => {
  it("should render correctly", () => {
    const { container } = render(<HomeIcon />);
    expect(container).toBeTruthy();
  });
});
