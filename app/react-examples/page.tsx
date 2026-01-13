import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Cheatsheet — Christian van de Weerd",
  description: "React hooks and patterns code snippets with examples.",
};

export default function ReactExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold mb-2">React Cheatsheet</h1>
          <p className="text-gray-400">Hooks, patterns, and utilities</p>
        </header>

        {/* ================================================================== */}
        {/* BUILT-IN HOOKS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-4">Built-in Hooks</h2>

        {/* useState */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useState</h3>
          <p className="text-gray-400 text-sm">State management for functional components</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// Update
setCount(5);
setCount(prev => prev + 1);
setUser(prev => prev ? { ...prev, name: "New" } : null);
setItems(prev => [...prev, "new"]);
setItems(prev => prev.filter(x => x !== "remove"));`}</code>
          </pre>
        </section>

        {/* useEffect */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useEffect</h3>
          <p className="text-gray-400 text-sm">Side effects and lifecycle</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Every render
useEffect(() => { console.log("Rendered"); });

// Mount only
useEffect(() => { console.log("Mounted"); }, []);

// Dependency change
useEffect(() => { console.log(count); }, [count]);

// Cleanup
useEffect(() => {
  const sub = api.subscribe();
  return () => sub.unsubscribe();
}, []);

// Fetch pattern
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(e => e.name !== "AbortError" && setError(e));
  return () => controller.abort();
}, [url]);`}</code>
          </pre>
        </section>

        {/* useRef */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useRef</h3>
          <p className="text-gray-400 text-sm">Mutable references across renders</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// DOM reference
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

// Mutable value (no re-render)
const countRef = useRef(0);
countRef.current += 1;

// Store previous value
const prevRef = useRef<number>();
useEffect(() => { prevRef.current = value; }, [value]);

// Timer reference
const timerRef = useRef<NodeJS.Timeout>();
timerRef.current = setTimeout(() => {}, 1000);
clearTimeout(timerRef.current);`}</code>
          </pre>
        </section>

        {/* useMemo */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useMemo</h3>
          <p className="text-gray-400 text-sm">Memoize expensive computations</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Expensive computation
const sorted = useMemo(() => items.sort(), [items]);

// Filtered list
const filtered = useMemo(() => 
  users.filter(u => u.name.includes(search)), 
[users, search]);

// Derived calculation
const total = useMemo(() => 
  cart.reduce((sum, i) => sum + i.price, 0), 
[cart]);

// Stable object reference
const config = useMemo(() => ({ theme, locale }), [theme, locale]);`}</code>
          </pre>
        </section>

        {/* useCallback */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useCallback</h3>
          <p className="text-gray-400 text-sm">Memoize functions</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Basic
const handleClick = useCallback(() => {
  doSomething();
}, []);

// With dependencies
const handleSubmit = useCallback((data: FormData) => {
  submit(data, userId);
}, [userId]);

// For memoized children
const MemoChild = memo(({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>Click</button>
));

function Parent() {
  const handleClick = useCallback(() => action(), []);
  return <MemoChild onClick={handleClick} />;
}`}</code>
          </pre>
        </section>

        {/* useReducer */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useReducer</h3>
          <p className="text-gray-400 text-sm">Complex state with actions</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`type State = { count: number; error: string | null };
type Action =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "SET"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INC": return { ...state, count: state.count + 1 };
    case "DEC": return { ...state, count: state.count - 1 };
    case "SET": return { ...state, count: action.payload };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
dispatch({ type: "INC" });
dispatch({ type: "SET", payload: 10 });`}</code>
          </pre>
        </section>

        {/* useContext */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useContext</h3>
          <p className="text-gray-400 text-sm">Access context values</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Define
interface ThemeCtx { theme: "light" | "dark"; toggle: () => void }
const ThemeContext = createContext<ThemeCtx | null>(null);

// Custom hook (recommended)
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be in ThemeProvider");
  return ctx;
}

// Provider
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggle = useCallback(() => 
    setTheme(t => t === "light" ? "dark" : "light"), []);
  
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consume
const { theme, toggle } = useTheme();`}</code>
          </pre>
        </section>

        {/* useLayoutEffect */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useLayoutEffect</h3>
          <p className="text-gray-400 text-sm">Sync effect before browser paint</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Measure DOM before paint
useLayoutEffect(() => {
  const rect = ref.current?.getBoundingClientRect();
  setSize({ width: rect?.width, height: rect?.height });
}, []);

// Prevent flash
useLayoutEffect(() => {
  if (shouldScroll) window.scrollTo(0, 0);
}, [shouldScroll]);`}</code>
          </pre>
        </section>

        {/* useImperativeHandle */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useImperativeHandle</h3>
          <p className="text-gray-400 text-sm">Customize ref exposed to parent</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`interface Handle { focus: () => void; clear: () => void }

const Input = forwardRef<Handle, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => { if (inputRef.current) inputRef.current.value = ""; },
  }), []);
  
  return <input ref={inputRef} {...props} />;
});

