"use strict";

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

queueMicrotask(() => console.log("queued"));
queueMicrotask(() => console.log("queued-2"));

Promise.resolve().then(() => console.log("promise-2"));

queueMicrotask(() => console.log("queued-3"));

console.log("code");

// Macro tasks: () => {}
// Micro tasks: .then .catch .finally .await
// Order: ...Macro => All Micro => _render_ ...