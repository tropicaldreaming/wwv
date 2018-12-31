let startTime = null;
const override = true;

if (override) {
  startTime = '1995-12-17T19:29:50Z';
}

let startMs = null;

export default function getTime() {
  if (startTime != null) {
    const now = new Date();
    const fakeStart = new Date(startTime);
    if (startMs == null) {
      startMs = now.getTime();
      return fakeStart;
    }
    const elapsed = now.getTime() - startMs;
    return new Date(fakeStart.getTime() + elapsed);
  }
  return new Date();
}