// Parent
const ref = useRef<Handle>(null);
ref.current?.focus();`}</code>
          </pre>
        </section>

        {/* useId */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useId</h3>
          <p className="text-gray-400 text-sm">Generate unique IDs</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function Field({ label }: { label: string }) {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </>
  );
}

// Multiple IDs
const id = useId();
const nameId = \`\${id}-name\`;
const emailId = \`\${id}-email\`;`}</code>
          </pre>
        </section>

        {/* useTransition */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useTransition</h3>
          <p className="text-gray-400 text-sm">Non-blocking state updates</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`const [isPending, startTransition] = useTransition();

function handleSearch(value: string) {
  setQuery(value);  // High priority
  startTransition(() => {
    setResults(filterItems(value));  // Low priority
  });
}

return (
  <>
    <input onChange={e => handleSearch(e.target.value)} />
    {isPending && <Spinner />}
  </>
);`}</code>
          </pre>
        </section>

        {/* useDeferredValue */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useDeferredValue</h3>
          <p className="text-gray-400 text-sm">Defer re-rendering of a value</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function Results({ query }: { query: string }) {
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  
  const results = useMemo(() => search(deferredQuery), [deferredQuery]);
  
  return (
    <div style={{ opacity: isStale ? 0.5 : 1 }}>
      {results.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
}`}</code>
          </pre>
        </section>

        {/* useSyncExternalStore */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">useSyncExternalStore</h3>
          <p className="text-gray-400 text-sm">Subscribe to external stores</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useWindowWidth() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("resize", cb);
      return () => window.removeEventListener("resize", cb);
    },
    () => window.innerWidth,  // Client
    () => 1024                 // Server
  );
}

function useOnlineStatus() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("online", cb);
      window.addEventListener("offline", cb);
      return () => {
        window.removeEventListener("online", cb);
        window.removeEventListener("offline", cb);
      };
    },
    () => navigator.onLine,
    () => true
  );
}`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* CUSTOM HOOKS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Custom Hooks
        </h2>

        {/* useLocalStorage */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useLocalStorage</h3>
          <p className="text-gray-400 text-sm">Persist state to localStorage</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
const [theme, setTheme] = useLocalStorage("theme", "dark");`}</code>
          </pre>
        </section>

        {/* useDebounce */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useDebounce</h3>
          <p className="text-gray-400 text-sm">Debounce rapidly changing values</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Usage
const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 300);
// Type "hello" → after 300ms: "hello"`}</code>
          </pre>
        </section>

        {/* useThrottle */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useThrottle</h3>
          <p className="text-gray-400 text-sm">Limit update frequency</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useThrottle<T>(value: T, limit: number): T {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottled(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));
    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttled;
}

// Usage
const throttledY = useThrottle(scrollY, 100);`}</code>
          </pre>
        </section>

        {/* usePrevious */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">usePrevious</h3>
          <p className="text-gray-400 text-sm">Track previous value</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;
}

// Usage
const prev = usePrevious(count);
// count: 5, prev: 4`}</code>
          </pre>
        </section>

        {/* useToggle */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useToggle</h3>
          <p className="text-gray-400 text-sm">Boolean toggle</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse };
}

// Usage
const { value: isOpen, toggle, setFalse: close } = useToggle();`}</code>
          </pre>
        </section>

        {/* useOnClickOutside */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useOnClickOutside</h3>
          <p className="text-gray-400 text-sm">Detect clicks outside element</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(e.target as Node)) handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage
const ref = useRef<HTMLDivElement>(null);
useOnClickOutside(ref, () => setOpen(false));`}</code>
          </pre>
        </section>

        {/* useMediaQuery */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useMediaQuery</h3>
          <p className="text-gray-400 text-sm">Responsive breakpoints</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Usage
const isMobile = useMediaQuery("(max-width: 768px)");
const isDark = useMediaQuery("(prefers-color-scheme: dark)");`}</code>
          </pre>
        </section>

        {/* useWindowSize */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useWindowSize</h3>
          <p className="text-gray-400 text-sm">Track window dimensions</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

// Usage
const { width, height } = useWindowSize();`}</code>
          </pre>
        </section>

        {/* useIntersectionObserver */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useIntersectionObserver</h3>
          <p className="text-gray-400 text-sm">Detect element visibility</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useIntersectionObserver(
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}

// Usage
const ref = useRef<HTMLDivElement>(null);
const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });`}</code>
          </pre>
        </section>

        {/* useFetch */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useFetch</h3>
          <p className="text-gray-400 text-sm">Data fetching with state</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(json => { setData(json); setError(null); })
      .catch(e => { if (e.name !== "AbortError") setError(e); })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch<User[]>("/api/users");`}</code>
          </pre>
        </section>

        {/* useEventListener */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useEventListener</h3>
          <p className="text-gray-400 text-sm">Declarative event listeners</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useEventListener<K extends keyof WindowEventMap>(
  event: K,
  handler: (e: WindowEventMap[K]) => void,
  element: Window | HTMLElement = window
) {
  const savedHandler = useRef(handler);
  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    const listener = (e: Event) => savedHandler.current(e as WindowEventMap[K]);
    element.addEventListener(event, listener);
    return () => element.removeEventListener(event, listener);
  }, [event, element]);
}

