import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, sauce" />
      <Pizza name="Hawaiian" description="ham, pineapple, cheese, sauce" />
      <Pizza
        name="Americano"
        description="french fries, hot dogs, cheese, sauce"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
