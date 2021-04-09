/**
@returns A promise that is resolved in the next event loop - think [`setImmediate()`](https://nodejs.org/api/timers.html#timers_setimmediate_callback_arg).

@example
```
import pImmediate from 'p-immediate';

await pImmediate();

// Executed in the next event loop
console.log('🦄');
```
*/
export default function pImmediate(): Promise<void>;