// Usage
useEventListener("keydown", e => {
  if (e.key === "Escape") close();
});`}</code>
          </pre>
        </section>

        {/* useCopyToClipboard */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useCopyToClipboard</h3>
          <p className="text-gray-400 text-sm">Copy text to clipboard</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      return true;
    } catch {
      setCopied(null);
      return false;
    }
  }, []);

  return { copied, copy };
}

// Usage
const { copied, copy } = useCopyToClipboard();
await copy("Hello!");`}</code>
          </pre>
        </section>

        {/* useCounter */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useCounter</h3>
          <p className="text-gray-400 text-sm">Counter with bounds</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useCounter(initial = 0, { min = -Infinity, max = Infinity } = {}) {
  const [count, setCount] = useState(initial);
  
  const inc = useCallback(() => setCount(c => Math.min(c + 1, max)), [max]);
  const dec = useCallback(() => setCount(c => Math.max(c - 1, min)), [min]);
  const reset = useCallback(() => setCount(initial), [initial]);
  const set = useCallback((v: number) => 
    setCount(Math.min(Math.max(v, min), max)), [min, max]);

  return { count, inc, dec, reset, set };
}

// Usage
const { count, inc, dec } = useCounter(0, { min: 0, max: 10 });`}</code>
          </pre>
        </section>

        {/* useHover */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useHover</h3>
          <p className="text-gray-400 text-sm">Track hover state</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useHover<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [ref, hovered];
}

// Usage
const [ref, isHovered] = useHover<HTMLDivElement>();`}</code>
          </pre>
        </section>

        {/* useAsync */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useAsync</h3>
          <p className="text-gray-400 text-sm">Execute async with state</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`type Status = "idle" | "pending" | "success" | "error";

function useAsync<T>(fn: () => Promise<T>) {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setStatus("pending");
    try {
      const result = await fn();
      setData(result);
      setStatus("success");
      return result;
    } catch (e) {
      setError(e as Error);
      setStatus("error");
      throw e;
    }
  }, [fn]);

  return { status, data, error, execute };
}

// Usage
const { status, data, execute } = useAsync(fetchUsers);`}</code>
          </pre>
        </section>

        {/* useInterval */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useInterval</h3>
          <p className="text-gray-400 text-sm">Declarative setInterval</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// Usage
useInterval(() => setCount(c => c + 1), 1000);
useInterval(tick, isRunning ? 1000 : null); // null to pause`}</code>
          </pre>
        </section>

        {/* useTimeout */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">useTimeout</h3>
          <p className="text-gray-400 text-sm">Declarative setTimeout</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

// Usage
useTimeout(() => setVisible(false), 3000);`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* PATTERNS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Patterns
        </h2>

        {/* Compound Components */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Compound Components</h3>
          <p className="text-gray-400 text-sm">Flexible composition with shared state</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`const TabsContext = createContext<{
  active: string;
  setActive: (id: string) => void;
} | null>(null);

function Tabs({ children, defaultValue }: { children: ReactNode; defaultValue: string }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>;
}

function Tab({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)!;
  return (
    <button
      role="tab"
      aria-selected={ctx.active === id}
      onClick={() => ctx.setActive(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)!;
  if (ctx.active !== id) return null;
  return <div role="tabpanel">{children}</div>;
}

// Usage
<Tabs defaultValue="tab1">
  <TabList>
    <Tab id="tab1">Tab 1</Tab>
    <Tab id="tab2">Tab 2</Tab>
  </TabList>
  <TabPanel id="tab1">Content 1</TabPanel>
  <TabPanel id="tab2">Content 2</TabPanel>
</Tabs>`}</code>
          </pre>
        </section>

        {/* Render Props */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Render Props</h3>
          <p className="text-gray-400 text-sm">Share code via function prop</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function MouseTracker({ render }: { 
  render: (pos: { x: number; y: number }) => ReactNode 
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return <>{render(pos)}</>;
}

// Usage
<MouseTracker render={({ x, y }) => <p>Mouse: {x}, {y}</p>} />`}</code>
          </pre>
        </section>

        {/* HOC */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Higher-Order Component</h3>
          <p className="text-gray-400 text-sm">Wrap component with additional logic</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function withAuth<P extends object>(Component: ComponentType<P>) {
  return function WithAuthComponent(props: P) {
    const { user, loading } = useAuth();
    
    if (loading) return <Spinner />;
    if (!user) return <Redirect to="/login" />;
    
    return <Component {...props} />;
  };
}

// Usage
const ProtectedPage = withAuth(Dashboard);`}</code>
          </pre>
        </section>

        {/* Controlled vs Uncontrolled */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Controlled vs Uncontrolled</h3>
          <p className="text-gray-400 text-sm">Support both modes</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`interface InputProps {
  value?: string;           // Controlled
  defaultValue?: string;    // Uncontrolled
  onChange?: (value: string) => void;
}

function Input({ value, defaultValue, onChange }: InputProps) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internal;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  return <input value={currentValue} onChange={handleChange} />;
}

// Controlled
<Input value={text} onChange={setText} />

// Uncontrolled
<Input defaultValue="initial" onChange={console.log} />`}</code>
          </pre>
        </section>

        {/* forwardRef */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">forwardRef</h3>
          <p className="text-gray-400 text-sm">Forward ref to child element</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={\`btn btn-\${variant} \${className}\`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Usage
const buttonRef = useRef<HTMLButtonElement>(null);
<Button ref={buttonRef} variant="primary">Click</Button>`}</code>
          </pre>
        </section>

        {/* Error Boundary */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Error Boundary</h3>
          <p className="text-gray-400 text-sm">Catch rendering errors</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error:", error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Usage
<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <MyComponent />
</ErrorBoundary>`}</code>
          </pre>
        </section>

        {/* Suspense */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Suspense & lazy</h3>
          <p className="text-gray-400 text-sm">Code splitting and loading states</p>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`const LazyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
}

// Multiple lazy components
const Dashboard = lazy(() => import("./Dashboard"));
const Settings = lazy(() => import("./Settings"));

<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</Suspense>`}</code>
          </pre>
        </section>

        {/* Navigation */}
        <nav className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 mb-4">Cheatsheets</p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              React
            </span>
            <a
              href="/typescript-examples"
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              TypeScript
            </a>
          </div>
        </nav>

        <footer className="text-center text-gray-500 pt-8">
          <p>React Cheatsheet</p>
        </footer>
      </div>
    </div>
  );
}
