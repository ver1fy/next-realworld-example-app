import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

jest.mock("next/navigation", () => ({
  useSelectedLayoutSegment: jest.fn(() => null),
}));

describe("Navbar", () => {
  it("renders sign in/up links when unauthenticated", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
  });
});
