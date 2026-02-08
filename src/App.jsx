import { useEffect,useState } from "react"

import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0
  )

  const [minus, setMinus] = useState(
    () => Number(localStorage.getItem("minus")) || 10
  )

  useEffect(() => {
    localStorage.setItem("count", count)
    localStorage.setItem("minus", minus)
  }, [count, minus])

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Button onClick={() => setCount(count + 1)}>
        Click me {count}
      </Button>

      <Button onClick={() => setMinus(minus - 1)}>
        Click me {minus}
      </Button>
    </div>
  )
}

export default App;
