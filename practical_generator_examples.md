### 1. **Paginated Data Fetching (Lazy Loading from API)**  
Use a generator to fetch paginated data from an API endpoint as needed.

```typescript
async function* fetchPaginatedData(url: string, pageSize: number) {
    let page = 1;
    while (true) {
        const response = await fetch(`${url}?page=${page}&size=${pageSize}`);
        const data = await response.json();
        if (data.items.length === 0) break; // Exit when no more data
        yield data.items; // Return the current page's data
        page++;
    }
}

(async () => {
    const url = "https://example.com/api/data";
    const pageSize = 10;

    for await (const items of fetchPaginatedData(url, pageSize)) {
        console.log("Fetched items:", items);
    }
})();
```
**Use Case:** Efficient data fetching where all results don’t need to be loaded upfront (e.g., infinite scrolling or dashboards).

---

### 2. **Stateful Workflow Execution**
Model a step-by-step wizard or stateful workflow where each step depends on the previous one.

```typescript
function* wizardSteps() {
    const step1 = yield "Step 1: Enter your name";
    const step2 = yield `Step 2: Hello, ${step1}. Enter your email`;
    const step3 = yield `Step 3: Email received as ${step2}. Confirm your submission`;
    return `Submission confirmed for ${step1} with email ${step2}`;
}

const wizard = wizardSteps();
console.log(wizard.next().value); // "Step 1: Enter your name"
console.log(wizard.next("Alice").value); // "Step 2: Hello, Alice. Enter your email"
console.log(wizard.next("alice@example.com").value); // "Step 3: Email received as alice@example.com. Confirm your submission"
console.log(wizard.next("Yes").value); // "Submission confirmed for Alice with email alice@example.com"
```
**Use Case:** Building interactive form flows or guided user interactions.

---

### 3. **Custom Iterators for Lazy Data Manipulation**  
A generator can act as a custom iterator to process data on demand, such as transforming a stream of user actions.

```typescript
function* actionProcessor(actions: string[]) {
    for (const action of actions) {
        yield `Processing action: ${action}`;
    }
}

const actions = ["click", "scroll", "hover", "submit"];
for (const message of actionProcessor(actions)) {
    console.log(message);
}
```
**Use Case:** Handling streams of user events or logs in a scalable way.

---

### 4. **Infinite Sequence Generator (Utility)**  
Generate an infinite sequence of unique IDs or timestamps.

```typescript
function* uniqueIdGenerator() {
    let id = 1;
    while (true) {
        yield `ID-${id++}`;
    }
}

const idGen = uniqueIdGenerator();
console.log(idGen.next().value); // "ID-1"
console.log(idGen.next().value); // "ID-2"
console.log(idGen.next().value); // "ID-3"
```
**Use Case:** Useful for assigning unique IDs without maintaining a global state.

---

### 5. **Retry Logic with Backoff**
Retry API requests with a backoff delay between retries using a generator.

```typescript
function* retryBackoff(maxRetries: number, baseDelay: number) {
    for (let i = 0; i < maxRetries; i++) {
        yield baseDelay * 2 ** i; // Exponential backoff
    }
}

async function fetchWithRetry(url: string, maxRetries: number, baseDelay: number) {
    const backoff = retryBackoff(maxRetries, baseDelay);
    for (const delay of backoff) {
        try {
            const response = await fetch(url);
            if (response.ok) return await response.json();
            throw new Error("Fetch failed");
        } catch (error) {
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    throw new Error("All retries failed");
}

fetchWithRetry("https://example.com/api/resource", 5, 1000)
    .then(data => console.log("Data fetched:", data))
    .catch(err => console.error(err.message));
```
**Use Case:** Retry mechanisms for API calls that might intermittently fail.

---

### 6. **Controlled Execution of Asynchronous Tasks**
Use a generator to throttle or sequence asynchronous tasks, such as image uploads.

```typescript
async function* uploadImages(images: string[]) {
    for (const image of images) {
        yield await uploadImage(image); // Simulate async image upload
    }
}

async function uploadImage(image: string): Promise<string> {
    console.log(`Uploading ${image}...`);
    await new Promise(res => setTimeout(res, 1000)); // Simulate delay
    return `${image} uploaded successfully`;
}

(async () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    for await (const result of uploadImages(images)) {
        console.log(result);
    }
})();
```
**Use Case:** Sequentially uploading files or processing tasks without overwhelming the server.

---

### Summary for Your Class
- Generators shine in scenarios requiring lazy evaluation, stateful iteration, or controlling asynchronous flows.  
- Practical examples like API pagination, workflows, and retry mechanisms directly connect to tasks your team handles daily in web development.
