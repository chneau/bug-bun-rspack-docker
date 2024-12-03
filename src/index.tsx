import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(<pre>Hello, world!</pre>);
