import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
  const name = "Pizza";
  const src = "https://picsum.photos/200/300";
  const screen = render(
    <Pizza name={name} image={src} description="A delicious pizza" />,
  );

  const img = await screen.getByRole("img");
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
