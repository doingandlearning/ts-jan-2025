import { test, expect, vi, beforeEach } from "vitest";
import fakeFetch from "./req";
import { afterEach } from "node:test";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("responds with data", async () => {
  const responsePromise = fakeFetch("http://bbc.co.uk");
  vi.runAllTimers();
  const response = await responsePromise;
  expect(Buffer.isBuffer(response)).toBe(true);
  expect(response.toString()).toMatchInlineSnapshot(`"some other data!!!"`);
});

test("unhappy path for fakeFetch", async () => {
  const responsePromise = fakeFetch("http://error.com");
  vi.runAllTimers();
  await expect(responsePromise).rejects.toThrow();

  try {
    const responsePromise = fakeFetch("http://error.com");
    vi.runAllTimers();
    await expect(responsePromise).rejects.toThrow("network error");
    const response = await responsePromise;
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toMatchInlineSnapshot(`[Error: network error]`);
  }
});
