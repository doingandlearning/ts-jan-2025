function* doSomeGeneratorThing() {
  while (true) {
    yield "First";
    yield "Second";
  }
}

// Lazy Evaluation
// Stateful iteration
// Controlling async

// Paginated Data Fetching

async function* fetchPaginatedData(url: string, pageSize: number) {
  let page = 1;
  while (true) {
    const response = await fetch(`${url}?page=${page}&size=${pageSize}`);
    const data = await response.json();
    if (data.items.length === 0) break;
    yield data.items;
    page++;
  }
}

async function run() {
  const url = "https://example.com/api/data";
  const pageSize = 20;

  const paginator = fetchPaginatedData(url, pageSize);
  paginator.next();

  for await (const items of fetchPaginatedData(url, pageSize)) {
    console.log(`Fetched items: ${items}`);
  }
}

function* retryBackoff(maxRetries: number, baseDelay: number) {
  for (let i = 0; i < maxRetries; i++) {
    yield baseDelay * 2 ** i;
  }
}

async function fetchWithRetry(url: string) {
  const backoff = retryBackoff(5, 200);
  for (const delay of backoff) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
      throw new Error("Fetch failed");
    } catch (err) {
      console.log(`Retrying in ${delay}ms`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error("Failed after all retries");
}
